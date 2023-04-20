import './style.css';
import Tacos from './tacos.jpeg'

const ourTacos = new Image();
ourTacos.src = Tacos;
ourTacos.classList.add("tacos-image");

const imageBox = document.querySelector(".image-box");
imageBox.appendChild(ourTacos);
