// CT-LOGIN-03 | Validacao de campos obrigatorios
describe("03 - Login com campos obrigatorios", () => {
  // Casos com campos em branco
  const requiredCases = [
    { scenario: "usuario e senha em branco", fixtureKey: "emptyBoth" },
    { scenario: "usuario em branco", fixtureKey: "emptyUsername" },
    { scenario: "senha em branco", fixtureKey: "emptyPassword" },
  ];

  requiredCases.forEach(({ scenario, fixtureKey }) => {
    it(`deve exibir validacao de obrigatoriedade quando houver ${scenario}`, () => {
      // Tenta login com campo vazio
      cy.fixture("users/required-fields").then((data) => {
        const credentials = data[fixtureKey];
        cy.login(credentials.username, credentials.password);
      });

      // Deve mostrar mensagem Required e ficar no login
      cy.get(".oxd-input-field-error-message")
        .should("be.visible")
        .and("contain", "Required");

      cy.url().should("include", "/auth/login");
    });
  });
});
