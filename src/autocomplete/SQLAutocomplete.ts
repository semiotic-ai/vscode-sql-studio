import { CommonTokenStream, Parser, Token, TokenStreamRewriter } from 'antlr4ts';
import { CodeCompletionCore } from './CodeCompletionCore';
import { AutocompleteOption } from './models/AutocompleteOption';
import { AutocompleteOptionType } from './models/AutocompleteOptionType';
import { SimpleSQLTokenizer } from './models/SimpleSQLTokenizer';

import { antlr4tsSQL } from './antlr4tsSQL';
import { PredictionMode } from 'antlr4ts/atn';
import { PostgresParser } from './postgres/PostgresParser';

export class SQLAutocomplete {
  antlr4tssql: antlr4tsSQL;

  tableNames: string[] = [];
  columnNames: string[] = [];

  constructor(tableNames?: string[], columnNames?: string[]) {
    this.antlr4tssql = new antlr4tsSQL();
    if (tableNames) {
      this.tableNames.push(...tableNames);
    }
    if (columnNames) {
      this.columnNames.push(...columnNames);
    }
  }

  autocomplete(sqlScript: string, atIndex?: number): AutocompleteOption[] {
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
    const autocompleteOptions: AutocompleteOption[] = [];
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
            autocompleteOptions.find((option) => option.value === candidateTokenValue) ===
              undefined)
        ) {
          autocompleteOptions.push(
            new AutocompleteOption(AutocompleteOptionType.KEYWORD, candidateTokenValue)
          );
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
      for (const tableName of this.tableNames) {
        if (tableName.toUpperCase().startsWith(tokenString.toUpperCase())) {
          autocompleteOptions.unshift(
            new AutocompleteOption(AutocompleteOptionType.TABLE, tableName)
          );
        }
      }
      if (
        autocompleteOptions.length === 0 ||
        autocompleteOptions[0].optionType !== AutocompleteOptionType.TABLE
      ) {
        // If none of the table options match, still identify this as a potential table location
        autocompleteOptions.unshift(new AutocompleteOption(AutocompleteOptionType.TABLE));
      }
    }
    if (isColumnCandidatePosition) {
      for (const columnName of this.columnNames) {
        if (columnName.toUpperCase().startsWith(tokenString.toUpperCase())) {
          autocompleteOptions.unshift(
            new AutocompleteOption(AutocompleteOptionType.COLUMN, columnName)
          );
        }
      }
      if (
        autocompleteOptions.length === 0 ||
        autocompleteOptions[0].optionType !== AutocompleteOptionType.COLUMN
      ) {
        // If none of the column options match, still identify this as a potential column location
        autocompleteOptions.unshift(new AutocompleteOption(AutocompleteOptionType.COLUMN));
      }
    }
    return autocompleteOptions;
  }

  setTableNames(tableNames: string[]): void {
    if (tableNames !== null && tableNames !== undefined) {
      this.tableNames = [...tableNames];
    }
  }

  setColumnNames(columnNames: string[]): void {
    if (columnNames !== null && columnNames !== undefined) {
      this.columnNames = [...columnNames];
    }
  }

  _getTokens(sqlScript: string): CommonTokenStream {
    const tokens = this.antlr4tssql.getTokens(sqlScript, []);
    return tokens;
  }

  _getParser(tokens: CommonTokenStream): Parser {
    let parser = this.antlr4tssql.getParser(tokens, []);
    parser.interpreter.setPredictionMode(PredictionMode.LL);
    return parser;
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
