import { User } from "../main";

export const LoginPage = document.createElement("div");
LoginPage.innerHTML = "<h1>Login</h1>";
LoginPage.id = "login";
// import { UserDB } from "../main";
// Svg Image
const svgImage = document.createElement("img");
svgImage.innerHTML = "<img src=''";
svgImage.id = "svg-img";

// logo Image
const logoImage = document.createElement("img");
logoImage.innerHTML = "<img src='src/typescript.svg'/>";

// header 1

// Form
const loginForm = document.createElement("form");
loginForm.id = "loginForm";
loginForm.style.display = "flex";
loginForm.style.flexDirection = "column";

// Email input
const loginEmail = document.createElement("input");
loginEmail.id = "email";
loginEmail.type = "email";
loginEmail.name = "email";
loginEmail.placeholder = "Email";

// Password Input
const loginPassword = document.createElement("input");
loginPassword.id = "login-password";
loginPassword.type = "password";
loginPassword.name = "password";
loginPassword.placeholder = "Password";
loginPassword.style.marginTop = "15px";

// Login Button
const loginButton = document.createElement("button");
loginButton.id = "loginButton";
loginButton.type = "submit";
loginButton.innerText = "Login";
loginButton.style.marginTop = "15px";

// Register Link Container
const containerRegister = document.createElement("div");
containerRegister.id = "register-container";
containerRegister.style.display = "flex";
containerRegister.style.padding = "20px";
containerRegister.style.gap = "20px";

// Register Link
const registerNow = document.createElement("p");
const registerLink = document.createElement("a");
const registerNow2 = document.createElement("p");
registerNow.innerText = "No account yet?";
registerLink.innerText = "Register";
registerNow2.innerText = "here";
registerLink.href = "/matchu/register";

//Login Functionalities (Required)
// const email = document.getElementById("email");

// Rejecting Invalid Data
loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const userData = JSON.parse(localStorage.getItem("Users") as string);

  const loginData = new FormData(event.target as HTMLFormElement);
  console.log(loginData);
  const email = loginData.get("email") as string;
  const password = loginData.get("password") as string;

  if (userData.find((user: User) => user.email !== email)) {
    console.log("Invalid credentials");
    return;
  }

  if (userData.find((user: User) => user.password !== password)) {
    console.log("Invalid credentials");
    return;
  }

  // NOTE:
  if (userData.find((user: User) => user.email === email)) {
    const user = userData.find((user: User) => user.email === email);
    const userLogIn = JSON.stringify(user as User); // note
    localStorage.setItem("UserLogin", userLogIn);
  }

  window.location.href = "/matchu/dashboard";
  console.log("You successfully logged in.");
});

// Append
loginForm.appendChild(loginEmail);
loginForm.appendChild(loginPassword);
loginForm.appendChild(loginButton);
containerRegister.appendChild(registerNow);
containerRegister.appendChild(registerLink);
containerRegister.appendChild(registerNow2);
LoginPage.appendChild(loginForm);
LoginPage.appendChild(containerRegister);
