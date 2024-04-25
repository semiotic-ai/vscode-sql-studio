import {
  CommonTokenStream,
  CharStreams,
  Parser,
  ANTLRErrorListener,
  ConsoleErrorListener,
  Lexer
} from 'antlr4ts';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { PostgresParser } from './postgres/PostgresParser';
import { PostgresLexer } from './postgres/PostgresLexer';

export class antlr4tsSQL {
  getTokens(sqlScript: string, errorListeners?: ANTLRErrorListener<any>[]): CommonTokenStream {
    const stream = CharStreams.fromString(sqlScript);
    const lexer = new PostgresLexer(stream);

    if (errorListeners !== null && errorListeners !== undefined) {
      lexer.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        lexer.addErrorListener(listener);
      }
    }
    const tokens = new CommonTokenStream(lexer);
    return tokens;
  }

  getParser(tokens: CommonTokenStream, errorListeners?: ANTLRErrorListener<any>[]): Parser {
    const parser = new PostgresParser(tokens);
    if (errorListeners !== null && errorListeners !== undefined) {
      parser.removeErrorListener(ConsoleErrorListener.INSTANCE);
      for (const listener of errorListeners) {
        parser.addErrorListener(listener);
      }
    }
    return parser;
  }

  getParseTree(parser: Parser): ParseTree | null {
    if (parser instanceof PostgresParser) {
      return parser.sql();
    }
    return null;
  }

  /*** Convenience Methods ***/

  getParserFromSQL(sqlScript: string): Parser {
    return this.getParser(this.getTokens(sqlScript));
  }

  getParseTreeFromSQL(sqlScript: string): ParseTree | null {
    return this.getParseTree(this.getParserFromSQL(sqlScript));
  }
}
