/// <reference types="cypress" />

import * as h from "../helpers";

describe("InlineField", () => {
  beforeEach(() => {
    cy.visit("http://localhost:6060/#!/InlineEditable");
  });

  it("should allow editing through helpers", () => {
    cy.get("[data-testid=email]")
      .then(h.components.InlineEditable.edit("g.a@gmail.com"))
      .then(h.components.InlineEditable.getValue)
      .should("equal", "g.a@gmail.com");
  });
});
