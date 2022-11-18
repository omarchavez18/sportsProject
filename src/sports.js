import Icon2 from "./images/shark.gif";
import Icon3 from "./images/surfboard1.png";

import Board1 from "./images/1.webp";
import Board2 from "./images/2.webp";
import Board3 from "./images/3.webp";
import Board4 from "./images/4.webp";
import Board5 from "./images/5.webp";
import Board6 from "./images/6.webp";
import Board7 from "./images/7.webp";
import Board8 from "./images/8.webp";

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

export function mainSports() {
  const sportsSection = document.createElement("section");
  sportsSection.classList.add("mainSection");

  const divSportsTittle = document.createElement("DIV");
  divSportsTittle.classList.add("divTitle");
  const sportsTittle = document.createElement("h1");
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
    "We have the world’ssss largest and diverse range of surfboard models including Softboards, Shortboards, Hybrids, Mini Mals, Funboards, Longboards and Mid-lengths, our surfboard range caters to all surfing genres, styles and abilities from beginners through to the more experienced surfer. ";
  divSubtitle.appendChild(text);
  divSubtitle.appendChild(subtitleAndIconDiv);
  sportsSection.appendChild(divSubtitle);

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

  document.body.appendChild(sportsSection);
}
