import {
  Alias_clauseContext,
  Function_callContext,
  Indirection_varContext,
  Select_stmtContext,
  Select_stmt_no_parensContext,
  Select_sublistContext,
  Vex_or_named_notationContext,
  With_queryContext
} from './PostgresParser';
import { PostgresParserListener } from './PostgresParserListener';
import { BaseSqlQueryListener } from '../parsing/BaseSqlQueryListener';
import { TokenLocation } from '../models/TokenLocation';
import { ParsedQuery } from '../models/ParsedQuery';
import { ReferencedTable } from '../models/ReferencedTable';
import { ParserRuleContext } from 'antlr4ts';

export class PostgresQueryListener extends BaseSqlQueryListener implements PostgresParserListener {
  unquote(value: string) {
    if (value.startsWith('"') && value.endsWith('"')) {
      return value.slice(1, value.length - 1);
    }
    return value;
  }

  _getAliasStartIndex(value: string): number | undefined {
    return super._getAliasStartIndex(value, '"', '"');
  }

  _getTableAliasEndLocation(value: string): number | undefined {
    return super._getTableAliasEndLocation(value, '"', '"');
  }

  parseContextToReferencedTable(ctx: ParserRuleContext) {
    const tableLocation = this._getClauseLocation(ctx);
    const tableText = tableLocation.getToken(this.input);
    let tableNameOrAlias = this.unquote(tableText);
    const referencedTable = new ReferencedTable(tableNameOrAlias);
    return referencedTable;
  }

