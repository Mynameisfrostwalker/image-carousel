const carouselStore: Carousel[] = [];

const storeImgObj = function storeImagesObjects(obj: Carousel) {
  carouselStore.push(obj);
};

class Carousel {
  private imagesArr: HTMLImageElement[] = [];

  readonly id;

  readonly timer;

  private current = 0;

  constructor(id: string, timer: number) {
    this.id = id;
    this.timer = timer;
    storeImgObj(this);
  }

  addImage(image: unknown, ...otherImages: unknown[]) {
    if (typeof image === "string") {
      const Picture = new Image();
      Picture.src = image;
      this.imagesArr.push(Picture);
    }
    if (Array.isArray(otherImages)) {
      otherImages.forEach((pic) => {
        if (typeof pic === "string") {
          const Picture = new Image();
          Picture.src = pic;
          this.imagesArr.push(Picture);
        }
      });
    }
  }

  deleteImage(image: unknown, ...otherImages: unknown[]) {
    if (typeof image === "string") {
      for (let i = 0; i < this.imagesArr.length; i += 1) {
        if (this.imagesArr[i].src === image) {
          this.imagesArr.splice(i, 1);
        }
      }
    }
    if (Array.isArray(otherImages)) {
      otherImages.forEach((pic) => {
        if (typeof pic === "string") {
          for (let i = 0; i < this.imagesArr.length; i += 1) {
            if (this.imagesArr[i].src === pic) {
              this.imagesArr.splice(i, 1);
            }
          }
        }
      });
    }
  }

  returnImagesArray() {
    return [...this.imagesArr];
  }

  nextImage() {
    if (this.current === this.imagesArr.length - 1) {
      this.current = -1;
    }
    this.current += 1;
    return this.imagesArr[this.current];
  }
}

export { carouselStore, Carousel };
