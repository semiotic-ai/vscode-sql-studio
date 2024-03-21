import * as vscode from 'vscode';
import fetch from 'node-fetch';

/**
 * Defines the structure of the error response received from the bug reporting API.
 */
interface BugError {
  error: string;
}

/**
 * A class responsible for reporting bugs to a specified API endpoint.
 */
export class BugReporter {
  private apiUrl: string;

  /**
   * Constructs a new instance of the BugReporter class.
   *
   * @param {string} apiUrl The URL of the bug reporting API endpoint where bug reports will be submitted.
   */
  constructor(apiUrl: string) {
    this.apiUrl = apiUrl;
  }

  /**
   * Submits a bug report to the API endpoint using the provided JSON content.
   *
   * This method sends a POST request to the configured API URL. If the request is
   * successful, it displays a success message. If the request fails, it attempts to parse
   * the error response and display a relevant error message. Errors during the request
   * process also result in a generic error message.
   *
   * @param {string} jsonContent A JSON string containing the bug report details to be submitted.
   */
  private async _reportBug(jsonContent: string): Promise<void> {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: jsonContent
      });

      if (response.ok) {
        vscode.window.showInformationMessage('Bug report submitted successfully');
        await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
      } else {
        const errorData = (await response.json()) as BugError;
        vscode.window.showErrorMessage('Failed to submit bug report: ' + errorData.error);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      vscode.window.showErrorMessage('Failed to submit bug report: ' + errorMessage);
    }
  }

  /**
   * Initiates the bug report submission process by prompting the user for a bug title and description.
   *
   * This method displays input boxes to the user to collect the title and description of the bug.
   * If the user provides both, it combines them into a JSON string and calls the `_reportBug` method
   * to submit the report. If the user cancels either input box, the method exits without submitting.
   */
  public async openBugReportTemplate() {
    const title = await vscode.window.showInputBox({ prompt: 'Bug Title' });
    if (title === undefined) {
      return;
    }

    const description = await vscode.window.showInputBox({
      prompt: 'Bug Description',
      value: '',
      valueSelection: [-1, -1]
    });
    if (description === undefined) {
      return;
    }

    const jsonContent = JSON.stringify({ title, description });

    await this._reportBug(jsonContent);
  }
}
