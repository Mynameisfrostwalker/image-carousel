import "../styles/main.scss";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";
import image4 from "../assets/image4.jpeg";
import image5 from "../assets/image5.jpeg";
import { Images } from "./images";
import findCarousels from "./carouselDisplay";

window.addEventListener("load", findCarousels);
const carousel1 = new Images("carousel1");
carousel1.addImage(image1, image2, image3);
const carousel2 = new Images("carousel2");
carousel2.addImage(image4, image5);
