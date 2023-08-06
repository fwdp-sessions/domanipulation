import { Navbar } from "./components/Navbar";
import { jellyButton } from "./jellyfish"
import "./style.css";

const app = document.getElementById("app");
app?.appendChild(Navbar);
app?.appendChild(jellyButton);