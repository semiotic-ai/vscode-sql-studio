export class OutputColumn {
  columnName: string;
  columnAlias?: string;
  tableName?: string;
  tableAlias?: string;

  constructor(columnName: string, tableName?: string, columnAlias?: string, tableAlias?: string) {
    this.columnName = columnName;
    this.tableName = tableName;
    this.columnAlias = columnAlias;
    this.tableAlias = tableAlias;
  }
}
