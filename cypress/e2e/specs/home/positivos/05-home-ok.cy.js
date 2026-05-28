// CT-HOME-01 | Home apos login
describe("05 - Home positivo", () => {
  it("deve exibir a Home apos login com usuario valido", () => {
    // Faz login com usuario valido
    cy.loginAsAdmin();

    // Confirma que esta na Home
    cy.url().should("include", "/dashboard");
    cy.assertHomeLayoutVisible();
  });
});
