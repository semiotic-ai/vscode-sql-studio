import * as vscode from 'vscode';
import * as fOps from './fileOperations';

/**
 * Opens a save dialog for the user to choose a file location, and writes content to the selected file.
 *
 * @param {string} content The content to be saved to the file.
 * @returns {Promise<void>} A promise that resolves when the content has been written to the selected file.
 */
export async function write(content: string) {
	const uri = await vscode.window.showSaveDialog({
		filters: {
			'CSV files': ['csv']
		}
	});
	await fOps.write(content, uri);
}
