import "./style.css";

import Surf from "./images/surf.jpg";

const element = document.createElement("div");
const surfImage = new Image();
surfImage.classList.add("surfImage");
surfImage.src = Surf;
element.appendChild(surfImage);
document.body.appendChild(element);
