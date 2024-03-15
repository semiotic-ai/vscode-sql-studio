import * as vscode from 'vscode';
import { IQueryResult, executeSQL, ISubgraphInfo } from '../service';

class ResultsProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'tabularResult';
	private static readonly __knownPaths?: { [key: string]: string } = vscode.workspace
		.getConfiguration('graphsql')
		.get('paths');
	private static readonly __gateway?: string = vscode.workspace
		.getConfiguration('graphsql')
		.get('gateway');

	private _view?: vscode.WebviewView;

	private abortController?: AbortController;

	constructor(private readonly _extensionUri: vscode.Uri) {}

	public resolveWebviewView(
		webviewView: vscode.WebviewView,
		context: vscode.WebviewViewResolveContext,
		_token: vscode.CancellationToken
	) {
		this._view = webviewView;

		webviewView.webview.options = {
			// Allow scripts in the webview
			enableScripts: true,

			localResourceRoots: [this._extensionUri]
		};

		webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);

		webviewView.webview.onDidReceiveMessage(this.receiveMessage);
	}

	public async execute(query?: string, info?: ISubgraphInfo) {
		try {
			if (this.abortController) {
				this.abortController.abort();
				this.abortController = undefined;
			}

			if (!query || query.trim() === '') {
				throw new Error('No query to execute');
			}

			if (!info) {
				throw new Error('No subgraph selected');
			}

			const path = ResultsProvider.__knownPaths?.[info.displayName.toLowerCase()];

			if (!path) {
				throw new Error(`${info.displayName} is not yet supported/indexed.`);
			}

			const enpoint = `${ResultsProvider.__gateway}/${path}`;

			this.abortController = new AbortController();

			await this.postMessage({ type: 'start', data: info.image });
			const result = await executeSQL(enpoint, query!, this.abortController.signal);
			await this.postMessage({ type: 'finish', data: result });
		} catch (error: any) {
			await this.postMessage({ type: 'clear' });
			vscode.window.showErrorMessage(error.message);
		} finally {
			this.abortController = undefined;
		}
	}

	public cancel() {
		if (this.abortController) {
			try {
				this.abortController.abort();
			} finally {
				this.abortController = undefined;
			}
		}
	}

	private async postMessage(message: {
		type: 'start' | 'finish' | 'clear';
		data?: IQueryResult | string;
	}): Promise<boolean> {
		if (this._view) {
			return await this._view.webview.postMessage(message);
		}
		return false;
	}

	private async receiveMessage(message: string) {
		const document = await vscode.workspace.openTextDocument({ language: 'csv', content: message });
		await vscode.window.showTextDocument(document);
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		const baseUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri, '/'));

		const codiconsUri = webview.asWebviewUri(vscode.Uri.joinPath(this._extensionUri));

		// Use a nonce to only allow a specific script to be run.
		const nonce = getNonce();

		return `<!DOCTYPE html>
			<html lang="en">
			<head>
				<meta charset="UTF-8">

				<!--
					Use a content security policy to only allow loading styles from our extension directory,
					and only allow scripts that have a specific nonce.
					(See the 'webview-sample' extension sample for img-src content security policy examples)
				-->
				<meta http-equiv="Content-Security-Policy" content="default-src ${webview.cspSource} 'nonce-${nonce}' https://api.thegraph.com/; style-src 'unsafe-inline' ${webview.cspSource};">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<base href="${baseUri}" target="_blank">

				<link href="resources/media/reset.css" rel="stylesheet">
				<link href="resources/media/vscode.css" rel="stylesheet">
				<link href="resources/media/main.css" rel="stylesheet">
				<link href="node_modules/simple-datatables/dist/style.css" rel="stylesheet" />
				<link href="node_modules/@vscode/codicons/dist/codicon.css" rel="stylesheet" />
				<title>Query Result</title>
			</head>
			<body>
				<div id="container"></div>
				<script nonce="${nonce}" src="node_modules/simple-datatables/dist/umd/simple-datatables.js"></script>
				<script nonce="${nonce}" src="resources/media/main.js"></script>
			</body>
			</html>`;
	}
}

export class ResultsView implements vscode.Disposable {
	private readonly _provider: ResultsProvider;
	private readonly _view: vscode.Disposable;

	constructor(viewId: string, extensionUri: vscode.Uri) {
		this._provider = new ResultsProvider(extensionUri);
		this._view = vscode.window.registerWebviewViewProvider(viewId, this._provider);
	}

	public async execute(query?: string, info?: ISubgraphInfo) {
		try {
			await vscode.commands.executeCommand('setContext', 'subgraph.queryRunning', true);
			await this._provider.execute(query, info);
		} finally {
			await vscode.commands.executeCommand('setContext', 'subgraph.queryRunning', false);
		}
	}

	public cancel() {
		this._provider.cancel();
	}

	dispose() {
		this._provider.cancel();
		this._view.dispose();
	}
}

function getNonce() {
	let text = '';
	const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	for (let i = 0; i < 32; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}
