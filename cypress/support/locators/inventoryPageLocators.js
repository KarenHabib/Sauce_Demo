module.exports = {
    logo: '.app_logo',
    cartLink: '[data-test="shopping-cart-link"]',
    productsTitle: '[data-test="title"]',
    filterDropdown: '[data-test="product-sort-container"]',
    inventoryItems: '[data-test="inventory-item"]',
    products: {
        backpack: {
            add: '[data-test="add-to-cart-sauce-labs-backpack"]',
            remove: '[data-test="remove-sauce-labs-backpack"]',
        },
        bikeLight: {
            add: '[data-test="add-to-cart-sauce-labs-bike-light"]',
            remove: '[data-test="remove-sauce-labs-bike-light"]',
        }
    }
    // addToCartBackpack: '[data-test="add-to-cart-sauce-labs-backpack"]',
    // removeBackpack: '[data-test="remove-sauce-labs-backpack"]',
    // addToCartBikeLight: '[data-test="add-to-cart-sauce-labs-bike-light"]',
    // removeBikeLight: '[data-test="remove-sauce-labs-bike-light"]'
    // addToCartButton: '[data-test^="add-to-cart-"]',
    // removeButton: '[data-test^="remove-"]',
    // cartBadge: '[data-test="shopping-cart-badge]',
};