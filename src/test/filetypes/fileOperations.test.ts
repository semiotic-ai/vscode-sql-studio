import * as assert from 'assert';
import * as fs from 'fs/promises';
import * as os from 'os';
import * as path from 'path';
import * as vscode from 'vscode';
import { write } from '../../filetypes/fileOperations';

// Helper function to create a temporary directory and return its path
async function createTempDir(): Promise<string> {
	return fs.mkdtemp(path.join(os.tmpdir(), 'sql-ext'));
}

// Helper function to remove the temporary directory and its contents
async function removeTempDir(dir: string): Promise<void> {
	await fs.rm(dir, { recursive: true, force: true });
}

// A custom FileWriter that always throws an error
const failingFileWriter = async (path: string, content: string): Promise<void> => {
	throw new Error('Simulated write error');
};

suite('fileOperations.write', () => {
	test('should write content to a temp file and verify', async () => {
		const tempDir = await createTempDir();
		const tempFile = path.join(tempDir, 'test.csv');
		const tempUri = vscode.Uri.file(tempFile);

		try {
			const result = await write('test content', tempUri, fs.writeFile);
			assert.ok(result.success);

			const content = await fs.readFile(tempFile, 'utf8');
			assert.strictEqual(content, 'test content');
		} finally {
			await removeTempDir(tempDir);
		}
	});

	test('should error when no URI is provided', async () => {
		const tempUri = undefined;

		const result = await write('test content', tempUri, failingFileWriter);

		assert.ok(!result.success);
		assert.strictEqual(result.error, 'No URI Provided');
	});

	test('should handle error writing file gracefully', async () => {
		const tempDir = await createTempDir();
		const tempFile = path.join(tempDir, 'test.csv');
		const tempUri = vscode.Uri.file(tempFile);

		try {
			const result = await write('test content', tempUri, failingFileWriter);

			assert.ok(!result.success);
			assert.strictEqual(result.error, 'Failed to save the file: Simulated write error');
		} finally {
			await removeTempDir(tempDir);
		}
	});
});
