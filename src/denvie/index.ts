export const Page = document.createElement("div"); // Do not touch this line

//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here
let counterValue = -1;

const counter = document.createElement("button");
const toggleViteBtn = document.createElement("button");
const viteLogo = document.createElement("img");
const viteSection = document.createElement("div");
const form = document.createElement("form");
const passwordInput = document.createElement("input");
const togglePasswordChk = document.createElement("input");
const submitBtn = document.createElement("input");
const passwordGrp = document.createElement("div");

Page.appendChild(viteSection);
Page.appendChild(form);
viteSection.appendChild(viteLogo);
viteSection.appendChild(counter);
viteSection.appendChild(toggleViteBtn);
form.appendChild(passwordGrp);
passwordGrp.appendChild(passwordInput);
passwordGrp.appendChild(togglePasswordChk);
form.appendChild(submitBtn);

viteSection.style.display = "flex";
viteSection.style.flexDirection = "column";
viteSection.style.alignItems = "center";
viteSection.style.gap = "10px";
viteLogo.width = 100;
viteLogo.src = "vite.svg";
counter.innerText = updateCounterText();
counter.onclick = incrementCounterValue;
toggleViteBtn.innerText = "Toggle Vite Logo";
toggleViteBtn.onclick = showViteLogo;
form.onsubmit = handleSubmit;
passwordInput.type = "password";
passwordInput.name = "password";
passwordInput.placeholder = "Enter your password";
togglePasswordChk.type = "checkbox";
togglePasswordChk.onclick = togglePassword;
submitBtn.type = "submit";

function togglePassword() {
    if (passwordInput.type === "password") {
        return (passwordInput.type = "text");
    }
    passwordInput.type = "password";
}

function updateCounterText() {
    counterValue += 1;
    return `clicked ${counterValue} times`;
}

function incrementCounterValue() {
    viteLogo.style.transform = "scale(1.1,1.1)";
    counter.innerText = updateCounterText();
    setTimeout(() => (viteLogo.style.transform = "unset"), 100);
}

function showViteLogo() {
    if (viteLogo.style.display === "none") {
        return (viteLogo.style.display = "block");
    }
    viteLogo.style.display = "none";
}
function handleSubmit(event: Event) {
    event.preventDefault();
    const formDetails = new FormData(form);
    for (const [key, value] of formDetails.entries()) {
        console.table([key, value]);
    }
    console.log(formDetails.entries());
}
// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
