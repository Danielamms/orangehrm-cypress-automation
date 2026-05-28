// CT-HOME-06 | Sessao apos refresh
describe("10 - Sessao na Home", () => {
  beforeEach(() => {
    // Usuario logado
    cy.loginAsAdmin();
  });

  it("deve manter o usuario autenticado apos atualizar a Home", () => {
    // Atualiza pagina
    cy.reload();

    // Sessao continua ativa
    cy.url().should("include", "/dashboard");
    cy.assertHomeLayoutVisible();
  });
});
