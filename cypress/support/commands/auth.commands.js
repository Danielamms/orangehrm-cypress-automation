const { routes } = require("../utils/routes");
const { loginSelectors } = require("../selectors/login.selectors");

// Faz login (aceita campos vazios para teste de obrigatoriedade)
Cypress.Commands.add("login", (username, password) => {
  cy.visit(routes.login);

  cy.get(loginSelectors.username, { timeout: 15000 })
    .should("be.visible")
    .clear();
  if (username) {
    cy.get(loginSelectors.username).type(username);
  }

  cy.get(loginSelectors.password, { timeout: 15000 })
    .should("be.visible")
    .clear();
  if (password) {
    cy.get(loginSelectors.password).type(password, { log: false });
  }

  cy.get(loginSelectors.submit).click();
});

// Login rapido com usuario Admin
Cypress.Commands.add("loginAsAdmin", () => {
  cy.fixture("users/valid-users").then(({ admin }) => {
    cy.login(admin.username, admin.password);
  });
  cy.url().should("include", "/dashboard");
});

// Faz logout pelo menu do usuario
Cypress.Commands.add("logout", () => {
  cy.get(".oxd-userdropdown-tab").should("be.visible").click();
  cy.get(".oxd-userdropdown-link").contains("Logout").click();
  cy.url().should("include", "/auth/login");
});
