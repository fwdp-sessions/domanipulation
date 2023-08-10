export const DashboardPage = document.createElement("div");

// Container
const containerDashboard = document.createElement("div");
containerDashboard.id = "container";

// Welcome
const header1 = document.createElement("h1");
header1.innerText = "Welcome!";

// Display Name
const header2 = document.createElement("h2");
header2.innerText = "(Display Name)";

// Logout button
const logoutDashboard = document.createElement("button");
logoutDashboard.innerText = "Logout";

// Append
containerDashboard.appendChild(header1);
containerDashboard.appendChild(header2);
containerDashboard.appendChild(logoutDashboard);
DashboardPage.appendChild(containerDashboard);
