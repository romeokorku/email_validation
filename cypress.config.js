const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    //baseUrls : 'https://example.mailosaur.com/',
    defaultCommandTimeout : 15000,
    testIsolation : false,

    env: {
      MAILOSAUR_API_KEY: "IkIUgVfNneNGCoTyxuvShJaZKUeIywPT",
      url : "https://example.mailosaur.com/",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.js"
  },
});

