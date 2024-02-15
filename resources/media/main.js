//@ts-nocheck

import * as simpleDatatables from './datatable.js';

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
	const vscode = acquireVsCodeApi();

	const oldData = vscode.getState() || { rows: [], columns: [], rowCount: 0 };

	// Handle messages sent from the extension to the webview
	window.addEventListener('message', (event) => {
		const message = event.data; // The JSON data our extension sent

		if (message.type === 'start') {
			onExecutionStart();
			return;
		} else if (message.type === 'finish') {
			const data = message.data.data.sql;
			data.rows = data.rows.map((r) => Object.values(r));
			onExecutionFinish(data);
			return;
		} else if (message.type === 'error') {
			onExecutionError(message.data);
		}
	});

	const queryMessages = document.getElementById('queryMessages');
	const tableContainer = document.getElementById('tableContainer');

	let datatable = null;

	function onExecutionStart() {
		if (datatable) {
			datatable.destroy();
			datatable = null;
		}

		queryMessages.innerHTML = '<div class="executing">Executing</div>';
	}

	function onExecutionError(error) {
		if (datatable) {
			datatable.destroy();
			datatable = null;
		}

		queryMessages.innerHTML = `<div class="error">${error}</div>`;
	}

	function onExecutionFinish(data) {
		if (datatable) {
			datatable.destroy();
			datatable = null;
		}

		queryMessages.innerHTML = '';

		datatable = new window.simpleDatatables.DataTable('#tableContainer', {
			data: {
				headings: data.columns,
				data: data.rows
			}
		});

		vscode.setState(data);
	}
})();
