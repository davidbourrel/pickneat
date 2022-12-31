/// <reference types="Cypress" />

describe('Language Switcher', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  /************
   * Mobile
   ***********/
  describe('Mobile language switcher', { viewportWidth: 320 }, () => {
    beforeEach(() => {
      cy.openBurgerMenu();
    });

    it('should be visible', () => {
      cy.get('[data-test="mobileNavigation"]').should('be.visible');

      cy.get('[data-test="langSwitcherMobileButton"]').click();
      cy.get('[data-test="langSwitcherMobileLangList"]').should('be.visible');

      cy.get('[data-test="langSwitcherMobileLangButtonEnglish"]').should(
        'be.visible'
      );
      cy.get('[data-test="langSwitcherMobileLangButtonFrench"]').should(
        'be.visible'
      );
    });

    it('should toggle between English and French', () => {
      /** Switch from EN to FR */
      cy.get('[data-test="langSwitcherMobileButton"]').click();
      cy.get('[data-test="langSwitcherMobileLangButtonFrench"]').click();
      cy.location('pathname').should('eq', '/fr');

      /** Switch from FR to EN */
      cy.get('[data-test="langSwitcherMobileButton"]').click();
      cy.get('[data-test="langSwitcherMobileLangButtonEnglish"]').click();
      cy.location('pathname').should('eq', '/');
    });
  });

  /************
   * Desktop
   ***********/
  describe('Desktop language switcher', { viewportWidth: 1500 }, () => {
    it('should be visible', () => {
      cy.get('[data-test="desktopNavigation"]').should('be.visible');

      cy.get('[data-test="langSwitcherDesktopButton"]').click();
      cy.get('[data-test="langSwitcherDesktopLangList"]').should('be.visible');

      cy.get('[data-test="langSwitcherDesktopLangButtonEnglish"]').should(
        'be.visible'
      );
      cy.get('[data-test="langSwitcherDesktopLangButtonFrench"]').should(
        'be.visible'
      );
    });

    it('should toggle between English and French', () => {
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
