import { OutputColumn } from './OutputColumn';
import { ReferencedColumn } from './ReferencedColumn';
import { ReferencedTable } from './ReferencedTable';
import { TokenLocation } from './TokenLocation';
import { Token } from './Token';
import { ParsingError } from './ParsingError';
import { TokenType } from './TokenType';
import { NoUndefinedVariablesRule } from 'graphql';

export class ParsedQuery {
  query: string;
  outputColumns: OutputColumn[];
  referencedColumns: ReferencedColumn[];
  referencedTables: Map<string, ReferencedTable>;

  tokens: Map<number, Token>;

  queryLocation: TokenLocation;
  queryErrors: ParsingError[];

  commonTableExpressionName?: string;

  subqueries: Map<number, ParsedQuery>;

  commonTableExpressions: Map<number, ParsedQuery>;

  constructor(query: string, queryLocation: TokenLocation) {
    this.outputColumns = [];
    this.referencedColumns = [];
    this.referencedTables = new Map();

    this.tokens = new Map();

    this.query = query;
    this.queryLocation = queryLocation;

    this.queryErrors = [];
    this.subqueries = new Map();
    this.commonTableExpressions = new Map();
  }

  getAllReferencedTables(): Map<string, ReferencedTable> {
    const tables: Map<string, ReferencedTable> = new Map();
    for (const [referencedTableName, referenceTable] of this.referencedTables) {
      tables.set(referencedTableName, ReferencedTable.clone(referenceTable));
    }
    for (const query of [...this.subqueries.values(), ...this.commonTableExpressions.values()]) {
      const queryReferencedTables: Map<string, ReferencedTable> = query.getAllReferencedTables();
      for (const [referencedTableName, referenceTable] of queryReferencedTables) {
        const table = tables.get(referencedTableName);
        if (!table) {
          tables.set(referencedTableName, ReferencedTable.clone(referenceTable));
        } else {
          referenceTable.aliases.forEach((alias) => table.aliases.add(alias));
          referenceTable.locations.forEach((location) =>
            table.locations.add(TokenLocation.clone(location))
          );
        }
      }
    }
    return tables;
  }

  getAllReferencedColumns(): ReferencedColumn[] {
    const columns: ReferencedColumn[] = [...this.referencedColumns];
    for (const query of [...this.subqueries.values(), ...this.commonTableExpressions.values()]) {
      const queryReferencedColumns: ReferencedColumn[] = query.getAllReferencedColumns();
      for (const referencedColumn of queryReferencedColumns) {
        const existingReferencedColumnCandidates: ReferencedColumn[] = columns.filter(
          (column) => column.columnName === referencedColumn.columnName
        );
        let matchedCandidate: boolean = false;
        for (const existingReferencedColumnCandidate of existingReferencedColumnCandidates) {
          if (
            existingReferencedColumnCandidate.tableAlias === referencedColumn.tableAlias ||
            existingReferencedColumnCandidate.tableName === referencedColumn.tableName
          ) {
            matchedCandidate = true;
            if (
              existingReferencedColumnCandidate.tableName === null &&
              referencedColumn.tableName !== null
            ) {
              existingReferencedColumnCandidate.tableName = referencedColumn.tableName;
            }
            if (
              existingReferencedColumnCandidate.tableAlias === null &&
              referencedColumn.tableAlias !== null
            ) {
              existingReferencedColumnCandidate.tableAlias = referencedColumn.tableAlias;
            }
            referencedColumn.locations.forEach((location) =>
              existingReferencedColumnCandidate.locations.add(TokenLocation.clone(location))
            );
            break;
          }
        }
        if (!matchedCandidate) {
          columns.push(referencedColumn);
        }
      }
    }
    return columns;
  }

  getTableFromAlias(alias: string): string | undefined {
    for (const table of this.referencedTables.values()) {
      if (table.aliases.has(alias)) {
        return table.tableName;
      }
    }
    for (const query of this.subqueries.values()) {
      const subqueryTable = query.getTableFromAlias(alias);
      if (subqueryTable) {
        return subqueryTable;
      }
    }
    for (const cte of this.commonTableExpressions.values()) {
      const cteTable = cte.getTableFromAlias(alias);
      if (cteTable) {
        return cteTable;
      }
    }
    return undefined;
  }

