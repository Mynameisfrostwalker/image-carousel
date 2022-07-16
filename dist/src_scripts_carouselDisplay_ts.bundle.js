"use strict";
(self["webpackChunkimage_carousel_frostwalker"] = self["webpackChunkimage_carousel_frostwalker"] || []).push([["src_scripts_carouselDisplay_ts"],{

/***/ "./src/scripts/carouselDisplay.ts":
/*!****************************************!*\
  !*** ./src/scripts/carouselDisplay.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var transitions_1 = __webpack_require__(/*! ./transitions */ "./src/scripts/transitions.ts");
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
var createArrows = function createArrowsDisplay(arrowsContainer) {
    var arrow1 = document.createElement("div");
    arrow1.classList.add("arrow1", "arrows");
    arrow1.addEventListener("click", transitions_1.previousImage);
    var i1 = document.createElement("i");
    i1.classList.add("fas", "fa-arrow-alt-circle-left");
    arrow1.appendChild(i1);
    var arrow2 = document.createElement("div");
    arrow2.classList.add("arrow2", "arrows");
    arrow2.addEventListener("click", transitions_1.nextImage);
    var i2 = document.createElement("i");
    i2.classList.add("fas", "fa-arrow-alt-circle-right");
    arrow2.appendChild(i2);
    arrowsContainer.appendChild(arrow1);
    arrowsContainer.appendChild(arrow2);
};
var createCircles = function createCirclesDisplay(carousel, circlesContainer) {
    for (var i = 0; i < images_1.carouselStore.length; i += 1) {
        if (images_1.carouselStore[i].id === carousel.id) {
            var imgArrLength = images_1.carouselStore[i].returnImagesArray().length;
            for (var j = 0; j < imgArrLength; j += 1) {
                var circleDiv = document.createElement("div");
                circleDiv.classList.add("circles", "frostwalkercircle".concat(j));
                circlesContainer.appendChild(circleDiv);
            }
        }
    }
};
var displayControls = function displayArrowsAndCircles(carousel, outerBorder) {
    var controlsContainer = document.createElement("div");
    controlsContainer.classList.add("controlsContainer");
    var circlesContainer = document.createElement("div");
    circlesContainer.classList.add("circlesContainer");
    createCircles(carousel, circlesContainer);
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
    displayControls(carousel, outerBorder);
    carousel.appendChild(outerBorder);
};
var findCarousels = function findAndShowCarouselOnPageLoad() {
    var carousels = document.querySelectorAll(".frostwalkercarousel");
    carousels.forEach(function (carousel) {
        displayCarousel(carousel);
    });
};
exports["default"] = findCarousels;


/***/ }),

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


/***/ }),

