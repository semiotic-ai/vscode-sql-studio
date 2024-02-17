//@ts-nocheck

import * as simpleDatatables from './datatable.js';

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
	const container = document.getElementById('container');
	container.datatable = null;

	function cleanContainer() {
		if (container.datatable) {
			container.datatable.destroy();
			container.datatable = null;
		}

		container.innerHTML = '';
	}

	// Handle messages sent from the extension to the webview
	window.addEventListener('message', (event) => {
		const message = event.data; // The JSON data our extension sent
		cleanContainer();

		if (message.type === 'start') {
			container.innerHTML = `
			<div class="message">
				<div class="subgraph"><img src="${message.data}" alt="subgraph logo" /></div>
				<div class="loading"></div>
				<div class="value">Executing your query...</div>
			</div>
			`;
		} else if (message.type === 'finish') {
			const result = message.data.data.sql;
			result.rows = result.rows.map((r) => Object.values(r));
			rendeResult(result);
		} else if (message.type === 'error') {
			queryMessages.innerHTML = `<div class="message"><div class="error">${message.data}</div></div>`;
		}
	});

	function rendeResult(result) {
		const datatable = new window.simpleDatatables.DataTable(container, {
			data: {
				headings: result.columns,
				data: result.rows
			}
		});

		container.datatable = datatable;
		vscode.setState(result);
	}
})();
