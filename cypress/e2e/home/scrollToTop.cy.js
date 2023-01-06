/// <reference types="Cypress" />

describe('Scroll to top button', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should not exist on top of the page', () => {
    cy.scrollTo('top');
    cy.get('[data-test="scrollToTopButton"]').should('not.be.visible');
  });

  it('should scroll to the top of the page', () => {
    cy.scrollTo('bottom');
    cy.get('[data-test="scrollToTopButton"]').should('be.visible');

    cy.get('[data-test="scrollToTopButton"]').click().should('not.be.visible');
  });
});
