import { TokenLocation } from './TokenLocation';

export class ReferencedTable {
  tableName: string;
  aliases: Set<string>;
  locations: Set<TokenLocation>;

  constructor(tableName: string) {
    this.tableName = tableName;
    this.aliases = new Set();
    this.locations = new Set();
  }

  static clone(referencedTable: ReferencedTable): ReferencedTable {
    const clonedReferencedTable: ReferencedTable = new ReferencedTable(referencedTable.tableName);
    referencedTable.aliases.forEach((alias) => clonedReferencedTable.aliases.add(alias));
    referencedTable.locations.forEach((location) =>
      clonedReferencedTable.locations.add(TokenLocation.clone(location))
    );
    return clonedReferencedTable;
  }
}
