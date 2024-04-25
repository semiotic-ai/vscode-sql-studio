import {
  antlr4tsSQL as Antlr4tsSQL,
  SQLDialect,
  ParseTreeWalker,
  CommonTokenStream,
  Parser,
  Token
} from 'antlr4ts-sql';

import { PredictionMode } from 'antlr4ts/atn/PredictionMode';
import { CompletionItem } from 'vscode';
import { Layout } from '../graphtables/layout.js';
import * as functions from '../../dist/functions.json';
import { PLpgSQLGrammar, PLpgSQLParserListener, ErrorNode, ParserRuleContext } from 'antlr4ts-sql';
import { CodeCompletionCore } from './CoreCodeCompletion.js';

const PreferedRulesForTable = new Set([PLpgSQLGrammar.PLpgSQLParser.RULE_from_item]);

const PreferredRulesForSelect = new Set([PLpgSQLGrammar.PLpgSQLParser.RULE_select_list]);

const PreferredRulesForColumn = new Set([
  PLpgSQLGrammar.PLpgSQLParser.RULE_select_list,
  PLpgSQLGrammar.PLpgSQLParser.RULE_select_sublist,
  PLpgSQLGrammar.PLpgSQLParser.RULE_identifier
]);

const PreferedRulesForColumnTypes = new Set([PLpgSQLGrammar.PLpgSQLParser.RULE_data_type]);

const PreferredRulesForFunctions = new Set([
  PLpgSQLGrammar.PLpgSQLParser.RULE_select_list,
  PLpgSQLGrammar.PLpgSQLParser.RULE_select_sublist,
  PLpgSQLGrammar.PLpgSQLParser.RULE_function_call
]);

const PreferedRuleOptions = [
  PreferedRulesForTable,
  PreferredRulesForSelect,
  PreferredRulesForColumn,
  PreferedRulesForColumnTypes,
  PreferredRulesForFunctions
];

const TokensToIgnore = new Set([
  PLpgSQLGrammar.PLpgSQLParser.DOT,
  PLpgSQLGrammar.PLpgSQLParser.COMMA,
  PLpgSQLGrammar.PLpgSQLParser.SEMI_COLON,
  PLpgSQLGrammar.PLpgSQLParser.Identifier,
  PLpgSQLGrammar.PLpgSQLParser.LEFT_PAREN,
  PLpgSQLGrammar.PLpgSQLParser.RIGHT_PAREN,
  PLpgSQLGrammar.PLpgSQLParser.LEFT_BRACKET,
  PLpgSQLGrammar.PLpgSQLParser.RIGHT_BRACKET
]);

const TokenizeWhitespace = true;

async function getCodeCompletionCore(parser: any) {
  const { CodeCompletionCore } = await import('antlr4-c3');
  return new CodeCompletionCore(parser);
}

export class CompletionRules {
  antlr4tssql: Antlr4tsSQL;
  constructor(
    private readonly layout: Layout,
    private readonly alisedTables: Map<string, string>,
    private readonly alisedColumns: Set<string>
  ) {
    this.antlr4tssql = new Antlr4tsSQL(SQLDialect.PLpgSQL);
  }

