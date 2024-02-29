import * as assert from 'assert';
import * as vscode from 'vscode';
import {
	addPropertyToEditor,
	getPropertyValue,
	replacePropertyInEditor,
	getPropertyLineNumber
} from '../editor/property';
import * as path from 'path';
import { teardown } from 'mocha';

suite('getPropertyValue', () => {
	teardown(async () => {
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});

	test('It should return an empty string if the property is not in the doc', async () => {
		// Open the document you want to test
		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
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
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		await vscode.window.showTextDocument(document);

		const property = '--+ID: ';
		const value = getPropertyValue(property, document);
		assert.strictEqual(value, 'HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B');
	});
});

suite('addPropertyToEditor', () => {
	teardown(async () => {
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});

	test('It should not add a property that is in the document', async () => {
		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const property = '--+ID: ';
		const information = '12345';
		const position = new vscode.Position(0, 0);

		assert.strictEqual(getPropertyLineNumber(property, editor.document), 1);

		await addPropertyToEditor(property, information, position);

		const newValue = getPropertyValue(property, editor.document);
		assert.strictEqual(newValue, 'HUZDsRpEVP2AvzDCyzDHtdc64dyDxx8FQjzsmqSg4H3B');
	});

	test('It should add a property that is not in the document', async () => {
		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const property = '--+FOO: ';
		const information = 'BAR';
		const position = new vscode.Position(0, 0);

		assert.strictEqual(getPropertyLineNumber(property, editor.document), -1);

		await addPropertyToEditor(property, information, position);

		const newLineNumber = getPropertyLineNumber(property, editor.document);
		assert.strictEqual(newLineNumber, 1);
	});
});

suite('replacePropertyInEditor', () => {
	teardown(async () => {
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});

	test('It should add a property if it is not in the document', async () => {
		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const property = '--+FOO: ';
		const information = 'BAR';

		assert.strictEqual(getPropertyLineNumber(property, editor.document), -1);

		await replacePropertyInEditor(property, information);

		const fooLineNumber = getPropertyLineNumber(property, editor.document);
		assert.strictEqual(fooLineNumber, 1);

		const idLineNumber = getPropertyLineNumber('--+ID: ', editor.document);
		assert.strictEqual(idLineNumber, 2);
	});

	test('If a property is in the document, replace its value', async () => {
		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const property = '--+ID: ';
		const information = '12345';
		const position = new vscode.Position(0, 0);

		assert.strictEqual(getPropertyLineNumber(property, editor.document), 1);

		await replacePropertyInEditor(property, information);

		const newValue = getPropertyValue(property, editor.document);
		assert.strictEqual(newValue, '12345');
	});
});
