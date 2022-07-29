/// <reference types="Cypress" />

describe('Theme Switcher', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  /**
   * Mobile
   */
  describe('Mobile', { viewportWidth: 320 }, () => {
    beforeEach(() => {
      /** Open the side navigation before each tests */
      cy.get('[data-test="burgerToggleButton"]').as('burgerToggleButton');
    });

    it('should be visible', () => {
      cy.get('@burgerToggleButton').click();

      cy.get('[data-test="sideNavigation"]').should('be.visible');
      cy.get('[data-test="themeSwitcherMobileButton"]').should('be.visible');
    });

    it('should switch to the dark mode', () => {
      cy.get('@burgerToggleButton').click();

      cy.get('[data-theme="light"]').should('exist');
      cy.get('[data-test="themeSwitcherMobileButton"]').click();
      cy.get('[data-theme="light"]').should('not.exist');
      cy.get('[data-theme="dark"]').should('exist');
    });

    it('should switch to the light mode', () => {
      cy.get('@burgerToggleButton').click();

      cy.get('[data-theme="light"]').should('exist');
      /** Switch to the dark mode */
      cy.get('[data-test="themeSwitcherMobileButton"]').click();
      cy.get('[data-theme="dark"]').should('exist');

      /** Switch to the light mode */
      cy.get('[data-test="themeSwitcherMobileButton"]').click();
      cy.get('[data-theme="light"]').should('exist');
    });
  });

  /**
   * Desktop
   */
  describe('Desktop', { viewportWidth: 1500 }, () => {
    it('should be visible', () => {
      cy.get('[data-test="mainNavigation"]').should('be.visible');
      cy.get('[data-test="themeSwitcherDesktopButton"]').should('be.visible');
    });

    it('should switch to the dark mode', () => {
      cy.get('[data-theme="light"]').should('exist');
      cy.get('[data-test="themeSwitcherDesktopButton"]').click();
      cy.get('[data-theme="light"]').should('not.exist');
      cy.get('[data-theme="dark"]').should('exist');
    });

    it('should switch to the light mode', () => {
      cy.get('[data-theme="light"]').should('exist');
      /** Switch to the dark mode */
      cy.get('[data-test="themeSwitcherDesktopButton"]').click();
      cy.get('[data-theme="dark"]').should('exist');

      /** Switch to the light mode */
      cy.get('[data-test="themeSwitcherDesktopButton"]').click();
      cy.get('[data-theme="light"]').should('exist');
    });
  });
});
