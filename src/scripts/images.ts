const images: HTMLImageElement[] = [];

const addImage = function addImageToArray(
  image: unknown,
  ...otherImages: unknown[]
) {
  if (typeof image === "string") {
    const Picture = new Image();
    Picture.src = image;
    images.push(Picture);
  }
  if (Array.isArray(otherImages)) {
    otherImages.forEach((pic) => {
      if (typeof pic === "string") {
        const Picture = new Image();
        Picture.src = pic;
        images.push(Picture);
      }
    });
  }
};

const deleteImage = function deleteImagefromArray(
  image: unknown,
  ...otherImages: unknown[]
) {
  if (typeof image === "string") {
    for (let i = 0; i < images.length; i += 1) {
      if (images[i].src === image) {
        images.splice(i, 1);
      }
    }
  }
  if (Array.isArray(otherImages)) {
    otherImages.forEach((pic) => {
      if (typeof pic === "string") {
        for (let i = 0; i < images.length; i += 1) {
          if (images[i].src === pic) {
            images.splice(i, 1);
          }
        }
      }
    });
  }
};

const returnImagesArray = function returnImagesArray() {
  return [...images];
};

export { addImage, deleteImage, returnImagesArray };
