/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  min-width: 100vw;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.container {\n  width: 40vw;\n  height: 40vh;\n  margin: 10px;\n}\n\n.frostwalkercarousel {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: stretch;\n  margin: 5px;\n  padding: 0;\n}\n.frostwalkercarousel .outerBorder {\n  color: white;\n  background-color: black;\n  min-width: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around;\n}\n.frostwalkercarousel .innerBorder {\n  color: black;\n  background-color: white;\n  width: 90%;\n  height: 70%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: stretch;\n}\n.frostwalkercarousel .innerBorder img {\n  width: 100%;\n  height: 100%;\n}\n.frostwalkercarousel .controlsContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: stretch;\n  width: 100%;\n}\n.frostwalkercarousel .arrowsContainer {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-around;\n  width: 100%;\n}\n.frostwalkercarousel .arrows {\n  font-size: calc(10px + 1vw + 1vh);\n  font-weight: 500;\n}", "",{"version":3,"sources":["webpack://./src/styles/main.scss","webpack://./src/styles/_mixins.scss"],"names":[],"mappings":"AAKA;EACI,gBAAA;EACA,iBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;AAJJ;;AAOA;EACI,WAAA;EACA,YAAA;EACA,YAAA;AAJJ;;AAOA;ECdQ,WDeiB;ECdjB,YDcuB;ECF3B,aAAA;EACA,mBDEqB;ECDrB,oBDC0B;ECA1B,wBAAA;EAVA,WDW4B;ECV5B,UDUiC;AACrC;AACI;ECoBA,YDzCY;EC0CZ,uBD3CU;ECAN,eDwBqB;ECvBrB,gBDuB2B;ECR/B,aAAA;EACA,sBDQyB;ECPzB,mBDOiC;ECNjC,6BDMyC;AAM7C;AAHI;ECcA,YD1CU;EC2CV,uBD1CY;ECER,UD2BqB;EC1BrB,WD0B0B;ECd9B,aAAA;EACA,sBDcyB;ECbzB,oBDaiC;ECZjC,wBDY0C;AAU9C;AARQ;EC9BA,WD+ByB;EC9BzB,YD8B+B;AAWvC;AAPI;ECtBA,aAAA;EACA,sBDsByB;ECrBzB,mBDqBiC;ECpBjC,wBDoByC;ECpCrC,WDqCqB;AAY7B;AATI;EC3BA,aAAA;EACA,mBD2ByB;EC1BzB,mBD0B8B;ECzB9B,6BDyBsC;ECzClC,WD0CqB;AAc7B;AAXI;ECXA,iCDYyB;ECXzB,gBAFwB;AD2B5B","sourcesContent":["@use \"./mixins\";\n\n$theme-color: black;\n$theme-color-2: white;\n\nbody {\n    min-width: 100vw;\n    min-height: 100vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.container {\n    width: 40vw;\n    height: 40vh;\n    margin: 10px;\n}\n\n.frostwalkercarousel {\n    @include mixins.size(100%, 100%, false);\n    @include mixins.flex(row, stretch, stretch);\n    @include mixins.box-control(5px, 0);\n\n    .outerBorder {\n        @include mixins.color($theme-color-2, $theme-color);\n        @include mixins.size(100%, 100%);\n        @include mixins.flex(column, center, space-around);\n    }\n\n    .innerBorder {\n        @include mixins.color($theme-color, $theme-color-2);\n        @include mixins.size(90%, 70%, false);\n        @include mixins.flex(column, stretch, stretch);\n\n        img {\n            @include mixins.size(100%, 100%, false);\n        }\n    }\n\n    .controlsContainer {\n        @include mixins.flex(column, center, stretch);\n        @include mixins.size(100%, null, false);\n    }\n\n    .arrowsContainer {\n        @include mixins.flex(row, center, space-around);\n        @include mixins.size(100%, null, false);\n    }\n\n    .arrows {\n        @include mixins.font(calc(10px + 1vw + 1vh))\n    }\n}","@mixin size($width, $height: $width, $min: true) {\n    @if($min) {\n        min-width: $width;\n        min-height: $height;\n    } @else {\n        width: $width;\n        height: $height;\n    }\n}\n\n@mixin box-control($margin, $padding: $margin, $border: null, $border-radius: null) {\n    margin: $margin;\n    padding: $padding;\n    border: $border;\n    border-radius: $border-radius;\n}\n\n@mixin flex($direction: row, $align-items: flex-start, $justify-content: flex-start) {\n    display: flex;\n    flex-direction: $direction;\n    align-items: $align-items;\n    justify-content: $justify-content;\n};\n\n@mixin grid($columns, $rows: null, $gap: null) {\n    display: grid;\n    grid-template-columns: $columns;\n    grid-template-rows: $rows;\n    gap: $gap;\n}\n\n@mixin list-reset {\n    ul {\n        @include box-control(0);\n        list-style-type: none;\n    }\n}\n\n@mixin font($size, $weight: 500) {\n    font-size: $size;\n    font-weight: $weight;\n}\n\n@mixin color($color, $bgcolor) {\n    color: $color;\n    background-color: $bgcolor;\n}\n\n@mixin transition($property, $time, $value, $function, $delay, $element, $element2: null) {\n    #{$element} {\n        transition: $property $time $function $delay;\n        @if($element2 == null) {\n            #{$property}: $value;\n        }\n    };\n\n    @if($element2) {\n        #{$element2} {\n            #{$property}: $value;\n        }\n    }\n}\n\n@mixin position($position, $TOrB: null, $value1: null, $LOrR: null, $value2: null) {\n    position: $position;\n    @if ($TOrB == \"T\") {\n        top: $value1;\n    } @else if ($TOrB == \"B\") {\n        bottom: $value1;\n    }\n\n    @if($LOrR == \"L\") {\n        left: $value2\n    } @else if ($LOrR == \"R\") {\n        right: $value2;\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

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
var createArrows = function (arrowsContainer) {
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

/***/ "./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
__webpack_require__(/*! @fortawesome/fontawesome-free/js/all */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
var image1_jpeg_1 = __importDefault(__webpack_require__(/*! ../assets/image1.jpeg */ "./src/assets/image1.jpeg"));
var image2_jpeg_1 = __importDefault(__webpack_require__(/*! ../assets/image2.jpeg */ "./src/assets/image2.jpeg"));
var image3_jpeg_1 = __importDefault(__webpack_require__(/*! ../assets/image3.jpeg */ "./src/assets/image3.jpeg"));
var image4_jpeg_1 = __importDefault(__webpack_require__(/*! ../assets/image4.jpeg */ "./src/assets/image4.jpeg"));
var image5_jpeg_1 = __importDefault(__webpack_require__(/*! ../assets/image5.jpeg */ "./src/assets/image5.jpeg"));
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var carouselDisplay_1 = __importDefault(__webpack_require__(/*! ./carouselDisplay */ "./src/scripts/carouselDisplay.ts"));
var transitions_1 = __webpack_require__(/*! ./transitions */ "./src/scripts/transitions.ts");
window.addEventListener("load", carouselDisplay_1.default);
var carousel1 = new images_1.Carousel("carousel1", 5000);
carousel1.addImage(image1_jpeg_1.default, image2_jpeg_1.default, image3_jpeg_1.default);
var carousel2 = new images_1.Carousel("carousel2", 7000);
carousel2.addImage(image4_jpeg_1.default, image5_jpeg_1.default);
(0, transitions_1.next)();


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


/***/ }),

