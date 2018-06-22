/// <reference types="cypress" />

/**
 *
 * @param {string} value
 * @returns {($el: JQuery) => Cypress.Chainable<JQuery>}
 */
export const edit = value => $el => {
  cy.wrap($el)
    .as("container")
    .click()
    .find("input")
    .clear()
    .type(value);
  cy.get("@container")
    .find(".fa-check")
    .click();
  return cy.get("@container");
};

/**
 *
 * @param {JQuery} $el
 * @returns {Cypress.Chainable<string>}
 */
export const getValue = $el => {
  return $el.find("span").text();
};
