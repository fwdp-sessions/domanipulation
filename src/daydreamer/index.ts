export const Page = document.createElement('div'); // Do not touch this line
Page.innerHTML = '<h1>Daydreamer.</h1>';
//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here

const counterBtn = document.createElement('button');

counterBtn.textContent = 'Counter';

let counter = 0;
counterBtn.addEventListener('click', () => {
  counter++;
  if (counter <= 1) {
    counterBtn.textContent = `clicked ${counter} time`;
  } else {
    counterBtn.textContent = `clicked ${counter} times`;
  }
});

const logoForVite = document.createElement('div');

logoForVite.innerHTML = `<img src="public/vite.svg" 
                style="width: 10%; 
                position:absolute;
                top: 10%;
                left: 44%;
                display:block ">`;

const logoBtn = document.createElement('button');
logoBtn.textContent = 'Toggle Vite Logo';
logoBtn.addEventListener('click', () => {
  if (logoForVite.style.display === 'none') {
    logoForVite.style.display = 'block';
  } else {
    logoForVite.style.display = 'none';
  }
});

const form = document.createElement('form');

const passwordInput = document.createElement('input');
passwordInput.type = 'password';
passwordInput.style.height = '35px';
const submit = document.createElement('button');
submit.innerText = 'Submit';
form.appendChild(passwordInput);
form.appendChild(submit);

const passwordType = document.createElement('button');

passwordType.innerText = 'Show Password';
passwordType.addEventListener('click', () => {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

Page.appendChild(counterBtn);
Page.appendChild(logoForVite);
Page.appendChild(logoBtn);
Page.appendChild(form);
Page.appendChild(passwordType);
// Code should end here
//--------------------------------------------
