/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/images.ts":
/*!*******************************!*\
  !*** ./src/scripts/images.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports) {


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Carousel = exports.carouselStore = void 0;
var carouselStore = [];
exports.carouselStore = carouselStore;
var storeImgObj = function storeImagesObjects(obj) {
    carouselStore.push(obj);
};
var Carousel = /** @class */ (function () {
    function Carousel(id, timer) {
        if (timer === void 0) { timer = 5000; }
        this.imagesArr = [];
        this.current = 0;
        this.id = id;
        this.timer = timer;
        storeImgObj(this);
    }
    Carousel.prototype.addImage = function (image) {
        var _this = this;
        var otherImages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherImages[_i - 1] = arguments[_i];
        }
        if (typeof image === "string") {
            var Picture = new Image();
            Picture.src = image;
            this.imagesArr.push(Picture);
        }
        if (Array.isArray(otherImages)) {
            otherImages.forEach(function (pic) {
                if (typeof pic === "string") {
                    var Picture = new Image();
                    Picture.src = pic;
                    _this.imagesArr.push(Picture);
                }
            });
        }
    };
    Carousel.prototype.deleteImage = function (image) {
        var _this = this;
        var otherImages = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            otherImages[_i - 1] = arguments[_i];
        }
        if (typeof image === "string") {
            for (var i = 0; i < this.imagesArr.length; i += 1) {
                if (this.imagesArr[i].src === image) {
                    this.imagesArr.splice(i, 1);
                }
            }
        }
        if (Array.isArray(otherImages)) {
            otherImages.forEach(function (pic) {
                if (typeof pic === "string") {
                    for (var i = 0; i < _this.imagesArr.length; i += 1) {
                        if (_this.imagesArr[i].src === pic) {
                            _this.imagesArr.splice(i, 1);
                        }
                    }
                }
            });
        }
    };
    Carousel.prototype.returnImagesArray = function () {
        return __spreadArray([], this.imagesArr, true);
    };
    Carousel.prototype.nextImage = function () {
        if (this.current === this.imagesArr.length - 1) {
            this.current = -1;
        }
        this.current += 1;
        return this.imagesArr[this.current];
    };
    Carousel.prototype.previousImage = function () {
        if (this.current === 0) {
            this.current = this.imagesArr.length;
        }
        this.current -= 1;
        return this.imagesArr[this.current];
    };
    return Carousel;
}());
exports.Carousel = Carousel;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/images.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxhQUFhLEdBQWUsRUFBRSxDQUFDO0FBZ0Y1QixzQ0FBYTtBQTlFdEIsSUFBTSxXQUFXLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxHQUFhO0lBQzNELGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUY7SUFTRSxrQkFBWSxFQUFVLEVBQUUsS0FBWTtRQUFaLG9DQUFZO1FBUjVCLGNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBTW5DLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFjO1FBQXZCLGlCQWVDO1FBZndCLHFCQUF5QjthQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7WUFBekIsb0NBQXlCOztRQUNoRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQWM7UUFBMUIsaUJBbUJDO1FBbkIyQixxQkFBeUI7YUFBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO1lBQXpCLG9DQUF5Qjs7UUFDbkQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO29CQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNqRCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTs0QkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUM3QjtxQkFDRjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UseUJBQVcsSUFBSSxDQUFDLFNBQVMsUUFBRTtJQUM3QixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUV1Qiw0QkFBUTs7Ozs7Ozs7VUVoRmhDO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aW1lciA9IDUwMDApIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aW1lciA9IHRpbWVyO1xuICAgIHN0b3JlSW1nT2JqKHRoaXMpO1xuICB9XG5cbiAgYWRkSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICBQaWN0dXJlLnNyYyA9IGltYWdlO1xuICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgUGljdHVyZS5zcmMgPSBwaWM7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IGltYWdlKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gcGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxufVxuXG5leHBvcnQgeyBjYXJvdXNlbFN0b3JlLCBDYXJvdXNlbCB9O1xuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbl9fd2VicGFja19tb2R1bGVzX19bXCIuL3NyYy9zY3JpcHRzL2ltYWdlcy50c1wiXSgwLCBfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==