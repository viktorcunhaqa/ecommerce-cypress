const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // 🛑 NOVO SITE BASE
    baseUrl: 'https://automationexercise.com', 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // Configurações do seu reporter (mochawesome)
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: true,
      json: true,
    },
  },
});