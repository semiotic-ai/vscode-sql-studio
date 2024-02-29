// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SubgraphSchemaView, SubgraphView, SubgraphPicker } from './providers/subgraph';
import { ResultsView } from './providers/results';
import { GraphSQLProvider } from './providers/language';
import { addPropertyToEditor, replacePropertyInEditor } from './editor/property';
import { ISubgraphInfo } from './service';
import { SqlDocumentDropProvider } from './providers/sqldoc';

const LANGUAGE_ID = 'gsql';

class SubgraphExtension implements vscode.Disposable {
	private readonly _languageProvider: GraphSQLProvider;
	private readonly _subgraphPicker: SubgraphPicker;
	private readonly _resultsView: ResultsView;
	private readonly _subgraphsView: SubgraphView;
	private readonly _subgraphSchemaView: SubgraphSchemaView;

	private _selectedSubgraph?: ISubgraphInfo;

	constructor(context: vscode.ExtensionContext) {
		this._languageProvider = new GraphSQLProvider();
		this._subgraphsView = new SubgraphView('subgraphs');
		this._subgraphSchemaView = new SubgraphSchemaView('subgraphSchema');
		this._subgraphPicker = new SubgraphPicker();
		this._resultsView = new ResultsView('tabularResult', context.extensionUri);

		this.initLanguage(context);
		this.initCommands(context);
		this.initEvents(context);
	}

	private async newQuery() {
		const document = await vscode.workspace.openTextDocument({ language: 'gsql' });
		await vscode.window.showTextDocument(document);
	}

	private async runQuery() {
		await vscode.commands.executeCommand('tabularResult.focus');
		await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
		const query = vscode.window.activeTextEditor?.document.getText();
		await this._resultsView.execute(query, this._selectedSubgraph);
	}

	private async showResults() {
		await vscode.commands.executeCommand('tabularResult.focus');
	}

	private cancelQuery() {
		this._resultsView.cancel();
	}

	private search() {
		this._subgraphPicker.show();
	}

	private async load() {
		await this._subgraphsView.loadMore();
	}

	private async addSubgraphId() {
		if (!this._selectedSubgraph) {
			return; // Early return if no subgraph is selected
		}
		const property = 'id';
		const position = new vscode.Position(0, 0);
		const information = this._selectedSubgraph?.id;
		await addPropertyToEditor(property, information, position);
	}

	private async replaceSubgraphId() {
		if (!this._selectedSubgraph) {
			return; // Early return if no subgraph is selected
		}
		const property = 'id';
		const information = this._selectedSubgraph?.id;
		await replacePropertyInEditor(property, information);
	}

	private async selectSubgraph(subgraph?: ISubgraphInfo) {
		this._selectedSubgraph = subgraph;
		await this._subgraphSchemaView.update(subgraph);
		this._languageProvider.updateLayout(this._subgraphSchemaView.subgraphLayout);

		const isGsqlOpen = vscode.window.visibleTextEditors.some(
			(editor) => editor.document.languageId === 'gsql'
		);

		if (!isGsqlOpen) {
			await this.newQuery();
		}
	}

	private initLanguage(context: vscode.ExtensionContext) {
		context.subscriptions.push(
			vscode.languages.registerCompletionItemProvider(LANGUAGE_ID, this._languageProvider)
		);

		context.subscriptions.push(
			vscode.languages.registerSignatureHelpProvider(LANGUAGE_ID, this._languageProvider)
		);

		context.subscriptions.push(
			vscode.languages.registerDocumentDropEditProvider(LANGUAGE_ID, new SqlDocumentDropProvider())
		);
	}

	private initCommands(context: vscode.ExtensionContext) {
		context.subscriptions.push(
			vscode.commands.registerCommand('subgraphs.newQuery', this.newQuery, this),
			vscode.commands.registerTextEditorCommand('query.runQuery', this.runQuery, this),
			vscode.commands.registerTextEditorCommand('query.showResults', this.showResults, this),
			vscode.commands.registerTextEditorCommand('query.cancelQuery', this.cancelQuery, this),
			vscode.commands.registerCommand('subgraphs.Search', this.search, this),
			vscode.commands.registerCommand('subgraphs.Load', this.load, this),
			vscode.commands.registerTextEditorCommand(
				'gsqlEditor.addSubgraphId',
				this.addSubgraphId,
				this
			),
			vscode.commands.registerTextEditorCommand(
				'gsqlEditor.replaceSubgraphId',
				this.replaceSubgraphId,
				this
			)
		);
	}

	private initEvents(context: vscode.ExtensionContext) {
		context.subscriptions.push(
			this._subgraphsView.onSelectedItemChanged((subgraph) => {
				this.selectSubgraph(subgraph);
			}),
			this._subgraphPicker.onSubgraphPicked((subgraph) => {
				this._subgraphsView.select(subgraph);
			})
		);
	}

	dispose() {
		this._subgraphPicker.dispose();
		this._resultsView.dispose();
		this._subgraphsView.dispose();
		this._subgraphSchemaView.dispose();
	}
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const extension = new SubgraphExtension(context);
	context.subscriptions.push(extension);
	vscode.commands.executeCommand('tabularResult.focus');
}

// This method is called when your extension is deactivated
export function deactivate() {}
