export default function buildMenuBox() {
  const menuContainer = document.createElement("div");
  const starterBox = document.createElement("div");
  const mainBox = document.createElement("div");
  const dessertBox = document.createElement("div");

  menuContainer.classList.add("menu-container");
  starterBox.classList.add("starter-box");
  mainBox.classList.add("main-box");
  dessertBox.classList.add("dessert-box");

  const starterText = `
  Starters:\r\n\r\n
  
  Starter 1\r\n
  Starter 2\r\n
  Starter 3\r\n
  `;

  const mainText = `
  Mains:\r\n\r\n
  
  Main 1\r\n
  Main 2\r\n
  Main 3\r\n
  `;

  const dessertText = `
  Desserts:\r\n\r\n
  
  Dessert 1\r\n
  Dessert 2\r\n
  Dessert 3\r\n
  `;

  starterBox.textContent = starterText;
  menuContainer.appendChild(starterBox);

  mainBox.textContent = mainText;
  menuContainer.appendChild(mainBox);

  dessertBox.textContent = dessertText;
  menuContainer.appendChild(dessertBox);

  return menuContainer;
}
