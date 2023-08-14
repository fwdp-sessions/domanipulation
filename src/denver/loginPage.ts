import {
  emailLogin,
  passwordLogin,
  loginButton,
  anotherRegisterLink,
} from "./createElements";
export const loginForm = document.createElement("form");

if (loginForm) {
  loginForm.appendChild(emailLogin);
  loginForm.appendChild(passwordLogin);
  loginForm.appendChild(loginButton);
  loginForm.appendChild(anotherRegisterLink);

 
 
  

 
}
