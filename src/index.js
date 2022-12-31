import "./style.css";
import { createHome, mainHome, footers } from "./home";
import { mainSports } from "./sports";
import { mainContact } from "./contact";

//function to delete the main tag
export function clearContainer(id) {
  const globalMain = document.querySelector("main");

  /* This condition is to compare the existence of a tag and its id and if its id already exists it prevents it from being DELETED,
  if the id is different it proceeds to DELETE it*/
  if (globalMain && globalMain.id == id) {
    return;
  }
  const content = document.getElementById("content");
  content.removeChild(globalMain);
}

createHome();
mainHome();
footers();

// taskbar click events
//Home
const home = document.querySelector(".home");
home.addEventListener("click", () => {
  clearContainer("mainHome");
});
home.addEventListener("click", mainHome);

//Sports
const sports = document.querySelector(".sports");
sports.addEventListener("click", () => {
  clearContainer("mainSports");
});
sports.addEventListener("click", mainSports);

//Contact
const contact = document.querySelector(".contact");
contact.addEventListener("click", () => {
  clearContainer("mainContact");
});
contact.addEventListener("click", mainContact);
