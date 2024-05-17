import { BaseSqlScript } from '../parsing/BaseSqlScript';
import { PostgresParser } from './PostgresParser';
import { PostgresLexer } from './PostgresLexer';
import { PostgresQueryListener } from './PostgresQueryListener';
import { CharStream, Lexer, Parser, Token, TokenStream } from 'antlr4ts';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { BaseSqlQueryListener } from '../parsing/BaseSqlQueryListener';
import { TokenType } from '../models/TokenType';

const PreferedRulesForTable: number[] = [
  PostgresParser.RULE_identifier,
  PostgresParser.RULE_indirection_var
];
const PreferedRulesForColumn: number[] = [PostgresParser.RULE_indirection_var];
const TokensToIgnore: number[] = [
  //  PostgresParser.DOT,
  PostgresParser.COMMA,
  PostgresParser.SEMI_COLON,
  PostgresParser.DOUBLE_DOT,
  PostgresParser.Identifier,
  PostgresParser.LEFT_PAREN,
  PostgresParser.RIGHT_PAREN,
  PostgresParser.LEFT_BRACKET,
  PostgresParser.RIGHT_BRACKET
];

export class PostgresScript extends BaseSqlScript {
  protected _createLexer(input: CharStream): Lexer {
    return new PostgresLexer(input);
  }

  protected _createParser(input: TokenStream): Parser {
    return new PostgresParser(input);
  }

  protected _createListener(): BaseSqlQueryListener {
    return new PostgresQueryListener(this.value);
  }

  protected _createParseTree(): ParseTree | undefined {
    if (this.parser instanceof PostgresParser) {
      return this.parser.sql();
    }
  }

  protected _getTokenType(typeId: number): TokenType | undefined {
    if (this.parser instanceof PostgresParser) {
      const displayName = this.parser.vocabulary.getDisplayName(typeId);
      const symbolicName = this.parser.vocabulary.getSymbolicName(typeId);

      if (!symbolicName) {
        return undefined;
      }

      if (symbolicName === 'Identifier' || symbolicName === 'QuotedIdentifier') {
        return TokenType.IDENTIFIER;
      } else if (
        displayName !== symbolicName ||
        displayName === 'BeginDollarStringConstant' ||
        displayName === 'EndDollarStringConstant'
      ) {
        return TokenType.OPERATOR;
      } else if (symbolicName.toUpperCase().includes('COMMENT')) {
        return TokenType.COMMENT;
      } else if (
        symbolicName.endsWith('_NUMBER') ||
        symbolicName.toUpperCase().endsWith('_LITERAL') ||
        symbolicName === 'Text_between_Dollar'
      ) {
        return TokenType.LITERAL;
      } else if (symbolicName.toUpperCase() === symbolicName) {
        return TokenType.KEYWORD;
      }
    }

    return undefined;
  }

  public get PreferredRulesForTable(): number[] {
    return PreferedRulesForTable;
  }

  public get PreferredRulesForColumn(): number[] {
    return PreferedRulesForColumn;
  }

  public get TokensToIgnore(): number[] {
    return TokensToIgnore;
  }

  public isFunction(tokenId: number): boolean {
    return PostgresLexer.isFunction(tokenId);
  }
}
