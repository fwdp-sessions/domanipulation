export const Page = document.createElement("div"); // Do not touch this line

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

Page.appendChild(button1);

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

Page.appendChild(logoVite);
Page.appendChild(button2);

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

myForm.appendChild(inputPassword);
myForm.appendChild(submitButton);

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

Page.appendChild(myForm);
Page.appendChild(button3);

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
