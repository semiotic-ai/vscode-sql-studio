import { TokenType } from '../models/TokenType';
import { Parser } from 'antlr4ts';

export class TokenTypeIdentifier {
  _parser: Parser;

  constructor(parser: Parser) {
    this._parser = parser;
  }

  getTokenType(typeId: number): TokenType | undefined {
    const displayName = this._parser.vocabulary.getDisplayName(typeId);
    const symbolicName = this._parser.vocabulary.getSymbolicName(typeId);

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

    return undefined;
  }
}
