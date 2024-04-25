import { ParsedQuery } from './ParsedQuery';
import { TokenLocation } from './TokenLocation';

export class ParsedSql {
  parsedQueries: Map<number, ParsedQuery>;

  constructor() {
    this.parsedQueries = new Map();
  }

  getQueryAtLocation(stringIndex: number): ParsedQuery {
    const queryIndex = this.getQueryIndexAtLocation(stringIndex);
    return Object.values(this.parsedQueries)[queryIndex];
  }

  getQueryIndexAtLocation(stringIndex: number): number {
    const queryStartIndices = [...this.parsedQueries.keys()];

    for (let i = 0; i < queryStartIndices.length; i++) {
      const currentQueryStartIndex: number = Number(queryStartIndices[i]);
      let nextQueryStartIndex: number | undefined;
      if (queryStartIndices[i + 1] !== undefined) {
        nextQueryStartIndex = Number(queryStartIndices[i + 1]);
      }
      if (
        stringIndex >= currentQueryStartIndex &&
        (!nextQueryStartIndex || stringIndex < nextQueryStartIndex)
      ) {
        return i;
      }
    }

    return 0;
  }

  getQueryLocations(): TokenLocation[] {
    const locations: TokenLocation[] = [];
    for (const parsedQuery of this.parsedQueries.values()) {
      locations.push(parsedQuery.queryLocation);
    }
    return locations;
  }

  _addQuery(parsedQuery: ParsedQuery): void {
    this.parsedQueries.set(parsedQuery.queryLocation.startIndex, parsedQuery);
  }
}
