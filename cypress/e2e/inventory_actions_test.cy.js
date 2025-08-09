const InventoryPage = require('../support/pages/InventoryPage');
const CartPage = require('../support/pages/CartPage');
const CheckoutPage = require('../support/pages/CheckoutPage');

describe('Successful Purchase Scenario', () => {
    beforeEach(() => {
        cy.visit('/'); // Uses baseUrl from cypress.config.js
        cy.loginByUI('standard_user', 'secret_sauce'); // Custom command
    });

    describe('Cart operations', () => {
        it('add/remove items', () => {
            InventoryPage.clickAddToCart('backpack');
            InventoryPage.clickAddToCart('bikeLight');

            // Check if the cart number is 2
            InventoryPage.checkCartNumber('2');

            // Remove one item from the cart
            InventoryPage.clickRemove('bikeLight');

            // // Check if the cart number is now 1
            InventoryPage.checkCartNumber('1');
        });


        it('should navigate to the cart page', () => {
            // // Click on the cart link
            InventoryPage.clickOnCart();

            // Check if redirected to cart page
            cy.url().should('include', '/cart.html');
        });
    });

    describe('Checkout Workflow', () => {
        beforeEach(() => {
            InventoryPage.clickAddToCart('backpack');
            InventoryPage.clickOnCart();
            CartPage.clickCheckout()
        });

        it('should display checkout step one page', () => {
            CartPage.checkCheckoutStepOneUrl();
        });

        it('should show error when continuing without filling fields', () => {
            CartPage.clickContinue();
            CartPage.checkEmptyFieldsError
        });

        it('should allow filling the checkout form and finalize transaction', () => {
            CartPage.fillCheckoutForm('Karen', 'Habib', '0000');
            CartPage.clickContinue();
            CheckoutPage.checkCheckoutStepTwoUrl();
            CheckoutPage.clickFinish();
            CheckoutPage.checkCheckoutCompleteUrl();
            CheckoutPage.checkThankYouMessage();
        });
    });

});