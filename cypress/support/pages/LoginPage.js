const locators = require('../locators/loginPageLocators');

class LoginPage {
    visit() {
        cy.visit('/');
    }

    getLogo() {
        return cy.get(locators.logo);
    }

    getUsernameInput() {
        return cy.get(locators.usernameInput);
    }

    getPasswordInput() {
        return cy.get(locators.passwordInput);
    }

    getLoginButton() {
        return cy.get(locators.loginButton);
    }

    getLoginBox() {
        return cy.get(locators.loginBox);
    }

    getErrorContainer() {
        return cy.get(locators.errorContainer);
    }

    getErrorMessage() {
        return cy.get(locators.errorMessage);
    }

    getErrorCloseButton() {
        return cy.get(locators.errorCloseButton);
    }

    // getShowPasswordToggle() {
    //     return cy.get(locators.showPasswordToggle);
    // }

    loginWithClick(username, password) {
        this.getUsernameInput().clear().type(username);
        this.getPasswordInput().clear().type(password);
        this.getLoginButton().click();
    }

    loginWithEnter(username, password) {
        this.getUsernameInput().clear().type(username);
        this.getPasswordInput().clear().type(password).type('{enter}');
    }

    closeErrorToast() {
        this.getErrorCloseButton().click();
        this.getErrorContainer().should('not.exist');
    }
}

module.exports = new LoginPage();