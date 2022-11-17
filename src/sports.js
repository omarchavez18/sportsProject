import Icon2 from "./images/shark.gif";

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

  document.body.appendChild(sportsSection);
}
