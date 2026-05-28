// CT-HOME-05 | Navegacao para PIM
describe("09 - Navegacao PIM", () => {
  beforeEach(() => {
    // Usuario logado
    cy.loginAsAdmin();
  });

  it("deve acessar o modulo PIM pelo menu lateral", () => {
    // Clica em PIM no menu lateral
    cy.openModuleFromSidebar("PIM");

    // Confirma que abriu modulo PIM
    cy.url().should("include", "/pim/");
    cy.contains("h6", "PIM").should("be.visible");
  });
});
