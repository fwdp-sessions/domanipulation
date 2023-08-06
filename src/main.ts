import { Navbar } from "./components/Navbar";
import "./style.css";
import { myButton } from "./denvie";

const app = document.getElementById("app");
app?.appendChild(Navbar);
app?.appendChild(myButton);
