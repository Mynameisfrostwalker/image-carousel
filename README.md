
# Image Carousel

## Install

```bash
    npm install image-carousel-frostwalker
```

## Use

```HTML
    index.html
 <div id="carouselId" class="frostwalkercarousel"></div>
```

```Javascript
    index.js
import Carousel from "image-carousel-frostwalker";
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const carousel1 = new Carousel("carouselId");
carousel1.addImage(image1, image2, image3);
```
