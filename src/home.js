import Icon1 from "./images/surfboard.png";
import Icon5 from "./images/location.gif";
import Clock from "./images/67-clock-solid.gif";

const content = document.getElementById("content");

// taskbar create function
export function createHome() {
  const header = document.createElement("header");
  header.id = "header";
  const taskbar = document.createElement("DIV");
  taskbar.classList.add("taskbar");

  const ulTaskbar = document.createElement("UL");
  ulTaskbar.classList.add("ulTaskbar");

  const ulLiTaskbar1 = document.createElement("LI");
  ulLiTaskbar1.classList.add("home");
  ulLiTaskbar1.innerText = "Home";
  const ulLiTaskbar2 = document.createElement("LI");
  ulLiTaskbar2.classList.add("sports");
  ulLiTaskbar2.innerText = "Sports";
  const ulLiTaskbar3 = document.createElement("LI");
  ulLiTaskbar3.classList.add("contact");
  ulLiTaskbar3.innerText = "Contact";

  ulTaskbar.appendChild(ulLiTaskbar1);
  ulTaskbar.appendChild(ulLiTaskbar2);
  ulTaskbar.appendChild(ulLiTaskbar3);

  taskbar.appendChild(ulTaskbar);
  header.appendChild(taskbar);

  content.appendChild(header);
}

// mainHome create function
export function mainHome() {
  const globalMain = document.querySelector("main");

  /* This condition is to compare the existence of a tag and its id and if its id already exists it prevents it from being duplicated,
  if the id is different it proceeds to create it*/

  if (globalMain && globalMain.id == "mainHome") {
    return;
  }

  const newMain = document.createElement("main");
  newMain.id = "mainHome";

  const mainSection = document.createElement("SECTION");
  mainSection.classList.add("mainSection");

  const divTitle = document.createElement("DIV");
  divTitle.classList.add("divTitle");

  const mainTitle = document.createElement("h1");
  mainTitle.innerText = "Aloha Surf";
  divTitle.appendChild(mainTitle);

  const icon1 = new Image();
  icon1.src = Icon1;
  divTitle.appendChild(icon1);
  mainSection.appendChild(divTitle);

  const resume = document.createElement("DIV");
  resume.classList.add("resume");

  const resumeText = document.createElement("P");
  resumeText.innerText =
    "Aloha Surf is a great place to buy different types of a surfboard from the paddleboard to the shortboard to be more precise and fast on the edge of the wave.";
  resume.appendChild(resumeText);
  mainSection.appendChild(resume);

  //HOURS
  const hours = document.createElement("DIV");
  hours.classList.add("hours");

  const divHours = document.createElement("div");

  const titleHours = document.createElement("h2");
  titleHours.innerText = "Hours";
  divHours.appendChild(titleHours);

  const clockImage = new Image();
  clockImage.src = Clock;
  divHours.appendChild(clockImage);
  hours.appendChild(divHours);
  const ulHours = document.createElement("UL");

  const days = [
    "Monday",
    "Tuesday",
    "wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  //forEach loop to create several "li"
  days.forEach((day) => {
    const ulLiHours = document.createElement("li");
    ulLiHours.classList.add("ulLiHours");
    ulLiHours.innerText = `${day}: 8:00 am - 21:00pm. `;
    ulHours.appendChild(ulLiHours);
  });

  hours.appendChild(ulHours);
  mainSection.appendChild(hours);

  //   LOCATION
  const location = document.createElement("DIV");
  location.classList.add("location");

  const divLocationTittle = document.createElement("div");

  const locationTittle = document.createElement("h2");
  locationTittle.innerText = "Location";

  const icon5 = new Image();
  icon5.src = Icon5;

  divLocationTittle.appendChild(locationTittle);
  divLocationTittle.appendChild(icon5);
  location.appendChild(divLocationTittle);

  const ulLocation = document.createElement("ul");
  const liUlLocation1 = document.createElement("li");
  liUlLocation1.innerText = "18 Aloha Street, Honolulu, Hawaii, EUA.";

  const liUlLocation2 = document.createElement("li");
  liUlLocation2.innerText =
    "368 calle caracol, Puerto Escondido, Oaxaca, Mexico.";
  ulLocation.appendChild(liUlLocation1);
  ulLocation.appendChild(liUlLocation2);
  location.appendChild(ulLocation);
  mainSection.appendChild(location);

  newMain.appendChild(mainSection);
  content.insertBefore(newMain, document.querySelector("#footer"));
}

// footer create function
export function footers() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  footer.id = "footer";
  const footerSection1 = document.createElement("p");
  footerSection1.innerText = `Design and developed by @omarchavezGDV.`;
  const footerSection2 = document.createElement("p");
  footerSection2.innerText = `© All rights reserved.`;
  footer.appendChild(footerSection1);
  footer.appendChild(footerSection2);

  content.appendChild(footer);
}

export { content };