  getAliasesForTable(tableName: string): string[] | undefined {
    if (this.referencedTables.has(tableName)) {
      return Array.from(this.referencedTables.get(tableName)!.aliases);
    }

    for (const query of this.subqueries.values()) {
      if (query.referencedTables.has(tableName)) {
        return Array.from(query.referencedTables.get(tableName)!.aliases);
      }
    }
    for (const cte of this.commonTableExpressions.values()) {
      if (cte.referencedTables.has(tableName)) {
        return Array.from(cte.referencedTables.get(tableName)!.aliases);
      }
    }

    return undefined;
  }

  getTokenAtLocation(stringIndex: number): Token | undefined {
    const tokenStartIndex = [...this.tokens.keys()].find(
      (tokenStartIndex, index, indices) =>
        tokenStartIndex <= stringIndex &&
        (index === this.tokens.size - 1 || stringIndex < indices[index + 1])
    );

    if (tokenStartIndex) {
      return this.tokens.get(tokenStartIndex);
    }

    return undefined;
  }

  getPreviousTokenFromLocation(stringIndex: number): Token | undefined {
    const tokenStartIndexes = [...this.tokens.keys()];
    const currentIndex = tokenStartIndexes.findIndex(
      (tokenStartIndex, index, indices) =>
        tokenStartIndex <= stringIndex &&
        (index === this.tokens.size - 1 || stringIndex < indices[index + 1])
    );

    if (currentIndex < 1) {
      return undefined;
    }

    const currentStartIndex = tokenStartIndexes[currentIndex];
    const currentToken = this.tokens.get(currentStartIndex)!;

    if (
      currentIndex === tokenStartIndexes.length - 1 &&
      currentStartIndex + currentToken.value.length <= stringIndex
    ) {
      // Index is past the tokens in this query, previous token is the last & this token
      return currentToken;
    }

    if (currentToken.location.stopIndex <= stringIndex) {
      // We're past the current token, but before the next token
      return currentToken;
    }

    const previousTokenStartIndex = tokenStartIndexes[currentIndex - 1];
    return this.tokens.get(previousTokenStartIndex);
  }

  getNextTokenFromLocation(stringIndex: number): Token | undefined {
    const tokenStartIndexes = [...this.tokens.keys()];
    const currentIndex = tokenStartIndexes.findIndex(
      (tokenStartIndex, index, indices) =>
        tokenStartIndex <= stringIndex &&
        (index === this.tokens.size - 1 || stringIndex < indices[index + 1])
    );

    if (currentIndex === -1 || currentIndex === tokenStartIndexes.length - 1) {
      return undefined;
    }

    const currentStartIndex = tokenStartIndexes[currentIndex];
    const currentToken = this.tokens.get(currentStartIndex)!;

    const nextTokenStartIndex = tokenStartIndexes[currentIndex + 1];
    return this.tokens.get(nextTokenStartIndex);
  }

  getReferencedColumn(
    columnName: string,
    tableName?: string,
    tableAlias?: string
  ): ReferencedColumn | undefined {
    for (const referencedColumn of this.referencedColumns) {
      if (referencedColumn.columnName === columnName) {
        if (
          (!tableName || referencedColumn.tableName === tableName) &&
          (!tableAlias || referencedColumn.tableAlias === tableAlias)
        ) {
          return referencedColumn;
        }
      }
    }
    return undefined;
  }

  /**
   * Gets the smallest query at a given location
   * i.e. the smallest subquery or common table expression that encapsulates
   * the specified index
   * @param stringIndex
   */
  getSmallestQueryAtLocation(stringIndex: number): ParsedQuery | undefined {
    let smallestQuery: ParsedQuery | undefined = this;
    let smallerQuery: ParsedQuery | undefined = this;
    while (smallerQuery) {
      smallerQuery = smallestQuery?._getCommonTableExpressionAtLocation(stringIndex);
      if (!smallerQuery) {
        smallerQuery = smallestQuery._getSubqueryAtLocation(stringIndex);
      }
      if (smallerQuery) {
        smallestQuery = smallerQuery;
      }
    }
    return smallestQuery;
  }

  _getParsedQueryAtLocation(
    stringIndex: number,
    queries: Map<number, ParsedQuery>
  ): ParsedQuery | undefined {
    const result = [...queries.entries()].find(
      ([startIndex, query]) =>
        startIndex <= stringIndex && query.queryLocation.stopIndex >= stringIndex
    );
    return result ? result[1] : undefined;
  }

  _getSubqueryAtLocation(stringIndex: number): ParsedQuery | undefined {
    return this._getParsedQueryAtLocation(stringIndex, this.subqueries);
  }

