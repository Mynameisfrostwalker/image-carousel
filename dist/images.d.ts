declare const carouselStore: Carousel[];
declare class Carousel {
    private imagesArr;
    readonly id: string;
    readonly timer: number;
    current: number;
    constructor(id: string, timer?: number);
    addImage(image: unknown, ...otherImages: unknown[]): void;
    deleteImage(image: unknown, ...otherImages: unknown[]): void;
    returnImagesArray(): HTMLImageElement[];
    nextImage(): HTMLImageElement;
    previousImage(): HTMLImageElement;
    jumpImage(current: number): HTMLImageElement;
}
export { Carousel, carouselStore };
