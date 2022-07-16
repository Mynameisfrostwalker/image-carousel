/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/images.ts":
/*!*******************************!*\
  !*** ./src/scripts/images.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var pubsub_1 = __webpack_require__(/*! ./pubsub */ "./src/scripts/pubsub.ts");
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
        (0, pubsub_1.publish)("imagesArrChange", this.id, this.current);
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
        (0, pubsub_1.publish)("imagesArrChange", this.id, this.current);
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
    Carousel.prototype.jumpImage = function (current) {
        this.current = current;
        return this.imagesArr[this.current];
    };
    return Carousel;
}());
exports.Carousel = Carousel;


/***/ }),

/***/ "./src/scripts/pubsub.ts":
/*!*******************************!*\
  !*** ./src/scripts/pubsub.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.unsubscribe = exports.subscribe = exports.publish = void 0;
var events = {
// key: eventname, value: [funcs]
};
var subscribe = function (eventName, func) {
    if (events[eventName]) {
        events[eventName].push(func);
    }
    else {
        events[eventName] = [func];
    }
};
exports.subscribe = subscribe;
var unsubscribe = function (eventName, func) {
    if (events[eventName]) {
        for (var i = 0; i < events[eventName].length; i += 1) {
            if (events[eventName][i].toString() === func.toString()) {
                events[eventName].splice(i, 1);
                break;
            }
        }
    }
};
exports.unsubscribe = unsubscribe;
var publish = function (eventName) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var funcs = events[eventName];
    if (Array.isArray(funcs)) {
        funcs.forEach(function (func) {
            func.apply(void 0, args);
        });
    }
};
exports.publish = publish;


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
exports.jumpImage = exports.previousImage = exports.nextImage = exports.next = void 0;
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var nextIntervalId = {};
var changeCircle = function changeCircleWhenImageChanges(carousel, num) {
    var circlesContainer = carousel.querySelector(".circlesContainer");
    var circles = (circlesContainer === null || circlesContainer === void 0 ? void 0 : circlesContainer.children) || [];
    for (var i = 0; i < circles.length; i += 1) {
        if (circles[i].classList.contains("active")) {
            circles[i].classList.remove("active");
        }
    }
    var current = images_1.carouselStore[num].current;
    circles[current].classList.add("active");
};
var changeImage = function changeImageAtInterval(carousel, num, change) {
    if (change === void 0) { change = "next"; }
    var image = carousel.querySelector("img");
    if (image) {
        var nextImageElement = change === "next"
            ? images_1.carouselStore[num].nextImage()
            : images_1.carouselStore[num].previousImage();
        image.src = nextImageElement.src;
        changeCircle(carousel, num);
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
var jumpImage = function jumpImageOnCircleClick() { };
exports.jumpImage = jumpImage;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJhbnNpdGlvbnMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBbUM7QUFFbkMsSUFBTSxhQUFhLEdBQWUsRUFBRSxDQUFDO0FBdUY1QixzQ0FBYTtBQXJGdEIsSUFBTSxXQUFXLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxHQUFhO0lBQzNELGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUY7SUFTRSxrQkFBWSxFQUFVLEVBQUUsS0FBWTtRQUFaLG9DQUFZO1FBUjVCLGNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBTTNDLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHVixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBRUQsMkJBQVEsR0FBUixVQUFTLEtBQWM7UUFBdkIsaUJBZ0JDO1FBaEJ3QixxQkFBeUI7YUFBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO1lBQXpCLG9DQUF5Qjs7UUFDaEQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztZQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM5QjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7b0JBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO29CQUNsQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDOUI7WUFDSCxDQUFDLENBQUMsQ0FBQztTQUNKO1FBQ0Qsb0JBQU8sRUFBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQWM7UUFBMUIsaUJBb0JDO1FBcEIyQixxQkFBeUI7YUFBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO1lBQXpCLG9DQUF5Qjs7UUFDbkQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO29CQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNqRCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTs0QkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUM3QjtxQkFDRjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFDRCxvQkFBTyxFQUFDLGlCQUFpQixFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxvQ0FBaUIsR0FBakI7UUFDRSx5QkFBVyxJQUFJLENBQUMsU0FBUyxRQUFFO0lBQzdCLENBQUM7SUFFRCw0QkFBUyxHQUFUO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUM7UUFDbEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsZ0NBQWEsR0FBYjtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxDQUFDLEVBQUU7WUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztTQUN0QztRQUNELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxPQUFlO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNILGVBQUM7QUFBRCxDQUFDO0FBRXVCLDRCQUFROzs7Ozs7Ozs7Ozs7OztBQ25GaEMsSUFBTSxNQUFNLEdBQVc7QUFDckIsaUNBQWlDO0NBQ2xDLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBRyxVQUFDLFNBQWlCLEVBQUUsSUFBa0I7SUFDdEQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDckIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUM5QjtTQUFNO1FBQ0wsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDNUI7QUFDSCxDQUFDLENBQUM7QUFzQmdCLDhCQUFTO0FBcEIzQixJQUFNLFdBQVcsR0FBRyxVQUFDLFNBQWlCLEVBQUUsSUFBa0I7SUFDeEQsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7UUFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3ZELE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMvQixNQUFNO2FBQ1A7U0FDRjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBVzJCLGtDQUFXO0FBVHhDLElBQU0sT0FBTyxHQUFHLFVBQUMsU0FBaUI7SUFBRSxjQUFrQjtTQUFsQixVQUFrQixFQUFsQixxQkFBa0IsRUFBbEIsSUFBa0I7UUFBbEIsNkJBQWtCOztJQUNwRCxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDaEMsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3hCLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ2pCLElBQUksZUFBSSxJQUFJLEVBQUU7UUFDaEIsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQUVPLDBCQUFPOzs7Ozs7O1VDdENoQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7O0FDdEJBLDhFQUF5QztBQUV6QyxJQUFNLGNBQWMsR0FFaEIsRUFBRSxDQUFDO0FBRVAsSUFBTSxZQUFZLEdBQUcsU0FBUyw0QkFBNEIsQ0FDeEQsUUFBaUIsRUFDakIsR0FBVztJQUVYLElBQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3JFLElBQU0sT0FBTyxHQUFHLGlCQUFnQixhQUFoQixnQkFBZ0IsdUJBQWhCLGdCQUFnQixDQUFFLFFBQVEsS0FBSSxFQUFFLENBQUM7SUFDakQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUMxQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0Y7SUFDTyxXQUFPLEdBQUssc0JBQWEsQ0FBQyxHQUFHLENBQUMsUUFBdkIsQ0FBd0I7SUFDdkMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDM0MsQ0FBQyxDQUFDO0FBRUYsSUFBTSxXQUFXLEdBQUcsU0FBUyxxQkFBcUIsQ0FDaEQsUUFBaUIsRUFDakIsR0FBVyxFQUNYLE1BQW9DO0lBQXBDLHdDQUFvQztJQUVwQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBTSxnQkFBZ0IsR0FDcEIsTUFBTSxLQUFLLE1BQU07WUFDZixDQUFDLENBQUMsc0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLHNCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsS0FBSyxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7UUFDakMsWUFBWSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztLQUM3QjtBQUNILENBQUMsQ0FBQztBQUVGLElBQU0sSUFBSSxHQUFHLFNBQVMsb0JBQW9CO0lBQ3hDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3BFLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxRQUFRO2dDQUNoQixDQUFDO1lBQ1IsSUFBSSxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxRQUFRLENBQUMsRUFBRSxFQUFFO2dCQUN2QyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7b0JBQy9DLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsRUFBRSxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzVCOztRQUxILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQztvQkFBdkMsQ0FBQztTQU1UO0lBQ0gsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUEyQ08sb0JBQUk7QUF6Q2IsSUFBTSxTQUFTLEdBQUcsU0FBUyxxQkFBcUIsQ0FDOUMsQ0FBUSxFQUNSLFNBQThCOztJQUU5QixJQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO0lBRTlCLElBQUksS0FBSyxZQUFZLFdBQVcsRUFBRTtRQUNoQyxJQUFNLFVBQVEsR0FDWix1QkFBSyxDQUFDLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxhQUFhLDBDQUFFLGFBQWEsQ0FBQztRQUVuRSxJQUFJLFVBQVEsRUFBRTtZQUNaLElBQU0sV0FBVyxHQUFHLFVBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7b0NBQ2xELENBQUM7Z0JBQ1IsSUFBSSxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxVQUFRLENBQUMsRUFBRSxFQUFFO29CQUN2QyxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FDM0IsOEJBQXVCLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQ2hELENBQUM7b0JBQ0YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsVUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ2xELFdBQVcsQ0FBQyxVQUFRLEVBQUUsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNwQyxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FDeEIsOEJBQXVCLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQ2hELENBQUM7b0JBQ0YsY0FBYyxDQUFDLFVBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUMvQyxXQUFXLENBQUMsVUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDLEVBQUUsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUI7O1lBYkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUF2QyxDQUFDO2FBY1Q7U0FDRjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBRUYsSUFBTSxTQUFTLEdBQUcsU0FBUywwQkFBMEIsQ0FBQyxDQUFRO0lBQzVELFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDO0FBUWEsOEJBQVM7QUFOeEIsSUFBTSxhQUFhLEdBQUcsU0FBUyw2QkFBNkIsQ0FBQyxDQUFRO0lBQ25FLFNBQVMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDM0IsQ0FBQyxDQUFDO0FBSXdCLHNDQUFhO0FBRnZDLElBQU0sU0FBUyxHQUFHLFNBQVMsc0JBQXNCLEtBQUksQ0FBQyxDQUFDO0FBRWQsOEJBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL3B1YnN1Yi50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb25zLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgY3VycmVudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGltZXIgPSA1MDAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKFwiaW1hZ2VzQXJyQ2hhbmdlXCIsIHRoaXMuaWQsIHRoaXMuY3VycmVudCk7XG4gIH1cblxuICBkZWxldGVJbWFnZShpbWFnZTogdW5rbm93biwgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXSkge1xuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gaW1hZ2UpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBwaWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHB1Ymxpc2goXCJpbWFnZXNBcnJDaGFuZ2VcIiwgdGhpcy5pZCwgdGhpcy5jdXJyZW50KTtcbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIGp1bXBJbWFnZShjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgIHJldHVybiB0aGlzLmltYWdlc0Fyclt0aGlzLmN1cnJlbnRdO1xuICB9XG59XG5cbmV4cG9ydCB7IGNhcm91c2VsU3RvcmUsIENhcm91c2VsIH07XG4iLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiBhbnlbXSkgPT4gdW5rbm93bjtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBbZnVuY107XG4gIH1cbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmNvbnN0IG5leHRJbnRlcnZhbElkOiB7XG4gIFtpbmRleDogc3RyaW5nXTogbnVtYmVyO1xufSA9IHt9O1xuXG5jb25zdCBjaGFuZ2VDaXJjbGUgPSBmdW5jdGlvbiBjaGFuZ2VDaXJjbGVXaGVuSW1hZ2VDaGFuZ2VzKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgbnVtOiBudW1iZXJcbikge1xuICBjb25zdCBjaXJjbGVzQ29udGFpbmVyID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5jaXJjbGVzQ29udGFpbmVyXCIpO1xuICBjb25zdCBjaXJjbGVzID0gY2lyY2xlc0NvbnRhaW5lcj8uY2hpbGRyZW4gfHwgW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2lyY2xlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChjaXJjbGVzW2ldLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSkge1xuICAgICAgY2lyY2xlc1tpXS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfVxuICBjb25zdCB7IGN1cnJlbnQgfSA9IGNhcm91c2VsU3RvcmVbbnVtXTtcbiAgY2lyY2xlc1tjdXJyZW50XS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xufTtcblxuY29uc3QgY2hhbmdlSW1hZ2UgPSBmdW5jdGlvbiBjaGFuZ2VJbWFnZUF0SW50ZXJ2YWwoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBudW06IG51bWJlcixcbiAgY2hhbmdlOiBcIm5leHRcIiB8IFwicHJldmlvdXNcIiA9IFwibmV4dFwiXG4pIHtcbiAgY29uc3QgaW1hZ2UgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiaW1nXCIpO1xuICBpZiAoaW1hZ2UpIHtcbiAgICBjb25zdCBuZXh0SW1hZ2VFbGVtZW50ID1cbiAgICAgIGNoYW5nZSA9PT0gXCJuZXh0XCJcbiAgICAgICAgPyBjYXJvdXNlbFN0b3JlW251bV0ubmV4dEltYWdlKClcbiAgICAgICAgOiBjYXJvdXNlbFN0b3JlW251bV0ucHJldmlvdXNJbWFnZSgpO1xuICAgIGltYWdlLnNyYyA9IG5leHRJbWFnZUVsZW1lbnQuc3JjO1xuICAgIGNoYW5nZUNpcmNsZShjYXJvdXNlbCwgbnVtKTtcbiAgfVxufTtcblxuY29uc3QgbmV4dCA9IGZ1bmN0aW9uIHNldFRpbWVyRm9yTmV4dEltYWdlKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICAgIG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGkpO1xuICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbW92ZUltYWdlID0gZnVuY3Rpb24gbW92ZUltYWdlT25BcnJvd0NsaWNrKFxuICBlOiBFdmVudCxcbiAgZGlyZWN0aW9uOiBcIm5leHRcIiB8IFwicHJldmlvdXNcIlxuKSB7XG4gIGNvbnN0IGFycm93ID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gIGlmIChhcnJvdyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPVxuICAgICAgYXJyb3cucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgY29uc3QgaW5uZXJCb3JkZXIgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmlubmVyQm9yZGVyXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgICAgIGlubmVyQm9yZGVyPy5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSk7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGksIGRpcmVjdGlvbik7XG4gICAgICAgICAgaW5uZXJCb3JkZXI/LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgbmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgbmV4dEltYWdlID0gZnVuY3Rpb24gbmV4dEltYWdlT25SaWdodEFycm93Q2xpY2soZTogRXZlbnQpIHtcbiAgbW92ZUltYWdlKGUsIFwibmV4dFwiKTtcbn07XG5cbmNvbnN0IHByZXZpb3VzSW1hZ2UgPSBmdW5jdGlvbiBwcmV2aW91c0ltYWdlT25MZWZ0QXJyb3dDbGljayhlOiBFdmVudCkge1xuICBtb3ZlSW1hZ2UoZSwgXCJwcmV2aW91c1wiKTtcbn07XG5cbmNvbnN0IGp1bXBJbWFnZSA9IGZ1bmN0aW9uIGp1bXBJbWFnZU9uQ2lyY2xlQ2xpY2soKSB7fTtcblxuZXhwb3J0IHsgbmV4dCwgbmV4dEltYWdlLCBwcmV2aW91c0ltYWdlLCBqdW1wSW1hZ2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==