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
      const response = await fetch('https://sql-studio-webapp.vercel.app/graph-node-endpoint');

      GatewayProvider.endpoint = await response.text();
    } catch (error) {
      vscode.window.showErrorMessage('Failed to fetch gateway endpoint.');
    }
  }

  public static getEndpoint() {
    if (!GatewayProvider.endpoint) {
      throw new Error('Gateway endpoint not set.');
    } else {
      return GatewayProvider.endpoint;
    }
  }

  public static getApiKey() {
    if (!GatewayProvider.apiKey) {
      throw new Error('API key not set.');
    } else {
      return GatewayProvider.apiKey;
    }
  }

  public static setApiKey(apiKey: string) {
    GatewayProvider.apiKey = apiKey;
  }
}
