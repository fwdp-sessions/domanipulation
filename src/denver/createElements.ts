const inputBuilder = (type: string, name: string, placeholder: string ) => {
  const input = document.createElement("input");
  input.type = type;
  input.name = name;
  input.placeholder = placeholder;
  return input;
};

const buttonBuilder = (textContent: string, buttonType?:"button"|"submit"|"reset") => {
  const button = document.createElement("button");
  if(buttonType)button.type = buttonType;
  button.textContent = textContent;
  return button
};

export const registerPageLink = document.createElement("a");
export const formTitle = document.createElement("h1");
export const email = inputBuilder("text", "email", "Input Email");
export const password = inputBuilder("password", "password", "Input Password");
export const confirmPassword = inputBuilder("text", "password","ConfirmPassowrd");
export const firstName = inputBuilder("text", "firstName", "Input First Name");
export const lastName = inputBuilder("text", "lastName", "Input Last Name");
export const address = inputBuilder("text", "address", "Input Address");
export const registerButton = buttonBuilder("register","submit");
export const emailLogin = inputBuilder("text","emailLogin","Input Email");
export const passwordLogin = inputBuilder("text","passwordLogin","Input Password");
export const loginButton = buttonBuilder("Login","submit");
