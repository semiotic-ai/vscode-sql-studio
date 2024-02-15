// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { SubgraphColumnsProvider, SubgraphProvider } from './subgraphs-provider';
import { ExecuteSQL } from './service';
import { ResultsProvider } from './results';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const subgraphsView = vscode.window.createTreeView('subgraphs', {
		treeDataProvider: new SubgraphProvider(context)
	});

	context.subscriptions.push(subgraphsView);

	const subgraphColumnsProvider = new SubgraphColumnsProvider(context);

	const subgraphSchemaView = vscode.window.createTreeView('subgraphSchema', {
		treeDataProvider: subgraphColumnsProvider
	});

	subgraphsView.onDidChangeSelection(async (e) => {
		const subgraph_name = e.selection[0].label as string;
		const subgraph_id = e.selection[0].id;
		await subgraphColumnsProvider.updateSelectedSubgraph(subgraph_id, subgraph_name);
	});

	context.subscriptions.push(subgraphSchemaView);

	const newQueryCommand = vscode.commands.registerCommand('subgraphs.newQuery', async () => {
		const document = await vscode.workspace.openTextDocument({ language: 'sql' });
		const editor = await vscode.window.showTextDocument(document);
	});

	context.subscriptions.push(subgraphSchemaView);

	const resultsProvider = new ResultsProvider(context.extensionUri);

	const resultView = vscode.window.registerWebviewViewProvider('tabularResult', resultsProvider);

	context.subscriptions.push(resultView);

	const runQueryCommand = vscode.commands.registerTextEditorCommand('query.runQuery', async () => {
		let subgraph_path: string | undefined = undefined;

		switch (subgraphColumnsProvider.subgraph_name?.toLowerCase()) {
			case 'substreams uniswap v3 ethereum':
				subgraph_path = 'tumay/uniswap-v3';
				break;
			case 'odos v2':
				subgraph_path = 'odos/v2';
				break;
		}

		const query = vscode.window.activeTextEditor?.document.getText();

		if (subgraph_path && query) {
			const gateway = vscode.workspace.getConfiguration('graphsql').get('gateway');
			const endpoint = gateway + '/' + subgraph_path;
			await resultsProvider.execute(endpoint, query);
		}
	});
}

// This method is called when your extension is deactivated
export function deactivate() {}