  enterSelect_stmt(ctx: Select_stmtContext): void {
    try {
      if (!(ctx._parent instanceof With_queryContext)) {
        // Ignore the trailing portion of a CTE query
        const queryLocation = this._getClauseLocation(ctx);
        this.parsedSql._addQuery(
          new ParsedQuery(queryLocation.getToken(this.input), queryLocation)
        );
      }
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  enterSelect_stmt_no_parens(ctx: Select_stmt_no_parensContext) {
    try {
      const subqueryLocation = this._getClauseLocation(ctx);
      const parsedQuery = this.parsedSql.getSmallestQueryAtLocation(subqueryLocation.startIndex);
      parsedQuery._addSubQuery(
        new ParsedQuery(subqueryLocation.getToken(this.input), subqueryLocation)
      );
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  enterWith_query(ctx: With_queryContext) {
    try {
      const cteLocation: TokenLocation = this._getClauseLocation(ctx);
      const parsedQuery = this.parsedSql.getSmallestQueryAtLocation(cteLocation.startIndex);
      parsedQuery._addCommonTableExpression(
        new ParsedQuery(cteLocation.getToken(this.input), cteLocation)
      );
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  exitAlias_clause(ctx: Alias_clauseContext) {
    try {
      const aliasLocation = this._getClauseLocation(ctx);
      const referencedTable = this.parseContextToReferencedTable(
        ctx.parent!.getChild(0) as ParserRuleContext
      );
      const parsedQuery = this.parsedSql.getSmallestQueryAtLocation(aliasLocation.startIndex);
      let aliasName = this.unquote(aliasLocation.getToken(this.input));
      const aliasStartIndex = this._getAliasStartIndex(aliasName);
      if (aliasStartIndex) {
        // alias is in the format 'AS alias', ignore the 'AS '
        aliasName = aliasName.substring(aliasStartIndex);
      }
      parsedQuery._addAliasForTable(aliasName, referencedTable.tableName);
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  exitIndirection_var(ctx: Indirection_varContext) {
    try {
      let parentContext = ctx._parent;
      while (parentContext) {
        if (parentContext instanceof Select_sublistContext) {
          // This is an output column, don't record it as a referenced column
          return;
        } else if (parentContext instanceof Select_stmt_no_parensContext) {
          // This is a subquery in the SELECT list, add the referenced column
          break;
        }
        parentContext = parentContext._parent;
      }
      const columnLocation = this._getClauseLocation(ctx);
      const parsedQuery = this.parsedSql.getSmallestQueryAtLocation(columnLocation.startIndex);
      const columnText = columnLocation.getToken(this.input);
      let columnName = columnText;
      let tableNameOrAlias: string | undefined;
      if (columnText.includes('.')) {
        const columnTextSplit: string[] = columnText.split('.');
        columnName = this.unquote(columnTextSplit[columnTextSplit.length - 1]);
        tableNameOrAlias = this.unquote(columnTextSplit[columnTextSplit.length - 2]);
        let tableNameOrAliasStartIndex =
          columnLocation.stopIndex -
          columnTextSplit[columnTextSplit.length - 1].length -
          columnTextSplit[columnTextSplit.length - 2].length;
        let tableNameOrAliasStopIndex =
          tableNameOrAliasStartIndex + columnTextSplit[columnTextSplit.length - 2].length - 1;
        const tableNameOrAliasLocation = new TokenLocation(
          columnLocation.lineStart,
          columnLocation.lineEnd,
          tableNameOrAliasStartIndex,
          tableNameOrAliasStopIndex,
          columnLocation.streamIndex
        );
        parsedQuery._addTableNameLocation(tableNameOrAlias, tableNameOrAliasLocation);
      } else {
        columnName = this.unquote(columnName);
      }
      parsedQuery._addReferencedColumn(columnName, columnLocation, tableNameOrAlias);
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  exitSchema_qualified_name(ctx: any) {
    try {
      const tableLocation = this._getClauseLocation(ctx);
      const parsedQuery = this.parsedSql.getSmallestQueryAtLocation(tableLocation.startIndex);
      const referencedTable = this.parseContextToReferencedTable(ctx);
      parsedQuery._addTableNameLocation(referencedTable.tableName, tableLocation);
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  exitSelect_sublist(ctx: Select_sublistContext) {
    try {
      let columnLocation = this._getClauseLocation(ctx);
      const parsedQuery = this.parsedSql.getSmallestQueryAtLocation(columnLocation.startIndex);
      let columnText = columnLocation.getToken(this.input);
      let columnName = columnText;
      let columnAlias: string | undefined;
      let tableNameOrAlias: string | undefined;
      if (columnText.includes('.')) {
        // Column may have a table alias
        const functionArgumentLocation = this._getFunctionArgumentLocation(ctx, columnLocation);
        if (functionArgumentLocation) {
          columnText = functionArgumentLocation.getToken(this.input);
          columnLocation = functionArgumentLocation;
        }
        const tableNameOrAliasStopIndex = this._getTableAliasEndLocation(columnText);
        if (tableNameOrAliasStopIndex) {
          tableNameOrAlias = this.unquote(columnText.substring(0, tableNameOrAliasStopIndex));
          const tableNameOrAliasLocation = new TokenLocation(
            columnLocation.lineStart,
            columnLocation.lineEnd,
            columnLocation.startIndex,
            columnLocation.startIndex + tableNameOrAliasStopIndex - 1,
            columnLocation.streamIndex
          );
          parsedQuery._addTableNameLocation(tableNameOrAlias, tableNameOrAliasLocation);
        }
      }
      columnName = columnName.trim();
      const aliasStartIndex = this._getAliasStartIndex(columnName);
      if (aliasStartIndex) {
        // Column has an alias
        columnAlias = columnName.substring(aliasStartIndex);
        columnName = columnName.substring(0, aliasStartIndex - 1).trimEnd();
        if (columnName.toUpperCase().endsWith('AS')) {
          columnName = columnName.substring(0, columnName.length - 2).trimEnd();
        }
      }
      columnName = this.unquote(columnName);
      if (columnAlias) {
        columnAlias = this.unquote(columnAlias);
      }
      parsedQuery._addOutputColumn(columnName, tableNameOrAlias, columnAlias);
    } catch (err) {
      this._handleError(err as Error);
    }
  }

  _getFunctionArgumentLocation(ctx: any, columnLocation: TokenLocation): TokenLocation | undefined {
    const functionRules = [Function_callContext];
    const argumentRules = [Vex_or_named_notationContext];
    return super._getFunctionArgumentLocation(ctx, columnLocation, functionRules, argumentRules);
  }
}
