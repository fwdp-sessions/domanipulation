import "./style.css";
import { Navbar as Navigation } from "./components/Navbar";
import { Page as Matchu } from "./matchu";
import { Page as Jellyfish } from "./jellyfish";
import { Page as Daydreamer } from "./daydreamer";
import { Page as Denvie } from "./denvie";
import { Page as Denver } from "./denver";
import { Page as Oshi } from "./oshi";

export const LOCATION = location.pathname;

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
  } else if (LOCATION === "/jellyfish") {
    renderElement(Jellyfish);
  } else if (LOCATION === "/daydreamer") {
    renderElement(Daydreamer);
  } else if (LOCATION === "/denvie") {
    renderElement(Denvie);
  } else if (LOCATION === "/oshi") {
    renderElement(Oshi);
  } else if (LOCATION === "/denver") {
    renderElement(Denver);
  } else {
    renderElement(homeDiv);
  }
};

bootstrap();
