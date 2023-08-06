import { Navbar } from "./components/Navbar";
import "./style.css";
import {sampleButton} from  "./denver";


const app = document.getElementById("app");
app?.appendChild(Navbar);
app?.appendChild(sampleButton);