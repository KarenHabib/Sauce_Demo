class CheckoutPage {

    checkCheckoutStepTwoUrl() {
        cy.url().should('include', '/checkout-step-two.html');
    }

    clickFinish() {
        cy.get('[data-test="finish"]').click();
    }

    checkCheckoutCompleteUrl() {
        cy.url().should('include', '/checkout-complete.html');
    }

    checkThankYouMessage() {
        cy.get('[data-test="complete-header"]').should('be.visible');
    }
}

module.exports = new CheckoutPage();