/***/ "./src/assets/image1.jpeg":
/*!********************************!*\
  !*** ./src/assets/image1.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7fa913207f688fcc0e35.jpeg";

/***/ }),

/***/ "./src/assets/image2.jpeg":
/*!********************************!*\
  !*** ./src/assets/image2.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b8388cbc84778eba9277.jpeg";

/***/ }),

/***/ "./src/assets/image3.jpeg":
/*!********************************!*\
  !*** ./src/assets/image3.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9fb44f54635a019ca25e.jpeg";

/***/ }),

/***/ "./src/assets/image4.jpeg":
/*!********************************!*\
  !*** ./src/assets/image4.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d39b80aa6bca9bc63347.jpeg";

/***/ }),

/***/ "./src/assets/image5.jpeg":
/*!********************************!*\
  !*** ./src/assets/image5.jpeg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e5d49de14c603f793ad1.jpeg";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkimage_carousel_frostwalker"] = self["webpackChunkimage_carousel_frostwalker"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_css-loader_dist_runt-2de1a3"], () => (__webpack_require__("./src/scripts/index.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9jYXJvdXNlbERpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb25zLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mcm9zdHdhbGtlcmNhcm91c2VsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZyb3N0d2Fsa2VyY2Fyb3VzZWwgLm91dGVyQm9yZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCAuaW5uZXJCb3JkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbn1cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCAuaW5uZXJCb3JkZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCAuY29udHJvbHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mcm9zdHdhbGtlcmNhcm91c2VsIC5hcnJvd3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZyb3N0d2Fsa2VyY2Fyb3VzZWwgLmFycm93cyB7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyArIDF2aCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VDZFEsV0RlaUI7RUNkakIsWURjdUI7RUNGM0IsYUFBQTtFQUNBLG1CREVxQjtFQ0RyQixvQkRDMEI7RUNBMUIsd0JBQUE7RUFWQSxXRFc0QjtFQ1Y1QixVRFVpQztBQUNyQztBQUNJO0VDb0JBLFlEekNZO0VDMENaLHVCRDNDVTtFQ0FOLGVEd0JxQjtFQ3ZCckIsZ0JEdUIyQjtFQ1IvQixhQUFBO0VBQ0Esc0JEUXlCO0VDUHpCLG1CRE9pQztFQ05qQyw2QkRNeUM7QUFNN0M7QUFISTtFQ2NBLFlEMUNVO0VDMkNWLHVCRDFDWTtFQ0VSLFVEMkJxQjtFQzFCckIsV0QwQjBCO0VDZDlCLGFBQUE7RUFDQSxzQkRjeUI7RUNiekIsb0JEYWlDO0VDWmpDLHdCRFkwQztBQVU5QztBQVJRO0VDOUJBLFdEK0J5QjtFQzlCekIsWUQ4QitCO0FBV3ZDO0FBUEk7RUN0QkEsYUFBQTtFQUNBLHNCRHNCeUI7RUNyQnpCLG1CRHFCaUM7RUNwQmpDLHdCRG9CeUM7RUNwQ3JDLFdEcUNxQjtBQVk3QjtBQVRJO0VDM0JBLGFBQUE7RUFDQSxtQkQyQnlCO0VDMUJ6QixtQkQwQjhCO0VDekI5Qiw2QkR5QnNDO0VDekNsQyxXRDBDcUI7QUFjN0I7QUFYSTtFQ1hBLGlDRFl5QjtFQ1h6QixnQkFGd0I7QUQyQjVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4vbWl4aW5zXFxcIjtcXG5cXG4kdGhlbWUtY29sb3I6IGJsYWNrO1xcbiR0aGVtZS1jb2xvci0yOiB3aGl0ZTtcXG5cXG5ib2R5IHtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCB7XFxuICAgIEBpbmNsdWRlIG1peGlucy5zaXplKDEwMCUsIDEwMCUsIGZhbHNlKTtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLmZsZXgocm93LCBzdHJldGNoLCBzdHJldGNoKTtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLmJveC1jb250cm9sKDVweCwgMCk7XFxuXFxuICAgIC5vdXRlckJvcmRlciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuY29sb3IoJHRoZW1lLWNvbG9yLTIsICR0aGVtZS1jb2xvcik7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZSgxMDAlLCAxMDAlKTtcXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5mbGV4KGNvbHVtbiwgY2VudGVyLCBzcGFjZS1hcm91bmQpO1xcbiAgICB9XFxuXFxuICAgIC5pbm5lckJvcmRlciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuY29sb3IoJHRoZW1lLWNvbG9yLCAkdGhlbWUtY29sb3ItMik7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZSg5MCUsIDcwJSwgZmFsc2UpO1xcbiAgICAgICAgQGluY2x1ZGUgbWl4aW5zLmZsZXgoY29sdW1uLCBzdHJldGNoLCBzdHJldGNoKTtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLnNpemUoMTAwJSwgMTAwJSwgZmFsc2UpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jb250cm9sc0NvbnRhaW5lciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuZmxleChjb2x1bW4sIGNlbnRlciwgc3RyZXRjaCk7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZSgxMDAlLCBudWxsLCBmYWxzZSk7XFxuICAgIH1cXG5cXG4gICAgLmFycm93c0NvbnRhaW5lciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuZmxleChyb3csIGNlbnRlciwgc3BhY2UtYXJvdW5kKTtcXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5zaXplKDEwMCUsIG51bGwsIGZhbHNlKTtcXG4gICAgfVxcblxcbiAgICAuYXJyb3dzIHtcXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5mb250KGNhbGMoMTBweCArIDF2dyArIDF2aCkpXFxuICAgIH1cXG59XCIsXCJAbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCwgJG1pbjogdHJ1ZSkge1xcbiAgICBAaWYoJG1pbikge1xcbiAgICAgICAgbWluLXdpZHRoOiAkd2lkdGg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xcbiAgICB9IEBlbHNlIHtcXG4gICAgICAgIHdpZHRoOiAkd2lkdGg7XFxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIGJveC1jb250cm9sKCRtYXJnaW4sICRwYWRkaW5nOiAkbWFyZ2luLCAkYm9yZGVyOiBudWxsLCAkYm9yZGVyLXJhZGl1czogbnVsbCkge1xcbiAgICBtYXJnaW46ICRtYXJnaW47XFxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xcbiAgICBib3JkZXI6ICRib3JkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbn1cXG5cXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogZmxleC1zdGFydCwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xcbn07XFxuXFxuQG1peGluIGdyaWQoJGNvbHVtbnMsICRyb3dzOiBudWxsLCAkZ2FwOiBudWxsKSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbHVtbnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogJHJvd3M7XFxuICAgIGdhcDogJGdhcDtcXG59XFxuXFxuQG1peGluIGxpc3QtcmVzZXQge1xcbiAgICB1bCB7XFxuICAgICAgICBAaW5jbHVkZSBib3gtY29udHJvbCgwKTtcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodDogNTAwKSB7XFxuICAgIGZvbnQtc2l6ZTogJHNpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcbn1cXG5cXG5AbWl4aW4gY29sb3IoJGNvbG9yLCAkYmdjb2xvcikge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG59XFxuXFxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5LCAkdGltZSwgJHZhbHVlLCAkZnVuY3Rpb24sICRkZWxheSwgJGVsZW1lbnQsICRlbGVtZW50MjogbnVsbCkge1xcbiAgICAjeyRlbGVtZW50fSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgJGZ1bmN0aW9uICRkZWxheTtcXG4gICAgICAgIEBpZigkZWxlbWVudDIgPT0gbnVsbCkge1xcbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgICAgfVxcbiAgICB9O1xcblxcbiAgICBAaWYoJGVsZW1lbnQyKSB7XFxuICAgICAgICAjeyRlbGVtZW50Mn0ge1xcbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiBwb3NpdGlvbigkcG9zaXRpb24sICRUT3JCOiBudWxsLCAkdmFsdWUxOiBudWxsLCAkTE9yUjogbnVsbCwgJHZhbHVlMjogbnVsbCkge1xcbiAgICBwb3NpdGlvbjogJHBvc2l0aW9uO1xcbiAgICBAaWYgKCRUT3JCID09IFxcXCJUXFxcIikge1xcbiAgICAgICAgdG9wOiAkdmFsdWUxO1xcbiAgICB9IEBlbHNlIGlmICgkVE9yQiA9PSBcXFwiQlxcXCIpIHtcXG4gICAgICAgIGJvdHRvbTogJHZhbHVlMTtcXG4gICAgfVxcblxcbiAgICBAaWYoJExPclIgPT0gXFxcIkxcXFwiKSB7XFxuICAgICAgICBsZWZ0OiAkdmFsdWUyXFxuICAgIH0gQGVsc2UgaWYgKCRMT3JSID09IFxcXCJSXFxcIikge1xcbiAgICAgICAgcmlnaHQ6ICR2YWx1ZTI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgY2Fyb3VzZWxTdG9yZSB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbmV4dEltYWdlLCBwcmV2aW91c0ltYWdlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbnNcIjtcblxuY29uc3QgZGlzcGxheUltYWdlID0gZnVuY3Rpb24gZGlzcGxheUltYWdlKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgaW5uZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGNhcm91c2VsU3RvcmVbaV0ucmV0dXJuSW1hZ2VzQXJyYXkoKVswXTtcbiAgICAgIGNvbnN0IGNsb25lID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICBpbm5lckJvcmRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAuZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZSR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyAxMDAwfXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyA1MDAwMDB9cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQXJyb3dzID0gKGFycm93c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgY29uc3QgYXJyb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3cxLmNsYXNzTGlzdC5hZGQoXCJhcnJvdzFcIiwgXCJhcnJvd3NcIik7XG4gIGFycm93MS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcHJldmlvdXNJbWFnZSk7XG4gIGNvbnN0IGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkxLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIik7XG4gIGFycm93MS5hcHBlbmRDaGlsZChpMSk7XG4gIGNvbnN0IGFycm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFycm93Mi5jbGFzc0xpc3QuYWRkKFwiYXJyb3cyXCIsIFwiYXJyb3dzXCIpO1xuICBhcnJvdzIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5leHRJbWFnZSk7XG4gIGNvbnN0IGkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkyLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvdy1hbHQtY2lyY2xlLXJpZ2h0XCIpO1xuICBhcnJvdzIuYXBwZW5kQ2hpbGQoaTIpO1xuICBhcnJvd3NDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3cxKTtcbiAgYXJyb3dzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93Mik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q29udHJvbHMgPSBmdW5jdGlvbiBkaXNwbGF5QXJyb3dzQW5kQ2lyY2xlcyhcbiAgb3V0ZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgY29uc3QgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb250cm9sc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY29udHJvbHNDb250YWluZXJcIik7XG4gIGNvbnN0IGNpcmNsZXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjaXJjbGVzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaXJjbGVzQ29udGFpbmVyXCIpO1xuICBjb25zdCBhcnJvd3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBhcnJvd3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImFycm93c0NvbnRhaW5lclwiKTtcbiAgY3JlYXRlQXJyb3dzKGFycm93c0NvbnRhaW5lcik7XG4gIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZXNDb250YWluZXIpO1xuICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvd3NDb250YWluZXIpO1xuICBvdXRlckJvcmRlci5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG59O1xuXG5jb25zdCBkaXNwbGF5Q2Fyb3VzZWwgPSBmdW5jdGlvbiBjcmVhdGVBbmREaXNwbGF5Q2Fyb3VzZWwoY2Fyb3VzZWw6IEVsZW1lbnQpIHtcbiAgY29uc3Qgb3V0ZXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lckJvcmRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG91dGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXCJvdXRlckJvcmRlclwiKTtcbiAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcImlubmVyQm9yZGVyXCIpO1xuICBkaXNwbGF5SW1hZ2UoY2Fyb3VzZWwsIGlubmVyQm9yZGVyKTtcbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoaW5uZXJCb3JkZXIpO1xuICBkaXNwbGF5Q29udHJvbHMob3V0ZXJCb3JkZXIpO1xuICBjYXJvdXNlbC5hcHBlbmRDaGlsZChvdXRlckJvcmRlcik7XG59O1xuXG5jb25zdCBmaW5kQ2Fyb3VzZWxzID0gZnVuY3Rpb24gZmluZEFuZFNob3dDYXJvdXNlbE9uUGFnZUxvYWQoKSB7XG4gIGNvbnN0IGNhcm91c2VscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZnJvc3R3YWxrZXJjYXJvdXNlbFwiKTtcbiAgY2Fyb3VzZWxzLmZvckVhY2goKGNhcm91c2VsKSA9PiB7XG4gICAgZGlzcGxheUNhcm91c2VsKGNhcm91c2VsKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmaW5kQ2Fyb3VzZWxzO1xuIiwiY29uc3QgY2Fyb3VzZWxTdG9yZTogQ2Fyb3VzZWxbXSA9IFtdO1xuXG5jb25zdCBzdG9yZUltZ09iaiA9IGZ1bmN0aW9uIHN0b3JlSW1hZ2VzT2JqZWN0cyhvYmo6IENhcm91c2VsKSB7XG4gIGNhcm91c2VsU3RvcmUucHVzaChvYmopO1xufTtcblxuY2xhc3MgQ2Fyb3VzZWwge1xuICBwcml2YXRlIGltYWdlc0FycjogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbiAgcmVhZG9ubHkgaWQ7XG5cbiAgcmVhZG9ubHkgdGltZXI7XG5cbiAgcHJpdmF0ZSBjdXJyZW50ID0gMDtcblxuICBjb25zdHJ1Y3RvcihpZDogc3RyaW5nLCB0aW1lciA9IDUwMDApIHtcbiAgICB0aGlzLmlkID0gaWQ7XG4gICAgdGhpcy50aW1lciA9IHRpbWVyO1xuICAgIHN0b3JlSW1nT2JqKHRoaXMpO1xuICB9XG5cbiAgYWRkSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICBQaWN0dXJlLnNyYyA9IGltYWdlO1xuICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob3RoZXJJbWFnZXMpKSB7XG4gICAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgICAgICAgUGljdHVyZS5zcmMgPSBwaWM7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIucHVzaChQaWN0dXJlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IGltYWdlKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gcGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybkltYWdlc0FycmF5KCkge1xuICAgIHJldHVybiBbLi4udGhpcy5pbWFnZXNBcnJdO1xuICB9XG5cbiAgbmV4dEltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IC0xO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgKz0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxuXG4gIHByZXZpb3VzSW1hZ2UoKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudCA9PT0gMCkge1xuICAgICAgdGhpcy5jdXJyZW50ID0gdGhpcy5pbWFnZXNBcnIubGVuZ3RoO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnQgLT0gMTtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxufVxuXG5leHBvcnQgeyBjYXJvdXNlbFN0b3JlLCBDYXJvdXNlbCB9O1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL21haW4uc2Nzc1wiO1xuaW1wb3J0IFwiQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsXCI7XG5pbXBvcnQgaW1hZ2UxIGZyb20gXCIuLi9hc3NldHMvaW1hZ2UxLmpwZWdcIjtcbmltcG9ydCBpbWFnZTIgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZTIuanBlZ1wiO1xuaW1wb3J0IGltYWdlMyBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlMy5qcGVnXCI7XG5pbXBvcnQgaW1hZ2U0IGZyb20gXCIuLi9hc3NldHMvaW1hZ2U0LmpwZWdcIjtcbmltcG9ydCBpbWFnZTUgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZTUuanBlZ1wiO1xuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiLi9pbWFnZXNcIjtcbmltcG9ydCBmaW5kQ2Fyb3VzZWxzIGZyb20gXCIuL2Nhcm91c2VsRGlzcGxheVwiO1xuaW1wb3J0IHsgbmV4dCB9IGZyb20gXCIuL3RyYW5zaXRpb25zXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmaW5kQ2Fyb3VzZWxzKTtcbmNvbnN0IGNhcm91c2VsMSA9IG5ldyBDYXJvdXNlbChcImNhcm91c2VsMVwiLCA1MDAwKTtcbmNhcm91c2VsMS5hZGRJbWFnZShpbWFnZTEsIGltYWdlMiwgaW1hZ2UzKTtcbmNvbnN0IGNhcm91c2VsMiA9IG5ldyBDYXJvdXNlbChcImNhcm91c2VsMlwiLCA3MDAwKTtcbmNhcm91c2VsMi5hZGRJbWFnZShpbWFnZTQsIGltYWdlNSk7XG5uZXh0KCk7XG4iLCJpbXBvcnQgeyBjYXJvdXNlbFN0b3JlIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5cbmNvbnN0IG5leHRJbnRlcnZhbElkOiB7XG4gIFtpbmRleDogc3RyaW5nXTogbnVtYmVyO1xufSA9IHt9O1xuXG5jb25zdCBjaGFuZ2VJbWFnZSA9IGZ1bmN0aW9uIGNoYW5nZUltYWdlQXRJbnRlcnZhbChcbiAgY2Fyb3VzZWw6IEVsZW1lbnQsXG4gIG51bTogbnVtYmVyLFxuICBjaGFuZ2U6IFwibmV4dFwiIHwgXCJwcmV2aW91c1wiID0gXCJuZXh0XCJcbikge1xuICBjb25zdCBpbWFnZSA9IGNhcm91c2VsLnF1ZXJ5U2VsZWN0b3IoXCJpbWdcIik7XG4gIGlmIChpbWFnZSkge1xuICAgIGNvbnN0IG5leHRJbWFnZUVsZW1lbnQgPVxuICAgICAgY2hhbmdlID09PSBcIm5leHRcIlxuICAgICAgICA/IGNhcm91c2VsU3RvcmVbbnVtXS5uZXh0SW1hZ2UoKVxuICAgICAgICA6IGNhcm91c2VsU3RvcmVbbnVtXS5wcmV2aW91c0ltYWdlKCk7XG4gICAgaW1hZ2Uuc3JjID0gbmV4dEltYWdlRWxlbWVudC5zcmM7XG4gIH1cbn07XG5cbmNvbnN0IG5leHQgPSBmdW5jdGlvbiBzZXRUaW1lckZvck5leHRJbWFnZSgpIHtcbiAgY29uc3QgY2Fyb3VzZWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5mcm9zdHdhbGtlcmNhcm91c2VsXCIpO1xuICBjYXJvdXNlbHMuZm9yRWFjaCgoY2Fyb3VzZWwpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcm91c2VsU3RvcmUubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChjYXJvdXNlbFN0b3JlW2ldLmlkID09PSBjYXJvdXNlbC5pZCkge1xuICAgICAgICBuZXh0SW50ZXJ2YWxJZFtjYXJvdXNlbC5pZF0gPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgfSwgY2Fyb3VzZWxTdG9yZVtpXS50aW1lcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVJbWFnZSA9IGZ1bmN0aW9uIG1vdmVJbWFnZU9uQXJyb3dDbGljayhcbiAgZTogRXZlbnQsXG4gIGRpcmVjdGlvbjogXCJuZXh0XCIgfCBcInByZXZpb3VzXCJcbikge1xuICBjb25zdCBhcnJvdyA9IGUuY3VycmVudFRhcmdldDtcblxuICBpZiAoYXJyb3cgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIGNvbnN0IGNhcm91c2VsID1cbiAgICAgIGFycm93LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ/LnBhcmVudEVsZW1lbnQ7XG5cbiAgICBpZiAoY2Fyb3VzZWwpIHtcbiAgICAgIGNvbnN0IGlubmVyQm9yZGVyID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcIi5pbm5lckJvcmRlclwiKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAoY2Fyb3VzZWxTdG9yZVtpXS5pZCA9PT0gY2Fyb3VzZWwuaWQpIHtcbiAgICAgICAgICBpbm5lckJvcmRlcj8uY2xhc3NMaXN0LnJlbW92ZShcbiAgICAgICAgICAgIGBmcm9zdHdhbGtlcmFuaW1hdGlvbiR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn1gXG4gICAgICAgICAgKTtcbiAgICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChuZXh0SW50ZXJ2YWxJZFtjYXJvdXNlbC5pZF0pO1xuICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpLCBkaXJlY3Rpb24pO1xuICAgICAgICAgIGlubmVyQm9yZGVyPy5jbGFzc0xpc3QuYWRkKFxuICAgICAgICAgICAgYGZyb3N0d2Fsa2VyYW5pbWF0aW9uJHtjYXJvdXNlbFN0b3JlW2ldLnRpbWVyfWBcbiAgICAgICAgICApO1xuICAgICAgICAgIG5leHRJbnRlcnZhbElkW2Nhcm91c2VsLmlkXSA9IHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjaGFuZ2VJbWFnZShjYXJvdXNlbCwgaSk7XG4gICAgICAgICAgfSwgY2Fyb3VzZWxTdG9yZVtpXS50aW1lcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IG5leHRJbWFnZSA9IGZ1bmN0aW9uIG5leHRJbWFnZU9uUmlnaHRBcnJvd0NsaWNrKGU6IEV2ZW50KSB7XG4gIG1vdmVJbWFnZShlLCBcIm5leHRcIik7XG59O1xuXG5jb25zdCBwcmV2aW91c0ltYWdlID0gZnVuY3Rpb24gcHJldmlvdXNJbWFnZU9uTGVmdEFycm93Q2xpY2soZTogRXZlbnQpIHtcbiAgbW92ZUltYWdlKGUsIFwicHJldmlvdXNcIik7XG59O1xuXG5leHBvcnQgeyBuZXh0LCBuZXh0SW1hZ2UsIHByZXZpb3VzSW1hZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2ltYWdlX2Nhcm91c2VsX2Zyb3N0d2Fsa2VyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2ltYWdlX2Nhcm91c2VsX2Zyb3N0d2Fsa2VyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2ZvcnRhd2Vzb21lX2ZvbnRhd2Vzb21lLWZyZWVfanNfYWxsX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudC0yZGUxYTNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9