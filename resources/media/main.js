//@ts-check

// This script will be run within the webview itself
// It cannot access the main VS Code APIs directly.
(function () {
	const vscode = acquireVsCodeApi();

	const oldState = vscode.getState() || { result: {} };

	updateDataTable(oldState);

	// Handle messages sent from the extension to the webview
	window.addEventListener('message', (event) => {
		const result = event.data; // The json data that the extension sent
		updateDataTable(result);
	});

	function updateDataTable(data) {}
})();
