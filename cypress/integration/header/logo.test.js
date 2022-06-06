/// <reference types="Cypress" />

describe('Logo', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should be visible', () => {
    cy.get('[data-test="mainLogo"]').should('exist').should('be.visible');
  });
});
