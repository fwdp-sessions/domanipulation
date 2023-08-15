export const RegisterPage = document.createElement("div");
RegisterPage.innerHTML = "<h1>Register</h1>";
import { UserDB, User } from "../main";
// import * as wow from "./index";
// Register here
const svgImage = document.createElement("img");
svgImage.innerHTML = "<img src=''";
svgImage.id = "svg";

// form 2
const registerForm = document.createElement("form");
registerForm.id = "registerForm";
registerForm.style.display = "flex";
registerForm.style.flexDirection = "column";

// create input email
const registerEmail = document.createElement("input");
registerEmail.id = "email";
registerEmail.type = "email";
registerEmail.name = "email";
registerEmail.placeholder = "Email";
registerEmail.style.marginBottom = "20px";
// registerEmail.required = true;

// create input password
const registerPassword = document.createElement("input");
registerPassword.id = "register-password";
registerPassword.type = "password";
registerPassword.name = "password";
registerPassword.placeholder = "Password";
registerPassword.style.marginBottom = "20px";
// registerPassword.required = true;

// create input confirm password
const confirmPassword = document.createElement("input");
confirmPassword.id = "confirm-password";
confirmPassword.type = "password";
confirmPassword.name = "password";
confirmPassword.placeholder = "Confirm password";
confirmPassword.style.marginBottom = "20px";

// register Name
const firstName = document.createElement("input");
firstName.id = "first-name";
firstName.name = "firstName";
firstName.placeholder = "First Name";
firstName.style.marginBottom = "20px";

const lastName = document.createElement("input");
lastName.id = "last-name";
lastName.name = "lastName";
lastName.placeholder = "Last Name";
lastName.style.marginBottom = "20px";

// reigsterthedata
const registerButton = document.createElement("button");
registerButton.id = "reigster-button";
registerButton.innerText = "Register";

// // Checkbox - Password (show/hide)
const checkBox1 = document.createElement("input");
checkBox1.id = "checkbox1";
checkBox1.type = "checkbox";
checkBox1.innerText = "Show Password";
checkBox1.style.position = "relative";
checkBox1.style.bottom = "19px";
checkBox1.style.left = "-78px";

// Checkbox - Confirm Password (show/hide)
const checkBox2 = document.createElement("input");
checkBox2.id = "checkbox2";
checkBox2.type = "checkbox";
checkBox2.innerText = "Show Password";
checkBox2.style.position = "relative";
checkBox2.style.bottom = "19px";
checkBox2.style.left = "-78px";

// ♿ Events

//(Show/Hide Password)
checkBox1.addEventListener("click", () => {
  if (registerPassword.type === "password") {
    registerPassword.type = "text";
  } else {
    registerPassword.type = "password";
  }
});

checkBox2.addEventListener("click", () => {
  if (confirmPassword.type === "password") {
    confirmPassword.type = "text";
  } else {
    confirmPassword.type = "password";
  }
});

// import
if (registerForm) {
  registerForm.appendChild(registerEmail);
  registerForm.appendChild(registerPassword);
  registerForm.appendChild(checkBox1);
  registerForm.appendChild(confirmPassword);
  registerForm.appendChild(checkBox2);
  registerForm.appendChild(firstName);
  registerForm.appendChild(lastName);
  registerForm.appendChild(registerButton);

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    // Register the value entered
    //Nullish Coalescent
    // const getData = JSON.parse(
    //   localStorage.getItem("Users") as string
    // ) as User[] ;

    const getData =
      (JSON.parse(localStorage.getItem("Users") as string) as User[]) || []; // Note: magreturn ug array if ever null si JSON.parse
    console.log(getData);
    const registerData = new FormData(event.target as HTMLFormElement);
    console.log(registerData);
    const email = registerData.get("email") as string;
    const password = registerData.get("password") as string;
    const firstName = registerData.get("firstName") as string;
    const lastName = registerData.get("lastName") as string;

    // if (getData !== null) {
    //   console.log(getData);
    //   // getData.find((user) => user.email === email
    // }
    if (getData.find((user) => user.email === email)) {
      console.log("Email already exist");
      return;
    }

    if (registerPassword.value !== confirmPassword.value) {
      console.log("Password is not the same!");
      return;
    }

    let userData: User = {
      email,
      password,
      firstName,
      lastName,
    };

    UserDB.push(userData);

    let stringifyData = JSON.stringify(UserDB);
    localStorage.setItem("Users", stringifyData);

    //Go to login page (window.location.href = current URL)
    window.location.href = "/matchu/login";
    console.log("You successfully registered.");
  });
}

//   if(User){
//   let parsifyData = JSON.parse(userData);
//   // Reject the Password if not the same
//   };
//   // function save(){
//   //   if (localStorage.getItem('Users') === null){
//   //     localStorage.setItem('Users', '[]')
//   //   }
// }
// Go to login page (window.location.href = current URL)
// window.location.href = "/matchu/login";
// console.log("You successfully registered.");
// // reject if meron na same email
// const emailValid = UserDB.find((user) => user.email === email);
// if (emailValid) {
//   console.log("taken na tanga");
//   return; // Abortion 3
// }

//   // Log the user
//   console.log("User registered:", newUser);
//   console.log("Update UserDB", UserDB);

//   // Go to login page (window.location.href = current URL)
//   window.location.href = "/matchu/login";
// });

// Append

// when submitting retrieve users in local storage.
// store it in an array
// everytime mag submit check if email already exist if existing dont submit show errors below the input
// check the password and confirm password matches show error if does not match. min 8  max 12
// after accepting the input push the user details inside the array
// stringify the array and save it to local storage.

// Get inputs from form => Gawin ko siyang object =>
RegisterPage.appendChild(registerForm);
