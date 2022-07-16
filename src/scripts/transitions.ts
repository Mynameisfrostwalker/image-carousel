import { carouselStore } from "./images";

const nextIntervalId: {
  [index: string]: number;
} = {};

const changeCircle = function changeCircleWhenImageChanges(
  carousel: Element,
  num: number
) {
  const circlesContainer = carousel.querySelector(".circlesContainer");
  const circles = circlesContainer?.children || [];
  for (let i = 0; i < circles.length; i += 1) {
    if (circles[i].classList.contains("active")) {
      circles[i].classList.remove("active");
    }
  }
  const { current } = carouselStore[num];
  circles[current].classList.add("active");
};

const changeImage = function changeImageAtInterval(
  carousel: Element,
  num: number,
  change: "next" | "previous" = "next"
) {
  const image = carousel.querySelector("img");
  if (image) {
    const nextImageElement =
      change === "next"
        ? carouselStore[num].nextImage()
        : carouselStore[num].previousImage();
    image.src = nextImageElement.src;
    changeCircle(carousel, num);
  }
};

const next = function setTimerForNextImage() {
  const carousels = document.querySelectorAll(".frostwalkercarousel");
  carousels.forEach((carousel) => {
    for (let i = 0; i < carouselStore.length; i += 1) {
      if (carouselStore[i].id === carousel.id) {
        nextIntervalId[carousel.id] = window.setInterval(() => {
          changeImage(carousel, i);
        }, carouselStore[i].timer);
      }
    }
  });
};

const moveImage = function moveImageOnArrowClick(
  e: Event,
  direction: "next" | "previous"
) {
  const arrow = e.currentTarget;

  if (arrow instanceof HTMLElement) {
    const carousel =
      arrow.parentElement?.parentElement?.parentElement?.parentElement;

    if (carousel) {
      const innerBorder = carousel.querySelector(".innerBorder");
      for (let i = 0; i < carouselStore.length; i += 1) {
        if (carouselStore[i].id === carousel.id) {
          innerBorder?.classList.remove(
            `frostwalkeranimation${carouselStore[i].timer}`
          );
          window.clearInterval(nextIntervalId[carousel.id]);
          changeImage(carousel, i, direction);
          innerBorder?.classList.add(
            `frostwalkeranimation${carouselStore[i].timer}`
          );
          nextIntervalId[carousel.id] = window.setInterval(() => {
            changeImage(carousel, i);
          }, carouselStore[i].timer);
        }
      }
    }
  }
};

const nextImage = function nextImageOnRightArrowClick(e: Event) {
  moveImage(e, "next");
};

const previousImage = function previousImageOnLeftArrowClick(e: Event) {
  moveImage(e, "previous");
};

export { next, nextImage, previousImage };
