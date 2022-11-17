import Icon1 from "./images/surfboard.png";

import Clock from "./images/67-clock-solid.gif";

export function createHome() {
  const content = document.getElementById("content");

  const taskbar = document.createElement("DIV");
  taskbar.classList.add("taskbar");

  const ulTaskbar = document.createElement("UL");
  ulTaskbar.classList.add("ulTaskbar");

  const ulLiTaskbar1 = document.createElement("LI");
  ulLiTaskbar1.innerText = "Home";
  const ulLiTaskbar2 = document.createElement("LI");
  ulLiTaskbar2.innerText = "Sports";
  const ulLiTaskbar3 = document.createElement("LI");
  ulLiTaskbar3.innerText = "Contact";

  ulTaskbar.appendChild(ulLiTaskbar1);
  ulTaskbar.appendChild(ulLiTaskbar2);
  ulTaskbar.appendChild(ulLiTaskbar3);

  taskbar.appendChild(ulTaskbar);
  content.appendChild(taskbar);
}

export function mainHome() {
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
  const locationTittle = document.createElement("h2");
  locationTittle.innerText = "Location";
  location.appendChild(locationTittle);
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

  document.body.appendChild(mainSection);
}

export function footer() {
  const footer = document.createElement("div");
  footer.classList.add("footer");
  const footerSection1 = document.createElement("div");
  footerSection1.innerText = `Design and developed by @omarchavezGDV.  `;
  const footerSection2 = document.createElement("div");
  footerSection2.innerText = `© All rights reserved.`;
  footer.appendChild(footerSection1);
  footer.appendChild(footerSection2);
  document.body.appendChild(footer);
}
