// CT-LOGIN-01 | Login com sucesso
describe("01 - Login positivo", () => {
  it("deve permitir login com credenciais validas e redirecionar para a Home", () => {
    // Usa um usuario valido
    cy.fixture("users/valid-users").then(({ admin }) => {
      // Faz login
      cy.login(admin.username, admin.password);
    });

    // Confirma que entrou na Home
    cy.url().should("include", "/dashboard");
    cy.get(".oxd-topbar-header-breadcrumb").should("be.visible");
    cy.get(".oxd-userdropdown-tab").should("be.visible");
  });
});
