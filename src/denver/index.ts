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

  //add to parent div
  Page.appendChild(counterButton);
  Page.appendChild(toggleLogoButton);

  //set element text content
  toggleLogoButton.textContent = `Toggle Vite Logo`;
  counterButton.textContent = `clicked 69 times`;

  //set element image content
  logo.src = `./public/vite.svg`;

  let clicks: number = 0;
  counterButton.addEventListener("click", () => {
    clicks++;
    counterButton.textContent = `clicked ${clicks} times`;
  });

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
}

// Code should end here
//--------------------------------------------
export default Page; // Do not touch this line
