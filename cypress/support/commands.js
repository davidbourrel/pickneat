Cypress.Commands.add('SwipeOnceWithFingers', (sliderContainer, direction) => {
  cy.get(sliderContainer)
    .trigger('pointerdown', { which: 1 })
    .trigger('pointermove', direction)
    .trigger('pointerup');
});
