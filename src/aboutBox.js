/* eslint-disable no-plusplus */
import Tacos from "./tacos.jpeg";

export default function buildAboutBox() {
  const aboutContainer = document.createElement("div");
  const aboutBox = document.createElement("div");
  const imageBox = document.createElement("div");
  const openingBox = document.createElement("div");

  aboutContainer.classList.add("about-container");
  aboutBox.classList.add("about-box");
  imageBox.classList.add("image-box");
  openingBox.classList.add("opening-box");

  const aboutTextContent =
    "Taylor's Tacos (est. 1991) are renowned for cooking up the best, tastiest, tacos the world has ever seen.\r\n\r\nAll of our meats are locally sourced, vegetables grown by us and tortillas handmade, on - site, each morning by us.";
  aboutBox.textContent = aboutTextContent;

  const ourTacos = new Image();
  ourTacos.src = Tacos;
  ourTacos.classList.add("tacos-image");
  imageBox.appendChild(ourTacos);

  const openingBoxText =
    "Taylor's Tacos is now open 24 / 7 Mon - Sun all year round.";
  openingBox.textContent = openingBoxText;

  aboutContainer.appendChild(aboutBox);
  aboutContainer.appendChild(imageBox);
  aboutContainer.appendChild(openingBox);
  return aboutContainer;
}
