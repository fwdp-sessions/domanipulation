export const Btn1 = document.createElement("button")

Btn1.textContent=("Counter")
Btn1.style.margin="10px"
let counter = 0;
Btn1.addEventListener("click", () => {
    counter++
    Btn1.textContent=`clicked ${counter} times`
})

export const logo = document.createElement("div")

logo.innerHTML=
                `<img src="src/daydreamer/assets/logo.png" 
                style="width: 17%; 
                position:absolute;
                top: 0%;
                left: 41%;
                display:block ">`

export const logoBtn = document.createElement("button")
logoBtn.textContent = "Toggle Vite Logo"
logoBtn.addEventListener('click', () => {
    if (logo.style.display === "none") {
        logo.style.display = "block";
        
      } else {
        logo.style.display = "none";
      }
})

export const form = document.createElement("form")
form.style.margin="10px"
form.style.display="flex"
form.style.flexDirection="column"
const PasswordInput = document.createElement("input")
PasswordInput.type="password"
PasswordInput.style.height ="35px"
const submit = document.createElement("button")
submit.innerText="Submit"
form.appendChild(PasswordInput)
form.appendChild(submit)

export const passwordType = document.createElement("button")
 
passwordType.innerText="Show Password"
passwordType.addEventListener('click', () => {
    if(PasswordInput.type ==="password"){
        PasswordInput.type="show"
    }
    else {PasswordInput.type ="password"}
    
})
