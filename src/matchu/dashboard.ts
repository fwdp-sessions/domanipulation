// import { User } from "../main";

export const DashboardPage = document.createElement("div");
// import { UserDB } from "../main";
// Container
const containerDashboard = document.createElement("div");
containerDashboard.id = "container";

// Welcome
const header1 = document.createElement("h1");
header1.innerText = "Welcome!";

// Display Name
const header2 = document.createElement("h2");

// Logout button
const logoutDashboard = document.createElement("button");
logoutDashboard.innerText = "Logout";
// logoutDashboard.href = "/matchu/login";

// Retrieve data of the user
const loggedInUser = JSON.parse(localStorage.getItem("UserLogin") as string);

console.log(loggedInUser);
console.log("Hello World");

if (header2 && loggedInUser) {
  header2.textContent = `Welcome, ${loggedInUser.firstName}!`;
}

logoutDashboard.addEventListener("click", () => {
  localStorage.removeItem("loggedInUser"); // New input;
  window.location.href = "/matchu/login";
  console.log("You successfully registered.");
});
// Append
containerDashboard.appendChild(header1);
containerDashboard.appendChild(header2);
containerDashboard.appendChild(logoutDashboard);
DashboardPage.appendChild(containerDashboard);
