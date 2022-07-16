import { carouselStore } from "./images";
import { jumpImage } from "./transitions";

const createCircles = function createCirclesDisplay(id: string, num = 0) {
  const carousel = document.querySelector(`#${id}`);
  const circlesContainer = carousel?.querySelector(".circlesContainer");
  if (circlesContainer) {
    circlesContainer.replaceChildren();
    for (let i = 0; i < carouselStore.length; i += 1) {
      if (carouselStore[i].id === carousel?.id) {
        const imgArrLength = carouselStore[i].returnImagesArray().length;
        for (let j = 0; j < imgArrLength; j += 1) {
          const circleDiv = document.createElement("div");
          circleDiv.classList.add("circles");
          circleDiv.id = `frostwalkercircle-${j}`;
          circleDiv.addEventListener("click", jumpImage);
          if (j === num) {
            circleDiv.classList.add("active");
          }
          circlesContainer.appendChild(circleDiv);
        }
      }
    }
  }
};

export default createCircles;
