// Smoke: testes mais importantes e rápidos
// Rodar antes de merge/deploy

// Login
import "../login/positivos/01-login-ok.cy";
import "../login/negativos/02-login-ko.cy";

// Home
import "../home/positivos/05-home-ok.cy";
import "../home/negativos/06-home-no-auth.cy";
import "../home/positivos/08-home-admin-nav.cy";
