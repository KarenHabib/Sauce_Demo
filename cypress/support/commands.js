Cypress.Commands.add('loginByUI', (username, password) => {
    cy.get('[data-test="username"]').clear().type(username);
    cy.get('[data-test="password"]').clear().type(password);
    cy.get('[data-test="login-button"]').click();
});

// Cypress.on('fail', (error,runnable)) =>{}