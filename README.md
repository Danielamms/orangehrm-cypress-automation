## Resumo

Projeto de automação E2E do OrangeHRM com Cypress (JavaScript), organizado para QA Júnior/Pleno com foco em testes críticos, legibilidade e manutenção.

### Cobertura implementada
- **Login:** válido, inválido e campos obrigatórios
- **Home:** acesso autenticado, bloqueio sem sessão, layout, navegação Admin/PIM, refresh, menu do usuário e widgets
- **Sessão:** logout

### Estratégia de priorização (ISTQB)
- **Smoke (P0):** fluxos críticos de negócio e segurança
- **Regression (P1):** cobertura funcional ampliada para reduzir regressão

### Estimativa de esforço (ISTQB)
- Estimativa baseada em risco e por fase do teste (modelagem, automação, execução e análise).
- Fórmula usada: **(Design + Automação + Execução/Análise) x quantidade de testes + 25% de reserva**.
- Para os 12 cenários implementados, a estimativa total é de **aprox. 26 horas**.

### Arquitetura
- `cypress/e2e/specs` (login, home, sessao, suites)
- `cypress/support/commands` (comandos reutilizáveis)
- `cypress/support/selectors` (seletores centralizados)
- `cypress/support/utils` (rotas/utilitários)
- `cypress/fixtures` (massa de teste)

### Relatórios e CI
- Integração com **Allure** para análise de resultados
- **Jenkinsfile** com pipeline: Install -> Smoke -> Regression (opcional) -> Allure -> Archive Artifacts

### Validação de webhook
- Commit de teste realizado para validar o disparo automático do Jenkins via push no GitHub.
- Trigger automático configurado via Poll SCM devido restrição de acesso externo ao Jenkins local para webhook.
