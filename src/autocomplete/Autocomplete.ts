import { CommonTokenStream, Parser, Token } from 'antlr4ts';
import { CodeCompletionCore } from './parsing/CodeCompletionCore';
import { SimpleSQLTokenizer } from './models/SimpleSQLTokenizer';

import { PredictionMode } from 'antlr4ts/atn';
import { Layout } from '../graphtables/layout';
import { TrackingErrorStrategy } from './parsing/TrackingErrorStrategy';
import { ParsedSql } from './models/ParsedSql';
import { TokenLocation } from './models/TokenLocation';
import { ParsedQuery } from './models/ParsedQuery';
import { OutputColumn } from './models/OutputColumn';
import { ParseTreeWalker } from 'antlr4ts/tree/ParseTreeWalker';
import { PostgresScript } from './postgres/PostgresScript';
import { BaseSqlQueryListener } from './parsing/BaseSqlQueryListener';

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
  _options?: Options;
  _layout?: Layout;

  constructor(options?: Options) {
    this._options = options;
  }

  updateLayout(layout?: Layout): void {
    this._layout = layout;
  }

  suggest(sqlScript: string, atIndex?: number): Suggestion[] {
    const script = new PostgresScript(sqlScript);

    const parsedStatement = script.ParsedStatement;

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

    const core = new CodeCompletionCore(script.parser);
    core.showDebugOutput = true;
    core.showResult = true;
    core.ignoredTokens = new Set(script.TokensToIgnore);
    let indexToAutocomplete = sqlScript.length;
    if (atIndex) {
      indexToAutocomplete = atIndex;
    }

    const suggestions: Suggestion[] = [];

    const query = script.ParsedStatement.getQueryAtLocation(indexToAutocomplete);
    const token = query?.getTokenAtLocation(indexToAutocomplete);

    if (token && token.location.streamIndex >= 0) {
      const tokenString =
        (token.location.stopIndex <= indexToAutocomplete
          ? token.value
          : token.value?.substring(0, indexToAutocomplete - token.location.startIndex)) || '';

      // Depending on the SQL grammar, we may not get both Tables and Column rules,
      // even if both are viable options for autocompletion
      // So, instead of using all preferredRules at once, we'll do them separate
      let isTableCandidatePosition = false;
      let isColumnCandidatePosition = false;
      for (const preferredRules of [
        script.PreferredRulesForTable,
        script.PreferredRulesForColumn
      ]) {
        core.preferredRules = new Set(preferredRules);
        const candidates = core.collectCandidates(token.location.streamIndex);
        for (const candidateToken of candidates.tokens) {
          let candidateTokenValue = script.parser.vocabulary.getDisplayName(candidateToken[0]);
          if (candidateTokenValue.startsWith("'") && candidateTokenValue.endsWith("'")) {
            candidateTokenValue = candidateTokenValue.substring(1, candidateTokenValue.length - 1);
          }
          let followOnTokens = candidateToken[1];
          for (const followOnToken of followOnTokens) {
            let followOnTokenValue = script.parser.vocabulary.getDisplayName(followOnToken);
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
          if (script.PreferredRulesForTable.includes(rule[0])) {
            isTableCandidatePosition = true;
          }
          if (script.PreferredRulesForColumn.includes(rule[0])) {
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
    }

    return suggestions;
  }
}
