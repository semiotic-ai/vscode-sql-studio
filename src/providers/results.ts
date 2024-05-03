import * as vscode from 'vscode';
import { IQueryResult, executeSQL, ISubgraphInfo } from '../service';
import { write as writeCSV } from '../filetypes/csv';
import { SECRETS, SQL_GATEWAY_URL } from '../constants';

class ResultsProvider implements vscode.WebviewViewProvider {
  public static readonly viewType = 'tabularResult';

  private _view?: vscode.WebviewView;

  private abortController?: AbortController;
  private _extensionUri: vscode.Uri;
  private _secrets: vscode.SecretStorage;

  constructor(context: vscode.ExtensionContext) {
    this._extensionUri = context.extensionUri;
    this._secrets = context.secrets;
  }

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

      let apikey: string | undefined = await this._secrets.get(SECRETS.API_KEY);

      if (!apikey || apikey.trim() === '') {
        apikey = await vscode.window.showInputBox({
          placeHolder: 'Enter your API key',
          prompt: 'Enter your API key'
        });
        if (!apikey || apikey.trim() === '') {
          throw new Error('No API key provided');
        }
        await this._secrets.store(SECRETS.API_KEY, apikey);
      }

      const authorization = `Bearer ${apikey}`;

      if (!info.sqlIndexers || info.sqlIndexers === 0) {
        throw new Error('Subgraph is not SQL enabled.');
      }

      const endpoint = `${SQL_GATEWAY_URL}/api/deployments/id/${info.deploymentId}`;

      this.abortController = new AbortController();

      await this.postMessage({ type: 'start', data: info.image });
      const result = await executeSQL(endpoint, query!, this.abortController.signal, authorization);
      await this.postMessage({ type: 'finish', data: result });
    } catch (error: any) {
      await this.postMessage({ type: 'clear' });
      vscode.window.showErrorMessage(error.message);
    } finally {
      this.abortController = undefined;
    }
  }

  public async clearAPIKey() {
    await this._secrets.delete(SECRETS.API_KEY);
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
    await writeCSV(message);
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

  constructor(viewId: string, context: vscode.ExtensionContext) {
    this._provider = new ResultsProvider(context);
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

  public async clearAPIKey() {
    await this._provider.clearAPIKey();
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
