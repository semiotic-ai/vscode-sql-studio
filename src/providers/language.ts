import {
  CancellationToken,
  CancellationTokenSource,
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

import { Layout } from '@semiotic-labs/graph-tables';

import { Autocomplete, Suggestion, SuggestionType } from '../autocomplete';

function optionTypeSortOrder(type: SuggestionType): number {
  switch (type) {
    case SuggestionType.COLUMN:
      return 0;
    case SuggestionType.TABLE:
      return 1;
    case SuggestionType.FUNCTION:
      return 2;
    case SuggestionType.KEYWORD:
      return 3;
    default:
      return 4;
  }
}

export class GraphSQLProvider
  implements SignatureHelpProvider, CompletionItemProvider<CompletionItem>
{
  private autocomplete: Autocomplete = new Autocomplete();

  private _getCompletions(statement: string, offset: number): CompletionItem[] {
    const suggestions = this.autocomplete.suggest(statement, offset);

    const result = new Set<CompletionItem>();

    suggestions.forEach((opt) => {
      if (opt.value) {
        const completion = new CompletionItem(opt.value);
        switch (opt.type) {
          case 'KEYWORD':
            completion.kind = CompletionItemKind.Keyword;
            break;
          case 'FUNCTION':
            completion.kind = CompletionItemKind.Function;
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
        const typeOrder = optionTypeSortOrder(opt.type);
        completion.sortText = `${typeOrder} ${opt.value}`;
        result.add(completion);
      }
    });
    return [...result];
  }

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

    return this._getCompletions(statement, offset);
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

  public updateLayout(layout?: Layout) {
    this.autocomplete.updateLayout(layout);
  }
}
