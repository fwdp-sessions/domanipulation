export const Page = document.createElement("div"); // Do not touch this line
import viteLogo from "/vite.svg";
//----------------------------------------
// Code goes inside the -------
//----------------------------------------
// Code goes here

if (Page) {
  //create element
  const counterButton = document.createElement("button");
  const toggleLogoButton = document.createElement("button");
  const logo = document.createElement("img");
  const form = document.createElement("form");
  const passwordInput = document.createElement("input");
  const formSubmitButton = document.createElement("button");
  const triggerPasswordType = document.createElement("button");

  Page.appendChild(counterButton);
  Page.appendChild(toggleLogoButton);
  Page.appendChild(form);
  form.appendChild(passwordInput);
  form.appendChild(formSubmitButton);
  Page.appendChild(triggerPasswordType);
  Page.appendChild(logo);

  toggleLogoButton.textContent = `Toggle Vite Logo`;
  counterButton.textContent = `clicked 69 times`;
  formSubmitButton.textContent = `Submit`;
  triggerPasswordType.textContent = `Toggle Password Type`;

  logo.src = viteLogo;

  let clicks: number = 0;
  counterButton.addEventListener("click", () => {
    clicks++;
    counterButton.textContent = `clicked ${clicks} time`;
    if (clicks > 1) {
      counterButton.textContent = `clicked ${clicks} times`;
    }
  });

  toggleLogoButton.addEventListener("click", () => {
    if(Page.contains(logo)){
      Page.removeChild(logo);
    }else{
      Page.appendChild(logo);
    }// Page.contains(logo)? Page.removeChild(logo):Page.appendChild(logo); 
  });
  //TODO: create the listener functionalities here
}

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
