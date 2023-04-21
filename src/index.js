import "./style.css";
import { buildHeader, buildFooter } from "./headerFooter";
import buildAboutBox from "./aboutBox";
import buildMenuBox from "../menu";
import buildContactBox from "../contact";

const body = document.querySelector("body");
const content = document.getElementById("content");

const header = buildHeader();
body.prepend(header);

const aboutBox = buildAboutBox();
let currentChild = aboutBox;
content.appendChild(aboutBox);

const footer = buildFooter();
body.appendChild(footer);

function home() {
  content.removeChild(currentChild);
  content.appendChild(aboutBox);
  currentChild = aboutBox;
}

function menu() {
  const menuBox = buildMenuBox();
  content.removeChild(currentChild);
  content.appendChild(menuBox);
  currentChild = menuBox;
}

function contact() {
  const contactBox = buildContactBox();
  content.removeChild(currentChild);
  content.appendChild(contactBox);
  currentChild = contactBox;
}

const options = {
  home,
  menu,
  contact,
};

document.querySelectorAll("li").forEach((button) => {
  button.addEventListener("click", (event) => {
    options[event.target.id]();
  });
});