/***/ "./src/scripts/transitions.ts":
/*!************************************!*\
  !*** ./src/scripts/transitions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY2Fyb3VzZWxEaXNwbGF5X3RzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUF5QztBQUN6Qyw2RkFBeUQ7QUFFekQsSUFBTSxZQUFZLEdBQUcsU0FBUyxZQUFZLENBQ3hDLFFBQWlCLEVBQ2pCLFdBQTJCO0lBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hELElBQUksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFNLEtBQUssR0FBRyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUssWUFBWSxnQkFBZ0IsRUFBRTtnQkFDckMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyw2Q0FDUyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUsscURBQ25CLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxvREFDdEIsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSx3R0FFaEMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxrSEFJckMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLDRMQVF0QyxDQUFDO2dCQUNOLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUN2Qiw4QkFBdUIsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUUsQ0FDaEQsQ0FBQzthQUNIO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLElBQU0sWUFBWSxHQUFHLFNBQVMsbUJBQW1CLENBQy9DLGVBQStCO0lBRS9CLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3pDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsMkJBQWEsQ0FBQyxDQUFDO0lBQ2hELElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLDBCQUEwQixDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUN2QixJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdDLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN6QyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLHVCQUFTLENBQUMsQ0FBQztJQUM1QyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSwyQkFBMkIsQ0FBQyxDQUFDO0lBQ3JELE1BQU0sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkIsZUFBZSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNwQyxlQUFlLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQztBQUVGLElBQU0sYUFBYSxHQUFHLFNBQVMsb0JBQW9CLENBQ2pELFFBQWlCLEVBQ2pCLGdCQUFnQztJQUVoQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsc0JBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtRQUNoRCxJQUFJLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLFFBQVEsQ0FBQyxFQUFFLEVBQUU7WUFDdkMsSUFBTSxZQUFZLEdBQUcsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsWUFBWSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3hDLElBQU0sU0FBUyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hELFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSwyQkFBb0IsQ0FBQyxDQUFFLENBQUMsQ0FBQztnQkFDNUQsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pDO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLFNBQVMsdUJBQXVCLENBQ3RELFFBQWlCLEVBQ2pCLFdBQTJCO0lBRTNCLElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDckQsSUFBTSxnQkFBZ0IsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNuRCxhQUFhLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDMUMsSUFBTSxlQUFlLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pELFlBQVksQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUM5QixpQkFBaUIsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUNoRCxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDL0MsV0FBVyxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdDLENBQUMsQ0FBQztBQUVGLElBQU0sZUFBZSxHQUFHLFNBQVMsd0JBQXdCLENBQUMsUUFBaUI7SUFDekUsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxJQUFNLFdBQVcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLFdBQVcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLFlBQVksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDcEMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNyQyxlQUFlLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQ3ZDLFFBQVEsQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDcEMsQ0FBQyxDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQUcsU0FBUyw2QkFBNkI7SUFDMUQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLENBQUM7SUFDcEUsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLFFBQVE7UUFDekIsZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVCLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBRUYscUJBQWUsYUFBYSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9HN0IsSUFBTSxhQUFhLEdBQWUsRUFBRSxDQUFDO0FBZ0Y1QixzQ0FBYTtBQTlFdEIsSUFBTSxXQUFXLEdBQUcsU0FBUyxrQkFBa0IsQ0FBQyxHQUFhO0lBQzNELGFBQWEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDO0FBRUY7SUFTRSxrQkFBWSxFQUFVLEVBQUUsS0FBWTtRQUFaLG9DQUFZO1FBUjVCLGNBQVMsR0FBdUIsRUFBRSxDQUFDO1FBTW5DLFlBQU8sR0FBRyxDQUFDLENBQUM7UUFHbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEIsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxLQUFjO1FBQXZCLGlCQWVDO1FBZndCLHFCQUF5QjthQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7WUFBekIsb0NBQXlCOztRQUNoRCxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlCO1FBQ0QsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxFQUFFO1lBQzlCLFdBQVcsQ0FBQyxPQUFPLENBQUMsVUFBQyxHQUFHO2dCQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtvQkFDM0IsSUFBTSxPQUFPLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7b0JBQ2xCLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2lCQUM5QjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQWM7UUFBMUIsaUJBbUJDO1FBbkIyQixxQkFBeUI7YUFBekIsVUFBeUIsRUFBekIscUJBQXlCLEVBQXpCLElBQXlCO1lBQXpCLG9DQUF5Qjs7UUFDbkQsSUFBSSxPQUFPLEtBQUssS0FBSyxRQUFRLEVBQUU7WUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssS0FBSyxFQUFFO29CQUNuQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdCO2FBQ0Y7U0FDRjtRQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7b0JBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUNqRCxJQUFJLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTs0QkFDakMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO3lCQUM3QjtxQkFDRjtpQkFDRjtZQUNILENBQUMsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBRUQsb0NBQWlCLEdBQWpCO1FBQ0UseUJBQVcsSUFBSSxDQUFDLFNBQVMsUUFBRTtJQUM3QixDQUFDO0lBRUQsNEJBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuQjtRQUNELElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNsQixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDSCxlQUFDO0FBQUQsQ0FBQztBQUV1Qiw0QkFBUTs7Ozs7Ozs7Ozs7Ozs7QUNoRmhDLDhFQUF5QztBQUV6QyxJQUFNLGNBQWMsR0FFaEIsRUFBRSxDQUFDO0FBRVAsSUFBTSxXQUFXLEdBQUcsU0FBUyxxQkFBcUIsQ0FDaEQsUUFBaUIsRUFDakIsR0FBVyxFQUNYLE1BQW9DO0lBQXBDLHdDQUFvQztJQUVwQyxJQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVDLElBQUksS0FBSyxFQUFFO1FBQ1QsSUFBTSxnQkFBZ0IsR0FDcEIsTUFBTSxLQUFLLE1BQU07WUFDZixDQUFDLENBQUMsc0JBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUU7WUFDaEMsQ0FBQyxDQUFDLHNCQUFhLENBQUMsR0FBRyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDekMsS0FBSyxDQUFDLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7S0FDbEM7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFNLElBQUksR0FBRyxTQUFTLG9CQUFvQjtJQUN4QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwRSxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsUUFBUTtnQ0FDaEIsQ0FBQztZQUNSLElBQUksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsRUFBRTtnQkFDdkMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO29CQUMvQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMzQixDQUFDLEVBQUUsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUM1Qjs7UUFMSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsc0JBQWEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUM7b0JBQXZDLENBQUM7U0FNVDtJQUNILENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDO0FBeUNPLG9CQUFJO0FBdkNiLElBQU0sU0FBUyxHQUFHLFNBQVMscUJBQXFCLENBQzlDLENBQVEsRUFDUixTQUE4Qjs7SUFFOUIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQztJQUU5QixJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7UUFDaEMsSUFBTSxVQUFRLEdBQ1osdUJBQUssQ0FBQyxhQUFhLDBDQUFFLGFBQWEsMENBQUUsYUFBYSwwQ0FBRSxhQUFhLENBQUM7UUFFbkUsSUFBSSxVQUFRLEVBQUU7WUFDWixJQUFNLFdBQVcsR0FBRyxVQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO29DQUNsRCxDQUFDO2dCQUNSLElBQUksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssVUFBUSxDQUFDLEVBQUUsRUFBRTtvQkFDdkMsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQzNCLDhCQUF1QixzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUNoRCxDQUFDO29CQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxXQUFXLENBQUMsVUFBUSxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDcEMsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQ3hCLDhCQUF1QixzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUNoRCxDQUFDO29CQUNGLGNBQWMsQ0FBQyxVQUFRLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQzt3QkFDL0MsV0FBVyxDQUFDLFVBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxFQUFFLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzVCOztZQWJILEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQzt3QkFBdkMsQ0FBQzthQWNUO1NBQ0Y7S0FDRjtBQUNILENBQUMsQ0FBQztBQUVGLElBQU0sU0FBUyxHQUFHLFNBQVMsMEJBQTBCLENBQUMsQ0FBUTtJQUM1RCxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3ZCLENBQUMsQ0FBQztBQU1hLDhCQUFTO0FBSnhCLElBQU0sYUFBYSxHQUFHLFNBQVMsNkJBQTZCLENBQUMsQ0FBUTtJQUNuRSxTQUFTLENBQUMsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzNCLENBQUMsQ0FBQztBQUV3QixzQ0FBYSIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvY2Fyb3VzZWxEaXNwbGF5LnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvdHJhbnNpdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2Fyb3VzZWxTdG9yZSB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbmV4dEltYWdlLCBwcmV2aW91c0ltYWdlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbnNcIjtcblxuY29uc3QgZGlzcGxheUltYWdlID0gZnVuY3Rpb24gZGlzcGxheUltYWdlKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgaW5uZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGNhcm91c2VsU3RvcmVbaV0ucmV0dXJuSW1hZ2VzQXJyYXkoKVswXTtcbiAgICAgIGNvbnN0IGNsb25lID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICBpbm5lckJvcmRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAuZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZSR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyAxMDAwfXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyA1MDAwMDB9cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQXJyb3dzID0gZnVuY3Rpb24gY3JlYXRlQXJyb3dzRGlzcGxheShcbiAgYXJyb3dzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuKSB7XG4gIGNvbnN0IGFycm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFycm93MS5jbGFzc0xpc3QuYWRkKFwiYXJyb3cxXCIsIFwiYXJyb3dzXCIpO1xuICBhcnJvdzEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZpb3VzSW1hZ2UpO1xuICBjb25zdCBpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCIpO1xuICBhcnJvdzEuYXBwZW5kQ2hpbGQoaTEpO1xuICBjb25zdCBhcnJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvdzIuY2xhc3NMaXN0LmFkZChcImFycm93MlwiLCBcImFycm93c1wiKTtcbiAgYXJyb3cyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0SW1hZ2UpO1xuICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodFwiKTtcbiAgYXJyb3cyLmFwcGVuZENoaWxkKGkyKTtcbiAgYXJyb3dzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93MSk7XG4gIGFycm93c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvdzIpO1xufTtcblxuY29uc3QgY3JlYXRlQ2lyY2xlcyA9IGZ1bmN0aW9uIGNyZWF0ZUNpcmNsZXNEaXNwbGF5KFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgY2lyY2xlc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcbikge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgIGNvbnN0IGltZ0Fyckxlbmd0aCA9IGNhcm91c2VsU3RvcmVbaV0ucmV0dXJuSW1hZ2VzQXJyYXkoKS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltZ0Fyckxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNpcmNsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNpcmNsZURpdi5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlc1wiLCBgZnJvc3R3YWxrZXJjaXJjbGUke2p9YCk7XG4gICAgICAgIGNpcmNsZXNDb250YWluZXIuYXBwZW5kQ2hpbGQoY2lyY2xlRGl2KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGRpc3BsYXlDb250cm9scyA9IGZ1bmN0aW9uIGRpc3BsYXlBcnJvd3NBbmRDaXJjbGVzKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgb3V0ZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9sc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNDb250YWluZXJcIik7XG4gIGNvbnN0IGNpcmNsZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXJjbGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVzQ29udGFpbmVyXCIpO1xuICBjcmVhdGVDaXJjbGVzKGNhcm91c2VsLCBjaXJjbGVzQ29udGFpbmVyKTtcbiAgY29uc3QgYXJyb3dzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3dzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcnJvd3NDb250YWluZXJcIik7XG4gIGNyZWF0ZUFycm93cyhhcnJvd3NDb250YWluZXIpO1xuICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGVzQ29udGFpbmVyKTtcbiAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dzQ29udGFpbmVyKTtcbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoY29udHJvbHNDb250YWluZXIpO1xufTtcblxuY29uc3QgZGlzcGxheUNhcm91c2VsID0gZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheUNhcm91c2VsKGNhcm91c2VsOiBFbGVtZW50KSB7XG4gIGNvbnN0IG91dGVyQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5uZXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdXRlckJvcmRlci5jbGFzc0xpc3QuYWRkKFwib3V0ZXJCb3JkZXJcIik7XG4gIGlubmVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lckJvcmRlclwiKTtcbiAgZGlzcGxheUltYWdlKGNhcm91c2VsLCBpbm5lckJvcmRlcik7XG4gIG91dGVyQm9yZGVyLmFwcGVuZENoaWxkKGlubmVyQm9yZGVyKTtcbiAgZGlzcGxheUNvbnRyb2xzKGNhcm91c2VsLCBvdXRlckJvcmRlcik7XG4gIGNhcm91c2VsLmFwcGVuZENoaWxkKG91dGVyQm9yZGVyKTtcbn07XG5cbmNvbnN0IGZpbmRDYXJvdXNlbHMgPSBmdW5jdGlvbiBmaW5kQW5kU2hvd0Nhcm91c2VsT25QYWdlTG9hZCgpIHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mcm9zdHdhbGtlcmNhcm91c2VsXCIpO1xuICBjYXJvdXNlbHMuZm9yRWFjaCgoY2Fyb3VzZWwpID0+IHtcbiAgICBkaXNwbGF5Q2Fyb3VzZWwoY2Fyb3VzZWwpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZpbmRDYXJvdXNlbHM7XG4iLCJjb25zdCBjYXJvdXNlbFN0b3JlOiBDYXJvdXNlbFtdID0gW107XG5cbmNvbnN0IHN0b3JlSW1nT2JqID0gZnVuY3Rpb24gc3RvcmVJbWFnZXNPYmplY3RzKG9iajogQ2Fyb3VzZWwpIHtcbiAgY2Fyb3VzZWxTdG9yZS5wdXNoKG9iaik7XG59O1xuXG5jbGFzcyBDYXJvdXNlbCB7XG4gIHByaXZhdGUgaW1hZ2VzQXJyOiBIVE1MSW1hZ2VFbGVtZW50W10gPSBbXTtcblxuICByZWFkb25seSBpZDtcblxuICByZWFkb25seSB0aW1lcjtcblxuICBwcml2YXRlIGN1cnJlbnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRpbWVyID0gNTAwMCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpbWVyID0gdGltZXI7XG4gICAgc3RvcmVJbWdPYmoodGhpcyk7XG4gIH1cblxuICBhZGRJbWFnZShpbWFnZTogdW5rbm93biwgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXSkge1xuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIFBpY3R1cmUuc3JjID0gaW1hZ2U7XG4gICAgICB0aGlzLmltYWdlc0Fyci5wdXNoKFBpY3R1cmUpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHBpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNvbnN0IFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBQaWN0dXJlLnNyYyA9IHBpYztcbiAgICAgICAgICB0aGlzLmltYWdlc0Fyci5wdXNoKFBpY3R1cmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBkZWxldGVJbWFnZShpbWFnZTogdW5rbm93biwgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXSkge1xuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gaW1hZ2UpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBwaWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuSW1hZ2VzQXJyYXkoKSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLmltYWdlc0Fycl07XG4gIH1cblxuICBuZXh0SW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gLTE7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudCArPSAxO1xuICAgIHJldHVybiB0aGlzLmltYWdlc0Fyclt0aGlzLmN1cnJlbnRdO1xuICB9XG5cbiAgcHJldmlvdXNJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSAwKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSB0aGlzLmltYWdlc0Fyci5sZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudCAtPSAxO1xuICAgIHJldHVybiB0aGlzLmltYWdlc0Fyclt0aGlzLmN1cnJlbnRdO1xuICB9XG59XG5cbmV4cG9ydCB7IGNhcm91c2VsU3RvcmUsIENhcm91c2VsIH07XG4iLCJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmNvbnN0IG5leHRJbnRlcnZhbElkOiB7XG4gIFtpbmRleDogc3RyaW5nXTogbnVtYmVyO1xufSA9IHt9O1xuXG5jb25zdCBjaGFuZ2VJbWFnZSA9IGZ1bmN0aW9uIGNoYW5nZUltYWdlQXRJbnRlcnZhbChcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIG51bTogbnVtYmVyLFxuICBjaGFuZ2U6IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiID0gXCJuZXh0XCJcbikge1xuICBjb25zdCBpbWFnZSA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gIGlmIChpbWFnZSkge1xuICAgIGNvbnN0IG5leHRJbWFnZUVsZW1lbnQgPVxuICAgICAgY2hhbmdlID09PSBcIm5leHRcIlxuICAgICAgICA/IGNhcm91c2VsU3RvcmVbbnVtXS5uZXh0SW1hZ2UoKVxuICAgICAgICA6IGNhcm91c2VsU3RvcmVbbnVtXS5wcmV2aW91c0ltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gbmV4dEltYWdlRWxlbWVudC5zcmM7XG4gIH1cbn07XG5cbmNvbnN0IG5leHQgPSBmdW5jdGlvbiBzZXRUaW1lckZvck5leHRJbWFnZSgpIHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mcm9zdHdhbGtlcmNhcm91c2VsXCIpO1xuICBjYXJvdXNlbHMuZm9yRWFjaCgoY2Fyb3VzZWwpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgICBuZXh0SW50ZXJ2YWxJZFtjYXJvdXNlbC5pZF0gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgfSwgY2Fyb3VzZWxTdG9yZVtpXS50aW1lcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVJbWFnZSA9IGZ1bmN0aW9uIG1vdmVJbWFnZU9uQXJyb3dDbGljayhcbiAgZTogRXZlbnQsXG4gIGRpcmVjdGlvbjogXCJuZXh0XCIgfCBcInByZXZpb3VzXCJcbikge1xuICBjb25zdCBhcnJvdyA9IGUuY3VycmVudFRhcmdldDtcblxuICBpZiAoYXJyb3cgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNhcm91c2VsID1cbiAgICAgIGFycm93LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgIGNvbnN0IGlubmVyQm9yZGVyID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5pbm5lckJvcmRlclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgICAgICBpbm5lckJvcmRlcj8uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgIGBmcm9zdHdhbGtlcmFuaW1hdGlvbiR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChuZXh0SW50ZXJ2YWxJZFtjYXJvdXNlbC5pZF0pO1xuICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgICAgIGlubmVyQm9yZGVyPy5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VJbWFnZShjYXJvdXNlbCwgaSk7XG4gICAgICAgICAgfSwgY2Fyb3VzZWxTdG9yZVtpXS50aW1lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IG5leHRJbWFnZSA9IGZ1bmN0aW9uIG5leHRJbWFnZU9uUmlnaHRBcnJvd0NsaWNrKGU6IEV2ZW50KSB7XG4gIG1vdmVJbWFnZShlLCBcIm5leHRcIik7XG59O1xuXG5jb25zdCBwcmV2aW91c0ltYWdlID0gZnVuY3Rpb24gcHJldmlvdXNJbWFnZU9uTGVmdEFycm93Q2xpY2soZTogRXZlbnQpIHtcbiAgbW92ZUltYWdlKGUsIFwicHJldmlvdXNcIik7XG59O1xuXG5leHBvcnQgeyBuZXh0LCBuZXh0SW1hZ2UsIHByZXZpb3VzSW1hZ2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==