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

    it('should have a side navigation and be able to toggle', () => {
      /** Open the menu */
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="sideNavigation"]').as('sideNavigation');
      cy.get('@sideNavigation').should('exist').should('be.visible');

      /** Close the menu */
      cy.get('@closeBurgerMenuButton').click();
      cy.get('@sideNavigation').should('not.be.visible');
    });

    it('should have a side navigation and contains all links inside', () => {
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="sideNavigation"]').as('sideNavigation');

      cy.get('@sideNavigation').contains('Menu');
      cy.get('@sideNavigation').contains('Restaurants');
      cy.get('@sideNavigation').contains('Delivery');
      cy.get('@sideNavigation').contains('English');
      cy.get('@sideNavigation').contains('Theme');
      cy.get('@sideNavigation').contains('Login');
    });
  });

  /**
   * Desktop
   */
  describe('Desktop', { viewportWidth: 1500 }, () => {
    it('should not have a visible burger toggle button', () => {
      cy.get('[data-test="openBurgerMenuButton"]').should('not.be.visible');
    });

    it('should have a main navigation and contains all links inside', () => {
      cy.get('[data-test="mainNavigation"]').as('mainNavigation');

      cy.get('@mainNavigation').contains('Menu');
      cy.get('@mainNavigation').contains('Restaurants');
      cy.get('@mainNavigation').contains('Delivery');
      cy.get('@mainNavigation').contains('English');
      cy.get('@mainNavigation').contains('Theme');
      cy.get('@mainNavigation').contains('Login');
    });
  });
});
