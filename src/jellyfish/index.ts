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

// Render everything to append to Page
Page.appendChild(twoButtons)
Page.appendChild(listenEvents)
Page.appendChild(submitButton)

export const LoginPage = () => {
    console.log("LOGIN PAGE")
}

export const RegisterPage = () => {
    console.log("REGISTER PAGE")
}

export const SignOut = () => {
    console.log("SIGN OUT")
}

export const dashboard = () => {
    console.log("DASHBOARD")
}

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
