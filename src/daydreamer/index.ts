export const Page = document.createElement('div'); // Do not touch this line
Page.innerHTML = '<h1>Daydreamer.</h1>';
//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here

<<<<<<< HEAD
const CounterBtn = document.createElement('button');

CounterBtn.textContent = 'Counter';

let counter = 0;
CounterBtn.addEventListener('click', () => {
  counter++;
  if (counter <= 1) {
    CounterBtn.textContent = `clicked ${counter} time`;
  } else {
    CounterBtn.textContent = `clicked ${counter} times`;
  }
});

const logo = document.createElement('div');

logo.innerHTML = `<img src="public/vite.svg" 
=======
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
>>>>>>> 37aa163 (Change name variable from logo to logoForVite)
                style="width: 10%; 
                position:absolute;
                top: 10%;
                left: 44%;
                display:block ">`;

const logoBtn = document.createElement('button');
logoBtn.textContent = 'Toggle Vite Logo';
logoBtn.addEventListener('click', () => {
<<<<<<< HEAD
  if (logo.style.display === 'none') {
    logo.style.display = 'block';
  } else {
    logo.style.display = 'none';
  }
});
=======
    if (logoForVite.style.display === "none") {
        logoForVite.style.display = "block";
        
      } else {
        logoForVite.style.display = "none";
      }
})
>>>>>>> dcb7987 (Change variable naming convention into camelCase and more specific, Change the password input type from show to text)

const form = document.createElement('form');

const PasswordInput = document.createElement('input');
PasswordInput.type = 'password';
PasswordInput.style.height = '35px';
const submit = document.createElement('button');
submit.innerText = 'Submit';
form.appendChild(PasswordInput);
form.appendChild(submit);

<<<<<<< HEAD
const passwordType = document.createElement('button');
=======
const passwordInput = document.createElement("input")
passwordInput.type="password"
passwordInput.style.height ="35px"
const submit = document.createElement("button")
submit.innerText="Submit"
form.appendChild(passwordInput)
form.appendChild(submit)
>>>>>>> dcb7987 (Change variable naming convention into camelCase and more specific, Change the password input type from show to text)

passwordType.innerText = 'Show Password';
passwordType.addEventListener('click', () => {
<<<<<<< HEAD
  if (PasswordInput.type === 'password') {
    PasswordInput.type = 'show';
  } else {
    PasswordInput.type = 'password';
  }
});

Page.appendChild(Btn1);
Page.appendChild(logo);
Page.appendChild(logoBtn);
Page.appendChild(form);
Page.appendChild(passwordType);
=======
    if(passwordInput.type ==="password"){
        passwordInput.type="text"
    }
    else {passwordInput.type ="password"}
    
})

Page.appendChild(counterBtn)
Page.appendChild(logoForVite)
Page.appendChild(logoBtn)
Page.appendChild(form)
Page.appendChild(passwordType)
>>>>>>> dcb7987 (Change variable naming convention into camelCase and more specific, Change the password input type from show to text)
// Code should end here
//--------------------------------------------
