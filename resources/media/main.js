//@ts-nocheck

import * as simpleDatatables from './datatable.js';

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
	const vscode = acquireVsCodeApi();

	const oldData = vscode.getState() || { rows: [], columns: [], rowCount: 0 };

	// Handle messages sent from the extension to the webview
	window.addEventListener('message', (event) => {
		const data = event.data.result.data.sql; // The json data that the extension sent
		data.rows = data.rows.map((r) => Object.values(r));
		updateDataTable(data);
		vscode.setState(data); // Save the current state
	});

	function updateDataTable(data) {
		const datatable = new window.simpleDatatables.DataTable('#tableContainer', {
			data: {
				headings: data.columns,
				data: data.rows
			}
		});
	}
})();
