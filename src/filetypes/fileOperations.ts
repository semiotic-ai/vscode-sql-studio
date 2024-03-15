import * as vscode from 'vscode';
import { promises as fsPromises } from 'fs';

/**
 * Type definition for a function that writes content to a file.
 * @param {string} path The file system path where the content should be written.
 * @param {string} content The content to write to the file.
 * @returns {Promise<void>} A promise that resolves when the file has been written.
 */
type FileWriter = (path: string, content: string) => Promise<void>;

/**
 * Type definition for the result of the write operation.
 */
type WriteResult = {
	/** Indicates whether the write operation was successful. */
	success: boolean;
	/** Contains an error message if the write operation failed. */
	error?: string;
};

/**
 * Asynchronously writes content to a file specified by a URI.
 *
 * @param {string} content The content to write to the file.
 * @param {vscode.Uri | undefined} uri The URI of the file to write to. If undefined, the operation is aborted.
 * @param {FileWriter} writeFile The file writing function, defaulting to Node.js' fsPromises.writeFile.
 * @returns {Promise<WriteResult>} An object indicating the success or failure of the write operation.
 *         If successful, the object will have `success` set to true.
 *         If the operation fails or no URI is provided, `success` will be false and `error` will contain an error message.
 */
export async function write(
	content: string,
	uri: vscode.Uri | undefined,
	writeFile: FileWriter = fsPromises.writeFile
): Promise<WriteResult> {
	if (!uri) {
		return { success: false, error: 'No URI Provided' };
	}
	try {
		await writeFile(uri.fsPath, content);
		return { success: true };
	} catch (err) {
		const errorMessage = 'Failed to save the file: ' + (err as Error).message;
		vscode.window.showErrorMessage(errorMessage);
		return { success: false, error: errorMessage };
	}
}
