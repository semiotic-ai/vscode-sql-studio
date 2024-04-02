import * as vscode from 'vscode';

import fetch from 'node-fetch';

export class GatewayProvider {
  private static apiKey: string | null = null;
  private static endpoint: string | null = null;

  constructor() {
    const endpointFromConfig = vscode.workspace.getConfiguration('graphsql').get('gateway');

    if (typeof endpointFromConfig === 'string') {
      GatewayProvider.endpoint = endpointFromConfig;
    } else {
      GatewayProvider.fetchEndpoint();
    }
  }

  private static async fetchEndpoint() {
    try {
      const response = await fetch('https://sql-studio-webapp.vercel.app/api/graph-node-endpoint');

      GatewayProvider.endpoint = await response.text();
    } catch (error) {
      vscode.window.showErrorMessage('Failed to fetch gateway endpoint.');
    }
  }

  public static async getEndpoint() {
    if (!GatewayProvider.endpoint) {
      await GatewayProvider.fetchEndpoint();

      if (!GatewayProvider.endpoint) {
        throw new Error(
          'Failed to fetch gateway endpoint. Try setting it manually using the setting `graphsql.gateway`.'
        );
      }
    }

    return GatewayProvider.endpoint;
  }

  public static async getApiKey() {
    if (!GatewayProvider.apiKey) {
      await vscode.commands.executeCommand('gateway.setApiKey');

      if (!GatewayProvider.apiKey) {
        throw new Error('API key not set.');
      }
    }

    return GatewayProvider.apiKey;
  }

  public static setApiKey(apiKey: string) {
    GatewayProvider.apiKey = apiKey;
  }
}
