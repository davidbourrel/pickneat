/*************
 * Slider
 *************/
Cypress.Commands.add('swipeOnceWithFingers', (sliderContainer, direction) => {
  cy.get(sliderContainer)
    .trigger('pointerdown', { which: 1, force: true })
    .trigger('pointermove', direction)
    .trigger('pointerup', { force: true });
});
