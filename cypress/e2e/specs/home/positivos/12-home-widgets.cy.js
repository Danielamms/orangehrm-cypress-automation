// CT-HOME-08 | Widgets da Home
describe("12 - Widgets da Home", () => {
  beforeEach(() => {
    // Usuario logado
    cy.loginAsAdmin();
  });

  it("deve exibir widgets principais no dashboard", () => {
    // Deve mostrar pelo menos um widget
    cy.get(".orangehrm-dashboard-widget")
      .should("have.length.at.least", 1)
      .and("be.visible");
  });
});
