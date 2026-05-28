// CT-HOME-07 | Menu do usuario
describe("11 - Menu do usuario", () => {
  beforeEach(() => {
    // Usuario logado
    cy.loginAsAdmin();
  });

  it("deve exibir opcoes do menu do usuario ao clicar no avatar", () => {
    // Abre menu do usuario
    cy.get(".oxd-userdropdown-tab").click();

    // Confirma opcoes do menu
    cy.get(".oxd-dropdown-menu").should("be.visible");
    cy.get(".oxd-userdropdown-link").contains("Logout").should("be.visible");
  });
});
