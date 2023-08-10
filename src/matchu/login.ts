export const LoginPage = document.createElement("div");
LoginPage.innerHTML = "<h1>Login</h1>";

// Svg Image
const svgImage = document.createElement("img");
svgImage.innerHTML = "<img src=''";
svgImage.id = "svg-img";

// logo Image
const logoImage = document.createElement("img");
logoImage.innerHTML = "<img src='/typescript.svg'/>";

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

// Append
loginForm.appendChild(loginEmail);
loginForm.appendChild(loginPassword);
LoginPage.appendChild(loginForm);
LoginPage.appendChild(loginButton);
