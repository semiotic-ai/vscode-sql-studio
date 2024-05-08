import { CommonTokenStream, Parser, Token } from 'antlr4ts';
import { CodeCompletionCore } from './CodeCompletionCore';
import { SimpleSQLTokenizer } from './models/SimpleSQLTokenizer';

import { antlr4tsSQL } from './antlr4tsSQL';
import { PredictionMode } from 'antlr4ts/atn';
import { PostgresParser } from './postgres/PostgresParser';
import { BaseSqlQueryListener } from './parsing/BaseSqlQueryListener';
import { Layout } from '../graphtables/layout';
import { TrackingErrorStrategy } from './parsing/TrackingErrorStrategy';
import { PostgresQueryListener } from './postgres/PostgresQueryListener';
import { ParsedSql } from './models/ParsedSql';
import { TokenTypeIdentifier } from './lexing/TokenTypeIdentifier';
import { TokenLocation } from './models/TokenLocation';
import { ParsedQuery } from './models/ParsedQuery';
import { OutputColumn } from './models/OutputColumn';

export interface Options {
  logErrors: boolean;
  throwErrors: boolean;
}

export enum SuggestionType {
  KEYWORD = 'KEYWORD',
  COLUMN = 'COLUMN',
  TABLE = 'TABLE'
}

export class Suggestion {
  value?: string;
  type: SuggestionType;

  constructor(type: SuggestionType, value?: string) {
    this.value = value;
    this.type = type;
  }
}

function getAllOutputColumns(query: ParsedQuery): OutputColumn[] {
  return [...query.outputColumns, ...[...query.subqueries.values()].flatMap(getAllOutputColumns)];
}

export class Autocomplete {
  _antlr4tssql: antlr4tsSQL;
  _options?: Options;
  _layout?: Layout;

  constructor(options?: Options) {
    this._antlr4tssql = new antlr4tsSQL();
    this._options = options;
  }

