import "./style.css";

import { Navbar } from "./components/Navbar";
import { myButton } from "./denvie";
import {sampleButton} from  "./denver";

const app = document.getElementById("app");
app?.appendChild(Navbar);
app?.appendChild(myButton);
app?.appendChild(sampleButton);
