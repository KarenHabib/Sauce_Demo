import './commands';

// Always ignore uncaught exceptions in the AUT so tests don't fail due to third-party errors.
Cypress.on('uncaught:exception', () => false);