  _survey(sqlScript: string): ParsedSql {
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
    for (const parsedQuery of listener.parsedSql.parsedQueries.values()) {
      parsedQuery._consolidateTables();
    }

    // Load the tokens
    const tokenTypeIdentifier = new TokenTypeIdentifier(parser);
    for (const commonToken of tokens.getTokens()) {
      if (commonToken.channel !== Token.HIDDEN_CHANNEL) {
        const tokenLocation: TokenLocation = new TokenLocation(
          commonToken.line,
          commonToken.line,
          commonToken.startIndex,
          commonToken.stopIndex
        );
        let parsedQuery = listener.parsedSql.getQueryAtLocation(commonToken.startIndex);
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
      if (parsedQuery && parsedQuery.tokens.size > 0) {
        const queryTokens = [...parsedQuery.tokens.values()];
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
    for (const parsedQuery of listener.parsedSql.parsedQueries.values()) {
      parsedQuery._setCommonTableExpressionNames();
    }
    // Set any errors
    for (const error of (parser.errorHandler as TrackingErrorStrategy).errors) {
      error.token.setValue(sqlScript);
      const parsedQuery = listener.parsedSql.getQueryAtLocation(error.token.location.startIndex);
      if (!parsedQuery) {
        // Nothing to add the error to
        continue;
      }
      parsedQuery.queryErrors.push(error);
    }

    return listener.parsedSql;
  }

  _autocomplete(
    sqlScript: string,
    tableNames: string[],
    columnNames: string[],
    atIndex?: number
  ): Suggestion[] {
    if (atIndex) {
      // Remove everything after the index we want to get suggestions for,
      // it's not needed and keeping it in may impact which token gets selected for prediction
      sqlScript = sqlScript.substring(0, atIndex);
    }
    const tokens = this._getTokens(sqlScript);
    const parser = this._getParser(tokens);
    const core = new CodeCompletionCore(parser);
    const preferredRulesTable = this._getPreferredRulesForTable();
    const preferredRulesColumn = this._getPreferredRulesForColumn();
    const preferredRuleOptions = [preferredRulesTable, preferredRulesColumn];
    const ignoreTokens = this._getTokensToIgnore();
    core.ignoredTokens = new Set(ignoreTokens);
    let indexToAutocomplete = sqlScript.length;
    if (atIndex !== null && atIndex !== undefined) {
      indexToAutocomplete = atIndex;
    }
    const simpleSQLTokenizer = new SimpleSQLTokenizer(sqlScript, this._tokenizeWhitespace());
    const allTokens = new CommonTokenStream(simpleSQLTokenizer);
    const tokenIndex = this._getTokenIndexAt(allTokens.getTokens(), sqlScript, indexToAutocomplete);
    if (tokenIndex === -1) {
      return [];
    }
    const token: any = allTokens.getTokens()[tokenIndex];
    const tokenString = this._getTokenString(token, sqlScript, indexToAutocomplete);
    tokens.fill(); // Needed for CoreCompletionCore to process correctly, see: https://github.com/mike-lischke/antlr4-c3/issues/42
    const suggestions: Suggestion[] = [];
    // Depending on the SQL grammar, we may not get both Tables and Column rules,
    // even if both are viable options for autocompletion
    // So, instead of using all preferredRules at once, we'll do them separate
    let isTableCandidatePosition = false;
    let isColumnCandidatePosition = false;
    for (const preferredRules of preferredRuleOptions) {
      core.preferredRules = new Set(preferredRules);
      const candidates = core.collectCandidates(tokenIndex);
      for (const candidateToken of candidates.tokens) {
        let candidateTokenValue = parser.vocabulary.getDisplayName(candidateToken[0]);
        if (candidateTokenValue.startsWith("'") && candidateTokenValue.endsWith("'")) {
          candidateTokenValue = candidateTokenValue.substring(1, candidateTokenValue.length - 1);
        }
        let followOnTokens = candidateToken[1];
        for (const followOnToken of followOnTokens) {
          let followOnTokenValue = parser.vocabulary.getDisplayName(followOnToken);
          if (followOnTokenValue.startsWith("'") && followOnTokenValue.endsWith("'")) {
            followOnTokenValue = followOnTokenValue.substring(1, followOnTokenValue.length - 1);
          }
          if (!(followOnTokenValue.length === 1 && /[^\w\s]/.test(followOnTokenValue))) {
            candidateTokenValue += ' ';
          }
          candidateTokenValue += followOnTokenValue;
        }
        if (
          tokenString.length === 0 ||
          (candidateTokenValue.startsWith(tokenString.toUpperCase()) &&
            suggestions.find((option) => option.value === candidateTokenValue) === undefined)
        ) {
          suggestions.push(new Suggestion(SuggestionType.KEYWORD, candidateTokenValue));
        }
      }
      for (const rule of candidates.rules) {
        if (preferredRulesTable.includes(rule[0])) {
          isTableCandidatePosition = true;
        }
        if (preferredRulesColumn.includes(rule[0])) {
          isColumnCandidatePosition = true;
        }
      }
    }
    if (isTableCandidatePosition) {
      for (const tableName of this._layout?.tables.keys() || []) {
        if (tableName.startsWith(tokenString.toLowerCase())) {
          suggestions.unshift(new Suggestion(SuggestionType.TABLE, tableName));
        }
      }
      if (suggestions.length === 0 || suggestions[0].type !== SuggestionType.TABLE) {
        // If none of the table options match, still identify this as a potential table location
        suggestions.unshift(new Suggestion(SuggestionType.TABLE));
      }
    }
    if (isColumnCandidatePosition) {
      for (const tableName of this._layout?.tables.keys() || []) {
        for (const columnName of this._layout?.tables.get(tableName)?.columns.keys() || []) {
          if (columnName.toUpperCase().startsWith(tokenString.toUpperCase())) {
            suggestions.unshift(new Suggestion(SuggestionType.COLUMN, columnName));
          }
          const columnSchemaName = `${tableName}.${columnName}`;
          if (columnSchemaName.toUpperCase().startsWith(tokenString.toUpperCase())) {
            suggestions.unshift(new Suggestion(SuggestionType.COLUMN, columnSchemaName));
          }
        }
      }
      if (suggestions.length === 0 || suggestions[0].type !== SuggestionType.COLUMN) {
        // If none of the column options match, still identify this as a potential column location
        suggestions.unshift(new Suggestion(SuggestionType.COLUMN));
      }
    }

    return suggestions;
  }

  updateLayout(layout?: Layout): void {
    this._layout = layout;
  }

  suggest(sqlScript: string, atIndex?: number): Suggestion[] {
    const parsedStatement = this._survey(sqlScript);

    const tableNames: string[] = this._layout ? [...this._layout.tables.keys()] : [];
    const columnNames: string[] = this._layout
      ? [...this._layout.tables.entries()].flatMap(([table_name, table]) =>
          [...table.columns.keys()].map((column_name) => `${table_name}.${column_name}`)
        )
      : [];

    [...parsedStatement.parsedQueries.values()].forEach((query) => {
      [...query.getAllReferencedTables().values()].forEach((table) => {
        const originalTable = this._layout?.tables.get(table.tableName);
        table.aliases.forEach((alias) => {
          if (originalTable) {
            tableNames.push(alias);
            [...originalTable.columns.keys()].forEach((column_name) => {
              columnNames.push(`${alias}.${column_name}`);
            });
          }
        });
      });

      getAllOutputColumns(query).forEach((column) => {
        if (column.columnAlias) {
          columnNames.push(column.columnAlias);
        }
      });
    });

    return this._autocomplete(sqlScript, tableNames, columnNames, atIndex);
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

  _tokenizeWhitespace() {
    return true;
  }

  _getPreferredRulesForTable(): number[] {
    return [PostgresParser.RULE_identifier, PostgresParser.RULE_indirection_var];
  }

  _getPreferredRulesForColumn(): number[] {
    return [PostgresParser.RULE_indirection_var];
  }

  _getTokensToIgnore(): number[] {
    return [
      PostgresParser.DOT,
      PostgresParser.COMMA,
      PostgresParser.SEMI_COLON,
      PostgresParser.DOUBLE_DOT,
      PostgresParser.Identifier,
      PostgresParser.LEFT_PAREN,
      PostgresParser.RIGHT_PAREN,
      PostgresParser.LEFT_BRACKET,
      PostgresParser.RIGHT_BRACKET
    ];
  }

  _getTokenIndexAt(tokens: Token[], fullString: string, offset: number): number {
    if (tokens.length === 0) {
      return -1;
    }
    let i = 0;
    let lastNonEOFToken = -1;
    while (i < tokens.length) {
      const token = tokens[i];
      if (token.type !== Token.EOF) {
        lastNonEOFToken = i;
      }
      if (token.startIndex > offset) {
        if (i === 0) {
          return -1;
        }
        return i - 1;
      }
      i++;
    }
    // If we didn't find the token above and the last
    // character in the autocomplete is whitespace,
    // start autocompleting for the next token
    if (/\s$/.test(fullString)) {
      return i - 1;
    }
    return lastNonEOFToken;
  }

  _getTokenString(token: Token, fullString: string, offset: number): string {
    if (token !== null && token.type !== Token.EOF) {
      let stop = token.stopIndex;
      if (offset < stop) {
        stop = offset;
      }
      return fullString.substring(token.startIndex, stop + 1);
    }
    return '';
  }
}
