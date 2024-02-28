import * as vscode from 'vscode';
import { GetLayout, ISubgraphInfo, getSubgraphs } from '../service';
import { ColumnType, Layout, TypeKind } from '../graphtables/layout';
import * as path from 'path';

const PAGE_SIZE = 20;
const LOAD_MORE_COMMAND = 'subgraphs.loadMoreSubgraphs';

/**
 * Represents a TreeItem within a VSCode TreeView for subgraphs.
 * It includes additional functionality to manage selection state and corresponding icon.
 */
class SubgraphItem extends vscode.TreeItem {
	/**
	 * Creates an instance of a SubgraphItem.
	 * @param {ISubgraphInfo} info Information about the subgraph, including its name and id.
	 * @param {vscode.TreeItemCollapsibleState} collapsibleState The collapsible state of the tree item in the tree view.
	 * @param {boolean} isSelected Indicates whether the subgraph is currently selected.
	 */
	constructor(
		public readonly info?: ISubgraphInfo,
		public readonly collapsibleState?: vscode.TreeItemCollapsibleState,
		protected isSelected: boolean = false
	) {
		const label = info?.displayName || 'More...';
		const state = collapsibleState || vscode.TreeItemCollapsibleState.None;
		super(label, state);
		this.tooltip = info ? `${this.label}-${info.currentVersion}` : 'Load more';
		this.description = info ? info.currentVersion : 'Load more';
		this.unselect();

		if (!info) {
			this.command = {
				command: LOAD_MORE_COMMAND,
				title: 'Load more'
			};
			this.iconPath = new vscode.ThemeIcon(`more`);
		}
	}

	/**
	 * Marks the subgraph item as selected and updates the icon to be a green dot
	 */
	select() {
		this.isSelected = true;
		this.iconPath = vscode.Uri.file(path.join(__dirname, '..', 'resources', 'green-dot.svg'));
	}

	/**
	 * Marks the subgraph item as unselected and resets the icon to a database icon.
	 */
	unselect() {
		this.isSelected = false;
		this.iconPath = new vscode.ThemeIcon(`database`);
	}
}

const moreButton = () => {
	const item = new SubgraphItem(undefined, vscode.TreeItemCollapsibleState.None);
	return item;
};

/**
 * Provides the data and behavior for a tree view that displays subgraphs.
 */
export class SubgraphProvider implements vscode.TreeDataProvider<SubgraphItem> {
	emitter: vscode.EventEmitter<SubgraphItem | undefined | void>;
	onDidChangeTreeData?:
		| vscode.Event<void | SubgraphItem | SubgraphItem[] | null | undefined>
		| undefined;
	cache: { [key: string]: { [id: string]: SubgraphItem } } = {}; // Stores SubgraphItems by ID for efficient access.
	private _selectedSubgraph?: ISubgraphInfo; // Tracks the currently selected subgraph.

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

	/**
	 * Updates which subgraph is selected.
	 * @param subgraphInfo Information about the subgraph to select.
	 */
	updateSelection(subgraphInfo: ISubgraphInfo) {
		this.unsetSelectedSubgraph();
		this.setSelectedSubgraph(subgraphInfo);
		this.refresh();
	}

	/**
	 * Sets the specified subgraph as selected.
	 * @param {ISubgraphInfo} subgraphInfo The subgraph to select
	 */
	setSelectedSubgraph(subgraphInfo: ISubgraphInfo) {
		if (subgraphInfo && this.cache['subgraphs'][subgraphInfo.id]) {
			this._selectedSubgraph = subgraphInfo;
			let newSelection = this.cache['subgraphs'][subgraphInfo.id];
			newSelection.select();
		} else {
			// fallback
			this._selectedSubgraph = undefined;
		}
	}

	/**
	 * Unselects the currently selected subgraph, if any.
	 */
	unsetSelectedSubgraph() {
		if (this._selectedSubgraph && this.cache['subgraphs'][this._selectedSubgraph.id]) {
			let lastSelected = this.cache['subgraphs'][this._selectedSubgraph.id];
			lastSelected.unselect();
		}
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

	/**
	 * Fetches subgraphs from the data source and updates the cache. If `addRows` is true or the cache is empty,
	 * new subgraphs are fetched and added to the cache. This method also updates the selection state of each subgraph
	 * based on the current selection.
	 *
	 * @param {boolean} addRows A boolean indicating whether to fetch additional subgraphs beyond those already cached.
	 *                This is typically used for pagination or lazy loading of data.
	 * @returns A Promise that resolves to an array of SubgraphItem instances representing the fetched subgraphs.
	 *          Each SubgraphItem's selection state is updated to reflect whether it is the currently selected subgraph.
	 *
	 * This method performs several key actions:
	 * - Determines the offset for fetching subgraphs based on the current size of the cache, enabling pagination.
	 * - Calls a simulated fetch function `getSubgraphs` with the determined PAGE_SIZE and offset to retrieve subgraph data.
	 * - Iterates over the fetched data, creating a new SubgraphItem for each subgraph. The selection state of each item
	 *   is determined by comparing its ID to the ID of the currently selected subgraph (if any).
	 * - Updates the cache with the new or additional SubgraphItems, ensuring that the tree view can accurately represent
	 *   the current state of available subgraphs.
	 * - In case no more subgraphs are available to load, displays an informational message to the user.
	 *
	 * Note: This method assumes the existence of a global `PAGE_SIZE` constant that determines how many subgraphs are fetched
	 * per request, and relies on the `getSubgraphs` function to actually retrieve subgraph data.
	 */
	async fetchSubgraphs(addRows: boolean): Promise<SubgraphItem[]> {
		const key = 'subgraphs';
		if (addRows || !this.cache[key]) {
			const offset = this.cache[key] ? Object.keys(this.cache[key]).length : 0;
			const data = await getSubgraphs(PAGE_SIZE, offset); // Simulated fetch function

			if (data.length > 0) {
				this.cache[key] = this.cache[key] || {};
				data.forEach((subgraph) => {
					const isSelected = subgraph.id === this._selectedSubgraph?.id;
					this.cache[key][subgraph.id] = new SubgraphItem(
						subgraph,
						vscode.TreeItemCollapsibleState.None,
						isSelected
					);
				});
			} else {
				vscode.window.showInformationMessage('No more items to load.');
			}
		}

		return Object.values(this.cache[key]); // Convert cache entries to array
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
