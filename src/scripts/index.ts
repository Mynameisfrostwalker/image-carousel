import "../styles/main.scss";
import "@fortawesome/fontawesome-free/js/all";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import { Carousel } from "./images";
import findCarousels from "./carouselDisplay";
import { next } from "./transitions";
import { subscribe } from "./pubsub";
import createCircles from "./circlenav";

window.addEventListener("load", findCarousels);
const carousel1 = new Carousel("carousel1", 5000);
carousel1.addImage(image1, image2, image3);
const carousel2 = new Carousel("carousel2", 7000);
carousel2.addImage(image4, image5);
next();
setTimeout(() => {
  carousel2.addImage(image1, image2);
}, 8000);
subscribe("imagesArrChange", createCircles);

export default Carousel;
