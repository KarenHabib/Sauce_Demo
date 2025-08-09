// const inventoryLocators = require('../support/locators/inventoryPageLocators');
const InventoryPage = require('../support/pages/InventoryPage');
describe('Inventory Page Tests', () => {
    beforeEach(() => {
        cy.visit('/'); // Uses baseUrl from cypress.config.js
        cy.loginByUI('standard_user', 'secret_sauce'); // Custom command
    });

    it('Verify UI elements', () => {
        InventoryPage.verifyPageUI();
    });

    // it('Click Add to Cart and verify cart badge increment & button change', () => {
    //     InventoryPage.getCartBadgeCount().then((initialCount) => {
    //         InventoryPage.clickAddToCart(inventoryLocators.addToCartBackpack);
    //         InventoryPage.verifyCartBadgeIncrement(initialCount);
    //         InventoryPage.verifyButtonChangedToRemove(inventoryLocators.removeBackpack);
    //     });
    // });

    // it('Click Remove and verify cart badge decrement & button change', () => {
    //     // Ensure item is already in cart before test
    //     InventoryPage.getCartBadgeCount().then((initialCount) => {
    //         if (initialCount === 0) {
    //             InventoryPage.clickAddToCart(inventoryLocators.addToCartBackpack);
    //             initialCount = 1;
    //         }
    //         InventoryPage.clickRemove(inventoryLocators.removeBackpack);
    //         InventoryPage.verifyCartBadgeDecrement(initialCount);
    //         InventoryPage.verifyButtonChangedToAdd(inventoryLocators.addToCartBackpack);
    //     });
    // });
});