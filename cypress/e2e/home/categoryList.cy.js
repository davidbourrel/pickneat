/// <reference types="Cypress" />

describe('Category List', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should have a valid API', () => {
    cy.getProductsFromAPI()
      .its('response')
      .should('deep.include', {
        statusCode: 200,
        statusMessage: 'OK',
      })
      .and('have.property', 'body')
      .then((body) => {
        expect(body).to.be.an('array');
      });
  });

  it('should have 5 (all) categories', () => {
    cy.getProductsFromAPI();

    cy.get('[data-test="categoryList"]')
      .children()
      .its('length')
      .should('eq', 5);
  });
});
