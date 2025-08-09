
const loginPage = require('../support/pages/LoginPage');

describe('Sauce Demo — Launch page & Login flows', () => {
    beforeEach(() => {
        // cy.allure().feature('Login Tests').story('Launch and Login Scenarios');
        loginPage.visit();
    });

    it('Launch page shows logo and login elements', () => {
        // cy.allure().severity('critical').description('Verify logo and login UI elements are visible');
        loginPage.getLogo().should('be.visible').and('contain.text', 'Swag Labs');
        loginPage.getLoginBox().should('be.visible');
        loginPage.getUsernameInput().should('be.visible').and('have.attr', 'placeholder', 'Username');
        loginPage.getPasswordInput().should('be.visible').and('have.attr', 'placeholder', 'Password');
        loginPage.getLoginButton().should('be.visible').and('have.value', 'Login');
    });

    context('Successful login (click and ENTER)', () => {
        before(() => {
            cy.fixture('users').then(f => Cypress.env('usersFixture', f));
        });

        const testLogin = (method) => {
            it(`Valid users should log in using ${method}`, () => {
                // cy.allure().severity('blocker').description(`Test login flow using ${method}`);
                const f = Cypress.env('usersFixture');
                f.validUsers.forEach(user => {
                    if (method === 'click') {
                        loginPage.loginWithClick(user, f.password);
                    } else {
                        loginPage.loginWithEnter(user, f.password);
                    }
                    cy.url().should('include', '/inventory.html');
                    // take a screenshot of inventory page for reporting
                    cy.screenshot(`inventory-${user}`, { capture: 'runner' });
                    // return to login for next user
                    cy.visit('/');
                });
            });
        };

        testLogin('click');
        testLogin('ENTER');
    });

    context('Negative login cases', () => {
        beforeEach(() => {
            cy.fixture('users').then(f => Cypress.env('usersFixture', f));
        });

        it('Wrong username, correct password', () => {
            // cy.allure().severity('normal');
            const f = Cypress.env('usersFixture');
            loginPage.loginWithClick(f.invalidUser, f.password);

            loginPage.getErrorMessage()
                .should('be.visible')
                .and('contain.text', 'Username and password do not match any user in this service');

            loginPage.closeErrorToast();
        });

        it('Locked out user, correct password', () => {
            // cy.allure().severity('normal');
            const f = Cypress.env('usersFixture');
            loginPage.loginWithClick(f.lockedUser, f.password);

            loginPage.getErrorMessage()
                .should('be.visible')
                .and('contain.text', 'Sorry, this user has been locked out.');

            loginPage.closeErrorToast();
        });

        it('Correct username, wrong password', () => {
            // cy.allure().severity('normal');
            const f = Cypress.env('usersFixture');
            loginPage.loginWithClick(f.validUsers[0], 'wrong_password');

            loginPage.getErrorMessage()
                .should('be.visible')
                .and('contain.text', 'Username and password do not match any user in this service');

            loginPage.closeErrorToast();
        });

        it('Empty username and password', () => {
            // cy.allure().severity('normal');
            loginPage.getUsernameInput().clear();
            loginPage.getPasswordInput().clear();
            loginPage.getLoginButton().click();

            loginPage.getErrorMessage()
                .should('be.visible')
                .and('contain.text', 'Username is required');

            loginPage.closeErrorToast();
        });

        it('Valid username and empty password', () => {
            // cy. allure().severity('normal');
            loginPage.getUsernameInput().clear().type('standard_user');
            loginPage.getPasswordInput().clear();
            loginPage.getLoginButton().click();

            loginPage.getErrorMessage()
                .should('be.visible')
                .and('contain.text', 'Password is required');

            loginPage.closeErrorToast();
        });
    });

});