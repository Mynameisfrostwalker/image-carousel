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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztXQ2hEQTs7Ozs7VUVBQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc3R5bGVzL21haW4uc2NzcyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zdHlsZXMvbWFpbi5zY3NzPzY5YzciLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9jYXJvdXNlbERpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbmRleC50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL3RyYW5zaXRpb25zLnRzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL2ltYWdlLWNhcm91c2VsLWZyb3N0d2Fsa2VyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIG1pbi13aWR0aDogMTAwdnc7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBtYXJnaW46IDEwcHg7XFxufVxcblxcbi5mcm9zdHdhbGtlcmNhcm91c2VsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogc3RyZXRjaDtcXG4gIGp1c3RpZnktY29udGVudDogc3RyZXRjaDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZyb3N0d2Fsa2VyY2Fyb3VzZWwgLm91dGVyQm9yZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgbWluLXdpZHRoOiAxMDAlO1xcbiAgbWluLWhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCAuaW5uZXJCb3JkZXIge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB3aWR0aDogOTAlO1xcbiAgaGVpZ2h0OiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbn1cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCAuaW5uZXJCb3JkZXIgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCAuY29udHJvbHNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5mcm9zdHdhbGtlcmNhcm91c2VsIC5hcnJvd3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmZyb3N0d2Fsa2VyY2Fyb3VzZWwgLmFycm93cyB7XFxuICBmb250LXNpemU6IGNhbGMoMTBweCArIDF2dyArIDF2aCk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlcy9fbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBS0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUpKOztBQU9BO0VDZFEsV0RlaUI7RUNkakIsWURjdUI7RUNGM0IsYUFBQTtFQUNBLG1CREVxQjtFQ0RyQixvQkRDMEI7RUNBMUIsd0JBQUE7RUFWQSxXRFc0QjtFQ1Y1QixVRFVpQztBQUNyQztBQUNJO0VDb0JBLFlEekNZO0VDMENaLHVCRDNDVTtFQ0FOLGVEd0JxQjtFQ3ZCckIsZ0JEdUIyQjtFQ1IvQixhQUFBO0VBQ0Esc0JEUXlCO0VDUHpCLG1CRE9pQztFQ05qQyw2QkRNeUM7QUFNN0M7QUFISTtFQ2NBLFlEMUNVO0VDMkNWLHVCRDFDWTtFQ0VSLFVEMkJxQjtFQzFCckIsV0QwQjBCO0VDZDlCLGFBQUE7RUFDQSxzQkRjeUI7RUNiekIsb0JEYWlDO0VDWmpDLHdCRFkwQztBQVU5QztBQVJRO0VDOUJBLFdEK0J5QjtFQzlCekIsWUQ4QitCO0FBV3ZDO0FBUEk7RUN0QkEsYUFBQTtFQUNBLHNCRHNCeUI7RUNyQnpCLG1CRHFCaUM7RUNwQmpDLHdCRG9CeUM7RUNwQ3JDLFdEcUNxQjtBQVk3QjtBQVRJO0VDM0JBLGFBQUE7RUFDQSxtQkQyQnlCO0VDMUJ6QixtQkQwQjhCO0VDekI5Qiw2QkR5QnNDO0VDekNsQyxXRDBDcUI7QUFjN0I7QUFYSTtFQ1hBLGlDRFl5QjtFQ1h6QixnQkFGd0I7QUQyQjVCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkB1c2UgXFxcIi4vbWl4aW5zXFxcIjtcXG5cXG4kdGhlbWUtY29sb3I6IGJsYWNrO1xcbiR0aGVtZS1jb2xvci0yOiB3aGl0ZTtcXG5cXG5ib2R5IHtcXG4gICAgbWluLXdpZHRoOiAxMDB2dztcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDQwdnc7XFxuICAgIGhlaWdodDogNDB2aDtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbn1cXG5cXG4uZnJvc3R3YWxrZXJjYXJvdXNlbCB7XFxuICAgIEBpbmNsdWRlIG1peGlucy5zaXplKDEwMCUsIDEwMCUsIGZhbHNlKTtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLmZsZXgocm93LCBzdHJldGNoLCBzdHJldGNoKTtcXG4gICAgQGluY2x1ZGUgbWl4aW5zLmJveC1jb250cm9sKDVweCwgMCk7XFxuXFxuICAgIC5vdXRlckJvcmRlciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuY29sb3IoJHRoZW1lLWNvbG9yLTIsICR0aGVtZS1jb2xvcik7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZSgxMDAlLCAxMDAlKTtcXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5mbGV4KGNvbHVtbiwgY2VudGVyLCBzcGFjZS1hcm91bmQpO1xcbiAgICB9XFxuXFxuICAgIC5pbm5lckJvcmRlciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuY29sb3IoJHRoZW1lLWNvbG9yLCAkdGhlbWUtY29sb3ItMik7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZSg5MCUsIDcwJSwgZmFsc2UpO1xcbiAgICAgICAgQGluY2x1ZGUgbWl4aW5zLmZsZXgoY29sdW1uLCBzdHJldGNoLCBzdHJldGNoKTtcXG5cXG4gICAgICAgIGltZyB7XFxuICAgICAgICAgICAgQGluY2x1ZGUgbWl4aW5zLnNpemUoMTAwJSwgMTAwJSwgZmFsc2UpO1xcbiAgICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jb250cm9sc0NvbnRhaW5lciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuZmxleChjb2x1bW4sIGNlbnRlciwgc3RyZXRjaCk7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuc2l6ZSgxMDAlLCBudWxsLCBmYWxzZSk7XFxuICAgIH1cXG5cXG4gICAgLmFycm93c0NvbnRhaW5lciB7XFxuICAgICAgICBAaW5jbHVkZSBtaXhpbnMuZmxleChyb3csIGNlbnRlciwgc3BhY2UtYXJvdW5kKTtcXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5zaXplKDEwMCUsIG51bGwsIGZhbHNlKTtcXG4gICAgfVxcblxcbiAgICAuYXJyb3dzIHtcXG4gICAgICAgIEBpbmNsdWRlIG1peGlucy5mb250KGNhbGMoMTBweCArIDF2dyArIDF2aCkpXFxuICAgIH1cXG59XCIsXCJAbWl4aW4gc2l6ZSgkd2lkdGgsICRoZWlnaHQ6ICR3aWR0aCwgJG1pbjogdHJ1ZSkge1xcbiAgICBAaWYoJG1pbikge1xcbiAgICAgICAgbWluLXdpZHRoOiAkd2lkdGg7XFxuICAgICAgICBtaW4taGVpZ2h0OiAkaGVpZ2h0O1xcbiAgICB9IEBlbHNlIHtcXG4gICAgICAgIHdpZHRoOiAkd2lkdGg7XFxuICAgICAgICBoZWlnaHQ6ICRoZWlnaHQ7XFxuICAgIH1cXG59XFxuXFxuQG1peGluIGJveC1jb250cm9sKCRtYXJnaW4sICRwYWRkaW5nOiAkbWFyZ2luLCAkYm9yZGVyOiBudWxsLCAkYm9yZGVyLXJhZGl1czogbnVsbCkge1xcbiAgICBtYXJnaW46ICRtYXJnaW47XFxuICAgIHBhZGRpbmc6ICRwYWRkaW5nO1xcbiAgICBib3JkZXI6ICRib3JkZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6ICRib3JkZXItcmFkaXVzO1xcbn1cXG5cXG5AbWl4aW4gZmxleCgkZGlyZWN0aW9uOiByb3csICRhbGlnbi1pdGVtczogZmxleC1zdGFydCwgJGp1c3RpZnktY29udGVudDogZmxleC1zdGFydCkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcXG4gICAgYWxpZ24taXRlbXM6ICRhbGlnbi1pdGVtcztcXG4gICAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeS1jb250ZW50O1xcbn07XFxuXFxuQG1peGluIGdyaWQoJGNvbHVtbnMsICRyb3dzOiBudWxsLCAkZ2FwOiBudWxsKSB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogJGNvbHVtbnM7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogJHJvd3M7XFxuICAgIGdhcDogJGdhcDtcXG59XFxuXFxuQG1peGluIGxpc3QtcmVzZXQge1xcbiAgICB1bCB7XFxuICAgICAgICBAaW5jbHVkZSBib3gtY29udHJvbCgwKTtcXG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gICAgfVxcbn1cXG5cXG5AbWl4aW4gZm9udCgkc2l6ZSwgJHdlaWdodDogNTAwKSB7XFxuICAgIGZvbnQtc2l6ZTogJHNpemU7XFxuICAgIGZvbnQtd2VpZ2h0OiAkd2VpZ2h0O1xcbn1cXG5cXG5AbWl4aW4gY29sb3IoJGNvbG9yLCAkYmdjb2xvcikge1xcbiAgICBjb2xvcjogJGNvbG9yO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmdjb2xvcjtcXG59XFxuXFxuQG1peGluIHRyYW5zaXRpb24oJHByb3BlcnR5LCAkdGltZSwgJHZhbHVlLCAkZnVuY3Rpb24sICRkZWxheSwgJGVsZW1lbnQsICRlbGVtZW50MjogbnVsbCkge1xcbiAgICAjeyRlbGVtZW50fSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiAkcHJvcGVydHkgJHRpbWUgJGZ1bmN0aW9uICRkZWxheTtcXG4gICAgICAgIEBpZigkZWxlbWVudDIgPT0gbnVsbCkge1xcbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgICAgfVxcbiAgICB9O1xcblxcbiAgICBAaWYoJGVsZW1lbnQyKSB7XFxuICAgICAgICAjeyRlbGVtZW50Mn0ge1xcbiAgICAgICAgICAgICN7JHByb3BlcnR5fTogJHZhbHVlO1xcbiAgICAgICAgfVxcbiAgICB9XFxufVxcblxcbkBtaXhpbiBwb3NpdGlvbigkcG9zaXRpb24sICRUT3JCOiBudWxsLCAkdmFsdWUxOiBudWxsLCAkTE9yUjogbnVsbCwgJHZhbHVlMjogbnVsbCkge1xcbiAgICBwb3NpdGlvbjogJHBvc2l0aW9uO1xcbiAgICBAaWYgKCRUT3JCID09IFxcXCJUXFxcIikge1xcbiAgICAgICAgdG9wOiAkdmFsdWUxO1xcbiAgICB9IEBlbHNlIGlmICgkVE9yQiA9PSBcXFwiQlxcXCIpIHtcXG4gICAgICAgIGJvdHRvbTogJHZhbHVlMTtcXG4gICAgfVxcblxcbiAgICBAaWYoJExPclIgPT0gXFxcIkxcXFwiKSB7XFxuICAgICAgICBsZWZ0OiAkdmFsdWUyXFxuICAgIH0gQGVsc2UgaWYgKCRMT3JSID09IFxcXCJSXFxcIikge1xcbiAgICAgICAgcmlnaHQ6ICR2YWx1ZTI7XFxuICAgIH1cXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiaW1wb3J0IHsgY2Fyb3VzZWxTdG9yZSB9IGZyb20gXCIuL2ltYWdlc1wiO1xuaW1wb3J0IHsgbmV4dEltYWdlIH0gZnJvbSBcIi4vdHJhbnNpdGlvbnNcIjtcblxuY29uc3QgZGlzcGxheUltYWdlID0gZnVuY3Rpb24gZGlzcGxheUltYWdlKFxuICBjYXJvdXNlbDogRWxlbWVudCxcbiAgaW5uZXJCb3JkZXI6IEhUTUxEaXZFbGVtZW50XG4pIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjYXJvdXNlbFN0b3JlLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICBjb25zdCBpbWFnZSA9IGNhcm91c2VsU3RvcmVbaV0ucmV0dXJuSW1hZ2VzQXJyYXkoKVswXTtcbiAgICAgIGNvbnN0IGNsb25lID0gaW1hZ2UuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgaWYgKGNsb25lIGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCkge1xuICAgICAgICBpbm5lckJvcmRlci5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICBzdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAuZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBhbmltYXRpb24tbmFtZTogZmFkZSR7Y2Fyb3VzZWxTdG9yZVtpXS50aW1lcn07XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyAxMDAwfXM7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAke2Nhcm91c2VsU3RvcmVbaV0udGltZXIgLyA1MDAwMDB9cztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBAa2V5ZnJhbWVzIGZhZGUke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9IHtcbiAgICAgICAgICAgICAgICBmcm9tIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjQ7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICB0byB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgaW5uZXJCb3JkZXIuY2xhc3NMaXN0LmFkZChcbiAgICAgICAgICBgZnJvc3R3YWxrZXJhbmltYXRpb24ke2Nhcm91c2VsU3RvcmVbaV0udGltZXJ9YFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY3JlYXRlQXJyb3dzID0gKGFycm93c0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQpID0+IHtcbiAgY29uc3QgYXJyb3cxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3cxLmNsYXNzTGlzdC5hZGQoXCJhcnJvdzFcIiwgXCJhcnJvd3NcIik7XG4gIGNvbnN0IGkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gIGkxLmNsYXNzTGlzdC5hZGQoXCJmYXNcIiwgXCJmYS1hcnJvdy1hbHQtY2lyY2xlLWxlZnRcIik7XG4gIGFycm93MS5hcHBlbmRDaGlsZChpMSk7XG4gIGNvbnN0IGFycm93MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGFycm93Mi5jbGFzc0xpc3QuYWRkKFwiYXJyb3cyXCIsIFwiYXJyb3dzXCIpO1xuICBjb25zdCBpMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICBpMi5jbGFzc0xpc3QuYWRkKFwiZmFzXCIsIFwiZmEtYXJyb3ctYWx0LWNpcmNsZS1yaWdodFwiKTtcbiAgYXJyb3cyLmFwcGVuZENoaWxkKGkyKTtcbiAgYXJyb3dzQ29udGFpbmVyLmFwcGVuZENoaWxkKGFycm93MSk7XG4gIGFycm93c0NvbnRhaW5lci5hcHBlbmRDaGlsZChhcnJvdzIpO1xufTtcblxuY29uc3QgZGlzcGxheUNvbnRyb2xzID0gZnVuY3Rpb24gZGlzcGxheUFycm93c0FuZENpcmNsZXMoXG4gIG91dGVyQm9yZGVyOiBIVE1MRGl2RWxlbWVudFxuKSB7XG4gIGNvbnN0IGNvbnRyb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29udHJvbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNvbnRyb2xzQ29udGFpbmVyXCIpO1xuICBjb25zdCBjaXJjbGVzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY2lyY2xlc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2lyY2xlc0NvbnRhaW5lclwiKTtcbiAgY29uc3QgYXJyb3dzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgYXJyb3dzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJhcnJvd3NDb250YWluZXJcIik7XG4gIGNyZWF0ZUFycm93cyhhcnJvd3NDb250YWluZXIpO1xuICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjaXJjbGVzQ29udGFpbmVyKTtcbiAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYXJyb3dzQ29udGFpbmVyKTtcbiAgb3V0ZXJCb3JkZXIuYXBwZW5kQ2hpbGQoY29udHJvbHNDb250YWluZXIpO1xufTtcblxuY29uc3QgZGlzcGxheUNhcm91c2VsID0gZnVuY3Rpb24gY3JlYXRlQW5kRGlzcGxheUNhcm91c2VsKGNhcm91c2VsOiBFbGVtZW50KSB7XG4gIGNvbnN0IG91dGVyQm9yZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5uZXJCb3JkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBvdXRlckJvcmRlci5jbGFzc0xpc3QuYWRkKFwib3V0ZXJCb3JkZXJcIik7XG4gIGlubmVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lckJvcmRlclwiKTtcbiAgZGlzcGxheUltYWdlKGNhcm91c2VsLCBpbm5lckJvcmRlcik7XG4gIG91dGVyQm9yZGVyLmFwcGVuZENoaWxkKGlubmVyQm9yZGVyKTtcbiAgZGlzcGxheUNvbnRyb2xzKG91dGVyQm9yZGVyKTtcbiAgY2Fyb3VzZWwuYXBwZW5kQ2hpbGQob3V0ZXJCb3JkZXIpO1xufTtcblxuY29uc3QgZmluZENhcm91c2VscyA9IGZ1bmN0aW9uIGZpbmRBbmRTaG93Q2Fyb3VzZWxPblBhZ2VMb2FkKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGRpc3BsYXlDYXJvdXNlbChjYXJvdXNlbCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZmluZENhcm91c2VscztcbiIsImNvbnN0IGNhcm91c2VsU3RvcmU6IENhcm91c2VsW10gPSBbXTtcblxuY29uc3Qgc3RvcmVJbWdPYmogPSBmdW5jdGlvbiBzdG9yZUltYWdlc09iamVjdHMob2JqOiBDYXJvdXNlbCkge1xuICBjYXJvdXNlbFN0b3JlLnB1c2gob2JqKTtcbn07XG5cbmNsYXNzIENhcm91c2VsIHtcbiAgcHJpdmF0ZSBpbWFnZXNBcnI6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xuXG4gIHJlYWRvbmx5IGlkO1xuXG4gIHJlYWRvbmx5IHRpbWVyO1xuXG4gIHByaXZhdGUgY3VycmVudCA9IDA7XG5cbiAgY29uc3RydWN0b3IoaWQ6IHN0cmluZywgdGltZXIgPSA1MDAwKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMudGltZXIgPSB0aW1lcjtcbiAgICBzdG9yZUltZ09iaih0aGlzKTtcbiAgfVxuXG4gIGFkZEltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgY29uc3QgUGljdHVyZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICAgIFBpY3R1cmUuc3JjID0gcGljO1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnB1c2goUGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUltYWdlKGltYWdlOiB1bmtub3duLCAuLi5vdGhlckltYWdlczogdW5rbm93bltdKSB7XG4gICAgaWYgKHR5cGVvZiBpbWFnZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBpZiAodGhpcy5pbWFnZXNBcnJbaV0uc3JjID09PSBpbWFnZSkge1xuICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHBpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5pbWFnZXNBcnIubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IHBpYykge1xuICAgICAgICAgICAgICB0aGlzLmltYWdlc0Fyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm5JbWFnZXNBcnJheSgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaW1hZ2VzQXJyXTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmltYWdlc0Fyci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzQXJyW3RoaXMuY3VycmVudF07XG4gIH1cbn1cblxuZXhwb3J0IHsgY2Fyb3VzZWxTdG9yZSwgQ2Fyb3VzZWwgfTtcbiIsImltcG9ydCBcIi4uL3N0eWxlcy9tYWluLnNjc3NcIjtcbmltcG9ydCBcIkBmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlL2pzL2FsbFwiO1xuaW1wb3J0IGltYWdlMSBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlMS5qcGVnXCI7XG5pbXBvcnQgaW1hZ2UyIGZyb20gXCIuLi9hc3NldHMvaW1hZ2UyLmpwZWdcIjtcbmltcG9ydCBpbWFnZTMgZnJvbSBcIi4uL2Fzc2V0cy9pbWFnZTMuanBlZ1wiO1xuaW1wb3J0IGltYWdlNCBmcm9tIFwiLi4vYXNzZXRzL2ltYWdlNC5qcGVnXCI7XG5pbXBvcnQgaW1hZ2U1IGZyb20gXCIuLi9hc3NldHMvaW1hZ2U1LmpwZWdcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcIi4vaW1hZ2VzXCI7XG5pbXBvcnQgZmluZENhcm91c2VscyBmcm9tIFwiLi9jYXJvdXNlbERpc3BsYXlcIjtcbmltcG9ydCB7IG5leHQgfSBmcm9tIFwiLi90cmFuc2l0aW9uc1wiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZmluZENhcm91c2Vscyk7XG5jb25zdCBjYXJvdXNlbDEgPSBuZXcgQ2Fyb3VzZWwoXCJjYXJvdXNlbDFcIiwgNTAwMCk7XG5jYXJvdXNlbDEuYWRkSW1hZ2UoaW1hZ2UxLCBpbWFnZTIsIGltYWdlMyk7XG5jb25zdCBjYXJvdXNlbDIgPSBuZXcgQ2Fyb3VzZWwoXCJjYXJvdXNlbDJcIiwgNzAwMCk7XG5jYXJvdXNlbDIuYWRkSW1hZ2UoaW1hZ2U0LCBpbWFnZTUpO1xubmV4dCgpO1xuIiwiaW1wb3J0IHsgY2Fyb3VzZWxTdG9yZSB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5sZXQgbmV4dEludGVydmFsSWQ6IE5vZGVKUy5UaW1lcjtcblxuY29uc3QgY2hhbmdlSW1hZ2UgPSBmdW5jdGlvbiBjaGFuZ2VJbWFnZUF0SW50ZXJ2YWwoXG4gIGNhcm91c2VsOiBFbGVtZW50LFxuICBudW06IG51bWJlclxuKSB7XG4gIGNvbnN0IGltYWdlID0gY2Fyb3VzZWwucXVlcnlTZWxlY3RvcihcImltZ1wiKTtcbiAgaWYgKGltYWdlKSB7XG4gICAgY29uc3QgbmV4dEltYWdlRWxlbWVudCA9IGNhcm91c2VsU3RvcmVbbnVtXS5uZXh0SW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBuZXh0SW1hZ2VFbGVtZW50LnNyYztcbiAgfVxufTtcblxuY29uc3QgbmV4dCA9IGZ1bmN0aW9uIHNldFRpbWVyRm9yTmV4dEltYWdlKCkge1xuICBjb25zdCBjYXJvdXNlbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZyb3N0d2Fsa2VyY2Fyb3VzZWxcIik7XG4gIGNhcm91c2Vscy5mb3JFYWNoKChjYXJvdXNlbCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsLmlkKSB7XG4gICAgICAgIG5leHRJbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgIGNoYW5nZUltYWdlKGNhcm91c2VsLCBpKTtcbiAgICAgICAgfSwgY2Fyb3VzZWxTdG9yZVtpXS50aW1lcik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG5leHRJbWFnZSA9IGZ1bmN0aW9uIG5leHRJbWFnZU9uQXJyb3dSaWdodENsaWNrKGU6IEV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGUuY3VycmVudFRhcmdldCk7XG59O1xuXG5leHBvcnQgeyBuZXh0LCBuZXh0SW1hZ2UgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua2ltYWdlX2Nhcm91c2VsX2Zyb3N0d2Fsa2VyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua2ltYWdlX2Nhcm91c2VsX2Zyb3N0d2Fsa2VyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2ZvcnRhd2Vzb21lX2ZvbnRhd2Vzb21lLWZyZWVfanNfYWxsX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudC0yZGUxYTNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvc2NyaXB0cy9pbmRleC50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9