import { Linter } from 'eslint';
import * as vscode from 'vscode';

/**
 * Calculates the line number where a specified property is found within a VSCode text document.
 * The property is first formatted to ensure it matches the expected pattern (--+[PROPERTY_NAME]: )
 * before searching the document. If the property is not found, the function returns -1.
 *
 * @param {string} property The name of the property to find within the document.
 * @param {vscode.TextDocument} document The VSCode text document to search.
 * @returns {string} The 1-based line number where the property is found, or -1 if not found.
 */
export function getPropertyLineNumber(property: string, document: vscode.TextDocument): number {
	const text = document.getText();
	const formattedProperty = makePropertyString(property);
	const index = text.indexOf(formattedProperty);
	if (index === -1) {
		return -1;
	}
	const tmp = text.substring(0, index);
	return tmp.split('\n').length;
}

/**
 * Formats a given property name into a standardized string pattern (--+[PROPERTY_NAME]: ).
 * If the property name already matches this pattern, it is returned unchanged; otherwise,
 * the property name is capitalized and formatted accordingly.
 *
 * @param {string} property The property name to format.
 * @returns {string} The formatted property string.
 */
export function makePropertyString(property: string): string {
	const formattedPattern = /^--\+[A-Z]+: /;
	if (formattedPattern.test(property)) {
		return property;
	} else {
		return '--+' + property.toUpperCase() + ': ';
	}
}

/**
 * Asynchronously adds a property and its information to the editor at the specified position
 * if the property does not already exist in the document. This function is specific to GSQL
 * documents and will not execute if the active document is not of the GSQL language type.
 *
 * @param {string} property The name of the property to add.
 * @param {string} information The value associated with the property.
 * @param {vscode.Position} position The position in the document where the property should be inserted.
 */
export async function addPropertyToEditor(
	property: string,
	information: string,
	position: vscode.Position
) {
	const editor = vscode.window.activeTextEditor;
	if (!editor || editor.document.languageId !== 'gsql') {
		return; // Early return if no editor or the document is not a GSQL file
	}

	const formattedProperty = makePropertyString(property);

	const lineNumber = getPropertyLineNumber(formattedProperty, editor.document);
	if (lineNumber > -1) {
		return; // Early return if the property is already in the document
	}

	await editor.edit((editBuilder) => {
		editBuilder.insert(position, formattedProperty + information + '\n');
	});
}

/**
 * Retrieves the value of a specified property from a VS Code text document. If the property
 * is formatted according to the standardized string pattern (--+[PROPERTY_NAME]: ), this function
 * searches for the property and returns its corresponding value, trimmed of any excess whitespace.
 * If the property is not found, an empty string is returned.
 *
 * @param {string} property The property name to search for in the document.
 * @param {vscode.TextDocument} document The document to search within.
 * @returns {string} The value of the property, or an empty string if not found.
 */
export function getPropertyValue(property: string, document: vscode.TextDocument): string {
	const formattedProperty = makePropertyString(property);

	const lineNumber = getPropertyLineNumber(formattedProperty, document);
	if (lineNumber === -1) {
		return ''; // property not in doc
	}

	const text = document.getText();
	const line = text.split('\n')[lineNumber - 1];
	const index = line.indexOf(': ') + 2; // + 2 skips ": "
	return line.substring(index).trim();
}
