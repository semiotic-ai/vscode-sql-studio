import * as vscode from 'vscode';
import {
  getLayout,
  ISubgraphInfo,
  searchSubgraph,
  getSubgraphs,
  searchSubgraphById
} from '../service';
import { ColumnType, Layout, TypeKind } from '@semiotic-labs/graph-tables';
import path from 'path';

const PAGE_SIZE = 20;
const DEFAULT_SUBGRAPH_ICON = new vscode.ThemeIcon(`database`);
const SELECTED_SUBGRAPH_ICON = vscode.Uri.file(
  path.join(__dirname, '..', 'resources', 'green-dot.svg')
);

/**
 * Provides the data and behavior for a tree view that displays subgraphs.
 */
export class SubgraphView implements vscode.TreeDataProvider<ISubgraphInfo>, vscode.Disposable {
  private readonly _view: vscode.TreeView<ISubgraphInfo>;

  private readonly _cache: Map<string, ISubgraphInfo>; // Stores SubgraphItems by ID for efficient access.

  private readonly _dataEmitter: vscode.EventEmitter<ISubgraphInfo | void>;
  onDidChangeTreeData: vscode.Event<ISubgraphInfo | void>;
  private readonly _itemEmitter: vscode.EventEmitter<ISubgraphInfo | undefined>;
  onSelectedItemChanged: vscode.Event<ISubgraphInfo | undefined>;

  private selected?: ISubgraphInfo;

  private _selectionChangedPromiseResolve: ((value: unknown) => void) | null;
  private _onDidChangeSelectionPromise: Promise<unknown>;

  constructor(viewId: string) {
    this._cache = new Map();
    this._dataEmitter = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._dataEmitter.event;
    this._itemEmitter = new vscode.EventEmitter();
    this.onSelectedItemChanged = this._itemEmitter.event;
    this._selectionChangedPromiseResolve = null;
    this._onDidChangeSelectionPromise = this._resetSelectionChangedPromise();

    this._view = vscode.window.createTreeView(viewId, {
      treeDataProvider: this
    });

    this._view.onDidChangeSelection((event) => {
      this.updateSelected(event.selection[0]);

      // This lets us await this handler executing in SubgraphExtension.runQuery
      // Else, what was happening before was that runQuery would execute before
      // this completed when the id property !== the selected subgraph. This meant
      // that we'd execute against the wrong subgraph. We can now use this in
      // conjunction with waitForSelectionChange to force runQuery to wait.
      if (this._selectionChangedPromiseResolve) {
        this._selectionChangedPromiseResolve(event.selection[0]);
        this._onDidChangeSelectionPromise = this._resetSelectionChangedPromise();
      }
    });
  }

  /**
   * Initializes and returns a new promise used to wait for the next selection change event.
   * This method also assigns the resolve function of the promise to an internal variable,
   * allowing the promise to be resolved outside of its executor function. This is particularly
   * useful for synchronizing code execution with the selection change event.
   *
   * @returns {Promise<unknown>} A promise that resolves when the next selection change event occurs.
   */
  private _resetSelectionChangedPromise(): Promise<unknown> {
    return new Promise((resolve) => {
      this._selectionChangedPromiseResolve = resolve;
    });
  }

  /**
   * Returns a promise that callers can await to effectively pause execution until the next
   * selection change event is handled. This method facilitates synchronization in scenarios
   * where subsequent code execution depends on the completion of a selection change event.
   *
   * This promise is initially created in the constructor and is reset (re-initialized) every
   * time the selection change event is handled, ensuring that it can be used to wait for
   * subsequent selection changes as well.
   *
   * @returns {Promise<unknown>} A promise that resolves when the current or next selection change event is handled.
   */
  waitForSelectionChange(): Promise<unknown> {
    return this._onDidChangeSelectionPromise;
  }

  private updateSelected(subgraph?: ISubgraphInfo) {
    const lastSelected = this.selected;
    if (lastSelected?.id !== subgraph?.id) {
      this.selected = subgraph;
      if (lastSelected) {
        this._dataEmitter.fire(lastSelected);
      }
      this._dataEmitter.fire(subgraph);
      this._itemEmitter.fire(subgraph);
    }
  }

  public select(subgraph?: ISubgraphInfo) {
    if (subgraph) {
      if (!this._cache.has(subgraph.id)) {
        this._cache.set(subgraph.id, subgraph);
        this._dataEmitter.fire();
      }
      this._view.reveal(subgraph, { select: true, focus: true });
    } else {
      this.updateSelected();
    }
  }

  public async selectById(id: string) {
    let subgraph = this._cache.get(id);

    if (!subgraph) {
      subgraph = await searchSubgraphById(id);
    }

    this.select(subgraph);
  }

  /**
   * Returns the currently selected subgraph or undefined if no subgraph is currently selected.
   *
   * @returns {ISubgraphInfo | undefined} The selected subgraph.
   */
  public getSelected(): ISubgraphInfo | undefined {
    return this.selected;
  }

  dispose() {
    this._view.dispose();
    this._dataEmitter.dispose();
    this._itemEmitter.dispose();
  }

  getTreeItem(element: ISubgraphInfo): vscode.TreeItem {
    const item = new vscode.TreeItem(element.displayName);
    item.tooltip = `${element.displayName}-${element.currentVersion}`;
    item.description = element.currentVersion;
    item.iconPath =
      this.selected?.id === element.id ? SELECTED_SUBGRAPH_ICON : DEFAULT_SUBGRAPH_ICON;
    return item;
  }

  getParent(_: ISubgraphInfo): vscode.ProviderResult<ISubgraphInfo> {
    return undefined;
  }

