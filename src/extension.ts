// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SubgraphSchemaProvider, SubgraphProvider } from './providers/subgraph';
import { ExecuteSQL } from './service';
import { ResultsProvider } from './providers/results';
import { SqlDocumentDropProvider } from './providers/sqldoc';
import { GraphSQLProvider } from './providers/language';
import { open } from 'fs';

// This function encapsulates the logic to open a new query window
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

	const subgraphsView = vscode.window.createTreeView('subgraphs', {
		treeDataProvider: new SubgraphProvider(context)
	});

	context.subscriptions.push(subgraphsView);

	const subgraphSchemaProvider = new SubgraphSchemaProvider(context);

	const subgraphSchemaView = vscode.window.createTreeView('subgraphSchema', {
		treeDataProvider: subgraphSchemaProvider,
		dragAndDropController: subgraphSchemaProvider
	});

	subgraphsView.onDidChangeSelection(async (e) => {
		const subgraphInfo = e.selection[0];
		await subgraphSchemaProvider.updateSelectedSubgraph(subgraphInfo.info);
		languageProvider.updateLayout(subgraphSchemaProvider.subgraphLayout);

		const isGsqlOpen = vscode.window.visibleTextEditors.some(
			(editor) => editor.document.languageId === 'gsql'
		);

		if (!isGsqlOpen) {
			await openNewQueryWindow();
		}
	});

	context.subscriptions.push(subgraphSchemaView);

	const newQueryCommand = vscode.commands.registerCommand('subgraphs.newQuery', async () => {
		// const document = await vscode.workspace.openTextDocument({ language: 'gsql' });
		// const editor = await vscode.window.showTextDocument(document);
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
}

// This method is called when your extension is deactivated
export function deactivate() {}
