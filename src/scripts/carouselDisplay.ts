import { carouselStore } from "./images";

const displayCarousel = function createAndDisplayCarousel(carousel: Element) {
  const outerBorder = document.createElement("div");
  const innerBorder = document.createElement("div");
  outerBorder.classList.add("outerBorder");
  innerBorder.classList.add("innerBorder");
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
