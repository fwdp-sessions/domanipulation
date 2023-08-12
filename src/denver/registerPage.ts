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
    let passwordConfirm: boolean = false;
    const Users = localStorage.getItem("Users");

    const registerFormInputs = new FormData(e.target as HTMLFormElement);
    const email = registerFormInputs.get("email") as string;
    const password = registerFormInputs.get("password") as string;
    const firstName = registerFormInputs.get("firstName") as string;
    const lastName = registerFormInputs.get("lastName") as string;
    const address = registerFormInputs.get("address") as string;
    let checkAddress:string
    if(address){
      checkAddress = address
    }
    console.log(UserDB);
    UserDB.push({
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      address: address,
    } as User); 
    console.log(UserDB);// can direclty push the input values
    // if (emailExist === false && passwordConfirm === true) {

    // }
    const stringifyUserDB = JSON.stringify(UserDB);
    localStorage.setItem("Users", stringifyUserDB);
  });
}
