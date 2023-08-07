export const Page = document.createElement("div"); // Do not touch this line

//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here


Page.innerHTML = "<h1>Jellyfish.</h1>";

//  THe following is the code for the "Create 2 Buttons" requirement.
//  Structure goes as follows:
//  | twoButtons
//      | jellyButton: buttonCounter()
//      | viteButton: viteToggle()

let counter = 0
let jellyButton = document.createElement("button")
jellyButton.innerText = "JellyButton"
jellyButton.onclick = () => buttonCounter()

let viteButton = document.createElement("button")
viteButton.innerText = "Vite Toggle"
viteButton.onclick = () => viteToggle()

let viteButtonState = 0

let viteImage = document.createElement("img")
viteImage.src = "/vite.svg"

let buttonCounter = () => {
    counter += 1
    if (counter > 1) {
        jellyButton.innerText = "Clicked " + counter + " times"
    } else jellyButton.innerText = "Clicked " + counter + " time"
}

let viteToggle = () => {
    if (viteButtonState == 1) {
        viteButtonState = 0
        Page.removeChild(viteImage)
    } else if (viteButtonState == 0) {
        viteButtonState = 1
        Page.appendChild(viteImage)
    }
}

let twoButtons = document.createElement("div")
twoButtons.appendChild(jellyButton)
twoButtons.appendChild(viteButton)

// These are the code for the login page requirement.
let passwordForm = document.createElement("form")
let password = document.createElement("input")
password.type = "password"
let submit = document.createElement("input")
submit.type = "submit"


let listenEvents = document.createElement("div")
passwordForm.appendChild(password)
passwordForm.appendChild(submit)
listenEvents.appendChild(passwordForm)

let buttonOutsideListenEvents = document.createElement("button")
buttonOutsideListenEvents.innerText = "Trigger password type...?"

Page.appendChild(twoButtons)
Page.appendChild(listenEvents)
Page.appendChild(buttonOutsideListenEvents)

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
