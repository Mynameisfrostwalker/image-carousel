import { carouselStore } from "./images";

let nextIntervalId: NodeJS.Timer;

const changeImage = function changeImageAtInterval(
  carousel: Element,
  num: number
) {
  const image = carousel.querySelector("img");
  if (image) {
    const nextImageElement = carouselStore[num].nextImage();
    image.src = nextImageElement.src;
  }
};

const next = function setTimerForNextImage() {
  const carousels = document.querySelectorAll(".frostwalkercarousel");
  carousels.forEach((carousel) => {
    for (let i = 0; i < carouselStore.length; i += 1) {
      if (carouselStore[i].id === carousel.id) {
        nextIntervalId = setInterval(() => {
          changeImage(carousel, i);
        }, carouselStore[i].timer);
      }
    }
  });
};

const nextImage = function nextImageOnArrowRightClick(e: Event) {
  console.log(e.currentTarget);
};

export { next, nextImage };