  _getCommonTableExpressionAtLocation(stringIndex: number): ParsedQuery | undefined {
    return this._getParsedQueryAtLocation(stringIndex, this.commonTableExpressions);
  }

  _addAliasForTable(aliasName: string, tableName: string): void {
    this.referencedTables.get(tableName)!.aliases.add(aliasName);
  }

  _addCommonTableExpression(parsedQuery: ParsedQuery): void {
    this.commonTableExpressions.set(parsedQuery.queryLocation.startIndex, parsedQuery);
  }

  _addOutputColumn(columnName: string, columnAlias: string, tableNameOrAlias: string): void {
    let tableName = this.getTableFromAlias(tableNameOrAlias);
    let tableAlias: string | undefined;
    if (tableName) {
      tableAlias = tableNameOrAlias;
    } else {
      tableName = tableNameOrAlias;
    }
    const outputColumn = new OutputColumn(columnName, columnAlias, tableName, tableAlias);
    this.outputColumns.push(outputColumn);
  }

  _addReferencedColumn(
    columnName: string,
    tableNameOrAlias: string,
    location: TokenLocation
  ): void {
    let tableName = this.getTableFromAlias(tableNameOrAlias);
    let tableAlias: string | undefined;

    if (tableName) {
      tableAlias = tableNameOrAlias;
    } else {
      tableName = tableNameOrAlias;
    }
    const existingReferencedColumn = this.getReferencedColumn(columnName, tableName, tableAlias);
    if (existingReferencedColumn) {
      existingReferencedColumn.locations.add(location);
    } else {
      this.referencedColumns.push(
        new ReferencedColumn(columnName, tableName, tableAlias, location)
      );
    }
  }

  _addSubQuery(parsedQuery: ParsedQuery): void {
    this.subqueries.set(parsedQuery.queryLocation.startIndex, parsedQuery);
  }

  _addTableNameLocation(tableName: string, location: TokenLocation): void {
    const subquery = this._getSubqueryAtLocation(location.startIndex);
    if (subquery) {
      subquery._addTableNameLocation(tableName, location);
      return;
    }

    const cte = this._getCommonTableExpressionAtLocation(location.startIndex);
    if (cte) {
      cte._addTableNameLocation(tableName, location);
      return;
    }

    const aliasTableName = this.getTableFromAlias(tableName);
    if (aliasTableName) {
      tableName = aliasTableName;
    }

    if (!this.referencedTables.has(tableName)) {
      this.referencedTables.set(tableName, new ReferencedTable(tableName));
    }

    this.referencedTables.get(tableName)!.locations.add(location);
  }

  _addToken(location: TokenLocation, type: TokenType, token: string): void {
    this.tokens.set(location.startIndex, new Token(token, type, location));
  }

  /**
   * Aliases can be added to the ParsedQuery before the table itself
   * This method merges the aliases into the appropriate ReferencedTable
   */
  _consolidateTables(): void {
    [...this.commonTableExpressions.values()].forEach((cte) => cte._consolidateTables());
    [...this.subqueries.values()].forEach((subquery) => subquery._consolidateTables());
    const tableKeysToRemove: string[] = [];
    for (const tableName in this.referencedTables.keys()) {
      const realTableName = this.getTableFromAlias(tableName);
      if (realTableName) {
        tableKeysToRemove.push(tableName);
        for (const location of this.referencedTables.get(tableName)!.locations) {
          this._addTableNameLocation(realTableName, location);
        }
      }
    }
    for (const key of tableKeysToRemove) {
      this.referencedTables.delete(key);
    }

    for (const outputColumn of this.outputColumns) {
      const realTableName = this.getTableFromAlias(outputColumn.tableName);
      if (realTableName) {
        outputColumn.tableAlias = outputColumn.tableName;
        outputColumn.tableName = realTableName;
      }
    }
  }

  /**
   * Set the common table expression names for any CTEs.
   * Must be called after tokens have been added to the CTEs.
   */
  _setCommonTableExpressionNames(): void {
    for (const cte of this.commonTableExpressions.values()) {
      let cteName: string | undefined;
      for (const token of cte.tokens.values()) {
        if (token.value.toUpperCase() !== 'WITH') {
          cteName = token.value;
          break;
        }
      }
      cte.commonTableExpressionName = cteName;
      cte._setCommonTableExpressionNames();
    }
    for (const subquery of this.subqueries.values()) {
      subquery._setCommonTableExpressionNames();
    }
  }
}
