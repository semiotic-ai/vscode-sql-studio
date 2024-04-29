import { ParsedSql } from './models/ParsedSql';
import { TokenLocation } from './models/TokenLocation';
import { TrackingErrorStrategy } from './parsing/TrackingErrorStrategy';
import { PostgresQueryListener } from './postgres/PostgresQueryListener';
import { BaseSqlQueryListener } from './parsing/BaseSqlQueryListener';
import { Token } from './models/Token';
import { antlr4tsSQL } from './antlr4tsSQL';

import { Token as CommonToken, CommonTokenStream, Parser } from 'antlr4ts';

import { PredictionMode } from 'antlr4ts/atn';
import { ParseTreeWalker } from 'antlr4ts/tree';

import { TokenTypeIdentifier } from './lexing/TokenTypeIdentifier';
import { SQLSurveyorOptions } from './SQLSurveyorOptions';
import { ParsedQuery } from './models/ParsedQuery';

export class SQLSurveyor {
  _antlr4tssql: antlr4tsSQL;
  _options?: SQLSurveyorOptions;

  constructor(options?: SQLSurveyorOptions) {
    this._antlr4tssql = new antlr4tsSQL();
    if (options) {
      this._options = options;
    }
  }

  survey(sqlScript: string): ParsedSql {
    let removedTrailingPeriod: boolean = false;
    const tokens = this._getTokens(sqlScript);
    const parser = this._getParser(tokens);
    const parsedTree = this._antlr4tssql.getParseTree(parser);
    const listener = this._getListener(sqlScript);

    // Populate the parsedSql object on the listener
    try {
      // @ts-ignore Weak Type Detection
      ParseTreeWalker.DEFAULT.walk(listener, parsedTree);
    } catch (e) {
      // We'll attempt to complete surveying, don't throw
      if (this._options && this._options.logErrors) {
        console.error(e);
      }
    }
    for (const parsedQuery of Object.values(listener.parsedSql.parsedQueries)) {
      parsedQuery._consolidateTables();
    }

    // Load the tokens
    const tokenTypeIdentifier = new TokenTypeIdentifier(parser);
    for (const commonToken of tokens.getTokens()) {
      if (commonToken.channel !== CommonToken.HIDDEN_CHANNEL) {
        const tokenLocation: TokenLocation = new TokenLocation(
          commonToken.line,
          commonToken.line,
          commonToken.startIndex,
          commonToken.stopIndex
        );
        let parsedQuery: ParsedQuery | undefined = listener.parsedSql.getQueryAtLocation(
          commonToken.startIndex
        );
        if (parsedQuery) {
          const token = tokenLocation.getToken(sqlScript);
          while (parsedQuery) {
            if (token.length > 0) {
              parsedQuery._addToken(
                tokenLocation,
                tokenTypeIdentifier.getTokenType(commonToken.type),
                token
              );
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

    if (removedTrailingPeriod) {
      let parsedQuery = listener.parsedSql.getQueryAtLocation(sqlScript.length);
      if (parsedQuery !== null && Object.keys(parsedQuery.tokens).length > 0) {
        const queryTokens = Object.values(parsedQuery.tokens);
        const lastToken = queryTokens[queryTokens.length - 1];
        parsedQuery._addToken(
          new TokenLocation(
            lastToken.location.lineStart,
            lastToken.location.lineEnd,
            lastToken.location.stopIndex + 1,
            lastToken.location.stopIndex + 1
          ),
          lastToken.type,
          '.'
        );
      }
    }

    // Load the names of any Common Table Expressions
    Object.values(listener.parsedSql.parsedQueries).forEach((parsedQuery) =>
      parsedQuery._setCommonTableExpressionNames()
    );

    // Set any errors
    for (const error of (parser.errorHandler as TrackingErrorStrategy).errors) {
      error.token.setValue(sqlScript);
      const parsedQuery = listener.parsedSql.getQueryAtLocation(error.token.location.startIndex);
      if (parsedQuery === null) {
        // Nothing to add the error to
        continue;
      }
      parsedQuery.queryErrors.push(error);
    }

    return listener.parsedSql;
  }

  _getTokens(sqlScript: string): CommonTokenStream {
    const tokens = this._antlr4tssql.getTokens(sqlScript, []);
    return tokens;
  }

  _getParser(tokens: CommonTokenStream): Parser {
    let parser = this._antlr4tssql.getParser(tokens, []);
    parser.errorHandler = new TrackingErrorStrategy();
    parser.interpreter.setPredictionMode(PredictionMode.LL);
    return parser;
  }

  _getListener(sqlScript: string): BaseSqlQueryListener {
    return new PostgresQueryListener(sqlScript, this._options);
  }
}
