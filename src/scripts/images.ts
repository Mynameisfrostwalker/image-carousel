const imgStore: Images[] = [];

const storeImgObj = function storeImagesObjects(obj: Images) {
  imgStore.push(obj);
};

class Images {
  private imagesArr: HTMLImageElement[] = [];

  readonly id;

  constructor(id: string) {
    this.id = id;
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
}

export { imgStore, Images };
