// REFACTOR>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// These are the code for the login page requirement.
let passwordForm = document.createElement("form")
let password = document.createElement("input")
password.type = "password"
let showPassword = document.createElement("input")
showPassword.type = "checkbox"

export let listenEvents = document.createElement("div")
passwordForm.appendChild(password)
passwordForm.appendChild(showPassword)
listenEvents.appendChild(passwordForm)

export let submitButton = document.createElement("button")
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