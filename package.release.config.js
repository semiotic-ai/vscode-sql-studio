// package.release.config.js
const common = require("./common.release.config.js");

module.exports = {
    ...common,
    branches: ["main"],
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      [
        'semantic-release-vsce',
        {
          packageVsix: true,
          publish: false, // no-op since we use semantic-release-stop-before-publish
        },
      ],
      'semantic-release-stop-before-publish',
    ],
  };