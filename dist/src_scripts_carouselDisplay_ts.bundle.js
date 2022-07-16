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
var createCircles = function createCirclesDisplay(carousel, circlesContainer, num) {
    if (num === void 0) { num = 0; }
    circlesContainer.replaceChildren();
    for (var i = 0; i < images_1.carouselStore.length; i += 1) {
        if (images_1.carouselStore[i].id === carousel.id) {
            var imgArrLength = images_1.carouselStore[i].returnImagesArray().length;
            for (var j = 0; j < imgArrLength; j += 1) {
                var circleDiv = document.createElement("div");
                circleDiv.classList.add("circles");
                circleDiv.id = "frostwalkercircle-".concat(j);
                circleDiv.addEventListener("click", transitions_1.jumpImage);
                if (j === num) {
                    circleDiv.classList.add("active");
                }
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


/***/ }),

/***/ "./src/scripts/transitions.ts":
/*!************************************!*\
  !*** ./src/scripts/transitions.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


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
var changeImage = function changeImageAtInterval(carousel, num, change, randomNum) {
    if (change === void 0) { change = "next"; }
    var image = carousel.querySelector("img");
    if (image) {
        var nextImageElement = void 0;
        if (change === "next") {
            nextImageElement = images_1.carouselStore[num].nextImage();
        }
        else if (change === "previous") {
            nextImageElement = images_1.carouselStore[num].previousImage();
        }
        else {
            nextImageElement = images_1.carouselStore[num].jumpImage(randomNum || 0);
        }
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
var jumpImage = function jumpImageOnCircleClick(e) {
    var _a, _b, _c;
    var circle = e.currentTarget;
    if (circle instanceof HTMLElement) {
        var id = circle.id.split("-")[1];
        var carousel_2 = (_c = (_b = (_a = circle.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.parentElement) === null || _c === void 0 ? void 0 : _c.parentElement;
        if (carousel_2) {
            var innerBorder = carousel_2.querySelector(".innerBorder");
            var _loop_3 = function (i) {
                if (images_1.carouselStore[i].id === carousel_2.id) {
                    innerBorder === null || innerBorder === void 0 ? void 0 : innerBorder.classList.remove("frostwalkeranimation".concat(images_1.carouselStore[i].timer));
                    window.clearInterval(nextIntervalId[carousel_2.id]);
                    changeImage(carousel_2, i, "random", parseInt(id, 10));
                    innerBorder === null || innerBorder === void 0 ? void 0 : innerBorder.classList.add("frostwalkeranimation".concat(images_1.carouselStore[i].timer));
                    nextIntervalId[carousel_2.id] = window.setInterval(function () {
                        changeImage(carousel_2, i);
                    }, images_1.carouselStore[i].timer);
                }
            };
            for (var i = 0; i < images_1.carouselStore.length; i += 1) {
                _loop_3(i);
            }
        }
    }
};
exports.jumpImage = jumpImage;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY2Fyb3VzZWxEaXNwbGF5X3RzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUF5QztBQUN6Qyw2RkFBb0U7QUFFcEUsSUFBTSxZQUFZLEdBQUcsU0FBUyxZQUFZLENBQ3hDLFFBQWlCLEVBQ2pCLFdBQTJCO0lBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hELElBQUksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFNLEtBQUssR0FBRyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUssWUFBWSxnQkFBZ0IsRUFBRTtnQkFDckMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyw2Q0FDUyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUsscURBQ25CLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxvREFDdEIsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSx3R0FFaEMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxrSEFJckMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLDRMQVF0QyxDQUFDO2dCQUNOLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENB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RTtvQkFDdkMsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQzNCLDhCQUF1QixzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBRSxDQUNoRCxDQUFDO29CQUNGLE1BQU0sQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLFVBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNsRCxXQUFXLENBQUMsVUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNyRCxXQUFXLGFBQVgsV0FBVyx1QkFBWCxXQUFXLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FDeEIsOEJBQXVCLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQ2hELENBQUM7b0JBQ0YsY0FBYyxDQUFDLFVBQVEsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDO3dCQUMvQyxXQUFXLENBQUMsVUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUMzQixDQUFDLEVBQUUsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDNUI7O1lBYkgsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLHNCQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO3dCQUF2QyxDQUFDO2FBY1Q7U0FDRjtLQUNGO0FBQ0gsQ0FBQyxDQUFDO0FBRXVDLDhCQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9jYXJvdXNlbERpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9wdWJzdWIudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy90cmFuc2l0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgeyBuZXh0SW1hZ2UsIHByZXZpb3VzSW1hZ2UsIGp1bXBJbWFnZSB9IGZyb20gXCIuL3RyYW5zaXRpb25zXCI7XG5cbmNvbnN0IGRpc3BsYXlJbWFnZSA9IGZ1bmN0aW9uIGRpc3BsYXlJbWFnZShcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIGlubmVyQm9yZGVyOiBIVE1MRGl2RWxlbWVudFxuKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgY29uc3QgaW1hZ2UgPSBjYXJvdXNlbFN0b3JlW2ldLnJldHVybkltYWdlc0FycmF5KClbMF07XG4gICAgICBjb25zdCBjbG9uZSA9IGltYWdlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgIGlmIChjbG9uZSBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpIHtcbiAgICAgICAgaW5uZXJCb3JkZXIuYXBwZW5kQ2hpbGQoY2xvbmUpO1xuICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgICAgICAgICAgLmZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfSB7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZhZGUke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9O1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyIC8gMTAwMH1zO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyIC8gNTAwMDAwfXM7XG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgQGtleWZyYW1lcyBmYWRlJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfSB7XG4gICAgICAgICAgICAgICAgZnJvbSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IC40O1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgdG8ge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgIGlubmVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZUFycm93cyA9IGZ1bmN0aW9uIGNyZWF0ZUFycm93c0Rpc3BsYXkoXG4gIGFycm93c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnRcbikge1xuICBjb25zdCBhcnJvdzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvdzEuY2xhc3NMaXN0LmFkZChcImFycm93MVwiLCBcImFycm93c1wiKTtcbiAgYXJyb3cxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwcmV2aW91c0ltYWdlKTtcbiAgY29uc3QgaTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaTEuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWFycm93LWFsdC1jaXJjbGUtbGVmdFwiKTtcbiAgYXJyb3cxLmFwcGVuZENoaWxkKGkxKTtcbiAgY29uc3QgYXJyb3cyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3cyLmNsYXNzTGlzdC5hZGQoXCJhcnJvdzJcIiwgXCJhcnJvd3NcIik7XG4gIGFycm93Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV4dEltYWdlKTtcbiAgY29uc3QgaTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbiAgaTIuY2xhc3NMaXN0LmFkZChcImZhc1wiLCBcImZhLWFycm93LWFsdC1jaXJjbGUtcmlnaHRcIik7XG4gIGFycm93Mi5hcHBlbmRDaGlsZChpMik7XG4gIGFycm93c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvdzEpO1xuICBhcnJvd3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3cyKTtcbn07XG5cbmNvbnN0IGNyZWF0ZUNpcmNsZXMgPSBmdW5jdGlvbiBjcmVhdGVDaXJjbGVzRGlzcGxheShcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIGNpcmNsZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50LFxuICBudW0gPSAwXG4pIHtcbiAgY2lyY2xlc0NvbnRhaW5lci5yZXBsYWNlQ2hpbGRyZW4oKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICBjb25zdCBpbWdBcnJMZW5ndGggPSBjYXJvdXNlbFN0b3JlW2ldLnJldHVybkltYWdlc0FycmF5KCkubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbWdBcnJMZW5ndGg7IGogKz0gMSkge1xuICAgICAgICBjb25zdCBjaXJjbGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaXJjbGVEaXYuY2xhc3NMaXN0LmFkZChcImNpcmNsZXNcIik7XG4gICAgICAgIGNpcmNsZURpdi5pZCA9IGBmcm9zdHdhbGtlcmNpcmNsZS0ke2p9YDtcbiAgICAgICAgY2lyY2xlRGl2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBqdW1wSW1hZ2UpO1xuICAgICAgICBpZiAoaiA9PT0gbnVtKSB7XG4gICAgICAgICAgY2lyY2xlRGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2lyY2xlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGVEaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xzID0gZnVuY3Rpb24gZGlzcGxheUFycm93c0FuZENpcmNsZXMoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBvdXRlckJvcmRlcjogSFRNTERpdkVsZW1lbnRcbikge1xuICBjb25zdCBjb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRyb2xzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sc0NvbnRhaW5lclwiKTtcbiAgY29uc3QgY2lyY2xlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNpcmNsZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNpcmNsZXNDb250YWluZXJcIik7XG4gIGNyZWF0ZUNpcmNsZXMoY2Fyb3VzZWwsIGNpcmNsZXNDb250YWluZXIpO1xuICBjb25zdCBhcnJvd3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvd3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93c0NvbnRhaW5lclwiKTtcbiAgY3JlYXRlQXJyb3dzKGFycm93c0NvbnRhaW5lcik7XG4gIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZXNDb250YWluZXIpO1xuICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd3NDb250YWluZXIpO1xuICBvdXRlckJvcmRlci5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2Fyb3VzZWwgPSBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5Q2Fyb3VzZWwoY2Fyb3VzZWw6IEVsZW1lbnQpIHtcbiAgY29uc3Qgb3V0ZXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lckJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXCJvdXRlckJvcmRlclwiKTtcbiAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcImlubmVyQm9yZGVyXCIpO1xuICBkaXNwbGF5SW1hZ2UoY2Fyb3VzZWwsIGlubmVyQm9yZGVyKTtcbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoaW5uZXJCb3JkZXIpO1xuICBkaXNwbGF5Q29udHJvbHMoY2Fyb3VzZWwsIG91dGVyQm9yZGVyKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQob3V0ZXJCb3JkZXIpO1xufTtcblxuY29uc3QgZmluZENhcm91c2VscyA9IGZ1bmN0aW9uIGZpbmRBbmRTaG93Q2Fyb3VzZWxPblBhZ2VMb2FkKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGRpc3BsYXlDYXJvdXNlbChjYXJvdXNlbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZENhcm91c2VscztcbiIsImltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgY3VycmVudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGltZXIgPSA1MDAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKFwiaW1hZ2VzQXJyQ2hhbmdlXCIsIHRoaXMuaWQsIHRoaXMuY3VycmVudCk7XG4gIH1cblxuICBkZWxldGVJbWFnZShpbWFnZTogdW5rbm93biwgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXSkge1xuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gaW1hZ2UpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBwaWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHB1Ymxpc2goXCJpbWFnZXNBcnJDaGFuZ2VcIiwgdGhpcy5pZCwgdGhpcy5jdXJyZW50KTtcbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIGp1bXBJbWFnZShjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgIHJldHVybiB0aGlzLmltYWdlc0Fyclt0aGlzLmN1cnJlbnRdO1xuICB9XG59XG5cbmV4cG9ydCB7IGNhcm91c2VsU3RvcmUsIENhcm91c2VsIH07XG4iLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiBhbnlbXSkgPT4gdW5rbm93bjtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBbZnVuY107XG4gIH1cbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbiIsImltcG9ydCB7IGNhcm91c2VsU3RvcmUgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuY29uc3QgbmV4dEludGVydmFsSWQ6IHtcbiAgW2luZGV4OiBzdHJpbmddOiBudW1iZXI7XG59ID0ge307XG5cbmNvbnN0IGNoYW5nZUNpcmNsZSA9IGZ1bmN0aW9uIGNoYW5nZUNpcmNsZVdoZW5JbWFnZUNoYW5nZXMoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBudW06IG51bWJlclxuKSB7XG4gIGNvbnN0IGNpcmNsZXNDb250YWluZXIgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZXNDb250YWluZXJcIik7XG4gIGNvbnN0IGNpcmNsZXMgPSBjaXJjbGVzQ29udGFpbmVyPy5jaGlsZHJlbiB8fCBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNpcmNsZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBjaXJjbGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG4gIGNvbnN0IHsgY3VycmVudCB9ID0gY2Fyb3VzZWxTdG9yZVtudW1dO1xuICBjaXJjbGVzW2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59O1xuXG5jb25zdCBjaGFuZ2VJbWFnZSA9IGZ1bmN0aW9uIGNoYW5nZUltYWdlQXRJbnRlcnZhbChcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIG51bTogbnVtYmVyLFxuICBjaGFuZ2U6IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiIHwgXCJyYW5kb21cIiA9IFwibmV4dFwiLFxuICByYW5kb21OdW0/OiBudW1iZXJcbikge1xuICBjb25zdCBpbWFnZSA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gIGlmIChpbWFnZSkge1xuICAgIGxldCBuZXh0SW1hZ2VFbGVtZW50O1xuICAgIGlmIChjaGFuZ2UgPT09IFwibmV4dFwiKSB7XG4gICAgICBuZXh0SW1hZ2VFbGVtZW50ID0gY2Fyb3VzZWxTdG9yZVtudW1dLm5leHRJbWFnZSgpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlID09PSBcInByZXZpb3VzXCIpIHtcbiAgICAgIG5leHRJbWFnZUVsZW1lbnQgPSBjYXJvdXNlbFN0b3JlW251bV0ucHJldmlvdXNJbWFnZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0SW1hZ2VFbGVtZW50ID0gY2Fyb3VzZWxTdG9yZVtudW1dLmp1bXBJbWFnZShyYW5kb21OdW0gfHwgMCk7XG4gICAgfVxuICAgIGltYWdlLnNyYyA9IG5leHRJbWFnZUVsZW1lbnQuc3JjO1xuICAgIGNoYW5nZUNpcmNsZShjYXJvdXNlbCwgbnVtKTtcbiAgfVxufTtcblxuY29uc3QgbmV4dCA9IGZ1bmN0aW9uIHNldFRpbWVyRm9yTmV4dEltYWdlKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICAgIG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGkpO1xuICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbW92ZUltYWdlID0gZnVuY3Rpb24gbW92ZUltYWdlT25BcnJvd0NsaWNrKFxuICBlOiBFdmVudCxcbiAgZGlyZWN0aW9uOiBcIm5leHRcIiB8IFwicHJldmlvdXNcIlxuKSB7XG4gIGNvbnN0IGFycm93ID0gZS5jdXJyZW50VGFyZ2V0O1xuXG4gIGlmIChhcnJvdyBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgY29uc3QgY2Fyb3VzZWwgPVxuICAgICAgYXJyb3cucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudD8ucGFyZW50RWxlbWVudDtcblxuICAgIGlmIChjYXJvdXNlbCkge1xuICAgICAgY29uc3QgaW5uZXJCb3JkZXIgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmlubmVyQm9yZGVyXCIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgICAgIGlubmVyQm9yZGVyPy5jbGFzc0xpc3QucmVtb3ZlKFxuICAgICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSk7XG4gICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGksIGRpcmVjdGlvbik7XG4gICAgICAgICAgaW5uZXJCb3JkZXI/LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgbmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgbmV4dEltYWdlID0gZnVuY3Rpb24gbmV4dEltYWdlT25SaWdodEFycm93Q2xpY2soZTogRXZlbnQpIHtcbiAgbW92ZUltYWdlKGUsIFwibmV4dFwiKTtcbn07XG5cbmNvbnN0IHByZXZpb3VzSW1hZ2UgPSBmdW5jdGlvbiBwcmV2aW91c0ltYWdlT25MZWZ0QXJyb3dDbGljayhlOiBFdmVudCkge1xuICBtb3ZlSW1hZ2UoZSwgXCJwcmV2aW91c1wiKTtcbn07XG5cbmNvbnN0IGp1bXBJbWFnZSA9IGZ1bmN0aW9uIGp1bXBJbWFnZU9uQ2lyY2xlQ2xpY2soZTogRXZlbnQpIHtcbiAgY29uc3QgY2lyY2xlID0gZS5jdXJyZW50VGFyZ2V0O1xuICBpZiAoY2lyY2xlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBpZCA9IGNpcmNsZS5pZC5zcGxpdChcIi1cIilbMV07XG4gICAgY29uc3QgY2Fyb3VzZWwgPVxuICAgICAgY2lyY2xlLnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICBjb25zdCBpbm5lckJvcmRlciA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXJCb3JkZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICAgICAgaW5uZXJCb3JkZXI/LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdKTtcbiAgICAgICAgICBjaGFuZ2VJbWFnZShjYXJvdXNlbCwgaSwgXCJyYW5kb21cIiwgcGFyc2VJbnQoaWQsIDEwKSk7XG4gICAgICAgICAgaW5uZXJCb3JkZXI/LmNsYXNzTGlzdC5hZGQoXG4gICAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgbmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgICB9LCBjYXJvdXNlbFN0b3JlW2ldLnRpbWVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgbmV4dCwgbmV4dEltYWdlLCBwcmV2aW91c0ltYWdlLCBqdW1wSW1hZ2UgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==