module.exports = {
  testEnvironment: "jsdom",
  // fixes https://github.com/vuejs/test-utils/issues/1525
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  moduleFileExtensions: ["js", "vue", "json"],
  setupFiles: ["./jest.init.js"],
};
