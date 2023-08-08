export const Navbar = document.createElement("nav");
const Navlinks = document.createElement("ul");

const daydreamer = document.createElement("li");
const denver = document.createElement("li");
const denvie = document.createElement("li");
const jellyfish = document.createElement("li");
const matchu = document.createElement("li");
const oshi = document.createElement("li");
const hotdog = document.createElement("li");

daydreamer.innerHTML = `<a href="/daydreamer">Daydreamer</a>`;
denver.innerHTML = `<a href="/denver">Denver</a>`;
denvie.innerHTML = `<a href="/denvie">Denvie</a>`;
jellyfish.innerHTML = `<a href="/jellyfish">jellyfish</a>`;
matchu.innerHTML = `<a href="/matchu">Matchu</a>`;
oshi.innerHTML = `<a href="/oshi">Oshi</a>`;
hotdog.innerHTML = `<a href="/hotdog">Hotdog</a>`;

Navbar.appendChild(Navlinks);
Navlinks.appendChild(daydreamer);
Navlinks.appendChild(denver);
Navlinks.appendChild(denvie);
Navlinks.appendChild(jellyfish);
Navlinks.appendChild(matchu);
Navlinks.appendChild(oshi);
Navlinks.appendChild(hotdog);
