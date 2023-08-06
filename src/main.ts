import "./style.css";
import { Navbar } from "./components/Navbar";
import { Btn1 as matchu } from "./matchu";
import { jellyButton } from "./jellyfish"
import { Btn1 } from "./daydreamer";
import { myButton } from "./denvie";
import {sampleButton} from  "./denver";

const app = document.getElementById("app");
app?.appendChild(Navbar);
app?.appendChild(jellyButton);
app?.appendChild(myButton);
app?.appendChild(sampleButton);
app?.appendChild(matchu)
app?.appendChild(Btn1)
