import {
  CancellationToken,
  CompletionContext,
  CompletionItem,
  CompletionItemKind,
  CompletionItemProvider,
  CompletionList,
  Position,
  ProviderResult,
  SignatureHelp,
  SignatureHelpContext,
  SignatureHelpProvider,
  TextDocument
} from 'vscode';

import { Layout } from '../graphtables/layout';

import { SQLSurveyor, ParsedQuery, AutocompleteOptionType, SQLAutocomplete } from '../autocomplete';

import { OutputColumn } from '../autocomplete/models/OutputColumn';

function getAllOutputColumns(query: ParsedQuery): OutputColumn[] {
  return [...query.outputColumns, ...[...query.subqueries.values()].flatMap(getAllOutputColumns)];
}

function optionTypeSortOrder(type: AutocompleteOptionType): number {
  switch (type) {
    case AutocompleteOptionType.COLUMN:
      return 0;
    case AutocompleteOptionType.TABLE:
      return 1;
    case AutocompleteOptionType.KEYWORD:
      return 2;
    default:
      return 3;
  }
}

export class GraphSQLProvider
  implements SignatureHelpProvider, CompletionItemProvider<CompletionItem>
{
  layout: Layout | undefined;

  /**
   * Provides completion items for SQL queries within a text document. When the trigger character '.' is encountered,
   * this method calculates the relevant table name based on the cursor's current position and fetches corresponding
   * column names as completion suggestions. If the trigger character is not '.', it returns a predefined list of
   * general SQL completion items.
   *
   * @param {TextDocument} document The VS Code text document where the completion is requested.
   * @param {Position} position The position within the document where the completion is requested.
   * @param {CancellationToken} token A cancellation token that indicates the result computation should be canceled.
   * @param {CompletionContext} context Contextual information about the completion request.
   * @returns {ProviderResult<CompletionItem[] | CompletionList<CompletionItem>>} A list of completion items or a completion list.
   */
  provideCompletionItems(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: CompletionContext
  ): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
    // Return only the
    let statement = document.getText();

    if (statement.length === 0) {
      return undefined;
    }

    const offset = document.offsetAt(position);
    const surveyor = new SQLSurveyor();
    const parsedStatement = surveyor.survey(statement);

    // const osurveyor = new OriginalSurveyor(SQLDialect.PLpgSQL);
    // const oparsedStatement = osurveyor.survey(statement);

    const tableNames: string[] = this.layout ? [...this.layout.tables.keys()] : [];
    const columnNames: string[] = this.layout
      ? [...this.layout.tables.entries()].flatMap(([table_name, table]) =>
          [...table.columns.keys()].map((column_name) => `${table_name}.${column_name}`)
        )
      : [];

    [...parsedStatement.parsedQueries.values()].forEach((query) => {
      [...query.getAllReferencedTables().values()].forEach((table) => {
        const originalTable = this.layout?.tables.get(table.tableName);
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

    const result = new Set<CompletionItem>();

    const autocomplete = new SQLAutocomplete(tableNames, columnNames);

    const suggestions = autocomplete.autocomplete(statement, offset);

    suggestions.forEach((opt) => {
      if (opt.value) {
        const completion = new CompletionItem(opt.value);
        switch (opt.optionType) {
          case 'KEYWORD':
            completion.kind = CompletionItemKind.Keyword;
            break;
          case 'TABLE':
            completion.kind = CompletionItemKind.Class;
            break;
          case 'COLUMN':
            completion.kind = CompletionItemKind.Field;
            break;
          default:
            completion.kind = CompletionItemKind.Variable;
        }
        const typeOrder = optionTypeSortOrder(opt.optionType);
        completion.sortText = `${typeOrder} ${opt.value}`;
        result.add(completion);
      }
    });
    return [...result];
  }

  resolveCompletionItem?(
    item: CompletionItem,
    token: CancellationToken
  ): ProviderResult<CompletionItem> {
    return undefined;
  }

  provideSignatureHelp(
    document: TextDocument,
    position: Position,
    token: CancellationToken,
    context: SignatureHelpContext
  ): ProviderResult<SignatureHelp> {
    return undefined;
  }

  public updateLayout(layout: Layout | undefined) {
    this.layout = layout;
  }
}
