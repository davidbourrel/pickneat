/// <reference types="Cypress" />

describe('Map', () => {
  beforeEach(() => {
    cy.visit('/restaurants');

    cy.get('.leaflet-marker-icon').as('pinIcon');
  });

  it('should be visible', () => {
    cy.get('[data-test="locationContainer"]')
      .should('exist')
      .should('be.visible');
  });

  it('should have controls and be visible', () => {
    cy.get('[data-test="locationContainer"] .leaflet-control-zoom-in')
      .should('exist')
      .should('be.visible');
    cy.get('[data-test="locationContainer"] .leaflet-control-zoom-out')
      .should('exist')
      .should('be.visible');
  });

  it('should have modal and be visible', () => {
    cy.get('[data-test="locationContainer"] .leaflet-popup')
      .should('exist')
      .should('be.visible');
  });

  it('should have modal and be able to toggle', () => {
    /** Click to close the modal */
    cy.get('.leaflet-popup-close-button').click();
    cy.get('[data-test="locationContainer"] .leaflet-popup').should(
      'not.exist'
    );

    /** Click to open the modal */
    cy.get('@pinIcon').click();
    cy.get('[data-test="locationContainer"] .leaflet-popup').should(
      'be.visible'
    );
  });
});