  async completions(sqlScript: string, atIndex?: number): Promise<CompletionItem[] | null> {
    if (atIndex !== undefined && atIndex !== null) {
      // Remove everything after the index we want to get suggestions for,
      // it's not needed and keeping it in may impact which token gets selected for prediction
      sqlScript = sqlScript.substring(0, atIndex);
    }
    let indexToAutocomplete = sqlScript.length;
    if (atIndex !== null && atIndex !== undefined) {
      indexToAutocomplete = atIndex;
    }
    const completionItems: CompletionItem[] = [];
    const context = await this.getAutocompleteContext(sqlScript, indexToAutocomplete);
    if (!context) {
      return completionItems;
    }
    const {
      isSelectPosition,
      isTableCandidatePosition,
      isColumnCandidatePosition,
      isColumnTypePosition,
      isEnginePosition,
      isFunctionPosition,
      tokenString,
      tokenIndex,
      allTokens,
      keywordSuggestions
    } = context;
    completionItems.push(...keywordSuggestions);
    const parsedSql = this.getParsedSql(sqlScript);
    let tablesSubset = this.tablesInfo;
    let columnsSubset = this.columnsInfo;
    if (isSelectPosition) {
      const selectSuggestions = this.calculateSelectSuggestions(sqlScript, tokenString, tokenIndex);
      selectSuggestions.forEach((suggestion) => {
        autocompleteOptions.unshift(suggestion);
      });
      this.suggestFunctions(tokenString, autocompleteOptions);
      return autocompleteOptions;
    }
    const isSelect = sqlScript.trim().toUpperCase().endsWith('SELECT');
    const isAfterFrom = sqlScript.toUpperCase().indexOf('FROM') > -1;
    const isAfterWhere = sqlScript.toUpperCase().indexOf('WHERE') > -1;
    const containsJoin =
      sqlScript.toUpperCase().includes('JOIN') ||
      !!Object.values(parsedSql.parsedQueries).find(
        (query) => Object.values(query.referencedTables).length > 1
      );
    const onWhereClauseContext = !isSelect && isAfterFrom && isAfterWhere;
    if (isTableCandidatePosition) {
      if (onWhereClauseContext) {
        tablesSubset = tablesSubset.filter((table) => {
          return (
            sqlScript.includes(table.name) ||
            (tokenString.toUpperCase() !== '' && table.match(tokenString.toUpperCase()))
          );
        });
      }
      this.suggestTables(tablesSubset, tokenString, autocompleteOptions);
    }
    if (isColumnCandidatePosition) {
      if (tokenString === '.' && tokenIndex >= 1) {
        // We will try to autocomplete the column for a given table
        let tableName = this._getTokenString(
          allTokens[tokenIndex - 1],
          sqlScript,
          indexToAutocomplete
        );
        if (isQuoted(tableName)) {
          tableName = unquote(tableName);
        }
        let schema: string | null = null;
        if (tokenIndex >= 3) {
          const maybeDot = allTokens[tokenIndex - 2];
          if (maybeDot.text === '.') {
            schema = this._getTokenString(
              allTokens[tokenIndex - 3],
              sqlScript,
              indexToAutocomplete
            );
            if (isQuoted(schema)) {
              schema = unquote(schema);
            }
          }
        }
        const tableColumnsInfo = this.columnsInfo.filter((columnName) => {
          let schemaMatches = true;
          if (schema) {
            schemaMatches = columnName.schema === schema;
          }
          return schemaMatches && columnName.table === tableName;
        });
        for (const tableColumnInfo of tableColumnsInfo) {
          autocompleteOptions.unshift(
            new AutocompleteOption(
              tableColumnInfo.name,
              AutocompleteOptionType.COLUMN,
              tableColumnInfo.name
            )
          );
        }
      } else {
        if (onWhereClauseContext) {
          columnsSubset = tablesSubset.map((table) => table.columns).flat();
        }
        this.suggestColumns(
          columnsSubset,
          tokenString,
          autocompleteOptions,
          containsJoin,
          tablesSubset
        );
        this.suggestFunctions(tokenString, autocompleteOptions);
        if (onWhereClauseContext) {
          this.suggestAliases(parsedSql, columnsSubset, autocompleteOptions);
        }
      }
    }
    if (isColumnTypePosition) {
      this.suggestDataTypes(autocompleteOptions);
    }
    if (isEnginePosition) {
      this.suggestEngines(autocompleteOptions);
    }
    if (isFunctionPosition) {
      this.suggestFunctions(tokenString, autocompleteOptions);
    }
    return autocompleteOptions;
  }
  private suggestTables(
    tablesSubset: ITableInfo[],
    tokenString: string,
    autocompleteOptions: AutocompleteOption[]
  ) {
    const tableSuggestions = this.getTableSuggestions(tablesSubset, tokenString);
    tableSuggestions.forEach((sugg) => autocompleteOptions.unshift(sugg));
    if (
      autocompleteOptions.length === 0 ||
      autocompleteOptions[0].optionType !== AutocompleteOptionType.TABLE
    ) {
      // If none of the table options match, still identify this as a potential table location
      autocompleteOptions.unshift(new AutocompleteOption(null, AutocompleteOptionType.TABLE, null));
    }
  }
  private suggestFunctions(tokenString: string, autocompleteOptions: AutocompleteOption[]) {
    const intermediateResult: AutocompleteOption[] = [];
    for (const functionName of this.functionNames) {
      if (functionName.match(tokenString.toUpperCase())) {
        intermediateResult.push(
          new AutocompleteOption(
            functionName.fullyQualifiedName,
            AutocompleteOptionType.FUNCTION,
            functionName.fullyQualifiedName
          )
        );
      }
    }
    autocompleteOptions.unshift(...intermediateResult);
  }
  private suggestColumns(
    columnsSubset: IColumnInfo[],
    tokenString: string,
    autocompleteOptions: AutocompleteOption[],
    containsJoin: boolean,
    tablesSubset: ITableInfo[]
  ) {
    for (const columnInfo of columnsSubset) {
      if (columnInfo.match(tokenString.toUpperCase())) {
        autocompleteOptions.unshift(
          new AutocompleteOption(
            columnInfo.name,
            AutocompleteOptionType.COLUMN,
            containsJoin || tablesSubset.length > 1
              ? columnInfo.fullyQualifiedName
              : columnInfo.name,
            columnInfo.getDetail()
          )
        );
      }
    }
  }
  private suggestAliases(
    parsedSql: ParsedSql,
    columnsSubset: IColumnInfo[],
    autocompleteOptions: AutocompleteOption[]
  ) {
    const aliasSuggestions: AutocompleteOption[] = this.getUserAliasAndFunctionsSuggestions(
      parsedSql,
      columnsSubset
    );
    aliasSuggestions.forEach((sugg) => autocompleteOptions.unshift(sugg));
  }
  private suggestDataTypes(autocompleteOptions: AutocompleteOption[]) {
    allDataTypes.forEach((dataType) => {
      autocompleteOptions.unshift(
        new AutocompleteOption(dataType, AutocompleteOptionType.COLUMN, dataType)
      );
    });
  }
  private suggestEngines(autocompleteOptions: AutocompleteOption[]) {
    engineTypes.forEach((engineType) => {
      autocompleteOptions.unshift(
        new AutocompleteOption(engineType, AutocompleteOptionType.COLUMN, engineType)
      );
    });
  }
  private getTableSuggestions(
    tablesSubset: ITableInfo[],
    tokenString: string
  ): AutocompleteOption[] {
    return tablesSubset
      .filter(
        (tableInfo) =>
          tokenString.toUpperCase() === '' || tableInfo.match(tokenString.toUpperCase())
      )
      .map(
        (tableInfo) =>
          new AutocompleteOption(
            tableInfo.fullyQualifiedName,
            AutocompleteOptionType.TABLE,
            tableInfo.fullyQualifiedName,
            tableInfo.getDetail()
          )
      );
  }
  private async getAutocompleteContext(sqlScript: string, indexToAutocomplete: number) {
    const keywordCompletions: CompletionItem[] = [];
    const tokens = this._getTokens(sqlScript);
    const parser = this._getParser(tokens);
    const core = await getCodeCompletionCore(parser);

    const simpleSQLTokenizer = new SimpleSQLTokenizer(sqlScript, TokenizeWhitespace);
    const allTokens = new CommonTokenStream(simpleSQLTokenizer).getTokens();
    const tokenIndex = this._getTokenIndexAt(allTokens, sqlScript, indexToAutocomplete);
    if (tokenIndex === null) {
      return null;
    }
    const token: Token = allTokens[tokenIndex];
    const tokenString = this._getTokenString(token, sqlScript, indexToAutocomplete);
    tokens.fill(); // Needed for CoreCompletionCore to process correctly, see: https://github.com/mike-lischke/antlr4-c3/issues/42
    const autocompleteKeywordTokens: Record<string, boolean> = {};
    // Depending on the SQL grammar, we may not get both Tables and Column rules,
    // even if both are viable options for autocompletion
    // So, instead of using all preferredRules at once, we'll do them separate
    let isSelectPosition = false;
    let isTableCandidatePosition = false;
    let isColumnCandidatePosition = false;
    let isColumnTypePosition = false;
    let isFunctionPosition = false;
    let isEnginePosition = false;
    for (const preferredRules of preferredRuleOptions) {
      core.preferredRules = new Set(preferredRules);
      const candidates = core.collectCandidates(tokenIndex);
      for (const candidateToken of candidates.tokens) {
        let candidateTokenValue = parser.vocabulary.getDisplayName(candidateToken[0]);
        if (isQuoted(candidateTokenValue)) {
          candidateTokenValue = candidateTokenValue.substring(1, candidateTokenValue.length - 1);
        }
        const followOnTokens = candidateToken[1];
        for (const followOnToken of followOnTokens) {
          let followOnTokenValue = parser.vocabulary.getDisplayName(followOnToken);
          if (isQuoted(followOnTokenValue)) {
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
            !autocompleteKeywordTokens[candidateTokenValue.toUpperCase()])
        ) {
          keywordSuggestions.push(
            new AutocompleteOption(
              candidateTokenValue,
              AutocompleteOptionType.KEYWORD,
              candidateTokenValue
            )
          );
          autocompleteKeywordTokens[candidateTokenValue.toUpperCase()] = true;
        }
      }
      for (const rule of candidates.rules) {
        if (preferredRulesSelect.has(rule[0])) {
          isSelectPosition = true;
        }
        if (preferredRulesTable.has(rule[0])) {
          isTableCandidatePosition = true;
        }
        if (preferredRulesColumn.has(rule[0])) {
          isColumnCandidatePosition = true;
        }
        if (preferredRulesForColumnTypes.has(rule[0])) {
          isColumnTypePosition = true;
        }
        if (preferredRulesForFunctions.has(rule[0])) {
          isFunctionPosition = true;
        }
        if (preferredRulesForEngines.has(rule[0]) && sqlScript.toUpperCase().includes(' ENGINE')) {
          const lastFilledToken = allTokens
            .reverse()
            .map((token) => token.text?.toLowerCase()?.trim() || '')
            .filter((token) => token.length > 0)[0];
          if (lastFilledToken === '=') {
            isEnginePosition = true;
          }
        }
      }
    }
    return {
      isSelectPosition,
      isTableCandidatePosition,
      isColumnCandidatePosition,
      isColumnTypePosition,
      isEnginePosition,
      isFunctionPosition,
      token,
      tokenString,
      tokenIndex,
      allTokens,
      keywordSuggestions
    };
  }
  private getUserAliasAndFunctionsSuggestions(
    parsedSql: ParsedSql,
    columnsSubset: IColumnInfo[]
  ): AutocompleteOption[] {
    const columnsOrAliasOnSelect: string[] = this.getColumnsOrAliasOnSelect(parsedSql);
    return columnsOrAliasOnSelect
      .filter(
        (colOrAlias) =>
          colOrAlias !== '*' && !columnsSubset.find((column) => column.match(colOrAlias))
      )
      .map((colOrAlias) => {
        return new AutocompleteOption(colOrAlias, AutocompleteOptionType.COLUMN, colOrAlias);
      });
  }
  private getColumnsOrAliasOnSelect(parsedSql: ParsedSql) {
    return Object.values(parsedSql.parsedQueries)
      .map((parsedQuery) => parsedQuery.outputColumns)
      .flat()
      .map((column) => column.columnAlias || column.columnName)
      .filter((colOrAlias) => colOrAlias !== '*')
      .map((colOrAlias) => {
        const match = colOrAlias.match(/(\w) as [", `, ']?([^",`,']+)[", `, ']?$/);
        if (match) {
          return match[2];
        } else {
          return colOrAlias;
        }
      });
  }
  getParsedSql(sql: string): ParsedSql {
    const surveyor = new SQLSurveyor();
    return surveyor.survey(sql);
  }
  private calculateSelectSuggestions(sqlScript: string, tokenString: string, tokenIndex: number) {
    const result: AutocompleteOption[] = [];
    for (const columnInfo of this.columnsInfo) {
      if (!sqlScript.includes(columnInfo.fullyQualifiedName)) {
        let insertText = columnInfo.name;
        if (tokenString === '.' && tokenIndex >= 1) {
          insertText = columnInfo.name;
        }
        result.unshift(
          new AutocompleteOption(
            columnInfo.name,
            AutocompleteOptionType.COLUMN,
            insertText,
            columnInfo.getDetail()
          )
        );
      }
    }
    return result;
  }
  setITablesInfo(tablesInfo: ITableInfo[]): void {
    if (tablesInfo !== null && tablesInfo !== undefined) {
      this.tablesInfo = [...tablesInfo];
    }
  }
  setIColumnsInfo(columnsInfo: IColumnInfo[]): void {
    if (columnsInfo !== null && columnsInfo !== undefined) {
      this.columnsInfo = [...columnsInfo];
    }
  }
  _getTokens(sqlScript: string): CommonTokenStream {
    const tokens = this.antlr4tssql.getTokens(sqlScript, []);
    return tokens;
  }
  _getParser(tokens: CommonTokenStream): Parser {
    const parser = this.antlr4tssql.getParser(tokens, []);
    parser.interpreter.setPredictionMode(PredictionMode.LL);
    return parser;
  }

  _getTokenIndexAt(tokens: any[], fullString: string, offset: number): number | null {
    if (tokens.length === 0) {
      return null;
    }
    let i = 0;
    let lastNonEOFToken: number | null = null;
    while (i < tokens.length) {
      const token = tokens[i];
      if (token.type !== Token.EOF) {
        lastNonEOFToken = i;
      }
      if (token.start > offset) {
        if (i === 0) {
          return null;
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
  _getTokenString(token: any, fullString: string, offset: number): string {
    if (token !== null && token.type !== Token.EOF) {
      let stop = token.stop;
      if (offset < stop) {
        stop = offset;
      }
      return fullString.substring(token.start, stop + 1);
    }
    return '';
  }
}
