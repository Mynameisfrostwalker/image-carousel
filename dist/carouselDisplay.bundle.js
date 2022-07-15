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
/*!****************************************!*\
  !*** ./src/scripts/carouselDisplay.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var displayCarousel = function createAndDisplayCarousel(carousel) {
    var outerBorder = document.createElement("div");
    var innerBorder = document.createElement("div");
    outerBorder.classList.add("outerBorder");
    innerBorder.classList.add("innerBorder");
    for (var i = 0; i < images_1.carouselStore.length; i += 1) {
        if (images_1.carouselStore[i].id === carousel.id) {
            var image = images_1.carouselStore[i].returnImagesArray()[0];
            var clone = image.cloneNode(true);
            if (clone instanceof HTMLImageElement) {
                innerBorder.appendChild(clone);
                var style = document.createElement("style");
                style.innerHTML = "\n        .frostwalkeranimation".concat(images_1.carouselStore[i].timer, " {\n            animation-name: fade").concat(images_1.carouselStore[i].timer, ";\n            animation-duration: ").concat(images_1.carouselStore[i].timer / 1000, "s;\n            animation-iteration-count: infinite;\n            transform-origin: left;\n        }\n        \n        @keyframes fade").concat(images_1.carouselStore[i].timer, " {\n            from {\n                opacity: .4;\n            } \n            to {\n                opacity: 1;\n            }\n        }\n        ");
                document.getElementsByTagName("head")[0].appendChild(style);
                innerBorder.classList.add("frostwalkeranimation".concat(images_1.carouselStore[i].timer));
            }
        }
    }
    outerBorder.appendChild(innerBorder);
    carousel.appendChild(outerBorder);
};
var findCarousels = function findAndShowCarouselOnPageLoad() {
    var carousels = document.querySelectorAll(".frostwalkercarousel");
    carousels.forEach(function (carousel) {
        displayCarousel(carousel);
    });
};
exports["default"] = findCarousels;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUFBYSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9jYXJvdXNlbERpc3BsYXkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aW1lcjogbnVtYmVyKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBpbWFnZSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHBpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IHBpYykge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm5JbWFnZXNBcnJheSgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaW1hZ2VzQXJyXTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmltYWdlc0Fyci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzQXJyW3RoaXMuY3VycmVudF07XG4gIH1cbn1cblxuZXhwb3J0IHsgY2Fyb3VzZWxTdG9yZSwgQ2Fyb3VzZWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmNvbnN0IGRpc3BsYXlDYXJvdXNlbCA9IGZ1bmN0aW9uIGNyZWF0ZUFuZERpc3BsYXlDYXJvdXNlbChjYXJvdXNlbDogRWxlbWVudCkge1xuICBjb25zdCBvdXRlckJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlubmVyQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgb3V0ZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcIm91dGVyQm9yZGVyXCIpO1xuICBpbm5lckJvcmRlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJCb3JkZXJcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgY29uc3QgaW1hZ2UgPSBjYXJvdXNlbFN0b3JlW2ldLnJldHVybkltYWdlc0FycmF5KClbMF07XG4gICAgICBjb25zdCBjbG9uZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGlmIChjbG9uZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgaW5uZXJCb3JkZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAuZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfTtcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyIC8gMTAwMH1zO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIGlubmVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoaW5uZXJCb3JkZXIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChvdXRlckJvcmRlcik7XG59O1xuXG5jb25zdCBmaW5kQ2Fyb3VzZWxzID0gZnVuY3Rpb24gZmluZEFuZFNob3dDYXJvdXNlbE9uUGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvc3R3YWxrZXJjYXJvdXNlbFwiKTtcbiAgY2Fyb3VzZWxzLmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgZGlzcGxheUNhcm91c2VsKGNhcm91c2VsKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kQ2Fyb3VzZWxzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9