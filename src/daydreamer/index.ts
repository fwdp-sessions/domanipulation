export const Page = document.createElement("div"); // Do not touch this line
Page.innerHTML = "<h1>Daydreamer.</h1>";
//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here

const counterBtn = document.createElement("button")

counterBtn.textContent=("Counter")

let counter = 0;
counterBtn.addEventListener("click", () => {
    counter++
    if (counter <= 1){
        counterBtn.textContent=`clicked ${counter} time`}
    else {counterBtn.textContent=`clicked ${counter} times`}
   
})

 const logoForVite = document.createElement("div")

logoForVite.innerHTML=
                `<img src="public/vite.svg" 
                style="width: 10%; 
                position:absolute;
                top: 10%;
                left: 44%;
                display:block ">`

 const logoBtn = document.createElement("button")
logoBtn.textContent = "Toggle Vite Logo"
logoBtn.addEventListener('click', () => {
    if (logo.style.display === "none") {
        logo.style.display = "block";
        
      } else {
        logo.style.display = "none";
      }
})

 const form = document.createElement("form")


const PasswordInput = document.createElement("input")
PasswordInput.type="password"
PasswordInput.style.height ="35px"
const submit = document.createElement("button")
submit.innerText="Submit"
form.appendChild(PasswordInput)
form.appendChild(submit)

 const passwordType = document.createElement("button")
 
passwordType.innerText="Show Password"
passwordType.addEventListener('click', () => {
    if(PasswordInput.type ==="password"){
        PasswordInput.type="show"
    }
    else {PasswordInput.type ="password"}
    
})

Page.appendChild(Btn1)
Page.appendChild(logo)
Page.appendChild(logoBtn)
Page.appendChild(form)
Page.appendChild(passwordType)
// Code should end here
//--------------------------------------------

