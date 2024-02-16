import * as vscode from 'vscode';
import * as path from 'path';
import { TreeItem } from 'vscode';
import { GetLayout, getSubgraphs } from './service';
import { ColumnType, Layout, TypeKind } from './graphtables/layout';

const PAGE_SIZE = 20;
const LOAD_MORE_COMMAND = 'subgraphs.loadMoreSubgraphs';

const moreButton = () => {
	const item = new TreeItem(`More...`, vscode.TreeItemCollapsibleState.None);
	item.iconPath = new vscode.ThemeIcon(`add`);
	item.command = {
		command: LOAD_MORE_COMMAND,
		title: 'Load more'
	};

	return item;
};

export class SubgraphProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
	emitter: vscode.EventEmitter<vscode.TreeItem | undefined | void>;
	onDidChangeTreeData?:
		| vscode.Event<void | vscode.TreeItem | vscode.TreeItem[] | null | undefined>
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

	getTreeItem(element: Subgraph): vscode.TreeItem {
		return element;
	}

	async getChildren(element?: Subgraph): Promise<vscode.TreeItem[]> {
		let items: vscode.TreeItem[] = await this.fetchSubgraphs(false);
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
					(item) =>
						new Subgraph(
							item.deploymentSchemaId,
							item.displayName,
							item.currentVersion,
							vscode.TreeItemCollapsibleState.None
						)
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

class Subgraph extends vscode.TreeItem {
	constructor(
		public id: string,
		public readonly label: string,
		private version: string,
		public readonly collapsibleState: vscode.TreeItemCollapsibleState
	) {
		super(label, collapsibleState);
		// this.id = deploymentId;
		this.tooltip = `${this.label}-${this.version}`;
		this.description = this.version;
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
	};
}

class SchemaTable extends vscode.TreeItem {
	constructor(public readonly label: string) {
		super(label, vscode.TreeItemCollapsibleState.Collapsed);
		this.id = label;
	}

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
	};
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

	iconPath = {
		light: path.join(__filename, '..', '..', 'resources', 'light', 'dependency.svg'),
		dark: path.join(__filename, '..', '..', 'resources', 'dark', 'dependency.svg')
	};
}

type SchemaItem = SchemaTable | SchemaColumn;

export class SubgraphSchemaProvider
	implements vscode.TreeDataProvider<SchemaItem>, vscode.TreeDragAndDropController<SchemaItem>
{
	emitter: vscode.EventEmitter<SchemaItem | undefined | void>;
	onDidChangeTreeData: vscode.Event<void | SchemaItem | SchemaItem[] | null | undefined>;
	// tables: { [name: string]: { [colunm: string]: string } };
	subgraph_layout: Layout | undefined;
	subgraph_name: string | undefined;

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

	async updateSelectedSubgraph(subgraph_id?: string, name?: string) {
		if (subgraph_id) {
			try {
				this.subgraph_layout = await this.fetchLayout(subgraph_id);
				this.subgraph_name = name;
				// this.tables = {
				// 	test: {
				// 		id: 'ID',
				// 		name: 'string',
				// 		total_value: 'uint256'
				// 	}
				// };
				this.refresh();
			} catch (error) {
				vscode.window.showInformationMessage(
					'There was an error while loading your subgraph: ' + error
				);
			}
		}
	}

	getTreeItem(element: Subgraph): vscode.TreeItem {
		return element;
	}

	async getChildren(element?: SchemaItem): Promise<SchemaItem[]> {
		if (!this.subgraph_layout) {
			return [];
		}
		const items: SchemaItem[] = [];
		if (element?.label) {
			const columns = this.subgraph_layout.tables.get(element.label as string)?.columns;
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
		} else {
			for (const [table_name, table] of this.subgraph_layout.tables) {
				items.push(new SchemaTable(table_name));
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
