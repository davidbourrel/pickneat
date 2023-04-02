/// <reference types="Cypress" />

describe('Navigation menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /************
   * Mobile
   ***********/
  describe('Mobile navigation', { viewportWidth: 320 }, () => {
    beforeEach(() => {
      cy.get('[data-test="openBurgerMenuButton"]').as('openBurgerMenuButton');
    });

    it('should have a visible profile icon, cart count icon and a burger menu button', () => {
      /** Profile Icon */
      cy.get('[data-test="profileIcon"]').should('exist').should('be.visible');

      /** Cart Count Icon */
      cy.get('[data-test="cartCount"]').should('exist').should('be.visible');

      /** Burger Menu */
      cy.get('@openBurgerMenuButton').should('exist').should('be.visible');
      cy.get('@openBurgerMenuButton').contains('Menu');
    });

    it('should be able to toggle', () => {
      /** Open the menu */
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="mobileNavigation"]').should('be.visible');

      /** Close the menu */
      cy.get('[data-test="closeBurgerMenuButton"]').click();
      cy.get('[data-test="mobileNavigation"]').should('not.be.visible');
    });

    it('should contains all links inside', () => {
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="mobileNavigation"]').as('mobileNavigation');

      cy.get('@mobileNavigation').contains('Menu');
      cy.get('@mobileNavigation').contains('Locate');
      cy.get('@mobileNavigation').contains('Delivery');
      cy.get('@mobileNavigation').contains('English');
      cy.get('@mobileNavigation').contains('Day Mode');
      cy.get('@mobileNavigation').contains('PickN`Eat');
    });
  });

  /************
   * Desktop
   ***********/
  describe('Desktop navigation', { viewportWidth: 1500 }, () => {
    it('should not have a visible burger menu button', () => {
      cy.get('[data-test="openBurgerMenuButton"]').should('not.be.visible');
    });

    it('should have a desktop navigation and contains all links inside', () => {
      cy.get('[data-test="desktopNavigation"]').as('desktopNavigation');

      cy.get('@desktopNavigation').contains('Menu');
      cy.get('@desktopNavigation').contains('Locate');
      cy.get('@desktopNavigation').contains('Delivery');
      cy.get('@desktopNavigation').contains('English');
      cy.get('@desktopNavigation').contains('Day Mode');
      /** Cart Count Icon */
      cy.get('[data-test="cartCount"]').should('exist').should('be.visible');
      /** Profile Icon */
      cy.get('[data-test="profileIcon"]').should('exist').should('be.visible');
    });
  });
});
