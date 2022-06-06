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
      cy.get('[data-test="burgerToggleButton"]').as('burgerToggleButton');
    });

    it('should have a visible burger toggle button', () => {
      cy.get('@burgerToggleButton').should('exist').should('be.visible');
      cy.get('@burgerToggleButton').contains('MENU');
    });

    it('should have a side navigation and be able to toggle', () => {
      /** Open the menu */
      cy.get('@burgerToggleButton').click();
      cy.get('[data-test="sideNavigation"]').as('sideNavigation');
      cy.get('@sideNavigation').should('exist').should('be.visible');

      /** Close the menu */
      cy.get('@burgerToggleButton').click();
      cy.get('@sideNavigation').should('not.be.visible');
    });

    it('should have a side navigation and contains all links inside', () => {
      cy.get('@burgerToggleButton').click();
      cy.get('[data-test="sideNavigation"]').as('sideNavigation');

      cy.get('@sideNavigation').contains('Menu');
      cy.get('@sideNavigation').contains('Restaurants');
      cy.get('@sideNavigation').contains('Delivery');
      cy.get('@sideNavigation').contains('Login');
      cy.get('@sideNavigation').contains('English');
    });
  });

  /**
   * Desktop
   */
  describe('Desktop', { viewportWidth: 1500 }, () => {
    it('should not have a visible burger toggle button', () => {
      cy.get('[data-test="burgerToggleButton"]').should('not.be.visible');
    });

    it('should have a main navigation and contains all links inside', () => {
      cy.get('[data-test="mainNavigation"]').as('mainNavigation');

      cy.get('@mainNavigation').contains('Menu');
      cy.get('@mainNavigation').contains('Restaurants');
      cy.get('@mainNavigation').contains('Delivery');
      cy.get('@mainNavigation').contains('Login');
      cy.get('@mainNavigation').contains('English');
    });
  });
});
