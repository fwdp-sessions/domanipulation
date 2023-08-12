import { emailLogin, passwordLogin, loginButton } from "./createElements";
export const loginForm = document.createElement("form");

if (loginForm) {
  loginForm.appendChild(emailLogin);
  loginForm.appendChild(passwordLogin);
  loginForm.appendChild(loginButton);
}
