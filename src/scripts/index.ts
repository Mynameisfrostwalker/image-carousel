import "../styles/main.scss";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import { addImage, deleteImage, returnImagesArray } from "./images";

const displayCarousel = function createAndDisplayCarousel(carousel: Element) {
  const outerBorder = document.createElement("div");
  const innerBorder = document.createElement("div");
  outerBorder.classList.add("outerBorder");
  innerBorder.classList.add("innerBorder");
  innerBorder.appendChild(returnImagesArray()[0]);
  outerBorder.appendChild(innerBorder);
  carousel.appendChild(outerBorder);
};

const findCarousels = function findAndShowCarouselOnPageLoad() {
  const carousels = document.querySelectorAll(".frostwalkercarousel");
  carousels.forEach((carousel) => {
    displayCarousel(carousel);
  });
};

window.addEventListener("load", findCarousels);
addImage(image1, image2, image3, image4, image5);
