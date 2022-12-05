/// <reference types="Cypress" />

describe('Category List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have 5 (all) categories', () => {
    cy.get('[data-test="categoryList"]')
      .children()
      .its('length')
      .should('eq', 5);
  });
});
