import * as vscode from 'vscode';
import { IQueryResult, ExecuteSQL } from './service';

export class ResultsProvider implements vscode.WebviewViewProvider {
	public static readonly viewType = 'tabularResult';

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

		webviewView.webview.onDidReceiveMessage((data) => {
			switch (data.type) {
				case 'colorSelected': {
					vscode.window.activeTextEditor?.insertSnippet(new vscode.SnippetString(`#${data.value}`));
					break;
				}
			}
		});
	}

	public async execute(enpoint: string, query: string, subgraphImage: string) {
		if (this.abortController) {
			this.abortController.abort();
		}
		this.abortController = new AbortController();

		await this.posMessage({ type: 'start', data: subgraphImage });

		const signal = this.abortController.signal;

		const result = await ExecuteSQL(enpoint, query, signal);

		await this.posMessage({ type: 'finish', data: result });

		this.abortController = undefined;
	}

	private async posMessage(message: {
		type: 'start' | 'finish' | 'error';
		data?: IQueryResult | string;
	}): Promise<boolean> {
		if (this._view) {
			this._view.show?.(true);
			return await this._view.webview.postMessage(message);
		}
		return false;
	}

	private _getHtmlForWebview(webview: vscode.Webview) {
		const baseUri = webview.asWebviewUri(
			vscode.Uri.joinPath(this._extensionUri, 'resources/media/')
		);

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
				<meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}'; img-src 'self' ${webview.cspSource} https://api.thegraph.com/;">

				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<base href="${baseUri}" target="_blank">

				<link href="reset.css" rel="stylesheet">
				<link href="vscode.css" rel="stylesheet">
				<link href="datatable.css" rel="stylesheet">
				<link href="main.css" rel="stylesheet">
				<title>Query Result</title>
			</head>
			<body>
				<div id="container"></div>
				<script nonce="${nonce}" src="main.js" type="module"></script>
			</body>
			</html>`;
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
