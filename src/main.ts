import "./style.css";
import { Navbar as Navigation } from "./components/Navbar";
import {
  Page as Matchu,
  LoginPage as MatchuLogin,
  RegisterPage as MatchuRegister,
  DashboardPage as MatchuDashboard,
} from "./matchu";
import { Page as Jellyfish } from "./jellyfish";
import { Page as Daydreamer } from "./daydreamer";
import { Page as Denvie } from "./denvie";
import { Page as Denver } from "./denver";
import { Page as Oshi } from "./oshi";
import { Page as Hotdog } from "./hotdog";

/// Import your new pages here and uncomment the one that belongs to you at bootstrap function
// TODO: import { LoginPage as DaydreamerLogin } from './daydreamer/'
// TODO: import { RegisterPage as DaydreamerRegister } from './daydreamer/'
// TODO: import { DashboardPage as DaydreamerDashboard } from './daydreamer/'
// Do not touch the example

export const LOCATION = location.pathname;

export type User = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  address?: string;
};

// You wil ltarget this to add your users
export const UserDB: User[] = [];

const App = document.getElementById("app")!;

const homeDiv = document.createElement("div");
homeDiv.innerHTML = `<h1>Home</h1>`;

const renderElement = (element: HTMLElement) => {
  App!.appendChild(element);
};

const bootstrap = () => {
  App.appendChild(Navigation);
  if (LOCATION === "/") {
    renderElement(homeDiv);
  } else if (LOCATION === "/matchu") {
    renderElement(Matchu);
  } else if (LOCATION === "/matchu/login") {
    renderElement(MatchuLogin);
  } else if (LOCATION === "/matchu/register") {
    renderElement(MatchuRegister);
  } else if (LOCATION === "/matchu/dashboard") {
    renderElement(MatchuDashboard);
  } else if (LOCATION === "/jellyfish") {
    renderElement(Jellyfish);
  } else if (LOCATION === "/jellyfish/login") {
    // renderElement(JellyfishLogin);
  } else if (LOCATION === "/jellyfish/register") {
    renderElement(Jellyfish);
  } else if (LOCATION === "/jellyfish/dashboard") {
    renderElement(Jellyfish);
  } else if (LOCATION === "/daydreamer") {
    renderElement(Daydreamer);
  } else if (LOCATION === "/daydreamer/login") {
    // renderElement(DaydreamerLogin);
  } else if (LOCATION === "/daydreamer/register") {
    renderElement(Daydreamer);
  } else if (LOCATION === "/daydreamer/dashboard") {
    renderElement(Daydreamer);
  } else if (LOCATION === "/oshi") {
    renderElement(Oshi);
  } else if (LOCATION === "/oshi/login") {
    renderElement(Oshi);
  } else if (LOCATION === "/oshi/register") {
    renderElement(Oshi);
  } else if (LOCATION === "/oshi/dashboard") {
    renderElement(Oshi);
  } else if (LOCATION === "/denvie") {
    renderElement(Denvie);
  } else if (LOCATION === "/denvie/register") {
    renderElement(Denvie);
  } else if (LOCATION === "/denvie/login") {
    renderElement(Denvie);
  } else if (LOCATION === "/denvie/dashboard") {
    renderElement(Denvie);
  } else if (LOCATION === "/denver") {
    renderElement(Denver);
  } else if (LOCATION === "/denver/dashboard") {
    renderElement(Denver);
  } else if (LOCATION === "/denver/login") {
    renderElement(Denver);
  } else if (LOCATION === "/denver/register") {
    renderElement(Denver);
  } else if (LOCATION === "/hotdog") {
    renderElement(Hotdog);
  } else if (LOCATION === "/hotdog/login") {
    renderElement(Hotdog);
  } else if (LOCATION === "/hotdog/dashboard") {
    renderElement(Hotdog);
  } else if (LOCATION === "/hotdog/register") {
    renderElement(Hotdog);
  } else {
    renderElement(homeDiv);
  }
};

bootstrap();
