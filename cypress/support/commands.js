/*************
 * Global
 *************/
Cypress.Commands.add('getProductsFromAPI', () => {
  cy.intercept({
    method: 'GET',
    url: '/api/products',
  }).as('getProductsFromAPI');

  cy.wait('@getProductsFromAPI');
});

/*************
 * Slider
 *************/
Cypress.Commands.add('swipeOnceWithFingers', (sliderContainer, direction) => {
  cy.get(sliderContainer)
    .trigger('pointerdown', { which: 1 })
    .trigger('pointermove', direction)
    .trigger('pointerup');
});
