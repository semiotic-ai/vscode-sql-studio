import * as assert from 'assert';
import * as vscode from 'vscode';
import * as path from 'path';
import { GraphSQLProvider } from '../providers/language';
import { Layout, Table, Column, Relation, ScalarType, TypeKind } from '../graphtables/layout';
import { DBType } from '../graphtables/db';

suite('GraphSQLProvider Completion', () => {
	test('Should suggest SELECT when user enters sel', async () => {
		const fakeLayout: Layout = {
			tables: new Map<string, Table>([
				[
					'users',
					{
						columns: new Map<string, Column>([
							[
								'id',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Int8 } as ScalarType,
									nullable: false,
									isPrimary: true
								}
							],
							[
								'name',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							],
							[
								'email',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							]
						]),
						relations: new Map<string, Relation[]>()
					}
				]
			]),
			enums: new Map<string, string[]>()
		};

		const graphSQLProvider = new GraphSQLProvider();
		graphSQLProvider.updateLayout(fakeLayout);

		const cancellationTokenSource = new vscode.CancellationTokenSource();
		const completionContext: vscode.CompletionContext = {
			triggerKind: vscode.CompletionTriggerKind.Invoke,
			triggerCharacter: undefined // Explicitly stating it's not triggered by a character
		};

		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const insPosition = new vscode.Position(1, 0);
		await editor.edit((editBuilder) => {
			editBuilder.insert(insPosition, 'sel');
		});

		const compPosition = new vscode.Position(1, 3);
		const completions = await graphSQLProvider.provideCompletionItems(
			document,
			compPosition,
			cancellationTokenSource.token,
			completionContext
		);

		let items: vscode.CompletionItem[] = [];
		if (completions) {
			items = Array.isArray(completions) ? completions : completions.items;
		}

		const selectCompletion = items.find((item) => item.label === 'SELECT');
		assert.ok(selectCompletion, "'SELECT' is not among the suggested completion items.");

		await editor.edit((editBuilder) => {
			editBuilder.delete(new vscode.Range(insPosition, compPosition));
		});
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});
	test('Should suggest user and its columns when user enters us', async () => {
		const fakeLayout: Layout = {
			tables: new Map<string, Table>([
				[
					'users',
					{
						columns: new Map<string, Column>([
							[
								'id',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Int8 } as ScalarType,
									nullable: false,
									isPrimary: true
								}
							],
							[
								'name',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							],
							[
								'email',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							]
						]),
						relations: new Map<string, Relation[]>()
					}
				]
			]),
			enums: new Map<string, string[]>()
		};

		const graphSQLProvider = new GraphSQLProvider();
		graphSQLProvider.updateLayout(fakeLayout);

		const cancellationTokenSource = new vscode.CancellationTokenSource();
		const completionContext: vscode.CompletionContext = {
			triggerKind: vscode.CompletionTriggerKind.Invoke,
			triggerCharacter: undefined // Explicitly stating it's not triggered by a character
		};

		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const insPosition = new vscode.Position(1, 0);
		await editor.edit((editBuilder) => {
			editBuilder.insert(insPosition, 'us.');
		});

		const compPosition = new vscode.Position(1, 2);
		const completions = await graphSQLProvider.provideCompletionItems(
			document,
			compPosition,
			cancellationTokenSource.token,
			completionContext
		);

		let items: vscode.CompletionItem[] = [];
		if (completions) {
			items = Array.isArray(completions) ? completions : completions.items;
		}

		const usersCompletion = items.find((item) => item.label === 'users');
		assert.ok(usersCompletion, "'users' is not among the suggested completion items.");
		const usersIdCompletion = items.find((item) => item.label === 'users.id');
		assert.ok(usersIdCompletion, "'users.id' is not among the suggested completion items.");
		const usersNameCompletion = items.find((item) => item.label === 'users.name');
		assert.ok(usersNameCompletion, "'users.name' is not among the suggested completion items.");
		const usersEmailCompletion = items.find((item) => item.label === 'users.email');
		assert.ok(usersEmailCompletion, "'users.email' is not among the suggested completion items.");

		await editor.edit((editBuilder) => {
			editBuilder.delete(new vscode.Range(insPosition, compPosition));
		});
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});
	test('Should suggest users columns when user enters us.', async () => {
		const fakeLayout: Layout = {
			tables: new Map<string, Table>([
				[
					'users',
					{
						columns: new Map<string, Column>([
							[
								'id',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Int8 } as ScalarType,
									nullable: false,
									isPrimary: true
								}
							],
							[
								'name',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							],
							[
								'email',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							]
						]),
						relations: new Map<string, Relation[]>()
					}
				]
			]),
			enums: new Map<string, string[]>()
		};

		const graphSQLProvider = new GraphSQLProvider();
		graphSQLProvider.updateLayout(fakeLayout);

		const cancellationTokenSource = new vscode.CancellationTokenSource();
		const completionContext: vscode.CompletionContext = {
			triggerKind: vscode.CompletionTriggerKind.Invoke,
			triggerCharacter: '.'
		};

		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const insPosition = new vscode.Position(1, 0);
		await editor.edit((editBuilder) => {
			editBuilder.insert(insPosition, 'users.');
		});

		const compPosition = new vscode.Position(1, 6);
		const completions = await graphSQLProvider.provideCompletionItems(
			document,
			compPosition,
			cancellationTokenSource.token,
			completionContext
		);

		let items: vscode.CompletionItem[] = [];
		if (completions) {
			items = Array.isArray(completions) ? completions : completions.items;
		}

		const usersIdCompletion = items.find((item) => item.label === 'users.id');
		assert.ok(usersIdCompletion, "'users.id' is not among the suggested completion items.");
		const usersNameCompletion = items.find((item) => item.label === 'users.name');
		assert.ok(usersNameCompletion, "'users.name' is not among the suggested completion items.");
		const usersEmailCompletion = items.find((item) => item.label === 'users.email');
		assert.ok(usersEmailCompletion, "'users.email' is not among the suggested completion items.");

		await editor.edit((editBuilder) => {
			editBuilder.delete(new vscode.Range(insPosition, compPosition));
		});
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});
	test('Should suggest no columns when user types . without a table name preceeding it', async () => {
		const fakeLayout: Layout = {
			tables: new Map<string, Table>([
				[
					'users',
					{
						columns: new Map<string, Column>([
							[
								'id',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Int8 } as ScalarType,
									nullable: false,
									isPrimary: true
								}
							],
							[
								'name',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							],
							[
								'email',
								{
									type: { kind: TypeKind.Scalar, dbType: DBType.Text } as ScalarType,
									nullable: false,
									isPrimary: false
								}
							]
						]),
						relations: new Map<string, Relation[]>()
					}
				]
			]),
			enums: new Map<string, string[]>()
		};

		const graphSQLProvider = new GraphSQLProvider();
		graphSQLProvider.updateLayout(fakeLayout);

		const cancellationTokenSource = new vscode.CancellationTokenSource();
		const completionContext: vscode.CompletionContext = {
			triggerKind: vscode.CompletionTriggerKind.Invoke,
			triggerCharacter: '.'
		};

		const uri = vscode.Uri.file(
			path.join(__dirname, '..', '..', 'src', 'test', 'samples', 'query-with-properties.gsql')
		);
		const document = await vscode.workspace.openTextDocument(uri);
		const editor = await vscode.window.showTextDocument(document);

		const insPosition = new vscode.Position(1, 0);
		await editor.edit((editBuilder) => {
			editBuilder.insert(insPosition, '.');
		});

		const compPosition = new vscode.Position(1, 1);
		const completions = await graphSQLProvider.provideCompletionItems(
			document,
			compPosition,
			cancellationTokenSource.token,
			completionContext
		);

		let items: vscode.CompletionItem[] = [];
		if (completions) {
			items = Array.isArray(completions) ? completions : completions.items;
		}
		assert.strictEqual(items.length, 0, "Expected 'completions' to be empty, but it was not.");

		await editor.edit((editBuilder) => {
			editBuilder.delete(new vscode.Range(insPosition, compPosition));
		});
		await vscode.commands.executeCommand('workbench.action.closeActiveEditor');
	});
});
