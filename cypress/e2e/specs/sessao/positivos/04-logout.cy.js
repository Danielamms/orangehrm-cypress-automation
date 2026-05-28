// CT-SESSAO-01 | Logout com sucesso
describe("04 - Logout", () => {
  beforeEach(() => {
    // Usuario ja logado
    cy.loginAsAdmin();
  });

  it("deve encerrar a sessao e retornar para a tela de login", () => {
    // Ignora erro conhecido da aplicacao demo no logout
    cy.on("uncaught:exception", (err) => {
      if (err.message.includes("reading 'response'")) {
        return false;
      }
    });

    // Faz logout
    cy.logout();

    // Confirma retorno para tela de login
    cy.url().should("include", "/auth/login");
    cy.get('input[name="username"]').should("be.visible");
  });
});
