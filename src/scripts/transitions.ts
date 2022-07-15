import { carouselStore } from "./images";

const changeImage = function changeImage(carousel: Element, num: number) {
  const image = carousel.querySelector("img");
  if (image) {
    const currentStyle = image.getAttribute("style");
    image?.setAttribute("style", `${currentStyle || ""} opacity: 0;`);
    const nextImage = carouselStore[num].nextImage();
    image.src = nextImage.src;
    image?.setAttribute("style", `${currentStyle || ""}`);
  }
};

const next = function setTimerForNextImage() {
  const carousels = document.querySelectorAll(".frostwalkercarousel");
  carousels.forEach((carousel) => {
    for (let i = 0; i < carouselStore.length; i += 1) {
      if (carouselStore[i].id === carousel.id) {
        setInterval(() => {
          changeImage(carousel, i);
        }, carouselStore[i].timer);
      }
    }
  });
};

export default next;
