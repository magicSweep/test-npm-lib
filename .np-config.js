module.exports = {
  publish: true,
  branch: "main",
  // Run npm test
  tests: false,
  // Cleanup node_modules
  cleanup: false,
  yarn: false,
  // Subdirectory to publish
  contents: "src",
  // Open a GitHub release draft after releasing
  releaseDraft: true,
  // Show tasks without actually executing them
  preview: false,
};
