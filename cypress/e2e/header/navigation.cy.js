/// <reference types="Cypress" />

describe('Navigation menu', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /**
   * Mobile
   */
  describe('Mobile', { viewportWidth: 320 }, () => {
    beforeEach(() => {
      cy.get('[data-test="openBurgerMenuButton"]').as('openBurgerMenuButton');
      cy.get('[data-test="closeBurgerMenuButton"]').as('closeBurgerMenuButton');
    });

    it('should have a visible burger toggle button', () => {
      cy.get('@openBurgerMenuButton').should('exist').should('be.visible');
      cy.get('@openBurgerMenuButton').contains('Menu');
    });

    it('should have a mobile navigation and be able to toggle', () => {
      /** Open the menu */
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="mobileNavigation"]').as('mobileNavigation');
      cy.get('@mobileNavigation').should('exist').should('be.visible');

      /** Close the menu */
      cy.get('@closeBurgerMenuButton').click();
      cy.get('@mobileNavigation').should('not.be.visible');
    });

    it('should have a mobile navigation and contains all links inside', () => {
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="mobileNavigation"]').as('mobileNavigation');

      cy.get('@mobileNavigation').contains('Menu');
      cy.get('@mobileNavigation').contains('Locate');
      cy.get('@mobileNavigation').contains('Delivery');
      cy.get('@mobileNavigation').contains('English');
      cy.get('@mobileNavigation').contains('Theme');
      cy.get('@mobileNavigation').contains('Login');
    });
  });

  /**
   * Desktop
   */
  describe('Desktop', { viewportWidth: 1500 }, () => {
    it('should not have a visible burger toggle button', () => {
      cy.get('[data-test="openBurgerMenuButton"]').should('not.be.visible');
    });

    it('should have a desktop navigation and contains all links inside', () => {
      cy.get('[data-test="desktopNavigation"]').as('desktopNavigation');

      cy.get('@desktopNavigation').contains('Menu');
      cy.get('@desktopNavigation').contains('Locate');
      cy.get('@desktopNavigation').contains('Delivery');
      cy.get('@desktopNavigation').contains('English');
      cy.get('@desktopNavigation').contains('Theme');
      cy.get('@desktopNavigation').contains('Login');
    });
  });
});
