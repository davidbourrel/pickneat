/// <reference types="Cypress" />
import '../../support/commands';

describe('Home slider', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test="sliderContainer"]').as('sliderContainer');
    cy.get('[data-test="burgerImage"]').as('firstImage');
  });

  it('should be visible', () => {
    cy.get('@sliderContainer').should('exist').should('be.visible');
  });

  describe('Slider with fingers', () => {
    it('should swipe to the third image', () => {
      cy.get('@firstImage').should('exist').should('be.visible');

      /* Swipe twice to the left to not be able to see the first image */
      cy.get('@sliderContainer').dragElement(-200, 0);
      cy.get('@sliderContainer').dragElement(-200, 0);
      cy.get('@firstImage').should('not.be.visible');
    });

    it('should comeback to the first image', () => {
      cy.get('@firstImage').should('be.visible');
      cy.get('@sliderContainer').dragElement(-200, 0);
      cy.get('@sliderContainer').dragElement(-200, 0);
      cy.get('@firstImage').should('not.be.visible');

      /* Swipe twice to the right to be able to see the first image again */
      cy.get('@sliderContainer').dragElement(800, 0);
      cy.get('@sliderContainer').dragElement(800, 0);
      cy.get('@firstImage').should('be.visible');
    });
  });

  describe('Slider with controls', () => {
    beforeEach(() => {
      cy.get('.swiper-button-prev').as('prevButton');
      cy.get('.swiper-button-next').as('nextButton');
    });

    it('should have a next and previous buttons', () => {
      cy.get('@prevButton').should('exist').should('be.visible');
      cy.get('@nextButton').should('exist').should('be.visible');
    });

    it('should swipe to the third image', () => {
      cy.get('@firstImage').should('be.visible');

      /* Click twice on the next button to not see the first image */
      cy.get('@nextButton').click().click();
      cy.get('@firstImage').should('not.be.visible');
    });

    it('should comeback to the first image', () => {
      cy.get('@firstImage').should('be.visible');
      cy.get('@nextButton').click().click();
      cy.get('@firstImage').should('not.be.visible');

      /* Click twice to the prev button to be able to see the first image again */
      cy.get('@prevButton').click().click();
      cy.get('@firstImage').should('be.visible');
    });
  });
});
