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
    return Carousel;
}());
exports.Carousel = Carousel;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!************************************!*\
  !*** ./src/scripts/transitions.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var changeImage = function changeImage(carousel, num) {
    var image = carousel.querySelector("img");
    if (image) {
        var currentStyle = image.getAttribute("style");
        image === null || image === void 0 ? void 0 : image.setAttribute("style", "".concat(currentStyle || "", " opacity: 0;"));
        var nextImage = images_1.carouselStore[num].nextImage();
        image.src = nextImage.src;
        image === null || image === void 0 ? void 0 : image.setAttribute("style", "".concat(currentStyle || ""));
    }
};
var next = function setTimerForNextImage() {
    var carousels = document.querySelectorAll(".frostwalkercarousel");
    carousels.forEach(function (carousel) {
        var _loop_1 = function (i) {
            if (images_1.carouselStore[i].id === carousel.id) {
                setInterval(function () {
                    changeImage(carousel, i);
                }, images_1.carouselStore[i].timer);
            }
        };
        for (var i = 0; i < images_1.carouselStore.length; i += 1) {
            _loop_1(i);
        }
    });
};
exports["default"] = next;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0tBQ3ZEO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsSUFBTSxJQUFJLEdBQUcsU0FBUyxvQkFBb0I7SUFDeEMsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7Z0NBQ2hCLENBQUM7WUFDUixJQUFJLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3ZDLFdBQVcsQ0FBQztvQkFDVixXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUUsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1Qjs7UUFMSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsc0JBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQXZDLENBQUM7U0FNVDtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYscUJBQWUsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy90cmFuc2l0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYXJvdXNlbFN0b3JlOiBDYXJvdXNlbFtdID0gW107XG5cbmNvbnN0IHN0b3JlSW1nT2JqID0gZnVuY3Rpb24gc3RvcmVJbWFnZXNPYmplY3RzKG9iajogQ2Fyb3VzZWwpIHtcbiAgY2Fyb3VzZWxTdG9yZS5wdXNoKG9iaik7XG59O1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIHByaXZhdGUgaW1hZ2VzQXJyOiBIVE1MSW1hZ2VFbGVtZW50W10gPSBbXTtcblxuICByZWFkb25seSBpZDtcblxuICByZWFkb25seSB0aW1lcjtcblxuICBwcml2YXRlIGN1cnJlbnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRpbWVyOiBudW1iZXIpIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aW1lciA9IHRpbWVyO1xuICAgIHN0b3JlSW1nT2JqKHRoaXMpO1xuICB9XG5cbiAgYWRkSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICBQaWN0dXJlLnNyYyA9IGltYWdlO1xuICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgUGljdHVyZS5zcmMgPSBwaWM7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IGltYWdlKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gcGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxufVxuXG5leHBvcnQgeyBjYXJvdXNlbFN0b3JlLCBDYXJvdXNlbCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGNhcm91c2VsU3RvcmUgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuY29uc3QgY2hhbmdlSW1hZ2UgPSBmdW5jdGlvbiBjaGFuZ2VJbWFnZShjYXJvdXNlbDogRWxlbWVudCwgbnVtOiBudW1iZXIpIHtcbiAgY29uc3QgaW1hZ2UgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICBpZiAoaW1hZ2UpIHtcbiAgICBjb25zdCBjdXJyZW50U3R5bGUgPSBpbWFnZS5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKTtcbiAgICBpbWFnZT8uc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgYCR7Y3VycmVudFN0eWxlIHx8IFwiXCJ9IG9wYWNpdHk6IDA7YCk7XG4gICAgY29uc3QgbmV4dEltYWdlID0gY2Fyb3VzZWxTdG9yZVtudW1dLm5leHRJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IG5leHRJbWFnZS5zcmM7XG4gICAgaW1hZ2U/LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIGAke2N1cnJlbnRTdHlsZSB8fCBcIlwifWApO1xuICB9XG59O1xuXG5jb25zdCBuZXh0ID0gZnVuY3Rpb24gc2V0VGltZXJGb3JOZXh0SW1hZ2UoKSB7XG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvc3R3YWxrZXJjYXJvdXNlbFwiKTtcbiAgY2Fyb3VzZWxzLmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgfSwgY2Fyb3VzZWxTdG9yZVtpXS50aW1lcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IG5leHQ7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=