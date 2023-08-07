export const Page = document.createElement("div"); // Do not touch this line

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
  form.apppendChild(formSubmitButton);
  Page.appendChild(triggerPasswordType);

  toggleLogoButton.textContent = `Toggle Vite Logo`;
  counterButton.textContent = `clicked 69 times`;


  logo.src = `./public/vite.svg`;

  let clicks: number = 0;
  counterButton.addEventListener("click", () => {
    clicks++;
    counterButton.textContent = `clicked ${clicks} times`;
  });

  //FIXME: change approach
  let logoVisibility = false;
  toggleLogoButton.addEventListener("click", () => {
    if (logoVisibility === false) {
      Page.appendChild(logo);
      logoVisibility = true;
    } else {
      Page.removeChild(logo);
      logoVisibility = false;
    }
  });
   //TODO: create the listener functionalities here
   
}

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
