// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SubgraphColumnsProvider, SubgraphProvider } from './subgraphs-provider';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const subgraphsAvailable = vscode.window.createTreeView('subgraph-available', {
		treeDataProvider: new SubgraphProvider(context)
	});

	context.subscriptions.push(subgraphsAvailable);

	const subgraphColumnsProvider = new SubgraphColumnsProvider(context);

	vscode.window.createTreeView('subgraph-columns', {
		treeDataProvider: subgraphColumnsProvider
	});

	subgraphsAvailable.onDidChangeSelection(async (e) => {
		await subgraphColumnsProvider.updateSelectedSubgraph(e.selection[0].id);
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
