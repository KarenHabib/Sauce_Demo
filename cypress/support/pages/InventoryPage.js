const inventoryLocators = require('../locators/inventoryPageLocators');
class InventoryPage {
    constructor() {
        this.cartLink = '[data-test="shopping-cart-link"]';
        this.cartBadge = '[data-test="shopping-cart-badge"]';
        //     this.inventoryContainer = '[data-test="inventory-container"]';
        //     this.addToCartButtons = '[data-test^="add-to-cart"]'; // Selector for add to cart buttons
        //     this.cartContainer = '#shopping_cart_container';
        //     this.removeButtons = '[data-test^="remove"]'; 
    }

    async checkCartNumber(expectedNumber) {
        await cy.get(this.cartBadge).should('have.text', expectedNumber);
    }

    async clickOnCart() {
        await cy.get(this.cartLink).click();
    }

    verifyPageUI() {
        cy.get(inventoryLocators.logo).should('be.visible');
        cy.get(inventoryLocators.cartLink).should('be.visible');
        cy.get(inventoryLocators.productsTitle)
            .should('be.visible')
            .and('contain.text', 'Products');
        cy.get(inventoryLocators.filterDropdown).should('be.visible');
        cy.url().should('include', '/inventory.html');
        cy.get(inventoryLocators.inventoryItems).should('have.length.greaterThan', 0);
    }

    clickAddToCart(product) {
        cy.get(inventoryLocators.products[product].add).click();
    }

    clickRemove(product) {
        cy.get(inventoryLocators.products[product].remove).click();
    }

    // clickAddToCart(locator) {
    //     cy.get(locator).should('be.visible').click();
    // }

    // clickRemove(locator) {
    //     cy.get(locator).should('be.visible').click();
    // }

    // async addItemToCart(itemSelector) {
    //     await cy.get(this.inventoryContainer)
    //         .find(itemSelector)
    //         .find(this.addToCartButtons)
    //         .click();
    // }

    // verifyCartBadgeIncrement(previousCount) {
    //     cy.get(inventoryLocators.cartBadge)
    //         .invoke('text')
    //         .then((text) => {
    //             const newCount = parseInt(text, 10);
    //             expect(newCount).to.eq(previousCount + 1);
    //         });
    // }

    // verifyCartBadgeDecrement(previousCount) {
    //     cy.get(inventoryLocators.cartBadge).then(($badge) => {
    //         if ($badge.length) {
    //             cy.wrap($badge)
    //                 .invoke('text')
    //                 .then((text) => {
    //                     const newCount = parseInt(text, 10);
    //                     expect(newCount).to.eq(previousCount - 1);
    //                 });
    //         } else {
    //             // If badge disappears, count should be 0
    //             expect(previousCount - 1).to.eq(0);
    //         }
    //     });
    // }

    //     getCartBadgeCount() {
    //         return cy.get(inventoryLocators.cartBadge).then(($badge) => {
    //             if ($badge.length) {
    //                 return parseInt($badge.text(), 10);
    //             }
    //             return 0;
    //         });
    //     }

    //     verifyButtonChangedToRemove(removeLocator) {
    //         cy.get(removeLocator)
    //             .should('be.visible')
    //             .and('contain.text', 'Remove');
    //     }

    //     verifyButtonChangedToAdd(addLocator) {
    //         cy.get(addLocator)
    //             .should('be.visible')
    //             .and('contain.text', 'Add to cart');
    //     }

    // async removeItemFromCart(itemSelector) {
    //     await cy.get(this.cartContainer)
    //         .find(itemSelector)
    //         .find(this.removeButtons)
    //         .click();
    // }
}

module.exports = new InventoryPage();