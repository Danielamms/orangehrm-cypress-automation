// CT-LOGIN-02 | Login com credenciais invalidas
describe("02 - Login negativo", () => {
  it("deve bloquear o acesso e exibir mensagem para credenciais invalidas", () => {
    // Usa usuario/senha invalidos
    cy.fixture("users/invalid-users").then(({ wrongPassword }) => {
      // Tenta fazer login
      cy.login(wrongPassword.username, wrongPassword.password);
    });

    // Deve mostrar erro e continuar no login
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("contain", "Invalid credentials");

    cy.url().should("include", "/auth/login");
  });
});
