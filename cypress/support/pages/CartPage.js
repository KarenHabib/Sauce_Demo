const locators = require('../locators/cartPageLocators');
class CartPage {
    clickCheckout() {
        cy.get(locators.checkout_btn).click();
    }

    //Add check added items are listed

    checkEmptyFieldsError(){
        cy.get(locators.EmptyFieldsError).should('be.visible');
    }

    checkCheckoutStepOneUrl() {
        cy.url().should('include', '/checkout-step-one.html');
    }

    fillCheckoutForm(firstName, lastName, postalCode) {
        cy.get(locators.first_name).type(firstName);
        cy.get(locators.last_name).type(lastName);
        cy.get(locators.zip).type(postalCode);
    }

    clickContinue() {
        cy.get('[type="submit"]').click();
    }

    checkCheckoutStepTwoUrl() {
        cy.url().should('include', '/checkout-step-two.html');
    }

    clickFinish() {
        cy.get(locators.finish_button).click();
    }

    checkCheckoutCompleteUrl() {
        cy.url().should('include', '/checkout-complete.html');
    }

    checkThankYouMessage() {
        cy.get(locators.greeting).should('be.visible');
    }
}

module.exports = new CartPage();