/*************
 * Slider
 *************/
Cypress.Commands.add(
  'dragElement',
  {
    prevSubject: 'true',
  },
  (subject, x, y) => {
    Cypress.log({
      name: 'dragElement',
    });
    cy.wrap(subject)
      .trigger('pointerdown', { button: 0 }, { force: true })
      .trigger('pointermove', x, y, { force: true });
    cy.wrap(subject).trigger('pointerup', { force: true });
  }
);

/*************
 * Burger Menu
 *************/
Cypress.Commands.add('openBurgerMenu', () => {
  cy.get('[data-test="openBurgerMenuButton"]').click();
});
