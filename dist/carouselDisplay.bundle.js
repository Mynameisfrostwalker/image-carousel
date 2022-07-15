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
var displayImage = function displayImage(carousel, innerBorder) {
    for (var i = 0; i < images_1.carouselStore.length; i += 1) {
        if (images_1.carouselStore[i].id === carousel.id) {
            var image = images_1.carouselStore[i].returnImagesArray()[0];
            var clone = image.cloneNode(true);
            if (clone instanceof HTMLImageElement) {
                innerBorder.appendChild(clone);
                var style = document.createElement("style");
                style.innerHTML = "\n            .frostwalkeranimation".concat(images_1.carouselStore[i].timer, " {\n                animation-name: fade").concat(images_1.carouselStore[i].timer, ";\n                animation-duration: ").concat(images_1.carouselStore[i].timer / 1000, "s;\n                animation-iteration-count: infinite;\n                animation-delay: ").concat(images_1.carouselStore[i].timer / 500000, "s;\n                transform-origin: left;\n            }\n            \n            @keyframes fade").concat(images_1.carouselStore[i].timer, " {\n                from {\n                    opacity: .4;\n                } \n                to {\n                    opacity: 1;\n                }\n            }\n            ");
                document.getElementsByTagName("head")[0].appendChild(style);
                innerBorder.classList.add("frostwalkeranimation".concat(images_1.carouselStore[i].timer));
            }
        }
    }
};
var createArrows = function (arrowsContainer) {
    var arrow1 = document.createElement("div");
    arrow1.classList.add("arrow1", "arrows");
    var i1 = document.createElement("i");
    i1.classList.add("fas", "fa-arrow-alt-circle-left");
    arrow1.appendChild(i1);
    var arrow2 = document.createElement("div");
    arrow2.classList.add("arrow2", "arrows");
    var i2 = document.createElement("i");
    i2.classList.add("fas", "fa-arrow-alt-circle-right");
    arrow2.appendChild(i2);
    arrowsContainer.appendChild(arrow1);
    arrowsContainer.appendChild(arrow2);
};
var displayControls = function displayArrowsAndCircles(outerBorder) {
    var controlsContainer = document.createElement("div");
    controlsContainer.classList.add("controlsContainer");
    var circlesContainer = document.createElement("div");
    circlesContainer.classList.add("circlesContainer");
    var arrowsContainer = document.createElement("div");
    arrowsContainer.classList.add("arrowsContainer");
    createArrows(arrowsContainer);
    controlsContainer.appendChild(circlesContainer);
    controlsContainer.appendChild(arrowsContainer);
    outerBorder.appendChild(controlsContainer);
};
var displayCarousel = function createAndDisplayCarousel(carousel) {
    var outerBorder = document.createElement("div");
    var innerBorder = document.createElement("div");
    outerBorder.classList.add("outerBorder");
    innerBorder.classList.add("innerBorder");
    displayImage(carousel, innerBorder);
    outerBorder.appendChild(innerBorder);
    displayControls(outerBorder);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxDQUFDO0lBQ2xELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbEQsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsWUFBWSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUNwQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ3JDLGVBQWUsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUM3QixRQUFRLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3BDLENBQUMsQ0FBQztBQUVGLElBQU0sYUFBYSxHQUFHLFNBQVMsNkJBQTZCO0lBQzFELElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO1FBQ3pCLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUVGLHFCQUFlLGFBQWEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvY2Fyb3VzZWxEaXNwbGF5LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcm91c2VsU3RvcmU6IENhcm91c2VsW10gPSBbXTtcblxuY29uc3Qgc3RvcmVJbWdPYmogPSBmdW5jdGlvbiBzdG9yZUltYWdlc09iamVjdHMob2JqOiBDYXJvdXNlbCkge1xuICBjYXJvdXNlbFN0b3JlLnB1c2gob2JqKTtcbn07XG5cbmNsYXNzIENhcm91c2VsIHtcbiAgcHJpdmF0ZSBpbWFnZXNBcnI6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xuXG4gIHJlYWRvbmx5IGlkO1xuXG4gIHJlYWRvbmx5IHRpbWVyO1xuXG4gIHByaXZhdGUgY3VycmVudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGltZXIgPSA1MDAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBpbWFnZSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHBpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IHBpYykge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm5JbWFnZXNBcnJheSgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaW1hZ2VzQXJyXTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmltYWdlc0Fyci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzQXJyW3RoaXMuY3VycmVudF07XG4gIH1cbn1cblxuZXhwb3J0IHsgY2Fyb3VzZWxTdG9yZSwgQ2Fyb3VzZWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBuZXh0SW1hZ2UgfSBmcm9tIFwiLi90cmFuc2l0aW9uc1wiO1xuXG5jb25zdCBkaXNwbGF5SW1hZ2UgPSBmdW5jdGlvbiBkaXNwbGF5SW1hZ2UoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBpbm5lckJvcmRlcjogSFRNTERpdkVsZW1lbnRcbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgIGNvbnN0IGltYWdlID0gY2Fyb3VzZWxTdG9yZVtpXS5yZXR1cm5JbWFnZXNBcnJheSgpWzBdO1xuICAgICAgY29uc3QgY2xvbmUgPSBpbWFnZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICBpZiAoY2xvbmUgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50KSB7XG4gICAgICAgIGlubmVyQm9yZGVyLmFwcGVuZENoaWxkKGNsb25lKTtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgIC5mcm9zdHdhbGtlcmFuaW1hdGlvbiR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn0ge1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZHVyYXRpb246ICR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lciAvIDEwMDB9cztcbiAgICAgICAgICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6ICR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lciAvIDUwMDAwMH1zO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgZmFkZSR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn0ge1xuICAgICAgICAgICAgICAgIGZyb20ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAuNDtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImhlYWRcIilbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICBpbm5lckJvcmRlci5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgIGBmcm9zdHdhbGtlcmFuaW1hdGlvbiR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn1gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVBcnJvd3MgPSAoYXJyb3dzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCkgPT4ge1xuICBjb25zdCBhcnJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvdzEuY2xhc3NMaXN0LmFkZChcImFycm93MVwiLCBcImFycm93c1wiKTtcbiAgY29uc3QgaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaTEuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiKTtcbiAgYXJyb3cxLmFwcGVuZENoaWxkKGkxKTtcbiAgY29uc3QgYXJyb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3cyLmNsYXNzTGlzdC5hZGQoXCJhcnJvdzJcIiwgXCJhcnJvd3NcIik7XG4gIGNvbnN0IGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0XCIpO1xuICBhcnJvdzIuYXBwZW5kQ2hpbGQoaTIpO1xuICBhcnJvd3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3cxKTtcbiAgYXJyb3dzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93Mik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbHMgPSBmdW5jdGlvbiBkaXNwbGF5QXJyb3dzQW5kQ2lyY2xlcyhcbiAgb3V0ZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9sc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNDb250YWluZXJcIik7XG4gIGNvbnN0IGNpcmNsZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXJjbGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVzQ29udGFpbmVyXCIpO1xuICBjb25zdCBhcnJvd3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvd3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93c0NvbnRhaW5lclwiKTtcbiAgY3JlYXRlQXJyb3dzKGFycm93c0NvbnRhaW5lcik7XG4gIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZXNDb250YWluZXIpO1xuICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd3NDb250YWluZXIpO1xuICBvdXRlckJvcmRlci5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2Fyb3VzZWwgPSBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5Q2Fyb3VzZWwoY2Fyb3VzZWw6IEVsZW1lbnQpIHtcbiAgY29uc3Qgb3V0ZXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lckJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXCJvdXRlckJvcmRlclwiKTtcbiAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcImlubmVyQm9yZGVyXCIpO1xuICBkaXNwbGF5SW1hZ2UoY2Fyb3VzZWwsIGlubmVyQm9yZGVyKTtcbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoaW5uZXJCb3JkZXIpO1xuICBkaXNwbGF5Q29udHJvbHMob3V0ZXJCb3JkZXIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChvdXRlckJvcmRlcik7XG59O1xuXG5jb25zdCBmaW5kQ2Fyb3VzZWxzID0gZnVuY3Rpb24gZmluZEFuZFNob3dDYXJvdXNlbE9uUGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvc3R3YWxrZXJjYXJvdXNlbFwiKTtcbiAgY2Fyb3VzZWxzLmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgZGlzcGxheUNhcm91c2VsKGNhcm91c2VsKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kQ2Fyb3VzZWxzO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9