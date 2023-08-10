export const RegisterPage = document.createElement("div");
RegisterPage.innerHTML = "<h1>Login</h1>";

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

// create input password
const registerPassword = document.createElement("input");
registerPassword.id = "register-password";
registerPassword.type = "password";
registerPassword.name = "password";
registerPassword.placeholder = "Password";
registerPassword.style.marginBottom = "20px";

// create input confirm password
const confirmPassword = document.createElement("input");
confirmPassword.id = "confirm-password";
confirmPassword.type = "password";
confirmPassword.name = "password";
confirmPassword.placeholder = "Confirm password";
confirmPassword.style.marginBottom = "20px";

// register Name
const registerName = document.createElement("input");
registerName.id = "register-name";
registerName.type = "name";
registerName.name = "name";
registerName.placeholder = "Name";
registerName.style.marginBottom = "20px";

// reigsterthedata
const registerButton = document.createElement("button");
registerButton.id = "reigster-button";
registerButton.innerText = "Register";

// Checkbox - Password (show/hide)
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

// functionalities (Show/Hide Password)
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

// Append
registerForm.appendChild(registerEmail);
registerForm.appendChild(registerPassword);
registerForm.appendChild(checkBox1);
registerForm.appendChild(confirmPassword);
registerForm.appendChild(checkBox2);
registerForm.appendChild(registerName);
RegisterPage.appendChild(registerForm);
RegisterPage.appendChild(registerButton);
