// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SubgraphSchemaView, SubgraphView, SubgraphPicker } from './providers/subgraph';
import { ResultsView } from './providers/results';
import { GraphSQLProvider } from './providers/language';
import { addPropertyToEditor, getPropertyValue, replacePropertyInEditor } from './editor/property';
import { ISubgraphInfo } from './service';
import { SqlDocumentDropProvider } from './providers/sqldoc';
import { BugReporter } from './bug';

const LANGUAGE_ID = 'gsql';

class SubgraphExtension implements vscode.Disposable {
  private readonly _languageProvider: GraphSQLProvider;
  private readonly _subgraphPicker: SubgraphPicker;
  private readonly _resultsView: ResultsView;
  private readonly _subgraphsView: SubgraphView;
  private readonly _subgraphSchemaView: SubgraphSchemaView;
  private readonly _bugReporter: BugReporter;

  private _selectedSubgraph?: ISubgraphInfo;

  constructor(context: vscode.ExtensionContext) {
    this._languageProvider = new GraphSQLProvider();
    this._subgraphsView = new SubgraphView('subgraphs');
    this._subgraphSchemaView = new SubgraphSchemaView('subgraphSchema');
    this._subgraphPicker = new SubgraphPicker();
    this._resultsView = new ResultsView('tabularResult', context.extensionUri);
    this._bugReporter = new BugReporter(
      'https://us-central1-graphplots.cloudfunctions.net/linear-cloud-sql-function'
    );

    this.initLanguage(context);
    this.initCommands(context);
    this.initEvents(context);
  }

  private async newQuery() {
    const document = await vscode.workspace.openTextDocument({
      content: '\n\n\n',
      language: 'gsql'
    });
    await vscode.window.showTextDocument(document);
    await this.addSubgraphInfo();
  }

  private async runQuery() {
    await vscode.commands.executeCommand('tabularResult.focus');
    await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
    const document = vscode.window.activeTextEditor?.document;
    if (document) {
      const id = getPropertyValue('id', document);
      if (id && id.trim() !== '' && id !== this._selectedSubgraph?.id) {
        await this._subgraphsView.selectById(id);
        await this._subgraphsView.waitForSelectionChange();
        this._selectedSubgraph = this._subgraphsView.getSelected();
      }

      const query = vscode.window.activeTextEditor?.document.getText();
      await this._resultsView.execute(query, this._selectedSubgraph);
    }
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

  private async addSubgraphInfo() {
    if (!this._selectedSubgraph) {
      return; // Early return if no subgraph is selected
    }

    const nameProperty = 'subgraph';
    const namePosition = new vscode.Position(0, 0);
    const nameInformation = this._selectedSubgraph?.displayName;
    await addPropertyToEditor(nameProperty, nameInformation, namePosition);

    const idProperty = 'id';
    const idPosition = new vscode.Position(1, 0);
    const idInformation = this._selectedSubgraph?.id;
    await addPropertyToEditor(idProperty, idInformation, idPosition);
  }

  private async replaceSubgraphInfo() {
    if (!this._selectedSubgraph) {
      return; // Early return if no subgraph is selected
    }

    const nameProperty = 'subgraph';
    const nameInformation = this._selectedSubgraph?.displayName;
    await replacePropertyInEditor(nameProperty, nameInformation);

    const idProperty = 'id';
    const idInformation = this._selectedSubgraph?.id;
    await replacePropertyInEditor(idProperty, idInformation);
  }

  private async selectSubgraph(subgraph?: ISubgraphInfo) {
    this._selectedSubgraph = subgraph;
    await this._subgraphSchemaView.update(subgraph);
    this._languageProvider.updateLayout(this._subgraphSchemaView.subgraphLayout);
  }

  private initLanguage(context: vscode.ExtensionContext) {
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(LANGUAGE_ID, this._languageProvider)
    );

    const selector = { language: 'gsql', scheme: 'file' };
    context.subscriptions.push(
      vscode.languages.registerCompletionItemProvider(selector, this._languageProvider, '.')
    );

    context.subscriptions.push(
      vscode.languages.registerSignatureHelpProvider(LANGUAGE_ID, this._languageProvider)
    );

    context.subscriptions.push(
      vscode.languages.registerDocumentDropEditProvider(LANGUAGE_ID, new SqlDocumentDropProvider())
    );
  }

  private async openBugReportTemplate() {
    await this._bugReporter.openBugReportTemplate();
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
        'gsqlEditor.addSubgraphInfo',
        this.addSubgraphInfo,
        this
      ),
      vscode.commands.registerTextEditorCommand(
        'gsqlEditor.replaceSubgraphInfo',
        this.replaceSubgraphInfo,
        this
      ),
      vscode.commands.registerCommand('bug.Report', this.openBugReportTemplate, this)
    );
  }

  private initEvents(context: vscode.ExtensionContext) {
    context.subscriptions.push(
      this._subgraphsView.onSelectedItemChanged((subgraph) => {
        this.selectSubgraph(subgraph);
      }),
      this._subgraphPicker.onSubgraphPicked((subgraph) => {
        this._subgraphsView.select(subgraph);
      }),
      vscode.window.onDidChangeActiveTextEditor(async (editor) => {
        if (editor?.document.languageId === LANGUAGE_ID) {
          const id = getPropertyValue('id', editor.document);
          if (id && id.trim() !== '' && id !== this._selectedSubgraph?.id) {
            await this._subgraphsView.selectById(id);
          }
        }
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
