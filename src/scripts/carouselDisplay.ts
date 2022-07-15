import { imgStore } from "./images";

const displayCarousel = function createAndDisplayCarousel(carousel: Element) {
  const outerBorder = document.createElement("div");
  const innerBorder = document.createElement("div");
  outerBorder.classList.add("outerBorder");
  innerBorder.classList.add("innerBorder");
  for (let i = 0; i < imgStore.length; i += 1) {
    if (imgStore[i].id === carousel.id) {
      const image = imgStore[i].returnImagesArray()[0];
      innerBorder.appendChild(image);
    }
  }
  outerBorder.appendChild(innerBorder);
  carousel.appendChild(outerBorder);
};

const findCarousels = function findAndShowCarouselOnPageLoad() {
  const carousels = document.querySelectorAll(".frostwalkercarousel");
  carousels.forEach((carousel) => {
    displayCarousel(carousel);
  });
};

export default findCarousels;
