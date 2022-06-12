/// <reference types="Cypress" />

describe('Openlayers Map', () => {
  beforeEach(() => {
    cy.visit('/restaurants');
  });

  it('should be visible', () => {
    cy.get('[data-test="mapContainer"] canvas')
      .should('exist')
      .should('be.visible');
  });

  it('should have controls and be visible', () => {
    cy.get('[data-test="mapContainer"] .ol-zoom-in')
      .should('exist')
      .should('be.visible');
    cy.get('[data-test="mapContainer"] .ol-zoom-out')
      .should('exist')
      .should('be.visible');
  });

  it('should have modal and be visible', () => {
    cy.get('[data-test="mapModal"]').should('exist').should('be.visible');
  });

  it('should have modal and be able to toggle', () => {
    /** Click to close the modal */
    cy.get('[data-test="mapContainer"] canvas').click('bottomLeft');
    cy.get('[data-test="mapModal"]').should('not.be.visible');

    /** Click to re-open the modal */
    cy.get('[data-test="mapContainer"] canvas').click();
    cy.get('[data-test="mapModal"]').should('be.visible');
  });
});
