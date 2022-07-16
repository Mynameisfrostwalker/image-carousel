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
exports.previousImage = exports.nextImage = exports.next = void 0;
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var nextIntervalId = {};
var changeImage = function changeImageAtInterval(carousel, num, change) {
    if (change === void 0) { change = "next"; }
    var image = carousel.querySelector("img");
    if (image) {
        var nextImageElement = change === "next"
            ? images_1.carouselStore[num].nextImage()
            : images_1.carouselStore[num].previousImage();
        image.src = nextImageElement.src;
    }
};
var next = function setTimerForNextImage() {
    var carousels = document.querySelectorAll(".frostwalkercarousel");
    carousels.forEach(function (carousel) {
        var _loop_1 = function (i) {
            if (images_1.carouselStore[i].id === carousel.id) {
                nextIntervalId[carousel.id] = window.setInterval(function () {
                    changeImage(carousel, i);
                }, images_1.carouselStore[i].timer);
            }
        };
        for (var i = 0; i < images_1.carouselStore.length; i += 1) {
            _loop_1(i);
        }
    });
};
exports.next = next;
var moveImage = function moveImageOnArrowClick(e, direction) {
    var _a, _b, _c;
    var arrow = e.currentTarget;
    if (arrow instanceof HTMLElement) {
        var carousel_1 = (_c = (_b = (_a = arrow.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement;
        if (carousel_1) {
            var innerBorder = carousel_1.querySelector(".innerBorder");
            var _loop_2 = function (i) {
                if (images_1.carouselStore[i].id === carousel_1.id) {
                    innerBorder === null || innerBorder === void 0 ? void 0 : innerBorder.classList.remove("frostwalkeranimation".concat(images_1.carouselStore[i].timer));
                    window.clearInterval(nextIntervalId[carousel_1.id]);
                    changeImage(carousel_1, i, direction);
                    innerBorder === null || innerBorder === void 0 ? void 0 : innerBorder.classList.add("frostwalkeranimation".concat(images_1.carouselStore[i].timer));
                    nextIntervalId[carousel_1.id] = window.setInterval(function () {
                        changeImage(carousel_1, i);
                    }, images_1.carouselStore[i].timer);
                }
            };
            for (var i = 0; i < images_1.carouselStore.length; i += 1) {
                _loop_2(i);
            }
        }
    }
};
var nextImage = function nextImageOnRightArrowClick(e) {
    moveImage(e, "next");
};
exports.nextImage = nextImage;
var previousImage = function previousImageOnLeftArrowClick(e) {
    moveImage(e, "previous");
};
exports.previousImage = previousImage;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLFNBQVMsNkJBQTZCLENBQUMsQ0FBUTtJQUNuRSxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUV3QixzQ0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvdHJhbnNpdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aW1lciA9IDUwMDApIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aW1lciA9IHRpbWVyO1xuICAgIHN0b3JlSW1nT2JqKHRoaXMpO1xuICB9XG5cbiAgYWRkSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICBQaWN0dXJlLnNyYyA9IGltYWdlO1xuICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgUGljdHVyZS5zcmMgPSBwaWM7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IGltYWdlKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gcGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxufVxuXG5leHBvcnQgeyBjYXJvdXNlbFN0b3JlLCBDYXJvdXNlbCB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImltcG9ydCB7IGNhcm91c2VsU3RvcmUgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuY29uc3QgbmV4dEludGVydmFsSWQ6IHtcbiAgW2luZGV4OiBzdHJpbmddOiBudW1iZXI7XG59ID0ge307XG5cbmNvbnN0IGNoYW5nZUltYWdlID0gZnVuY3Rpb24gY2hhbmdlSW1hZ2VBdEludGVydmFsKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgbnVtOiBudW1iZXIsXG4gIGNoYW5nZTogXCJuZXh0XCIgfCBcInByZXZpb3VzXCIgPSBcIm5leHRcIlxuKSB7XG4gIGNvbnN0IGltYWdlID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgaWYgKGltYWdlKSB7XG4gICAgY29uc3QgbmV4dEltYWdlRWxlbWVudCA9XG4gICAgICBjaGFuZ2UgPT09IFwibmV4dFwiXG4gICAgICAgID8gY2Fyb3VzZWxTdG9yZVtudW1dLm5leHRJbWFnZSgpXG4gICAgICAgIDogY2Fyb3VzZWxTdG9yZVtudW1dLnByZXZpb3VzSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBuZXh0SW1hZ2VFbGVtZW50LnNyYztcbiAgfVxufTtcblxuY29uc3QgbmV4dCA9IGZ1bmN0aW9uIHNldFRpbWVyRm9yTmV4dEltYWdlKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICAgIG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGkpO1xuICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbW92ZUltYWdlID0gZnVuY3Rpb24gbW92ZUltYWdlT25BcnJvd0NsaWNrKFxuICBlOiBFdmVudCxcbiAgZGlyZWN0aW9uOiBcIm5leHRcIiB8IFwicHJldmlvdXNcIlxuKSB7XG4gIGNvbnN0IGFycm93ID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gIGlmIChhcnJvdyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPVxuICAgICAgYXJyb3cucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgY29uc3QgaW5uZXJCb3JkZXIgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmlubmVyQm9yZGVyXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgICAgIGlubmVyQm9yZGVyPy5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSk7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGksIGRpcmVjdGlvbik7XG4gICAgICAgICAgaW5uZXJCb3JkZXI/LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgbmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgbmV4dEltYWdlID0gZnVuY3Rpb24gbmV4dEltYWdlT25SaWdodEFycm93Q2xpY2soZTogRXZlbnQpIHtcbiAgbW92ZUltYWdlKGUsIFwibmV4dFwiKTtcbn07XG5cbmNvbnN0IHByZXZpb3VzSW1hZ2UgPSBmdW5jdGlvbiBwcmV2aW91c0ltYWdlT25MZWZ0QXJyb3dDbGljayhlOiBFdmVudCkge1xuICBtb3ZlSW1hZ2UoZSwgXCJwcmV2aW91c1wiKTtcbn07XG5cbmV4cG9ydCB7IG5leHQsIG5leHRJbWFnZSwgcHJldmlvdXNJbWFnZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9