import "./denverStyle.css";
import {
  formTitle,
  email,
  password,
  confirmPassword,
  firstName,
  lastName,
  address,
  registerButton,
} from "./createElements";
import { UserDB, User } from "../main";

export const registerForm = document.createElement("form");

if (registerForm) {
  registerForm.appendChild(formTitle);
  registerForm.appendChild(email);
  registerForm.appendChild(password);
  registerForm.appendChild(confirmPassword);
  registerForm.appendChild(firstName);
  registerForm.appendChild(lastName);
  registerForm.appendChild(address);
  registerForm.appendChild(registerButton);

  registerForm.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();
    let emailExist: boolean = false;
    let passwordMatch: boolean = true;

    const Users = localStorage.getItem("Users");
    const parseUsers = JSON.parse(Users ?? "[]");
    const registerFormInputs = new FormData(e.target as HTMLFormElement);
    const email = registerFormInputs.get("email") as string;
    const password = registerFormInputs.get("password") as string;
    const confirmPassword = registerFormInputs.get("confirmPassword") as string;
    const firstName = registerFormInputs.get("firstName") as string;
    const lastName = registerFormInputs.get("lastName") as string;
    const address = registerFormInputs.get("address") as string;

    const userDetails: User = {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    };
    
    if (parseUsers.find((users: User) => users.email === email)) {
      emailExist = true;
      console.log()
    }
    if (password !== confirmPassword) {
      passwordMatch = false;
    }
    if (emailExist === false && passwordMatch === true) {
      UserDB.push(userDetails);

      const stringifyUserDB = JSON.stringify([...parseUsers, UserDB[UserDB.length - 1]]);
      localStorage.setItem("Users", stringifyUserDB);
      location.href = `/denver/login`;
    }
  });
}
