// CT-HOME-04 | Navegacao para Admin
describe("08 - Navegacao Admin", () => {
  beforeEach(() => {
    // Usuario logado
    cy.loginAsAdmin();
  });

  it("deve acessar o modulo Admin pelo menu lateral", () => {
    // Clica em Admin no menu lateral
    cy.openModuleFromSidebar("Admin");

    // Confirma que abriu modulo Admin
    cy.url().should("include", "/admin/");
    cy.contains("h6", "Admin").should("be.visible");
  });
});
