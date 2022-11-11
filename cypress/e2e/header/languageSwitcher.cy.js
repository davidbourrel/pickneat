/// <reference types="Cypress" />

describe('Language Switcher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /**
   * Mobile
   */
  describe('Mobile', { viewportWidth: 320 }, () => {
    beforeEach(() => {
      /** Open the side navigation before each tests */
      cy.get('[data-test="openBurgerMenuButton"]').as('openBurgerMenuButton');
    });

    it('should be visible', () => {
      cy.get('@openBurgerMenuButton').click();

      cy.get('[data-test="sideNavigation"]').should('be.visible');
      cy.get('[data-test="langSwitcherMobileButton"]').click();
      cy.get('[data-test="langSwitcherMobileLangList"]').should('be.visible');
      cy.get('[data-test="langSwitcherMobileLangButtonEnglish"]').should(
        'be.visible'
      );
      cy.get('[data-test="langSwitcherMobileLangButtonFrench"]').should(
        'be.visible'
      );
    });

    it('should toggle between English and French language', () => {
      cy.get('@openBurgerMenuButton').click();
      cy.get('[data-test="langSwitcherMobileButton"]').as(
        'langSwitcherMobileButton'
      );

      /** Switch from EN to FR */
      cy.get('@langSwitcherMobileButton').click();
      cy.get('[data-test="langSwitcherMobileLangButtonFrench"]').click();
      cy.location('pathname').should('eq', '/fr');

      /** Switch from FR to EN */
      cy.get('@langSwitcherMobileButton').click();
      cy.get('[data-test="langSwitcherMobileLangButtonEnglish"]').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  /**
   * Desktop
   */
  describe('Desktop', { viewportWidth: 1500 }, () => {
    it('should be visible', () => {
      cy.get('[data-test="mainNavigation"]').should('be.visible');
      cy.get('[data-test="langSwitcherDesktopButton"]').click();
      cy.get('[data-test="langSwitcherDesktopLangList"]').should('be.visible');
      cy.get('[data-test="langSwitcherDesktopLangButtonEnglish"]').should(
        'be.visible'
      );
      cy.get('[data-test="langSwitcherDesktopLangButtonFrench"]').should(
        'be.visible'
      );
    });

    it('should toggle between English and French language', () => {
      /** Switch from EN to FR */
      cy.get('[data-test="langSwitcherDesktopButton"]').click();
      cy.get('[data-test="langSwitcherDesktopLangButtonFrench"]').click();
      cy.location('pathname').should('eq', '/fr');

      /** Switch from FR to EN */
      cy.get('[data-test="langSwitcherDesktopButton"]').click();
      cy.get('[data-test="langSwitcherDesktopLangButtonEnglish"]').click();
      cy.location('pathname').should('eq', '/');
    });
  });
});
