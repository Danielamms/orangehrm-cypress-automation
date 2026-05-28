// CT-HOME-03 | Layout principal da Home
describe("07 - Layout da Home", () => {
  beforeEach(() => {
    // Usuario logado
    cy.loginAsAdmin();
  });

  it("deve exibir header, menu lateral e area principal da Home", () => {
    // Valida header e menu lateral
    cy.assertHomeLayoutVisible();
    // Valida area principal pelos widgets
    cy.get(".orangehrm-dashboard-widget")
      .should("have.length.at.least", 1)
      .and("be.visible");
  });
});
