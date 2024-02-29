//@ts-nocheck

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
	const vscode = acquireVsCodeApi();
	const DataTable = window.simpleDatatables.DataTable;
	const container = document.getElementById('container');
	container.datatable = null;

	const previousResult = vscode.getState();

	if (previousResult) {
		rendeResult(previousResult);
	}

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
				<img src="${message.data}" alt="subgraph logo" class="subgraph"/>
				<div class="loading"></div>
				<div class="value">Executing your query...</div>
			</div>
			`;
		} else if (message.type === 'finish') {
			const result = message.data.data.sql;
			result.rows = result.rows.map((r) => Object.values(r));
			rendeResult(result);
			vscode.setState(result);
		}
	});

	function rendeResult(result) {
		const datatable = new DataTable(container, {
			data: {
				headings: result.columns,
				data: result.rows
			},
			rowRender: (row, tr, index) => {
				// This is for exporting a single dimension array
				row.cells.forEach((cell, i) => {
					if (cell.data.length > 0 && !Object.hasOwn(cell.data[0], 'nodeName')) {
						cell.text = `[${cell.data.join(', ')}]`;
					}
				});

				// This is for rendering a single dimension array
				tr.childNodes.forEach((td, i) => {
					if (td.childNodes.length > 0 && !Object.hasOwn(td.childNodes[0], 'nodeName')) {
						td.childNodes = [
							{
								nodeName: 'details',
								attributes: { class: 'datatable-array' },
								childNodes: [
									{
										nodeName: 'summary',
										childNodes: [{ nodeName: '#text', data: td.childNodes[0] }]
									}
								].concat(
									td.childNodes.slice(1).map((content) => {
										return {
											nodeName: 'div',
											childNodes: [{ nodeName: '#text', data: content }]
										};
									})
								)
							}
						];
					}
				});

				return tr;
			}
		});

		container.datatable = datatable;

		const button = document.createElement('button');
		button.id = 'exportButton';
		button.classList.add('export');
		button.classList.add('icon');
		button.innerHTML = '<i class="codicon codicon-save"></i> CSV';

		button.addEventListener('click', () => {
			const result = window.simpleDatatables.exportCSV(container.datatable, {
				lineDelimiter: '\n',
				columnDelimiter: ';'
			});
			vscode.postMessage(result);
		});

		const search = document.getElementsByClassName('datatable-top')[0];
		search.append(button);
	}
})();
