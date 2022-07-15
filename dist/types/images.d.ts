declare const imgStore: Images[];
declare class Images {
    private imagesArr;
    readonly id: string;
    constructor(id: string);
    addImage(image: unknown, ...otherImages: unknown[]): void;
    deleteImage(image: unknown, ...otherImages: unknown[]): void;
    returnImagesArray(): HTMLImageElement[];
}
export { imgStore, Images };
