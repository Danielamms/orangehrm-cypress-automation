const { routes } = require("../utils/routes");
const { homeSelectors } = require("../selectors/home.selectors");

// Abre Home sem login (teste de seguranca)
Cypress.Commands.add("visitHomeWithoutAuth", () => {
  cy.visit(routes.dashboard, { failOnStatusCode: false });
});

// Valida elementos principais da Home
Cypress.Commands.add("assertHomeLayoutVisible", () => {
  cy.get(homeSelectors.topbar).should("be.visible");
  cy.get(homeSelectors.sidepanel).should("be.visible");
  cy.get(homeSelectors.breadcrumb).should("be.visible");
  cy.get(homeSelectors.userDropdown).should("be.visible");
});

// Abre um modulo pelo menu lateral
Cypress.Commands.add("openModuleFromSidebar", (moduleName) => {
  cy.get(homeSelectors.menuItem).contains(moduleName).click();
});
