import Icon4 from "./images/mail.gif";
import Kelly from "./images/kelly.webp";
import John from "./images/john.jpg";
import Corzo from "./images/corzo.jpg";

const contacts = [
  {
    image: Kelly,
    name: "Kelly Slatter.",
    phone: "555-27-18-25.",
    email: "kelly_slater@gmail.com",
    location: "Honolulu, Hawaii, EUA.",
  },
  {
    image: John,
    name: "John John Florence.",
    phone: "555-27-18-26.",
    email: "johny_surferFlorence@gmail.com",
    location: "Honolulu, Hawaii, EUA.",
  },
  {
    image: Corzo,
    name: "Jhony Corzo.",
    phone: "477-627-18-27.",
    email: "Jhonycorzo_pescondido@gmail.com",
    location: "Puerto Escondido, Oaxaca, México.",
  },
];

export function mainContact() {
  const contactSection = document.createElement("div");
  contactSection.classList.add("mainSection");

  const divContactTitle = document.createElement("div");
  divContactTitle.classList.add("divTitle");
  const contactTitle = document.createElement("h2");
  contactTitle.innerText = "Contact Us";
  divContactTitle.appendChild(contactTitle);

  const icon4 = new Image();
  icon4.src = Icon4;
  divContactTitle.appendChild(icon4);
  contactSection.appendChild(divContactTitle);

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
  document.body.appendChild(contactSection);
}
