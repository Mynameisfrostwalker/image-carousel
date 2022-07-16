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


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmlwdHNfY2Fyb3VzZWxEaXNwbGF5X3RzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDhFQUF5QztBQUN6Qyw2RkFBeUQ7QUFFekQsSUFBTSxZQUFZLEdBQUcsU0FBUyxZQUFZLENBQ3hDLFFBQWlCLEVBQ2pCLFdBQTJCO0lBRTNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxzQkFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ2hELElBQUksc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssUUFBUSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFNLEtBQUssR0FBRyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLEtBQUssWUFBWSxnQkFBZ0IsRUFBRTtnQkFDckMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0IsSUFBTSxLQUFLLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDOUMsS0FBSyxDQUFDLFNBQVMsR0FBRyw2Q0FDUyxzQkFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUsscURBQ25CLHNCQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxvREFDdEIsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsSUFBSSx3R0FFaEMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsTUFBTSxrSEFJckMsc0JBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLDRMQVF0QyxDQUFDO2dCQUNOLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENB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VDtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRixJQUFNLFNBQVMsR0FBRyxTQUFTLDBCQUEwQixDQUFDLENBQVE7SUFDNUQsU0FBUyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQztBQUN2QixDQUFDLENBQUM7QUFRYSw4QkFBUztBQU54QixJQUFNLGFBQWEsR0FBRyxTQUFTLDZCQUE2QixDQUFDLENBQVE7SUFDbkUsU0FBUyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUMzQixDQUFDLENBQUM7QUFJd0Isc0NBQWE7QUFGdkMsSUFBTSxTQUFTLEdBQUcsU0FBUyxzQkFBc0IsS0FBSSxDQUFDLENBQUM7QUFFZCw4QkFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvY2Fyb3VzZWxEaXNwbGF5LnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvaW1hZ2VzLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvcHVic3ViLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyLy4vc3JjL3NjcmlwdHMvdHJhbnNpdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2Fyb3VzZWxTdG9yZSB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbmV4dEltYWdlLCBwcmV2aW91c0ltYWdlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbnNcIjtcblxuY29uc3QgZGlzcGxheUltYWdlID0gZnVuY3Rpb24gZGlzcGxheUltYWdlKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgaW5uZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGNhcm91c2VsU3RvcmVbaV0ucmV0dXJuSW1hZ2VzQXJyYXkoKVswXTtcbiAgICAgIGNvbnN0IGNsb25lID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICBpbm5lckJvcmRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAuZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZSR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyAxMDAwfXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyA1MDAwMDB9cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQXJyb3dzID0gZnVuY3Rpb24gY3JlYXRlQXJyb3dzRGlzcGxheShcbiAgYXJyb3dzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudFxuKSB7XG4gIGNvbnN0IGFycm93MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFycm93MS5jbGFzc0xpc3QuYWRkKFwiYXJyb3cxXCIsIFwiYXJyb3dzXCIpO1xuICBhcnJvdzEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHByZXZpb3VzSW1hZ2UpO1xuICBjb25zdCBpMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMS5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCIpO1xuICBhcnJvdzEuYXBwZW5kQ2hpbGQoaTEpO1xuICBjb25zdCBhcnJvdzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvdzIuY2xhc3NMaXN0LmFkZChcImFycm93MlwiLCBcImFycm93c1wiKTtcbiAgYXJyb3cyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXh0SW1hZ2UpO1xuICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodFwiKTtcbiAgYXJyb3cyLmFwcGVuZENoaWxkKGkyKTtcbiAgYXJyb3dzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93MSk7XG4gIGFycm93c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvdzIpO1xufTtcblxuY29uc3QgY3JlYXRlQ2lyY2xlcyA9IGZ1bmN0aW9uIGNyZWF0ZUNpcmNsZXNEaXNwbGF5KFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgY2lyY2xlc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQsXG4gIG51bSA9IDBcbikge1xuICBjaXJjbGVzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgIGNvbnN0IGltZ0Fyckxlbmd0aCA9IGNhcm91c2VsU3RvcmVbaV0ucmV0dXJuSW1hZ2VzQXJyYXkoKS5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltZ0Fyckxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgIGNvbnN0IGNpcmNsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNpcmNsZURpdi5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlc1wiKTtcbiAgICAgICAgY2lyY2xlRGl2LmlkID0gYGZyb3N0d2Fsa2VyY2lyY2xlLSR7an1gO1xuICAgICAgICBpZiAoaiA9PT0gbnVtKSB7XG4gICAgICAgICAgY2lyY2xlRGl2LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cbiAgICAgICAgY2lyY2xlc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGVEaXYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xzID0gZnVuY3Rpb24gZGlzcGxheUFycm93c0FuZENpcmNsZXMoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBvdXRlckJvcmRlcjogSFRNTERpdkVsZW1lbnRcbikge1xuICBjb25zdCBjb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnRyb2xzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjb250cm9sc0NvbnRhaW5lclwiKTtcbiAgY29uc3QgY2lyY2xlc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNpcmNsZXNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNpcmNsZXNDb250YWluZXJcIik7XG4gIGNyZWF0ZUNpcmNsZXMoY2Fyb3VzZWwsIGNpcmNsZXNDb250YWluZXIpO1xuICBjb25zdCBhcnJvd3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvd3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93c0NvbnRhaW5lclwiKTtcbiAgY3JlYXRlQXJyb3dzKGFycm93c0NvbnRhaW5lcik7XG4gIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZXNDb250YWluZXIpO1xuICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd3NDb250YWluZXIpO1xuICBvdXRlckJvcmRlci5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2Fyb3VzZWwgPSBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5Q2Fyb3VzZWwoY2Fyb3VzZWw6IEVsZW1lbnQpIHtcbiAgY29uc3Qgb3V0ZXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lckJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXCJvdXRlckJvcmRlclwiKTtcbiAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcImlubmVyQm9yZGVyXCIpO1xuICBkaXNwbGF5SW1hZ2UoY2Fyb3VzZWwsIGlubmVyQm9yZGVyKTtcbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoaW5uZXJCb3JkZXIpO1xuICBkaXNwbGF5Q29udHJvbHMoY2Fyb3VzZWwsIG91dGVyQm9yZGVyKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQob3V0ZXJCb3JkZXIpO1xufTtcblxuY29uc3QgZmluZENhcm91c2VscyA9IGZ1bmN0aW9uIGZpbmRBbmRTaG93Q2Fyb3VzZWxPblBhZ2VMb2FkKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGRpc3BsYXlDYXJvdXNlbChjYXJvdXNlbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZENhcm91c2VscztcbiIsImltcG9ydCB7IHB1Ymxpc2ggfSBmcm9tIFwiLi9wdWJzdWJcIjtcblxuY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgY3VycmVudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGltZXIgPSA1MDAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKFwiaW1hZ2VzQXJyQ2hhbmdlXCIsIHRoaXMuaWQsIHRoaXMuY3VycmVudCk7XG4gIH1cblxuICBkZWxldGVJbWFnZShpbWFnZTogdW5rbm93biwgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXSkge1xuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gaW1hZ2UpIHtcbiAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBwaWMpIHtcbiAgICAgICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIHB1Ymxpc2goXCJpbWFnZXNBcnJDaGFuZ2VcIiwgdGhpcy5pZCwgdGhpcy5jdXJyZW50KTtcbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIGp1bXBJbWFnZShjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgIHJldHVybiB0aGlzLmltYWdlc0Fyclt0aGlzLmN1cnJlbnRdO1xuICB9XG59XG5cbmV4cG9ydCB7IGNhcm91c2VsU3RvcmUsIENhcm91c2VsIH07XG4iLCJ0eXBlIEFueWZ1bmN0aW9ucyA9ICguLi5hcmdzOiBhbnlbXSkgPT4gdW5rbm93bjtcblxuaW50ZXJmYWNlIEV2ZW50cyB7XG4gIFtpbmRleDogc3RyaW5nXTogQW55ZnVuY3Rpb25zW107XG59XG5cbmNvbnN0IGV2ZW50czogRXZlbnRzID0ge1xuICAvLyBrZXk6IGV2ZW50bmFtZSwgdmFsdWU6IFtmdW5jc11cbn07XG5cbmNvbnN0IHN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGV2ZW50c1tldmVudE5hbWVdLnB1c2goZnVuYyk7XG4gIH0gZWxzZSB7XG4gICAgZXZlbnRzW2V2ZW50TmFtZV0gPSBbZnVuY107XG4gIH1cbn07XG5cbmNvbnN0IHVuc3Vic2NyaWJlID0gKGV2ZW50TmFtZTogc3RyaW5nLCBmdW5jOiBBbnlmdW5jdGlvbnMpID0+IHtcbiAgaWYgKGV2ZW50c1tldmVudE5hbWVdKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmVudHNbZXZlbnROYW1lXS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGV2ZW50c1tldmVudE5hbWVdW2ldLnRvU3RyaW5nKCkgPT09IGZ1bmMudG9TdHJpbmcoKSkge1xuICAgICAgICBldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgcHVibGlzaCA9IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogdW5rbm93bltdKTogdm9pZCA9PiB7XG4gIGNvbnN0IGZ1bmNzID0gZXZlbnRzW2V2ZW50TmFtZV07XG4gIGlmIChBcnJheS5pc0FycmF5KGZ1bmNzKSkge1xuICAgIGZ1bmNzLmZvckVhY2goKGZ1bmMpID0+IHtcbiAgICAgIGZ1bmMoLi4uYXJncyk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHB1Ymxpc2gsIHN1YnNjcmliZSwgdW5zdWJzY3JpYmUgfTtcbiIsImltcG9ydCB7IGNhcm91c2VsU3RvcmUgfSBmcm9tIFwiLi9pbWFnZXNcIjtcblxuY29uc3QgbmV4dEludGVydmFsSWQ6IHtcbiAgW2luZGV4OiBzdHJpbmddOiBudW1iZXI7XG59ID0ge307XG5cbmNvbnN0IGNoYW5nZUNpcmNsZSA9IGZ1bmN0aW9uIGNoYW5nZUNpcmNsZVdoZW5JbWFnZUNoYW5nZXMoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBudW06IG51bWJlclxuKSB7XG4gIGNvbnN0IGNpcmNsZXNDb250YWluZXIgPSBjYXJvdXNlbC5xdWVyeVNlbGVjdG9yKFwiLmNpcmNsZXNDb250YWluZXJcIik7XG4gIGNvbnN0IGNpcmNsZXMgPSBjaXJjbGVzQ29udGFpbmVyPy5jaGlsZHJlbiB8fCBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaXJjbGVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNpcmNsZXNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpKSB7XG4gICAgICBjaXJjbGVzW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9XG4gIGNvbnN0IHsgY3VycmVudCB9ID0gY2Fyb3VzZWxTdG9yZVtudW1dO1xuICBjaXJjbGVzW2N1cnJlbnRdLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG59O1xuXG5jb25zdCBjaGFuZ2VJbWFnZSA9IGZ1bmN0aW9uIGNoYW5nZUltYWdlQXRJbnRlcnZhbChcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIG51bTogbnVtYmVyLFxuICBjaGFuZ2U6IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiID0gXCJuZXh0XCJcbikge1xuICBjb25zdCBpbWFnZSA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gIGlmIChpbWFnZSkge1xuICAgIGNvbnN0IG5leHRJbWFnZUVsZW1lbnQgPVxuICAgICAgY2hhbmdlID09PSBcIm5leHRcIlxuICAgICAgICA/IGNhcm91c2VsU3RvcmVbbnVtXS5uZXh0SW1hZ2UoKVxuICAgICAgICA6IGNhcm91c2VsU3RvcmVbbnVtXS5wcmV2aW91c0ltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gbmV4dEltYWdlRWxlbWVudC5zcmM7XG4gICAgY2hhbmdlQ2lyY2xlKGNhcm91c2VsLCBudW0pO1xuICB9XG59O1xuXG5jb25zdCBuZXh0ID0gZnVuY3Rpb24gc2V0VGltZXJGb3JOZXh0SW1hZ2UoKSB7XG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvc3R3YWxrZXJjYXJvdXNlbFwiKTtcbiAgY2Fyb3VzZWxzLmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgICAgbmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBjaGFuZ2VJbWFnZShjYXJvdXNlbCwgaSk7XG4gICAgICAgIH0sIGNhcm91c2VsU3RvcmVbaV0udGltZXIpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBtb3ZlSW1hZ2UgPSBmdW5jdGlvbiBtb3ZlSW1hZ2VPbkFycm93Q2xpY2soXG4gIGU6IEV2ZW50LFxuICBkaXJlY3Rpb246IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiXG4pIHtcbiAgY29uc3QgYXJyb3cgPSBlLmN1cnJlbnRUYXJnZXQ7XG5cbiAgaWYgKGFycm93IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICBjb25zdCBjYXJvdXNlbCA9XG4gICAgICBhcnJvdy5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50Py5wYXJlbnRFbGVtZW50O1xuXG4gICAgaWYgKGNhcm91c2VsKSB7XG4gICAgICBjb25zdCBpbm5lckJvcmRlciA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCIuaW5uZXJCb3JkZXJcIik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICAgICAgaW5uZXJCb3JkZXI/LmNsYXNzTGlzdC5yZW1vdmUoXG4gICAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICAgICk7XG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwobmV4dEludGVydmFsSWRbY2Fyb3VzZWwuaWRdKTtcbiAgICAgICAgICBjaGFuZ2VJbWFnZShjYXJvdXNlbCwgaSwgZGlyZWN0aW9uKTtcbiAgICAgICAgICBpbm5lckJvcmRlcj8uY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICAgIGBmcm9zdHdhbGtlcmFuaW1hdGlvbiR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICBuZXh0SW50ZXJ2YWxJZFtjYXJvdXNlbC5pZF0gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2UoY2Fyb3VzZWwsIGkpO1xuICAgICAgICAgIH0sIGNhcm91c2VsU3RvcmVbaV0udGltZXIpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBuZXh0SW1hZ2UgPSBmdW5jdGlvbiBuZXh0SW1hZ2VPblJpZ2h0QXJyb3dDbGljayhlOiBFdmVudCkge1xuICBtb3ZlSW1hZ2UoZSwgXCJuZXh0XCIpO1xufTtcblxuY29uc3QgcHJldmlvdXNJbWFnZSA9IGZ1bmN0aW9uIHByZXZpb3VzSW1hZ2VPbkxlZnRBcnJvd0NsaWNrKGU6IEV2ZW50KSB7XG4gIG1vdmVJbWFnZShlLCBcInByZXZpb3VzXCIpO1xufTtcblxuY29uc3QganVtcEltYWdlID0gZnVuY3Rpb24ganVtcEltYWdlT25DaXJjbGVDbGljaygpIHt9O1xuXG5leHBvcnQgeyBuZXh0LCBuZXh0SW1hZ2UsIHByZXZpb3VzSW1hZ2UsIGp1bXBJbWFnZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9