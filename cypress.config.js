const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://www.saucedemo.com',
        specPattern: 'cypress/e2e/**/*.cy.js',
        supportFile: 'cypress/support/e2e.js',
        setupNodeEvents(on, config) {
            return config;
        }
    },
    retries: { runMode: 2, openMode: 0 },
    viewportWidth: 1920,
    viewportHeight: 1200,
    video: true
});