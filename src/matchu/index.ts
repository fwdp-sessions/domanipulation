export const Page = document.createElement("div"); // Do not touch this line

import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { DashboardPage } from "./dashboard";

//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here

Page.innerHTML = "<h1>Matchu.</h1>";

// BUTTON 1
let count = 0;
const button1 = document.createElement("button");
button1.innerText = "Counter";
button1.addEventListener("click", () => {
  count++;
  button1.innerText = `clicked ${count} times!`;
});

// Embed the svg file
const logoVite = document.createElement("div");
logoVite.innerHTML = "<img src='/public/vite.svg'>";
logoVite.id = "logo";

// BUTTON 2
const button2 = document.createElement("button");
button2.innerText = "Toggle Vite Logo";
button2.addEventListener("click", () => {
  if (logoVite.style.display === "none") {
    logoVite.style.display = "block";
  } else {
    logoVite.style.display = "none";
  }
});

// Display Logo if Number is Even
button1.addEventListener("click", () => {
  if (count % 2 == 0) {
    logoVite.style.display = "block";
  } else {
    logoVite.style.display = "none";
  }
});

// Create FORM
const myForm = document.createElement("form");
myForm.id = "Form1";

// Create Password input
const inputPassword = document.createElement("input");
inputPassword.id = "password";
inputPassword.type = "password";
inputPassword.name = "password";
inputPassword.placeholder = "Enter your password";

// Create Submit button
const submitButton = document.createElement("input");
submitButton.type = "submit";
submitButton.name = "submit";
submitButton.placeholder = "SUBMIT";

// Create the BUTTON 3
const button3 = document.createElement("input");
button3.type = "checkbox";
button3.id = "show-hide";
button3.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
  } else {
    inputPassword.type = "password";
  }
});

// Exporting the pages
const loginLink = document.createElement("a");
const registerLink = document.createElement("a");
const dashboardLink = document.createElement("a");

loginLink.href = "/matchu/login";
dashboardLink.href = "/matchu/dashboard";
registerLink.href = "/matchu/register";

registerLink.innerText = "Register";
dashboardLink.innerText = "Dashboard";
loginLink.innerText = "Login";

myForm.appendChild(inputPassword);
myForm.appendChild(button2);
Page.appendChild(button1);
Page.appendChild(logoVite);
Page.appendChild(myForm);
Page.appendChild(button3);

Page.appendChild(loginLink);
Page.appendChild(registerLink);
Page.appendChild(dashboardLink);
// Code should end here
//--------------------------------------------
export { LoginPage as LoginPage };
export { RegisterPage as RegisterPage };
export { DashboardPage as DashboardPage };
export default Page; // Do not touch this line
