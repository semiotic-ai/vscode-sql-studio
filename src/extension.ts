// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SubgraphSchemaProvider, SubgraphProvider } from './providers/subgraph';
import { ExecuteSQL } from './service';
import { ResultsProvider } from './providers/results';
import { SqlDocumentDropProvider } from './providers/sqldoc';
import { GraphSQLProvider } from './providers/language';
import { open } from 'fs';

// This function encapsulates the logic to open a new query window with the correct
// language type
async function openNewQueryWindow() {
	const document = await vscode.workspace.openTextDocument({ language: 'gsql' });
	await vscode.window.showTextDocument(document);
}

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const languageProvider = new GraphSQLProvider();

	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider('gsql', languageProvider)
	);

	context.subscriptions.push(
		vscode.languages.registerSignatureHelpProvider('gsql', languageProvider)
	);

	const subgraphProvider = new SubgraphProvider(context);

	const subgraphsView = vscode.window.createTreeView('subgraphs', {
		treeDataProvider: subgraphProvider
	});

	context.subscriptions.push(subgraphsView);

	const subgraphSchemaProvider = new SubgraphSchemaProvider(context);

	const subgraphSchemaView = vscode.window.createTreeView('subgraphSchema', {
		treeDataProvider: subgraphSchemaProvider,
		dragAndDropController: subgraphSchemaProvider
	});

	subgraphsView.onDidChangeSelection(async (e) => {
		if (e.selection.length > 0) {
			const subgraphItem = e.selection[0];
			if (!subgraphItem.info) {
				return;
			}

			subgraphProvider.updateSelection(subgraphItem.info);

			await subgraphSchemaProvider.updateSelectedSubgraph(subgraphItem.info);
			languageProvider.updateLayout(subgraphSchemaProvider.subgraphLayout);
		}
	});

	context.subscriptions.push(subgraphSchemaView);

	const newQueryCommand = vscode.commands.registerCommand('subgraphs.newQuery', async () => {
		await openNewQueryWindow();
	});

	context.subscriptions.push(newQueryCommand);

	context.subscriptions.push(subgraphSchemaView);

	const resultsProvider = new ResultsProvider(context.extensionUri);

	const resultView = vscode.window.registerWebviewViewProvider('tabularResult', resultsProvider);

	context.subscriptions.push(resultView);

	const runQueryCommand = vscode.commands.registerTextEditorCommand('query.runQuery', async () => {
		await vscode.commands.executeCommand('tabularResult.focus');
		await vscode.commands.executeCommand('workbench.action.focusFirstEditorGroup');
		const query = vscode.window.activeTextEditor?.document.getText();
		await resultsProvider.execute(query, subgraphSchemaProvider.subgraphInfo);
	});

	context.subscriptions.push(runQueryCommand);

	const showResultsCommand = vscode.commands.registerTextEditorCommand(
		'query.showResults',
		async () => {
			await vscode.commands.executeCommand('tabularResult.focus');
		}
	);

	context.subscriptions.push(showResultsCommand);

	const cancelQueryCommand = vscode.commands.registerTextEditorCommand('query.cancelQuery', () => {
		resultsProvider.cancel();
	});

	const selector: vscode.DocumentSelector = { language: 'gsql' };

	context.subscriptions.push(
		vscode.languages.registerDocumentDropEditProvider(selector, new SqlDocumentDropProvider())
	);

	vscode.commands.executeCommand('tabularResult.focus');

	const addSubgraphIdCommand = vscode.commands.registerTextEditorCommand(
		'gsqlEditor.addSubgraphId',
		() => {
			const editor = vscode.window.activeTextEditor;

			if (editor) {
				const selectedSubgraphInfo = subgraphProvider.getSelectedSubgraph();
				const document = editor.document;
				if (document.languageId === 'gsql' && selectedSubgraphInfo) {
					editor.edit((editBuilder) => {
						editBuilder.insert(new vscode.Position(0, 0), '--+ID: ' + selectedSubgraphInfo.id);
					});
				}
			}
		}
	);
	context.subscriptions.push(addSubgraphIdCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
