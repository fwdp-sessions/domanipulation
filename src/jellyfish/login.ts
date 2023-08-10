let loginMessage = document.createElement("h1")
loginMessage.innerText = "Login Here"

let loginPasswordBox = document.createElement("input")
loginPasswordBox.type = "password"

let loginShowPassword = document.createElement("input")
loginShowPassword.type = "checkbox"

let loginPasswordArea = document.createElement("div")
loginPasswordArea.appendChild(loginPasswordBox)
loginPasswordArea.appendChild(loginShowPassword)
if (loginShowPassword.checked) loginPasswordBox.type = "text"
else loginPasswordBox.type = "password"

export let output = document.createElement("div")
output.appendChild(loginMessage)
output.appendChild(loginPasswordArea)