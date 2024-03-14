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
import { Column, ColumnType, Layout, TypeKind } from '../graphtables/layout';

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
	new CompletionItem('NOT NULL', CompletionItemKind.Keyword),
	new CompletionItem('WITH', CompletionItemKind.Keyword)
];

function getColumnTypeDescription(type: ColumnType): string {
	switch (type.kind) {
		case TypeKind.Scalar:
			return type.dbType;
		case TypeKind.Enum:
			return 'enum(' + type.name + ')';
		case TypeKind.Reference:
			return type.dbType;
		case TypeKind.List:
			return getColumnTypeDescription(type.itemType) + '[]';
		case TypeKind.TextSearch:
			return type.dbType;
	}
}

function getColumnDescription(column: Column): string {
	return getColumnTypeDescription(column.type) + (column.nullable ? '' : ' not null');
}

export class GraphSQLProvider
	implements SignatureHelpProvider, CompletionItemProvider<CompletionItem>
{
	items: CompletionItem[] = [];

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
		if (context.triggerCharacter === '.') {
			const tableName = this._extractTableName(document, position);
			const tableColumns = this._getTableColumns(tableName);
			const columnCompletionItems = this._createColumnCompletionItems(tableColumns);
			return columnCompletionItems.length > 0 ? columnCompletionItems : [];
		}
		// Return the full list of items if the trigger character is not '.'
		return this.items;
	}

	/**
	 * Maps an array of column-related completion items to new completion items where each label is replaced with
	 * just the column name, excluding the table prefix. This helps in providing context-specific column names as
	 * completion suggestions.
	 *
	 * @param {CompletionItem[]} columnCompletionItems An array of completion items related to columns.
	 * @returns {CompletionItem[]} A new array of completion items with modified labels containing only column names.
	 */
	private _createColumnCompletionItems(columnCompletionItems: CompletionItem[]): CompletionItem[] {
		return columnCompletionItems.map((columnItem) => {
			const itemLabel =
				typeof columnItem.label === 'string' ? columnItem.label : columnItem.label.label;
			const columnName = itemLabel.split('.').pop() || '';

			const newColumnItem = new CompletionItem(columnItem.label, CompletionItemKind.Field);
			newColumnItem.detail = columnItem.detail;
			newColumnItem.insertText = columnName;

			return newColumnItem;
		});
	}

	/**
	 * Filters the provided list of completion items to include only those that belong to the specified table.
	 * This method assists in narrowing down column suggestions relevant to the user's current context in a SQL query.
	 *
	 * @param {string} tableName The name of the table for which columns are being requested.
	 * @returns {CompletionItem[]} An array of completion items representing the columns of the specified table.
	 */
	private _getTableColumns(tableName: string): CompletionItem[] {
		// Find all columns that belong to the identified table
		const columnCompletionItems = this.items.filter((item) => {
			const itemLabel = typeof item.label === 'string' ? item.label : item.label.label;
			return itemLabel.startsWith(`${tableName}.`) && item.kind === CompletionItemKind.Field;
		});
		return columnCompletionItems || [];
	}

	/**
	 * Extracts the table name based on the user's current position within a line, just before a '.' trigger character.
	 * This method parses the document text leading up to the cursor and identifies the last word, assumed to be
	 * the table name in a SQL query context.
	 *
	 * @param {TextDocument} document The VS Code text document from which to extract the table name.
	 * @param {Position} position The current cursor position within the document.
	 * @returns {string} The extracted table name or an empty string if no valid name is found.
	 */
	private _extractTableName(document: TextDocument, position: Position): string {
		const lineTextBeforeCursor = document
			.lineAt(position.line)
			.text.substring(0, position.character);
		// Use regex to capture word characters (\w+) directly before a period
		const matches = [...lineTextBeforeCursor.matchAll(/(\w+)\./g)];

		if (matches.length > 0) {
			const lastMatch = matches[matches.length - 1];
			return lastMatch[1];
		}
		return '';
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
		this.items = languageCompletionItems.slice();
		if (layout) {
			for (const [tableName, table] of layout.tables) {
				const tableToken = new CompletionItem(tableName, CompletionItemKind.Class);
				// Some description or comment can be used here from graphql schema
				this.items.push(tableToken);
				for (const [columnName, column] of table.columns) {
					const columnToken = new CompletionItem(
						`${tableName}.${columnName}`,
						CompletionItemKind.Field
					);
					columnToken.detail = getColumnDescription(column);
					this.items.push(columnToken);
				}
			}
		}
	}
}
