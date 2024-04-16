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
import { Column, ColumnType, Layout, Relation, Table, TypeKind } from '../graphtables/layout';

import { SQLSurveyor, SQLDialect, ParsedSql, ParsedQuery } from 'sql-surveyor';

import * as functions from '../../dist/functions.json';
import { OutputColumn } from 'sql-surveyor/dist/src/models/OutputColumn';

function getAllOutputColumns(query: ParsedQuery): OutputColumn[] {
  return [...query.outputColumns, ...Object.values(query.subqueries).flatMap(getAllOutputColumns)];
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
    const statement = document.getText();
    const index = document.offsetAt(position);
    const surveyor = new SQLSurveyor(SQLDialect.PLpgSQL);
    const parsedStatement = surveyor.survey(statement);
    const aliasTables = new Map<string, Table>();
    const outputColumns = new Map<string, Column>();

    Object.values(parsedStatement.parsedQueries).forEach((query) => {
      Object.values(query.getAllReferencedTables()).forEach((table) => {
        const originalTable = this.layout?.tables.get(table.tableName);
        table.aliases.forEach((alias) => {
          aliasTables.set(alias, {
            columns: originalTable?.columns || new Map<string, Column>(),
            relations: originalTable?.relations || new Map<string, Relation[]>()
          });
        });
      });
    });

    return null;
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
