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
  let isLoggedIn = false;

  loginForm.addEventListener("submit", (e) => {
    const Users = localStorage.getItem("Users");
    const parseUsers = JSON.parse(Users ?? "[]");
    const loginFormInputs = new FormData(e.target as HTMLFormElement);
    const email = loginFormInputs.get("emailLogin");
    const password = loginFormInputs.get("passwordLogin");
    for (let i = 0; i < parseUsers.length; i++) {
      if (
        parseUsers[i].email === email &&
        parseUsers[i].password === password
      ) {
        isLoggedIn = true;
        const currentUser = JSON.stringify(parseUsers[i]);
        localStorage.setItem("User", currentUser);
        break;
      }
    }
  });
}
