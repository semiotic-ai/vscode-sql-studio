import * as vscode from 'vscode';
import * as path from 'path';
import { TreeItem } from 'vscode';
import { GetLayout, ISubgraphInfo, getSubgraphs } from './service';
import { ColumnType, Layout, TypeKind } from './graphtables/layout';

const PAGE_SIZE = 20;
const LOAD_MORE_COMMAND = 'subgraphs.loadMoreSubgraphs';

class SubgraphItem extends vscode.TreeItem {
	constructor(
		public readonly info?: ISubgraphInfo,
		public readonly collapsibleState?: vscode.TreeItemCollapsibleState
	) {
		const label = info?.displayName || 'More...';
		const state = collapsibleState || vscode.TreeItemCollapsibleState.None;
		super(label, state);
		this.tooltip = info ? `${this.label}-${info.currentVersion}` : 'Load more';
		this.description = info ? info.currentVersion : 'Load more';
		this.iconPath = new vscode.ThemeIcon(`database`);

		if (!info) {
			this.command = {
				command: LOAD_MORE_COMMAND,
				title: 'Load more'
			};
			this.iconPath = new vscode.ThemeIcon(`more`);
		}
	}
}

const moreButton = () => {
	const item = new SubgraphItem(undefined, vscode.TreeItemCollapsibleState.None);
	return item;
};

export class SubgraphProvider implements vscode.TreeDataProvider<SubgraphItem> {
	emitter: vscode.EventEmitter<SubgraphItem | undefined | void>;
	onDidChangeTreeData?:
		| vscode.Event<void | SubgraphItem | SubgraphItem[] | null | undefined>
		| undefined;
	cache: { [key: string]: object[] };

	constructor(context: vscode.ExtensionContext) {
		this.emitter = new vscode.EventEmitter();
		this.onDidChangeTreeData = this.emitter.event;
		this.cache = {};

		let loadMoreSubgraphs = vscode.commands.registerCommand(LOAD_MORE_COMMAND, async () => {
			await this.fetchSubgraphs(true);

			// Refresh the TreeView, which collects data from the cache
			this.refresh();
		});
		context.subscriptions.push(loadMoreSubgraphs);
	}

	getTreeItem(element: SubgraphItem): SubgraphItem {
		return element;
	}

	async getChildren(element?: SubgraphItem): Promise<SubgraphItem[]> {
		let items: SubgraphItem[] = await this.fetchSubgraphs(false);
		items.push(moreButton());
		return items;
	}

	refresh() {
		this.emitter.fire();
	}

	async fetchSubgraphs(addRows: boolean): Promise<object[]> {
		const key = `subgraphs`;
		let offset;

		// Only fetch the rows if we have none or are looking for the next page
		if (addRows || this.cache[key] === undefined) {
			// The offset is basically the lenfth of the cache
			offset = this.cache[key] ? this.cache[key].length : 0;

			// Fetch the data from our source
			const data = await getSubgraphs(PAGE_SIZE, offset);

			// await Users.get(type, {
			// 	limit: PAGE_SIZE,
			// 	offset
			// });

			if (data.length > 0) {
				// Here, I am mapping to UserItem, which is type of `TreeView`
				const items = data.map(
					(item) => new SubgraphItem(item, vscode.TreeItemCollapsibleState.None)
				);
				if (this.cache[key]) {
					this.cache[key].push(...items);
				} else {
					this.cache[key] = items;
				}
			} else {
				vscode.window.showInformationMessage(`No more items to load.`);
			}
		}

		// Return a copy
		return this.cache[key].slice(0);
	}
}

class SchemaTable extends vscode.TreeItem {
	constructor(public readonly label: string) {
		super(label, vscode.TreeItemCollapsibleState.Collapsed);
		this.id = label;
		this.iconPath = new vscode.ThemeIcon('symbol-class');
	}
}

class SchemaColumn extends vscode.TreeItem {
	constructor(
		public readonly label: string,
		public readonly type: string
	) {
		super(label, vscode.TreeItemCollapsibleState.None);
		// this.id = label;
		this.description = type;
	}

	iconPath = new vscode.ThemeIcon('symbol-field');
}

type SchemaItem = SchemaTable | SchemaColumn;

export class SubgraphSchemaProvider
	implements vscode.TreeDataProvider<SchemaItem>, vscode.TreeDragAndDropController<SchemaItem>
{
	emitter: vscode.EventEmitter<SchemaItem | undefined | void>;
	onDidChangeTreeData: vscode.Event<void | SchemaItem | SchemaItem[] | null | undefined>;
	// tables: { [name: string]: { [colunm: string]: string } };
	subgraphLayout: Layout | undefined;
	subgraphInfo: ISubgraphInfo | undefined;

	constructor(context: vscode.ExtensionContext) {
		this.emitter = new vscode.EventEmitter();
		this.onDidChangeTreeData = this.emitter.event;

		// this.tables = {};
	}

	dropMimeTypes: readonly string[] = [];
	dragMimeTypes: readonly string[] = ['text/plain'];

	public async handleDrag?(
		source: readonly SchemaItem[],
		dataTransfer: vscode.DataTransfer,
		token: vscode.CancellationToken
	): Promise<void> {
		if (source.length !== 1) {
			return;
		}

		const item = source[0];

		dataTransfer.set('text/plain', new vscode.DataTransferItem(item.label));
	}

	public async handleDrop?(
		target: SchemaItem | undefined,
		dataTransfer: vscode.DataTransfer,
		token: vscode.CancellationToken
	): Promise<void> {
		return;
	}

	async updateSelectedSubgraph(subgraphInfo?: ISubgraphInfo) {
		if (subgraphInfo) {
			try {
				this.subgraphLayout = await this.fetchLayout(subgraphInfo.deploymentSchemaId);
				this.subgraphInfo = subgraphInfo;
				this.refresh();
			} catch (error) {
				vscode.window.showInformationMessage(
					'There was an error while loading your subgraph: ' + error
				);
			}
		}
	}

	getTreeItem(element: SchemaItem): SchemaItem {
		return element;
	}

	async getChildren(element?: SchemaItem): Promise<SchemaItem[]> {
		if (!this.subgraphLayout) {
			return [];
		}

		const items: SchemaItem[] = [];

		if (!element) {
			for (const [table_name, table] of this.subgraphLayout.tables) {
				items.push(new SchemaTable(table_name));
			}
		} else if (element instanceof SchemaTable) {
			const columns = this.subgraphLayout.tables.get(element.label)?.columns;

			if (!columns) {
				return [];
			}

			for (const [column_name, column] of columns) {
				function getType(type: ColumnType): string {
					switch (type.kind) {
						case TypeKind.Scalar:
						case TypeKind.Reference:
							return type.dbType;
						case TypeKind.Enum:
							return type.name;
						case TypeKind.List:
							return `${getType(type.itemType)}[]`;
						case TypeKind.TextSearch:
							return type.dbType;
					}
				}
				items.push(new SchemaColumn(column_name, getType(column.type)));
			}
		}

		return items;
	}

	refresh() {
		this.emitter.fire();
	}

	async fetchLayout(deploymentSchemaId: string): Promise<Layout> {
		// Fetch the data from our source
		const data = await GetLayout(
			'https://api.thegraph.com/subgraphs/name/graphprotocol/graph-network-arbitrum',
			deploymentSchemaId
		);

		return data;
	}
}
