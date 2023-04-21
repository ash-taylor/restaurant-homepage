/* eslint-disable no-plusplus */
export function buildHeader() {
  const menuLength = 3;

  const header = document.createElement("header");
  const h1 = document.createElement("h1");
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  h1.textContent = "Taylor's Tacos";

  const li = new Array(menuLength);
  for (let i = 0; i < menuLength; i++) {
    li[i] = document.createElement("li");
  }

  li[0].classList.add("home-button");
  li[0].id = "home";
  li[0].textContent = "Home";
  li[1].classList.add("menu-button");
  li[1].textContent = "Menu";
  li[1].id = "menu";
  li[2].classList.add("menu-button");
  li[2].textContent = "Contact";
  li[2].id = "contact";

  li.forEach((item) => {
    ul.appendChild(item);
  });

  nav.appendChild(ul);
  header.appendChild(h1);
  header.appendChild(nav);

  return header;
}

export function buildFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyright © 2023 Ash Taylor";

  return footer;
}
