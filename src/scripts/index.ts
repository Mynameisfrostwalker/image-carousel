import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import findCarousels from "./carouselDisplay";
import { next } from "./transitions";
import { subscribe } from "./pubsub";
import createCircles from "./circlenav";
import { Carousel } from "./images";

const FrostwalkerCarousel = function callCarousel(
  id: string,
  timer: number,
  image: unknown,
  ...otherImages: unknown[]
): Carousel {
  const temp = new Carousel(id, timer);
  temp.addImage(image, ...otherImages);
  findCarousels();
  next();
  subscribe("imagesArrChange", createCircles);

  return temp;
};

export default FrostwalkerCarousel;
