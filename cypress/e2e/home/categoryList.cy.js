/// <reference types="Cypress" />

describe('Category List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 5 (all) categories', () => {
    cy.get('[data-test="menuCategories"]')
      .children()
      .its('length')
      .should('eq', 5);
  });
});
