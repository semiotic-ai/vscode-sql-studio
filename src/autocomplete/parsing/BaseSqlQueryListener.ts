import { TokenLocation } from '../models/TokenLocation';
import { ParsedSql } from '../models/ParsedSql';
import { Options } from '../Autocomplete';
import { ParserRuleContext } from 'antlr4ts';

export class BaseSqlQueryListener {
  input: string;
  options?: Options;
  tableNameLocations: Map<string, TokenLocation[]>;
  tableAlias: Map<string, string[]>;

  parsedSql: ParsedSql;

  constructor(input: string, options?: Options) {
    this.input = input;
    this.options = options;
    this.tableNameLocations = new Map();
    this.tableAlias = new Map();
    this.parsedSql = new ParsedSql();
  }

  _getClauseLocation(ctx: ParserRuleContext): TokenLocation {
    let stopLine = ctx._start.line;
    let stopIndex = this.input.length;
    if (ctx._stop !== undefined) {
      stopLine = ctx._stop.line;
      stopIndex = ctx._stop.stopIndex;
    }
    const queryLocation: TokenLocation = new TokenLocation(
      ctx._start.line,
      stopLine,
      ctx._start.startIndex,
      stopIndex,
      ctx._start.tokenIndex
    );
    return queryLocation;
  }

  _getAliasStartIndex(
    value: string,
    dbmsOpenQuoteChar: string,
    dbmsCloseQuoteChar: string
  ): number | undefined {
    let isInsideStringQuote = false;
    let isInsideDBMSQuote = false;
    let index = value.length - 1;
    const isWhitespaceRegex = /\s/;
    while (index >= 0) {
      const currentChar = value[index];
      if (currentChar === "'" && value[index - 1] !== '\\') {
        isInsideStringQuote = !isInsideStringQuote;
      }
      if (currentChar === dbmsCloseQuoteChar && value[index - 1] !== '\\') {
        isInsideDBMSQuote = true;
      } else if (currentChar === dbmsOpenQuoteChar && value[index - 1] !== '\\') {
        isInsideDBMSQuote = false;
      }
      if (currentChar === ')' && !isInsideStringQuote && !isInsideDBMSQuote) {
        // Subquery without alias
        return undefined;
      }
      if (isWhitespaceRegex.test(currentChar) && !isInsideStringQuote && !isInsideDBMSQuote) {
        if (value.substring(index + 1).toUpperCase() === 'END') {
          // Reserved keyword, not an alias (CASE statement, BEGIN...END transaction, etc)
          return undefined;
        }
        return index + 1;
      }
      index--;
    }
    return undefined;
  }

  _getTableAliasEndLocation(
    value: string,
    dbmsOpenQuoteChar: string,
    dbmsCloseQuoteChar: string
  ): number | undefined {
    let isInsideStringQuote = false;
    let isInsideDBMSQuote = false;
    let index = 0;
    const isWhitespaceRegex = /\s/;
    let potentialTableAliasIndex: number | undefined;
    while (index < value.length) {
      const currentChar = value[index];
      if (currentChar === "'" && value[index - 1] !== '\\') {
        isInsideStringQuote = !isInsideStringQuote;
      }
      if (currentChar === dbmsCloseQuoteChar && value[index - 1] !== '\\') {
        isInsideDBMSQuote = true;
      } else if (currentChar === dbmsOpenQuoteChar && value[index - 1] !== '\\') {
        isInsideDBMSQuote = false;
      }
      if (isWhitespaceRegex.test(currentChar) && !isInsideStringQuote && !isInsideDBMSQuote) {
        // Either we're in a subquery, or have reached the column alias
        return potentialTableAliasIndex;
      }
      if (currentChar === '.' && !isInsideStringQuote && !isInsideDBMSQuote) {
        potentialTableAliasIndex = index;
      }
      index++;
    }
    return potentialTableAliasIndex;
  }

  _getFunctionArgumentLocation(
    ctx: ParserRuleContext,
    columnLocation: TokenLocation,
    functionRules: Function[],
    argumentRules: Function[]
  ): TokenLocation | undefined {
    while (ctx && ctx.childCount > 0) {
      const currentChild = ctx.getChild(0) as ParserRuleContext;
      if (
        currentChild._start.startIndex === columnLocation.startIndex &&
        currentChild._stop?.stopIndex === columnLocation.stopIndex
      ) {
        for (const functionRule of functionRules) {
          if (currentChild instanceof functionRule && currentChild.childCount > 0) {
            for (const argumentRule of argumentRules) {
              if (currentChild.children) {
                for (const child of currentChild.children) {
                  if (child instanceof argumentRule) {
                    return this._getClauseLocation(child as ParserRuleContext);
                  }
                }
              }
            }
          }
        }
      } else {
        return undefined;
      }
      ctx = currentChild;
    }
    return undefined;
  }

  _handleError(error: Error) {
    if (this.options && this.options.logErrors) {
      if (error.stack) {
        console.error(error.stack);
      } else {
        console.error(error.name + ': ' + error.message);
      }
    }
    if (this.options && !this.options.throwErrors) {
      return;
    }
    throw error;
  }
}
