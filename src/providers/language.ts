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

const languageCompletionItems = [
	new CompletionItem('SELECT', CompletionItemKind.Keyword),
	new CompletionItem('FROM', CompletionItemKind.Keyword),
	new CompletionItem('WHERE', CompletionItemKind.Keyword),
	new CompletionItem('AND', CompletionItemKind.Operator),
	new CompletionItem('OR', CompletionItemKind.Operator),
	new CompletionItem('NOT', CompletionItemKind.Operator),
	new CompletionItem('IN', CompletionItemKind.Operator),
	new CompletionItem('LIKE', CompletionItemKind.Operator),
	new CompletionItem('BETWEEN', CompletionItemKind.Operator),
	new CompletionItem('IS NULL', CompletionItemKind.Operator),
	new CompletionItem('NULL', CompletionItemKind.Keyword),
	new CompletionItem('ORDER BY', CompletionItemKind.Keyword),
	new CompletionItem('GROUP BY', CompletionItemKind.Keyword),
	new CompletionItem('HAVING', CompletionItemKind.Keyword),
	new CompletionItem('LIMIT', CompletionItemKind.Keyword),
	new CompletionItem('OFFSET', CompletionItemKind.Keyword),
	new CompletionItem('JOIN', CompletionItemKind.Keyword),
	new CompletionItem('INNER JOIN', CompletionItemKind.Keyword),
	new CompletionItem('LEFT JOIN', CompletionItemKind.Keyword),
	new CompletionItem('RIGHT JOIN', CompletionItemKind.Keyword),
	new CompletionItem('FULL JOIN', CompletionItemKind.Keyword),
	new CompletionItem('CROSS JOIN', CompletionItemKind.Keyword),
	new CompletionItem('UNION', CompletionItemKind.Keyword),
	new CompletionItem('UNION ALL', CompletionItemKind.Keyword),
	new CompletionItem('EXCEPT', CompletionItemKind.Keyword),
	new CompletionItem('INTERSECT', CompletionItemKind.Keyword),
	new CompletionItem('CASE', CompletionItemKind.Keyword),
	new CompletionItem('WHEN', CompletionItemKind.Keyword),
	new CompletionItem('THEN', CompletionItemKind.Keyword),
	new CompletionItem('ELSE', CompletionItemKind.Keyword),
	new CompletionItem('END', CompletionItemKind.Keyword),
	new CompletionItem('AS', CompletionItemKind.Keyword),
	new CompletionItem('ON', CompletionItemKind.Keyword),
	new CompletionItem('USING', CompletionItemKind.Keyword),
	new CompletionItem('ALL', CompletionItemKind.Keyword),
	new CompletionItem('DISTINCT', CompletionItemKind.Keyword),
	new CompletionItem('ASC', CompletionItemKind.Keyword),
	new CompletionItem('DESC', CompletionItemKind.Keyword),
	new CompletionItem('VALUES', CompletionItemKind.Keyword),
	new CompletionItem('NOT NULL', CompletionItemKind.Keyword)
];

export class GraphSQLProvider
	implements SignatureHelpProvider, CompletionItemProvider<CompletionItem>
{
	items: CompletionItem[] = [];

	provideCompletionItems(
		document: TextDocument,
		position: Position,
		token: CancellationToken,
		context: CompletionContext
	): ProviderResult<CompletionItem[] | CompletionList<CompletionItem>> {
		return this.items;
	}

	resolveCompletionItem?(
		item: CompletionItem,
		token: CancellationToken
	): ProviderResult<CompletionItem> {
		console.log('resolveCompletionItem');

		return undefined;
	}

	provideSignatureHelp(
		document: TextDocument,
		position: Position,
		token: CancellationToken,
		context: SignatureHelpContext
	): ProviderResult<SignatureHelp> {
		console.log('provideSignatureHelp');
		return undefined;
	}

	public updateLayout(layout: Layout | undefined) {
		this.items = languageCompletionItems.slice();
		if (layout) {
			new Set(layout.tables.keys()).forEach((tableName) => {
				this.items.push(new CompletionItem(tableName, CompletionItemKind.Class));
			});

			new Set(
				Array.from(layout.tables.values())
					.map((table) => Array.from(table.columns.keys()))
					.flat()
			).forEach((columnName) => {
				this.items.push(new CompletionItem(columnName, CompletionItemKind.Field));
			});
		}
	}
}
