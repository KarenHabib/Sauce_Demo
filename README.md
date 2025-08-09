# Sauce_Demo

This project contains automated UI tests for the Inventory Page using [Cypress](https://www.cypress.io/) and the Page Object Model (POM) structure.

## Installation

1. Initialize the project:
```bash
npm init -y
```

2. Install Dependencies:
```bash
npm install cypress --save-dev
npm install -D mochawesome mochawesome-merge mochawesome-report-generator
```

## Running Tests

### Open Cypress Test Runner (headed mode):
```bash
npm run cypress:open
```

### Run all tests in headless mode:
```bash
npm run cypress:run
```

### Run a specific test:
```bash
npx cypress run --spec "<test_file_path>", example:
    npx cypress run --spec "cypress/e2e/inventory_actions_test.cy.js"
```

## Notes

- The test files follow the `.cy.js` naming convention.
- POM structure helps to keep the test code maintainable and reusable.
