export const Page = document.createElement("div"); // Do not touch this line

//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here


Page.innerHTML = "<h1>Jellyfish.</h1>";

//  THe following is the code for the "Create 2 Buttons" requirement.

let counter = 0
let jellyButton = document.createElement("button")
jellyButton.innerText = "JellyButton"
jellyButton.onclick = () => buttonCounter()

let viteButton = document.createElement("button")
viteButton.innerText = "Vite Toggle"
viteButton.onclick = () => viteToggle()

let imageButtonState = 0
let imageContainer = document.createElement("div")
let viteImage = document.createElement("img")
viteImage.src = "/vite.svg"
let tsImage = document.createElement("img")
tsImage.src = "/src/typescript.svg"

let buttonCounter = () => {
    counter += 1
    if (counter > 1) {
        jellyButton.innerText = "Clicked " + counter + " times"
    } else jellyButton.innerText = "Clicked " + counter + " time"
}

let viteToggle = () => {
    console.log(tsImage)
    if (imageButtonState == 1) {
        imageButtonState = 0
        imageContainer.innerHTML = ""
    } else if (imageButtonState == 0) {
        imageButtonState = 1
        if (counter % 2 == 0) imageContainer.appendChild(tsImage)
        else imageContainer.appendChild(viteImage)
    }
}

let twoButtons = document.createElement("div")
twoButtons.appendChild(imageContainer)
twoButtons.appendChild(jellyButton)
twoButtons.appendChild(viteButton)

// REFACTOR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// These are the code for the login page requirement.
let passwordForm = document.createElement("form")
let password = document.createElement("input")
password.type = "password"
let showPassword = document.createElement("input")
showPassword.type = "checkbox"

let listenEvents = document.createElement("div")
passwordForm.appendChild(password)
passwordForm.appendChild(showPassword)
listenEvents.appendChild(passwordForm)

let submitButton = document.createElement("button")
submitButton.innerText = "Submit"


let passwordStorage
let revealPassword = () => {
    if (showPassword.checked) password.type = "text"
    else password.type = "password"
}
submitButton.onclick = () => {
    passwordStorage = {"password": password.value}
    console.log(passwordStorage)
}
showPassword.addEventListener("click", () => {revealPassword()})
// REFACTOR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Render everything to append to Page
Page.appendChild(twoButtons)
Page.appendChild(listenEvents) // <<<<<<<<----------------- REFACTOR
Page.appendChild(submitButton) // <<<<<<<<----------------- REFACTOR

// const asdRegister = document.createElement("div")
// asdRegister.innerHTML = "<p>Never gonna give you up never gonna let you down</p>"
import longRange from "./register";
const asdRegister = longRange
Page.appendChild(asdRegister)

export const LoginPage = document.createElement("div")
    LoginPage.innerHTML = "asd"

export const RegisterPage = document.createElement("div")
    RegisterPage.innerHTML = "asd"

export const SignOut = () => {
    console.log("SIGN OUT")
}

export const dashboard = document.createElement("div")
    dashboard.innerHTML = "asd"

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
