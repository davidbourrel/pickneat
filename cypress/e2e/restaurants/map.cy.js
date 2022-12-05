/// <reference types="Cypress" />

describe('Map', () => {
  beforeEach(() => {
    cy.visit('/restaurants');

    cy.get('.leaflet-marker-icon').as('pinIcon');
  });

  it('should be visible', () => {
    cy.get('[data-test="mapContainer"] div')
      .should('exist')
      .should('be.visible');
  });

  it('should have controls and be visible', () => {
    cy.get('[data-test="mapContainer"] .leaflet-control-zoom-in')
      .should('exist')
      .should('be.visible');
    cy.get('[data-test="mapContainer"] .leaflet-control-zoom-out')
      .should('exist')
      .should('be.visible');
  });

  it('should have modal and be visible', () => {
    cy.get('@pinIcon').click();
    cy.get('[data-test="mapContainer"] .leaflet-popup')
      .should('exist')
      .should('be.visible');
  });

  it('should have modal and be able to toggle', () => {
    /** Click to open the modal */
    cy.get('@pinIcon').click();
    cy.get('[data-test="mapContainer"] .leaflet-popup').should('be.visible');

    /** Click to close the modal */
    cy.get('.leaflet-popup-close-button').click('bottomLeft');
    cy.get('[data-test="mapContainer"] .leaflet-popup').should(
      'not.be.visible'
    );
  });
});
