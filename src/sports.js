import Icon2 from "./images/shark.gif";
import Icon3 from "./images/surfboard1.png";
import { content } from "./home";

import Board1 from "./images/1.webp";
import Board2 from "./images/2.webp";
import Board3 from "./images/3.webp";
import Board4 from "./images/4.webp";
import Board5 from "./images/5.webp";
import Board6 from "./images/6.webp";
import Board7 from "./images/7.webp";
import Board8 from "./images/8.webp";

// information about surfboards
const products = [
  {
    image: Board1,
    name: "GOHL 6'0 BLACK PEARL.",
    type: "SOFTBOARD.",
    price: "$249.00 USD.",
  },
  {
    image: Board2,
    name: "PERFORMANCE LOG TROPICOOL - 9'0.",
    type: "LONGBOARD.",
    price: "$799.00 USD.",
  },
  {
    image: Board3,
    name: "ZEPHYR ECOTECH - HYBRID.",
    type: "SHORTBOARD.",
    price: "$649.00 USD.",
  },
  {
    image: Board4,
    name: "HENDRIX FISH ARTIC BLUE.",
    type: "FISHBOARD.",
    price: "$479.00 USD.",
  },
  {
    image: Board5,
    name: "FUNSTER MANGO.",
    type: "FUNBOARD.",
    price: "$459.00 USD.",
  },
  {
    image: Board6,
    name: "MIRAGE.",
    type: "MIDLENGTH.",
    price: "$599.00 USD.",
  },
  {
    image: Board7,
    name: "GIZMO - MINI BASE.",
    type: "MINI MAL.",
    price: "$599.00 USD.",
  },
  {
    image: Board8,
    name: "EVOKE TIMBER SUP.",
    type: "STAND UP PADDLEBOARD.",
    price: "$1,199.00 USD.",
  },
];

// mainSports create function
export function mainSports() {
  const globalMain = document.querySelector("main");

  /* This condition is to compare the existence of a tag and its id and if its id already exists it prevents it from being duplicated,
  if the id is different it proceeds to create it*/
  if (globalMain && globalMain.id == "mainSports") {
    return;
  }

  const sportsSection = document.createElement("main");
  sportsSection.classList.add("mainSection");
  sportsSection.id = "mainSports";

  const divSportsTittle = document.createElement("DIV");
  divSportsTittle.classList.add("divTitle");
  const sportsTittle = document.createElement("h2");
  sportsTittle.innerText = "Store";
  divSportsTittle.appendChild(sportsTittle);
  const icon2 = new Image();
  icon2.src = Icon2;
  divSportsTittle.appendChild(icon2);
  sportsSection.appendChild(divSportsTittle);

  const divSubtitle = document.createElement("div");
  divSubtitle.classList.add("hours");
  divSubtitle.classList.add("divSubtitle");
  const subtitleAndIconDiv = document.createElement("div");
  const sportsSubtitle = document.createElement("h2");
  sportsSubtitle.innerText = "Surfboards";
  subtitleAndIconDiv.appendChild(sportsSubtitle);
  const icon3 = new Image();
  icon3.src = Icon3;
  subtitleAndIconDiv.appendChild(icon3);
  const text = document.createElement("p");
  text.innerText =
    "We have the world’s largest and most diverse range of surfboard models including Softboards, Shortboards, Hybrids, Mini Mals, Funboards, Longboards, and Mid-lengths, our surfboard range caters to all surfing genres, styles, and abilities from beginners through to the more experienced surfer. ";
  divSubtitle.appendChild(text);
  divSubtitle.appendChild(subtitleAndIconDiv);
  sportsSection.appendChild(divSubtitle);

  //forEach loop to create several "div´s"
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("hours");
    const divImage = document.createElement("div");
    const productImg = new Image();
    productImg.classList.add("surfImage");
    productImg.src = product.image;
    divImage.appendChild(productImg);
    productDiv.appendChild(divImage);

    const productName = document.createElement("p");
    productName.innerText = `${product.name}`;
    productDiv.appendChild(productName);

    const productType = document.createElement("p");
    productType.innerText = `${product.type}`;
    productDiv.appendChild(productType);

    const productPrice = document.createElement("p");
    productPrice.innerText = `${product.price}`;
    productDiv.appendChild(productPrice);
    sportsSection.appendChild(productDiv);
  });

  content.insertBefore(sportsSection, document.querySelector("#footer"));
}
