import Icon4 from "./images/mail.gif";
import Kelly from "./images/kelly.webp";
import John from "./images/john.jpg";
import Corzo from "./images/corzo.jpg";
import { content } from "./home";

// information about surfers
const contacts = [
  {
    image: Kelly,
    name: "Kelly Slatter.",
    phone: "555-27-18-25.",
    email: "kslater@gmail.com",
    location: "Honolulu, Hawaii, EUA.",
  },
  {
    image: John,
    name: "John John Florence.",
    phone: "555-27-18-26.",
    email: "jf@gmail.com",
    location: "Honolulu, Hawaii, EUA.",
  },
  {
    image: Corzo,
    name: "Jhony Corzo.",
    phone: "477-627-18-27.",
    email: "Jcorzo@gmail.com",
    location: "Puerto Escondido, Oaxaca, México.",
  },
];

// mainContact create function
export function mainContact() {
  const globalMain = document.querySelector("main");

  /* This condition is to compare the existence of a tag and its id and if its id already exists it prevents it from being duplicated, 
  if the id is different it proceeds to create it*/

  if (globalMain && globalMain.id == "mainContact") {
    return;
  }

  const contactSection = document.createElement("main");
  contactSection.classList.add("mainSection");
  contactSection.id = "mainContact";

  const divContactTitle = document.createElement("div");
  divContactTitle.classList.add("divTitle");
  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Contact Us";
  divContactTitle.appendChild(contactTitle);

  const icon4 = new Image();
  icon4.src = Icon4;
  divContactTitle.appendChild(icon4);
  contactSection.appendChild(divContactTitle);

  //forEach loop to create several "div"
  contacts.forEach((contact) => {
    const contactDiv = document.createElement("div");
    contactDiv.classList.add("hours");
    contactDiv.classList.add("contactDiv");

    const divContactImage = document.createElement("div");
    const contactImage = new Image();
    contactImage.src = contact.image;
    contactImage.classList.add("surfImage");
    divContactImage.appendChild(contactImage);
    contactDiv.appendChild(divContactImage);

    const contactName = document.createElement("p");
    contactName.innerText = `${contact.name}`;
    contactDiv.appendChild(contactName);

    const contactPhone = document.createElement("p");
    contactPhone.innerText = `Phone: ${contact.phone}`;
    contactDiv.appendChild(contactPhone);

    const contactEmail = document.createElement("p");
    contactEmail.innerText = `Email: ${contact.email}`;
    contactDiv.appendChild(contactEmail);

    const contactLocation = document.createElement("p");
    contactLocation.innerText = `Location: ${contact.location}`;
    contactDiv.appendChild(contactLocation);

    contactSection.appendChild(contactDiv);
  });

  content.insertBefore(contactSection, document.querySelector("#footer"));
}
