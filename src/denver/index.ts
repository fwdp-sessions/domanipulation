export const Page = document.createElement("div"); // Do not touch this line
import { loginForm } from "./loginPage";
import { registerForm } from "./registerPage";
import { dashboard } from "./dashboard";

import viteLogo from "/vite.svg";
//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here

if (Page) {
  //create element
  const counterButton = document.createElement("button");
  const toggleLogoButton = document.createElement("button");
  const logo = document.createElement("img");
  const form = document.createElement("form");
  const passwordInput = document.createElement("input");
  const formSubmitButton = document.createElement("button");
  const triggerPasswordType = document.createElement("button");

  const loginPageLink = document.createElement("a");
  const registerPageLink = document.createElement("a");
  const dashboardPageLink = document.createElement("a");

  Page.appendChild(loginPageLink);
  Page.appendChild(registerPageLink);
  Page.appendChild(dashboardPageLink);
  Page.appendChild(counterButton);
  Page.appendChild(toggleLogoButton);
  Page.appendChild(form);
  form.appendChild(passwordInput);
  form.appendChild(formSubmitButton);
  Page.appendChild(triggerPasswordType);

  toggleLogoButton.textContent = `Toggle Vite Logo`;
  counterButton.textContent = `clicked 69 times`;
  formSubmitButton.textContent = `Submit`;
  triggerPasswordType.textContent = `Toggle Password Type`;
  loginPageLink.textContent = `Login Page`;
  registerPageLink.textContent = `Register Page`;
  dashboardPageLink.textContent = `Dashboard Page`;

  loginPageLink.href = `/denver/login`;
  registerPageLink.href = `/denver/register`;
  dashboardPageLink.href = `/denver/dashboard`;

  logo.src = viteLogo;

  passwordInput.type = "password";

  let isPasswordType: boolean = true;

  let clicks: number = 0;
  counterButton.addEventListener("click", () => {
    clicks++;
    counterButton.textContent = `clicked ${clicks} time`;
    if (clicks > 1) {
      counterButton.textContent = `clicked ${clicks} times`;
    }
    showLogoEven(clicks, logo);
  });

  toggleLogoButton.addEventListener("click", () => {
    if (Page.contains(logo)) {
      Page.removeChild(logo);
    } else {
      Page.appendChild(logo);
    } // Page.contains(logo)? Page.removeChild(logo):Page.appendChild(logo);
  });

  triggerPasswordType.addEventListener("click", () => {
    if (isPasswordType === true) {
      passwordInput.type = "text";
      isPasswordType = false;
    } else {
      passwordInput.type = "password";
      isPasswordType = true;
    }
  });
}

const showLogoEven = (counts: number, logo: HTMLImageElement) => {
  if (counts % 2 === 0) {
    Page.appendChild(logo);
  }
  if (Page.contains(logo)) {
    if (counts % 2 >= 1) {
      Page.removeChild(logo);
    }
  }
};

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
export { loginForm as LoginPage };
export { registerForm as RegisterPage };
export { dashboard as DashboardPage };
