const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 420,
  viewportHeight: 573,
  videoUploadOnPasses: false,
  e2e: {
    baseUrl: 'https://www.sportsbet.com.au/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
