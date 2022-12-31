/// <reference types="Cypress" />

describe('Theme Switcher', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.clearLocalStorage();
  });

  /************
   * Mobile
   ***********/
  describe('Mobile', { viewportWidth: 320 }, () => {
    beforeEach(() => {
      cy.openBurgerMenu();
    });

    it('should be visible', () => {
      cy.get('[data-test="mobileNavigation"]').should('be.visible');
      cy.get('[data-test="themeSwitcherMobileButton"]').should('be.visible');
    });

    it('should switch to the dark mode', () => {
      cy.get('[color-scheme="light"]').should('exist');
      cy.get('[color-scheme-attribut="light"]').should('exist');

      /** Switch to the dark mode */
      cy.get('[data-test="themeSwitcherMobileButton"]').click();
      cy.get('[color-scheme="light"]').should('not.exist');
      cy.get('[color-scheme="dark"]').should('exist');
      cy.get('[color-scheme-attribut="dark"]').should('exist');
    });

    it('should switch to the light mode', () => {
      cy.get('[color-scheme="light"]').should('exist');
      cy.get('[color-scheme-attribut="light"]').should('exist');

      /** Switch to the dark mode */
      cy.get('[data-test="themeSwitcherMobileButton"]').click();
      cy.get('[color-scheme="dark"]').should('exist');
      cy.get('[color-scheme-attribut="dark"]').should('exist');

      /** Switch to the light mode */
      cy.get('[data-test="themeSwitcherMobileButton"]').click();
      cy.get('[color-scheme="light"]').should('exist');
      cy.get('[color-scheme-attribut="light"]').should('exist');
    });
  });

  /************
   * Desktop
   ***********/
  describe('Desktop', { viewportWidth: 1500 }, () => {
    it('should be visible', () => {
      cy.get('[data-test="desktopNavigation"]').should('be.visible');
      cy.get('[data-test="themeSwitcherDesktopButton"]').should('be.visible');
    });

    it('should switch to the dark mode', () => {
      cy.get('[color-scheme="light"]').should('exist');
      cy.get('[color-scheme-attribut="light"]').should('exist');

      /** Switch to the dark mode */
      cy.get('[data-test="themeSwitcherDesktopButton"]').click();
      cy.get('[color-scheme="light"]').should('not.exist');
      cy.get('[color-scheme="dark"]').should('exist');
      cy.get('[color-scheme-attribut="dark"]').should('exist');
    });

    it('should switch to the light mode', () => {
      cy.get('[color-scheme="light"]').should('exist');
      cy.get('[color-scheme-attribut="light"]').should('exist');

      /** Switch to the dark mode */
      cy.get('[data-test="themeSwitcherDesktopButton"]').click();
      cy.get('[color-scheme="dark"]').should('exist');
      cy.get('[color-scheme-attribut="dark"]').should('exist');

      /** Switch to the light mode */
      cy.get('[data-test="themeSwitcherDesktopButton"]').click();
      cy.get('[color-scheme="light"]').should('exist');
      cy.get('[color-scheme-attribut="light"]').should('exist');
    });
  });
});
