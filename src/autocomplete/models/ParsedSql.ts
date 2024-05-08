import { ParsedQuery } from './ParsedQuery';
import { TokenLocation } from './TokenLocation';

export class ParsedSql {
  parsedQueries: Map<number, ParsedQuery>;

  constructor() {
    this.parsedQueries = new Map();
  }

  getQueryAtLocation(stringIndex: number): ParsedQuery | undefined {
    const queryStartIndex = [...this.parsedQueries.keys()]
      .sort()
      .find(
        (startIndex, index, values) =>
          startIndex <= stringIndex && (values[index + 1] || stringIndex + 1) > stringIndex
      );

    if (queryStartIndex !== undefined) {
      // Use absolute non equality due to 0 accepted as a false value
      return this.parsedQueries.get(queryStartIndex);
    }

    return undefined;
  }

  getSmallestQueryAtLocation(stringIndex: number): ParsedQuery {
    let parsedQuery = this.getQueryAtLocation(stringIndex);
    if (parsedQuery) {
      parsedQuery = parsedQuery.getSmallestQueryAtLocation(stringIndex);
      return parsedQuery;
    } else {
      throw new Error(`No parsed query found for index ${stringIndex}`);
    }
  }

  getQueryLocations(): TokenLocation[] {
    return [...this.parsedQueries.values()].map((parsedQuery) => parsedQuery.queryLocation);
  }

  _addQuery(parsedQuery: ParsedQuery): void {
    this.parsedQueries.set(parsedQuery.queryLocation.startIndex, parsedQuery);
  }
}