  async getChildren(_?: ISubgraphInfo): Promise<ISubgraphInfo[]> {
    if (this._cache.size === 0) {
      await this.fetchSubgraphs();
    }
    return Array.from(this._cache.values());
  }

  public async loadMore() {
    await this.fetchSubgraphs();
    this._dataEmitter.fire();
  }

  /**
   * Fetches subgraphs from the data source and updates the cache. If `addRows` is true or the cache is empty,
   * new subgraphs are fetched and added to the cache. This method also updates the selection state of each subgraph
   * based on the current selection.
   *
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
  async fetchSubgraphs() {
    const offset = this._cache.size;
    const data = await getSubgraphs(PAGE_SIZE, offset); // Simulated fetch function

    if (data.length > 0) {
      data.forEach((subgraph) => {
        this._cache.set(subgraph.id, subgraph);
      });
    } else {
      vscode.window.showInformationMessage('No more items to load.');
    }
  }
}

export type SchemaObject = { name: string; parent?: string; type?: string };

export class SubgraphSchemaView
  implements
    vscode.TreeDataProvider<SchemaObject>,
    vscode.TreeDragAndDropController<SchemaObject>,
    vscode.Disposable
{
  dropMimeTypes: readonly string[] = [];
  dragMimeTypes: readonly string[] = ['text/plain'];

  private readonly _emitter: vscode.EventEmitter<void>;
  onDidChangeTreeData?: vscode.Event<void>;

  private readonly _view: vscode.TreeView<SchemaObject>;

  public subgraphLayout?: Layout;

  constructor(viewId: string) {
    this._emitter = new vscode.EventEmitter();
    this.onDidChangeTreeData = this._emitter.event;
    this._view = vscode.window.createTreeView(viewId, {
      treeDataProvider: this,
      dragAndDropController: this
    });
  }

  public async update(subgraphInfo?: ISubgraphInfo) {
    this.subgraphLayout = undefined;
    if (subgraphInfo) {
      try {
        this.subgraphLayout = await this.fetchLayout(subgraphInfo.deploymentSchemaId);
        this.refresh();
      } catch (error) {
        vscode.window.showInformationMessage(
          'There was an error while loading your subgraph: ' + error
        );
      }
    }
  }

  refresh(): void {
    this._emitter.fire();
  }

  getTreeItem(element: SchemaObject): vscode.TreeItem {
    const item = new vscode.TreeItem(element.name);
    if (!element.parent) {
      item.collapsibleState = vscode.TreeItemCollapsibleState.Collapsed;
    }
    item.id = element.parent ? `${element.parent}.${element.name}` : element.name;
    item.iconPath = new vscode.ThemeIcon(element.parent ? 'symbol-field' : 'symbol-class');
    item.description = element.type;
    return item;
  }

  async getChildren(element?: SchemaObject): Promise<SchemaObject[]> {
    if (!this.subgraphLayout) {
      return [];
    }

    const items: SchemaObject[] = [];

    if (!element) {
      for (const [table_name, table] of this.subgraphLayout.tables) {
        items.push({ name: table_name });
      }
    } else if (!element.parent) {
      const columns = this.subgraphLayout.tables.get(element.name)?.columns;

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
        items.push({ name: column_name, parent: element.name, type: getType(column.type) });
      }
    }

    return items;
  }

  async fetchLayout(deploymentSchemaId: string): Promise<Layout> {
    // Fetch the data from our source
    const data = await getLayout(deploymentSchemaId);

    return data;
  }

  public async handleDrag?(
    source: readonly SchemaObject[],
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken
  ): Promise<void> {
    if (source.length !== 1) {
      return;
    }

    const item = source[0];

    const path = item.parent ? `${item.parent}.${item.name}` : item.name;

    dataTransfer.set('text/plain', new vscode.DataTransferItem(path));
  }

  public async handleDrop?(
    target: SchemaObject | undefined,
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken
  ): Promise<void> {
    return;
  }

  dispose() {
    this._view.dispose();
    this._emitter.dispose();
  }
}

class SubgraphQuickPickItem implements vscode.QuickPickItem {
  label: string;
  description?: string | undefined;
  detail?: string | undefined;
  picked?: boolean | undefined;
  info: ISubgraphInfo;
  constructor(info: ISubgraphInfo) {
    this.label = info.displayName;
    this.description = info.description;
    this.detail = info.id;
    this.info = info;
  }
}

export class SubgraphPicker implements vscode.Disposable {
  private subgraphPicker: vscode.QuickPick<SubgraphQuickPickItem>;

  private emitter: vscode.EventEmitter<ISubgraphInfo | undefined>;
  public onSubgraphPicked: vscode.Event<ISubgraphInfo | undefined>;

  constructor() {
    this.subgraphPicker = vscode.window.createQuickPick<SubgraphQuickPickItem>();
    this.subgraphPicker.placeholder = 'Search for a subgraph';
    this.subgraphPicker.onDidChangeValue(async (value) => {
      if (value.length > 2) {
        const subgraphs = await searchSubgraph(value);
        this.subgraphPicker.items = subgraphs.map(
          (subgraph) => new SubgraphQuickPickItem(subgraph)
        );
      }
    });

    this.emitter = new vscode.EventEmitter();
    this.onSubgraphPicked = this.emitter.event;

    this.subgraphPicker.onDidAccept(() => {
      const selected = this.subgraphPicker.selectedItems[0];
      this.emitter.fire(selected.info);
      this.subgraphPicker.hide();
    });
  }

  dispose() {
    this.subgraphPicker.dispose();
    this.emitter.dispose();
  }

  show() {
    this.subgraphPicker.show();
  }
}
