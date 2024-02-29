import * as assert from 'assert';
import * as vscode from 'vscode';
import {
	addPropertyToEditor,
	getPropertyLineNumber,
	makePropertyString,
	getPropertyValue
} from '../editor/property';
import { resolve } from 'path';

suite('makePropertyString', () => {
	test('should return "--+: " for an empty string', () => {
		const result = makePropertyString('');
		assert.strictEqual(result, '--+: ');
	});

	test('should correctly format "id" into "--+ID: "', () => {
		const result = makePropertyString('id');
		assert.strictEqual(result, '--+ID: ');
	});

	test('should recognize and not alter already correctly formatted "--+ID: "', () => {
		const result = makePropertyString('--+ID: ');
		assert.strictEqual(result, '--+ID: ');
	});
});

suite('getPropertyLineNumber', () => {
	test('It should return the correct line number for id', async () => {
		// Open the document you want to test
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(document);

		const property = 'id';
		const lineNumber = getPropertyLineNumber(property, document);
		assert.strictEqual(lineNumber, 1);
	});

	test('It should return the correct line number for a --+ID: ', async () => {
		// Open the document you want to test
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(document);

		const property = '--+ID: ';
		const lineNumber = getPropertyLineNumber(property, document);
		assert.strictEqual(lineNumber, 1);
	});

	test('It should return -1 for a property that is not in the file', async () => {
		// Open the document you want to test
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(document);

		const property = 'fakeProp';
		const lineNumber = getPropertyLineNumber(property, document);
		assert.strictEqual(lineNumber, -1);
	});
});

suite('getPropertyValue', () => {
	test('It should return an empty string if the property is not in the doc', async () => {
		// Open the document you want to test
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(document);

		const property = 'foo';
		const value = getPropertyValue(property, document);
		assert.strictEqual(value, '');
	});

	test('It should return the correct value for a property in the file', async () => {
		// Open the document you want to test
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(document);

		const property = '--+ID: ';
		const value = getPropertyValue(property, document);
		assert.strictEqual(value, 'HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B');
	});
});

suite('addPropertyToEditor', () => {
	test('It should not add a property that is in the document', async () => {
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const property = '--+ID: ';
		const information = '12345';
		const position = new vscode.Position(0, 0);

		assert.strictEqual(getPropertyLineNumber(property, editor.document), 1);

		await addPropertyToEditor(property, information, position);

		console.log(editor.document.getText());
		const newValue = getPropertyValue(property, editor.document);
		assert.strictEqual(newValue, 'HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B');
	});

	test('It should add a property that is not in the document', async () => {
		const uri = vscode.Uri.file(
			resolve(__dirname, '../../src/test/samples/query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const property = '--+FOO: ';
		const information = 'BAR';
		const position = new vscode.Position(0, 0);

		assert.strictEqual(getPropertyLineNumber(property, editor.document), -1);

		await addPropertyToEditor(property, information, position);

		console.log(editor.document.getText());
		const newLineNumber = getPropertyLineNumber(property, editor.document);
		assert.strictEqual(newLineNumber, 1);
	});
});
