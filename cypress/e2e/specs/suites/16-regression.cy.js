// Regression: cobertura completa dos fluxos principais
// Inclui login, Home, navegacao e logout

// --- Login ---
import "../login/positivos/01-login-ok.cy";
import "../login/negativos/02-login-ko.cy";
import "../login/negativos/03-login-required.cy";

// --- Home ---
import "../home/positivos/05-home-ok.cy";
import "../home/negativos/06-home-no-auth.cy";
import "../home/positivos/07-home-layout.cy";
import "../home/positivos/08-home-admin-nav.cy";
import "../home/positivos/09-home-pim-nav.cy";
import "../home/positivos/10-home-refresh.cy";
import "../home/positivos/11-home-user-menu.cy";
import "../home/positivos/12-home-widgets.cy";

// --- Sessão ---
import "../sessao/positivos/04-logout.cy";
