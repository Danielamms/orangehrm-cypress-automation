// CT-HOME-02 | Home sem login
describe("06 - Home sem autenticacao", () => {
  it("deve bloquear acesso direto a Home e redirecionar para login", () => {
    // Garante que nao existe sessao ativa
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();

    // Tenta acessar Home sem login
    cy.visitHomeWithoutAuth();

    // Deve redirecionar para login
    cy.url().should("include", "/auth/login");
    cy.get('input[name="username"]').should("be.visible");
    cy.get(".oxd-topbar").should("not.exist");
  });
});
