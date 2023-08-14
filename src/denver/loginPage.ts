import {
  emailLogin,
  passwordLogin,
  loginButton,
  anotherRegisterLink,
  loginToggle,
  toggleType
} from "./createElements";
import { User } from "../main";
export const loginForm = document.createElement("form");

if (loginForm) {
  loginForm.appendChild(emailLogin);
  loginForm.appendChild(passwordLogin);
  loginForm.appendChild(loginToggle);
  loginForm.appendChild(loginButton);
  loginForm.appendChild(anotherRegisterLink);
  let isLoggedIn = false;

  loginToggle.addEventListener("click", () => {
    toggleType(loginToggle,passwordLogin);
  });
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const Users = localStorage.getItem("Users");
    const parseUsers = JSON.parse(Users ?? "[]");
    const loginFormInputs = new FormData(e.target as HTMLFormElement);
    const email = loginFormInputs.get("emailLogin") as String;
    const password = loginFormInputs.get("passwordLogin") as String;
    for (let i = 0; i < parseUsers.length; i++) {
      if (
        parseUsers[i].email === email &&
        parseUsers[i].password === password
      ) {
        console.log("you're logged in");
        isLoggedIn = true;
        const currentUser = JSON.stringify(parseUsers[i]);
        localStorage.setItem("User", currentUser);
        location.href = `/denver/dashboard`;
      }
    }
    // if (parseUsers.find((users: User) => users.email === email)) {

    // }
  });
}
