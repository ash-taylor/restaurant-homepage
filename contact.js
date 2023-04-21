export default function buildContactBox() {
  const contactContainer = document.createElement("div");
  const contactBox = document.createElement("div");

  contactContainer.classList.add("contact-container");
  contactBox.classList.add("contact-box");

  const contactText = `
  Contact us by:\r\n\r\n

  Tel: 01234 567890\r\n
  Email: taylor@taylorstacos.taco\r\n

  Find us:\r\n\r\n
  1 Taco House\r\n
  Salsa Street\r\n
  Tortillatopia\r\n
  T4 C05
  `;

  contactBox.textContent = contactText;
  contactContainer.appendChild(contactBox);

  return contactContainer;
}
