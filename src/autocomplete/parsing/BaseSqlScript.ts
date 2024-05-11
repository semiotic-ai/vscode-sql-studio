import {
  CommonTokenStream,
  CharStreams,
  Parser,
  Lexer,
  ANTLRErrorListener,
  ConsoleErrorListener,
  CharStream,
  TokenStream,
  Token
} from 'antlr4ts';

import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { BaseSqlQueryListener } from './BaseSqlQueryListener';
import { TokenType } from '../models/TokenType';
import { TokenLocation } from '../models/TokenLocation';
import { TrackingErrorStrategy } from './TrackingErrorStrategy';
import { ParsedSql } from '../models/ParsedSql';
import { PredictionMode } from 'antlr4ts/atn';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';

export interface Options {
  logErrors: boolean;
  throwErrors: boolean;
  removedTrailingPeriod: boolean;
}

export abstract class BaseSqlScript {
  public readonly value: string;
  public readonly tokens: CommonTokenStream;
  public readonly parser: Parser;

  private readonly _listener: BaseSqlQueryListener;
  private readonly _options: Options = {
    logErrors: false,
    throwErrors: false,
    removedTrailingPeriod: false
  };

  protected abstract _createLexer(input: CharStream): Lexer;
  protected abstract _createParser(input: TokenStream): Parser;
  protected abstract _createListener(): BaseSqlQueryListener;
  protected abstract _createParseTree(): ParseTree | undefined;
  protected abstract _getTokenType(typeId: number): TokenType | undefined;

  public abstract get PreferredRulesForTable(): number[];
  public abstract get PreferredRulesForColumn(): number[];
  public abstract get TokensToIgnore(): number[];

  protected _getTokens(errorListeners?: ANTLRErrorListener<any>[]): CommonTokenStream {
    const stream = CharStreams.fromString(this.value);
    const lexer = this._createLexer(stream);

    if (errorListeners) {
      lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        lexer.addErrorListener(listener);
      }
    }
    const tokens = new CommonTokenStream(lexer);
    return tokens;
  }

  protected _getParser(errorListeners?: ANTLRErrorListener<any>[]): Parser {
    const parser = this._createParser(this.tokens);

    parser.errorHandler = new TrackingErrorStrategy();
    parser.interpreter.setPredictionMode(PredictionMode.LL);

    if (errorListeners) {
      parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        parser.addErrorListener(listener);
      }
    }
    return parser;
  }

  protected _getListener(): BaseSqlQueryListener {
    const parsedTree = this._createParseTree();
    const listener = this._createListener();

    // Populate the parsedSql object on the listener
    try {
      // @ts-ignore Weak Type Detection
      ParseTreeWalker.DEFAULT.walk(listener, parsedTree);
    } catch (e) {
      // We'll attempt to complete surveying, don't throw
      if (this._options.logErrors) {
        console.error(e);
      }
    }
    for (const parsedQuery of listener.parsedSql.parsedQueries.values()) {
      parsedQuery._consolidateTables();
    }

    // Load the tokens

    for (const commonToken of this.tokens.getTokens()) {
      if (commonToken.channel !== Token.HIDDEN_CHANNEL) {
        const tokenLocation: TokenLocation = new TokenLocation(
          commonToken.line,
          commonToken.line,
          commonToken.startIndex,
          commonToken.stopIndex,
          commonToken.tokenIndex
        );
        let parsedQuery = listener.parsedSql.getQueryAtLocation(commonToken.startIndex);
        if (parsedQuery) {
          const token = tokenLocation.getToken(this.value);
          while (parsedQuery) {
            if (token.length > 0) {
              parsedQuery._addToken(tokenLocation, this._getTokenType(commonToken.type), token);
            }
            let subParsedQuery = parsedQuery._getCommonTableExpressionAtLocation(
              commonToken.startIndex
            );
            if (!subParsedQuery) {
              subParsedQuery = parsedQuery._getSubqueryAtLocation(commonToken.startIndex);
            }
            parsedQuery = subParsedQuery;
          }
        }
      }
    }

    if (this._options.removedTrailingPeriod) {
      let parsedQuery = listener.parsedSql.getQueryAtLocation(this.value.length);
      if (parsedQuery && parsedQuery.tokens.size > 0) {
        const queryTokens = [...parsedQuery.tokens.values()];
        const lastToken = queryTokens[queryTokens.length - 1];
        parsedQuery._addToken(
          new TokenLocation(
            lastToken.location.lineStart,
            lastToken.location.lineEnd,
            lastToken.location.stopIndex + 1,
            lastToken.location.stopIndex + 1,
            -1
          ),
          lastToken.type,
          '.'
        );
      }
    }

    // Load the names of any Common Table Expressions
    for (const parsedQuery of listener.parsedSql.parsedQueries.values()) {
      parsedQuery._setCommonTableExpressionNames();
    }
    // Set any errors
    for (const error of (this.parser.errorHandler as TrackingErrorStrategy).errors) {
      error.token.setValue(this.value);
      const parsedQuery = listener.parsedSql.getQueryAtLocation(error.token.location.startIndex);
      if (!parsedQuery) {
        // Nothing to add the error to
        continue;
      }
      parsedQuery.queryErrors.push(error);
    }

    return listener;
  }

  constructor(value: string, options?: Options, errorListeners?: ANTLRErrorListener<any>[]) {
    this.value = value;
    this._options = options || this._options;
    this.tokens = this._getTokens(errorListeners);
    this.parser = this._getParser(errorListeners);
    this._listener = this._getListener();
  }

  public get ParsedStatement(): ParsedSql {
    return this._listener.parsedSql;
  }
}
