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
/*!************************************!*\
  !*** ./src/scripts/transitions.ts ***!
  \************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nextImage = exports.next = void 0;
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var nextIntervalId;
var changeImage = function changeImageAtInterval(carousel, num) {
    var image = carousel.querySelector("img");
    if (image) {
        var nextImageElement = images_1.carouselStore[num].nextImage();
        image.src = nextImageElement.src;
    }
};
var next = function setTimerForNextImage() {
    var carousels = document.querySelectorAll(".frostwalkercarousel");
    carousels.forEach(function (carousel) {
        var _loop_1 = function (i) {
            if (images_1.carouselStore[i].id === carousel.id) {
                nextIntervalId = setInterval(function () {
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
var nextImage = function nextImageOnArrowRightClick(e) {
    console.log(e.currentTarget);
};
exports.nextImage = nextImage;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLGFBQWEsR0FBZSxFQUFFLENBQUM7QUF3RTVCLHNDQUFhO0FBdEV0QixJQUFNLFdBQVcsR0FBRyxTQUFTLGtCQUFrQixDQUFDLEdBQWE7SUFDM0QsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUMxQixDQUFDLENBQUM7QUFFRjtJQVNFLGtCQUFZLEVBQVUsRUFBRSxLQUFZO1FBQVosb0NBQVk7UUFSNUIsY0FBUyxHQUF1QixFQUFFLENBQUM7UUFNbkMsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUdsQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQWM7UUFBdkIsaUJBZUM7UUFmd0IscUJBQXlCO2FBQXpCLFVBQXlCLEVBQXpCLHFCQUF5QixFQUF6QixJQUF5QjtZQUF6QixvQ0FBeUI7O1FBQ2hELElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxFQUFFO1lBQzdCLElBQU0sT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7WUFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7UUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7Z0JBQ3RCLElBQUksT0FBTyxHQUFHLEtBQUssUUFBUSxFQUFFO29CQUMzQixJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO29CQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztvQkFDbEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzlCO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCw4QkFBVyxHQUFYLFVBQVksS0FBYztRQUExQixpQkFtQkM7UUFuQjJCLHFCQUF5QjthQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7WUFBekIsb0NBQXlCOztRQUNuRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDakQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7b0JBQ25DLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDN0I7YUFDRjtTQUNGO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7d0JBQ2pELElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUFFOzRCQUNqQyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQzdCO3FCQUNGO2lCQUNGO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRSx5QkFBVyxJQUFJLENBQUMsU0FBUyxRQUFFO0lBQzdCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFdUIsNEJBQVE7Ozs7Ozs7VUN4RWhDO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0QkEsOEVBQXlDO0FBRXpDLElBQUksY0FBNEIsQ0FBQztBQUVqQyxJQUFNLFdBQVcsR0FBRyxTQUFTLHFCQUFxQixDQUNoRCxRQUFpQixFQUNqQixHQUFXO0lBRVgsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxJQUFJLEtBQUssRUFBRTtRQUNULElBQU0sZ0JBQWdCLEdBQUcsc0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4RCxLQUFLLENBQUMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLEdBQUcsQ0FBQztLQUNsQztBQUNILENBQUMsQ0FBQztBQUVGLElBQU0sSUFBSSxHQUFHLFNBQVMsb0JBQW9CO0lBQ3hDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dDQUNoQixDQUFDO1lBQ1IsSUFBSSxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxjQUFjLEdBQUcsV0FBVyxDQUFDO29CQUMzQixXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUUsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1Qjs7UUFMSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsc0JBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQXZDLENBQUM7U0FNVDtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBTU8sb0JBQUk7QUFKYixJQUFNLFNBQVMsR0FBRyxTQUFTLDBCQUEwQixDQUFDLENBQVE7SUFDNUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7QUFDL0IsQ0FBQyxDQUFDO0FBRWEsOEJBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcm91c2VsU3RvcmU6IENhcm91c2VsW10gPSBbXTtcblxuY29uc3Qgc3RvcmVJbWdPYmogPSBmdW5jdGlvbiBzdG9yZUltYWdlc09iamVjdHMob2JqOiBDYXJvdXNlbCkge1xuICBjYXJvdXNlbFN0b3JlLnB1c2gob2JqKTtcbn07XG5cbmNsYXNzIENhcm91c2VsIHtcbiAgcHJpdmF0ZSBpbWFnZXNBcnI6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xuXG4gIHJlYWRvbmx5IGlkO1xuXG4gIHJlYWRvbmx5IHRpbWVyO1xuXG4gIHByaXZhdGUgY3VycmVudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGltZXIgPSA1MDAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBpbWFnZSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHBpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IHBpYykge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm5JbWFnZXNBcnJheSgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaW1hZ2VzQXJyXTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmltYWdlc0Fyci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzQXJyW3RoaXMuY3VycmVudF07XG4gIH1cbn1cblxuZXhwb3J0IHsgY2Fyb3VzZWxTdG9yZSwgQ2Fyb3VzZWwgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmxldCBuZXh0SW50ZXJ2YWxJZDogTm9kZUpTLlRpbWVyO1xuXG5jb25zdCBjaGFuZ2VJbWFnZSA9IGZ1bmN0aW9uIGNoYW5nZUltYWdlQXRJbnRlcnZhbChcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIG51bTogbnVtYmVyXG4pIHtcbiAgY29uc3QgaW1hZ2UgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICBpZiAoaW1hZ2UpIHtcbiAgICBjb25zdCBuZXh0SW1hZ2VFbGVtZW50ID0gY2Fyb3VzZWxTdG9yZVtudW1dLm5leHRJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IG5leHRJbWFnZUVsZW1lbnQuc3JjO1xuICB9XG59O1xuXG5jb25zdCBuZXh0ID0gZnVuY3Rpb24gc2V0VGltZXJGb3JOZXh0SW1hZ2UoKSB7XG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvc3R3YWxrZXJjYXJvdXNlbFwiKTtcbiAgY2Fyb3VzZWxzLmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgICAgbmV4dEludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGkpO1xuICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbmV4dEltYWdlID0gZnVuY3Rpb24gbmV4dEltYWdlT25BcnJvd1JpZ2h0Q2xpY2soZTogRXZlbnQpIHtcbiAgY29uc29sZS5sb2coZS5jdXJyZW50VGFyZ2V0KTtcbn07XG5cbmV4cG9ydCB7IG5leHQsIG5leHRJbWFnZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9