import "./style.css";
import { Navbar } from "./components/Navbar";
import { jellyButton } from "./jellyfish"
import { Navbar } from "./components/Navbar";
import { Btn1 } from "./daydreamer";
import { myButton } from "./denvie";
import {sampleButton} from  "./denver";

const app = document.getElementById("app");
app?.appendChild(Navbar);
app?.appendChild(jellyButton);
app?.appendChild(myButton);
app?.appendChild(sampleButton);
app?.appendChild(Btn1)
