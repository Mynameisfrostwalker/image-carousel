import { carouselStore } from "./images";
import { nextImage, previousImage } from "./transitions";

const displayImage = function displayImage(
  carousel: Element,
  innerBorder: HTMLDivElement
) {
  for (let i = 0; i < carouselStore.length; i += 1) {
    if (carouselStore[i].id === carousel.id) {
      const image = carouselStore[i].returnImagesArray()[0];
      const clone = image.cloneNode(true);
      if (clone instanceof HTMLImageElement) {
        innerBorder.appendChild(clone);
        const style = document.createElement("style");
        style.innerHTML = `
            .frostwalkeranimation${carouselStore[i].timer} {
                animation-name: fade${carouselStore[i].timer};
                animation-duration: ${carouselStore[i].timer / 1000}s;
                animation-iteration-count: infinite;
                animation-delay: ${carouselStore[i].timer / 500000}s;
                transform-origin: left;
            }
            
            @keyframes fade${carouselStore[i].timer} {
                from {
                    opacity: .4;
                } 
                to {
                    opacity: 1;
                }
            }
            `;
        document.getElementsByTagName("head")[0].appendChild(style);
        innerBorder.classList.add(
          `frostwalkeranimation${carouselStore[i].timer}`
        );
      }
    }
  }
};

const createArrows = function createArrowsDisplay(
  arrowsContainer: HTMLDivElement
) {
  const arrow1 = document.createElement("div");
  arrow1.classList.add("arrow1", "arrows");
  arrow1.addEventListener("click", previousImage);
  const i1 = document.createElement("i");
  i1.classList.add("fas", "fa-arrow-alt-circle-left");
  arrow1.appendChild(i1);
  const arrow2 = document.createElement("div");
  arrow2.classList.add("arrow2", "arrows");
  arrow2.addEventListener("click", nextImage);
  const i2 = document.createElement("i");
  i2.classList.add("fas", "fa-arrow-alt-circle-right");
  arrow2.appendChild(i2);
  arrowsContainer.appendChild(arrow1);
  arrowsContainer.appendChild(arrow2);
};

const createCircles = function createCirclesDisplay(
  carousel: Element,
  circlesContainer: HTMLDivElement
) {
  for (let i = 0; i < carouselStore.length; i += 1) {
    if (carouselStore[i].id === carousel.id) {
      const imgArrLength = carouselStore[i].returnImagesArray().length;
      for (let j = 0; j < imgArrLength; j += 1) {
        const circleDiv = document.createElement("div");
        circleDiv.classList.add("circles", `frostwalkercircle${j}`);
        circlesContainer.appendChild(circleDiv);
      }
    }
  }
};

const displayControls = function displayArrowsAndCircles(
  carousel: Element,
  outerBorder: HTMLDivElement
) {
  const controlsContainer = document.createElement("div");
  controlsContainer.classList.add("controlsContainer");
  const circlesContainer = document.createElement("div");
  circlesContainer.classList.add("circlesContainer");
  createCircles(carousel, circlesContainer);
  const arrowsContainer = document.createElement("div");
  arrowsContainer.classList.add("arrowsContainer");
  createArrows(arrowsContainer);
  controlsContainer.appendChild(circlesContainer);
  controlsContainer.appendChild(arrowsContainer);
  outerBorder.appendChild(controlsContainer);
};

const displayCarousel = function createAndDisplayCarousel(carousel: Element) {
  const outerBorder = document.createElement("div");
  const innerBorder = document.createElement("div");
  outerBorder.classList.add("outerBorder");
  innerBorder.classList.add("innerBorder");
  displayImage(carousel, innerBorder);
  outerBorder.appendChild(innerBorder);
  displayControls(carousel, outerBorder);
  carousel.appendChild(outerBorder);
};

const findCarousels = function findAndShowCarouselOnPageLoad() {
  const carousels = document.querySelectorAll(".frostwalkercarousel");
  carousels.forEach((carousel) => {
    displayCarousel(carousel);
  });
};

export default findCarousels;
