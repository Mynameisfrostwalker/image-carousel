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
/*!**********************************!*\
  !*** ./src/scripts/circlenav.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
var images_1 = __webpack_require__(/*! ./images */ "./src/scripts/images.ts");
var createCircles = function createCirclesDisplay(id, num) {
    if (num === void 0) { num = 0; }
    var carousel = document.querySelector("#".concat(id));
    var circlesContainer = carousel === null || carousel === void 0 ? void 0 : carousel.querySelector(".circlesContainer");
    if (circlesContainer) {
        circlesContainer.replaceChildren();
        for (var i = 0; i < images_1.carouselStore.length; i += 1) {
            if (images_1.carouselStore[i].id === (carousel === null || carousel === void 0 ? void 0 : carousel.id)) {
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
    }
};
exports["default"] = createCircles;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLEVBQUU7d0JBQ2IsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ25DO29CQUNELGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDekM7YUFDRjtTQUNGO0tBQ0Y7QUFDSCxDQUFDLENBQUM7QUFFRixxQkFBZSxhQUFhLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL2ltYWdlcy50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL3B1YnN1Yi50cyIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci8uL3NyYy9zY3JpcHRzL2NpcmNsZW5hdi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwdWJsaXNoIH0gZnJvbSBcIi4vcHVic3ViXCI7XG5cbmNvbnN0IGNhcm91c2VsU3RvcmU6IENhcm91c2VsW10gPSBbXTtcblxuY29uc3Qgc3RvcmVJbWdPYmogPSBmdW5jdGlvbiBzdG9yZUltYWdlc09iamVjdHMob2JqOiBDYXJvdXNlbCkge1xuICBjYXJvdXNlbFN0b3JlLnB1c2gob2JqKTtcbn07XG5cbmNsYXNzIENhcm91c2VsIHtcbiAgcHJpdmF0ZSBpbWFnZXNBcnI6IEhUTUxJbWFnZUVsZW1lbnRbXSA9IFtdO1xuXG4gIHJlYWRvbmx5IGlkO1xuXG4gIHJlYWRvbmx5IHRpbWVyO1xuXG4gIGN1cnJlbnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKGlkOiBzdHJpbmcsIHRpbWVyID0gNTAwMCkge1xuICAgIHRoaXMuaWQgPSBpZDtcbiAgICB0aGlzLnRpbWVyID0gdGltZXI7XG4gICAgc3RvcmVJbWdPYmoodGhpcyk7XG4gIH1cblxuICBhZGRJbWFnZShpbWFnZTogdW5rbm93biwgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXSkge1xuICAgIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGNvbnN0IFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgIFBpY3R1cmUuc3JjID0gaW1hZ2U7XG4gICAgICB0aGlzLmltYWdlc0Fyci5wdXNoKFBpY3R1cmUpO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgICBpZiAodHlwZW9mIHBpYyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNvbnN0IFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICBQaWN0dXJlLnNyYyA9IHBpYztcbiAgICAgICAgICB0aGlzLmltYWdlc0Fyci5wdXNoKFBpY3R1cmUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcHVibGlzaChcImltYWdlc0FyckNoYW5nZVwiLCB0aGlzLmlkLCB0aGlzLmN1cnJlbnQpO1xuICB9XG5cbiAgZGVsZXRlSW1hZ2UoaW1hZ2U6IHVua25vd24sIC4uLm90aGVySW1hZ2VzOiB1bmtub3duW10pIHtcbiAgICBpZiAodHlwZW9mIGltYWdlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlc0FycltpXS5zcmMgPT09IGltYWdlKSB7XG4gICAgICAgICAgdGhpcy5pbWFnZXNBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgICAgb3RoZXJJbWFnZXMuZm9yRWFjaCgocGljKSA9PiB7XG4gICAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmltYWdlc0Fyci5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaW1hZ2VzQXJyW2ldLnNyYyA9PT0gcGljKSB7XG4gICAgICAgICAgICAgIHRoaXMuaW1hZ2VzQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgICBwdWJsaXNoKFwiaW1hZ2VzQXJyQ2hhbmdlXCIsIHRoaXMuaWQsIHRoaXMuY3VycmVudCk7XG4gIH1cblxuICByZXR1cm5JbWFnZXNBcnJheSgpIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuaW1hZ2VzQXJyXTtcbiAgfVxuXG4gIG5leHRJbWFnZSgpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50ID09PSB0aGlzLmltYWdlc0Fyci5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmN1cnJlbnQgPSAtMTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50ICs9IDE7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzQXJyW3RoaXMuY3VycmVudF07XG4gIH1cblxuICBwcmV2aW91c0ltYWdlKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgIHRoaXMuY3VycmVudCA9IHRoaXMuaW1hZ2VzQXJyLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50IC09IDE7XG4gICAgcmV0dXJuIHRoaXMuaW1hZ2VzQXJyW3RoaXMuY3VycmVudF07XG4gIH1cblxuICBqdW1wSW1hZ2UoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5jdXJyZW50ID0gY3VycmVudDtcbiAgICByZXR1cm4gdGhpcy5pbWFnZXNBcnJbdGhpcy5jdXJyZW50XTtcbiAgfVxufVxuXG5leHBvcnQgeyBjYXJvdXNlbFN0b3JlLCBDYXJvdXNlbCB9O1xuIiwidHlwZSBBbnlmdW5jdGlvbnMgPSAoLi4uYXJnczogYW55W10pID0+IHVua25vd247XG5cbmludGVyZmFjZSBFdmVudHMge1xuICBbaW5kZXg6IHN0cmluZ106IEFueWZ1bmN0aW9uc1tdO1xufVxuXG5jb25zdCBldmVudHM6IEV2ZW50cyA9IHtcbiAgLy8ga2V5OiBldmVudG5hbWUsIHZhbHVlOiBbZnVuY3NdXG59O1xuXG5jb25zdCBzdWJzY3JpYmUgPSAoZXZlbnROYW1lOiBzdHJpbmcsIGZ1bmM6IEFueWZ1bmN0aW9ucykgPT4ge1xuICBpZiAoZXZlbnRzW2V2ZW50TmFtZV0pIHtcbiAgICBldmVudHNbZXZlbnROYW1lXS5wdXNoKGZ1bmMpO1xuICB9IGVsc2Uge1xuICAgIGV2ZW50c1tldmVudE5hbWVdID0gW2Z1bmNdO1xuICB9XG59O1xuXG5jb25zdCB1bnN1YnNjcmliZSA9IChldmVudE5hbWU6IHN0cmluZywgZnVuYzogQW55ZnVuY3Rpb25zKSA9PiB7XG4gIGlmIChldmVudHNbZXZlbnROYW1lXSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGlmIChldmVudHNbZXZlbnROYW1lXVtpXS50b1N0cmluZygpID09PSBmdW5jLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKGksIDEpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IHB1Ymxpc2ggPSAoZXZlbnROYW1lOiBzdHJpbmcsIC4uLmFyZ3M6IHVua25vd25bXSk6IHZvaWQgPT4ge1xuICBjb25zdCBmdW5jcyA9IGV2ZW50c1tldmVudE5hbWVdO1xuICBpZiAoQXJyYXkuaXNBcnJheShmdW5jcykpIHtcbiAgICBmdW5jcy5mb3JFYWNoKChmdW5jKSA9PiB7XG4gICAgICBmdW5jKC4uLmFyZ3MpO1xuICAgIH0pO1xuICB9XG59O1xuXG5leHBvcnQgeyBwdWJsaXNoLCBzdWJzY3JpYmUsIHVuc3Vic2NyaWJlIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgY2Fyb3VzZWxTdG9yZSB9IGZyb20gXCIuL2ltYWdlc1wiO1xuXG5jb25zdCBjcmVhdGVDaXJjbGVzID0gZnVuY3Rpb24gY3JlYXRlQ2lyY2xlc0Rpc3BsYXkoaWQ6IHN0cmluZywgbnVtID0gMCkge1xuICBjb25zdCBjYXJvdXNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICBjb25zdCBjaXJjbGVzQ29udGFpbmVyID0gY2Fyb3VzZWw/LnF1ZXJ5U2VsZWN0b3IoXCIuY2lyY2xlc0NvbnRhaW5lclwiKTtcbiAgaWYgKGNpcmNsZXNDb250YWluZXIpIHtcbiAgICBjaXJjbGVzQ29udGFpbmVyLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2Fyb3VzZWxTdG9yZS5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGNhcm91c2VsU3RvcmVbaV0uaWQgPT09IGNhcm91c2VsPy5pZCkge1xuICAgICAgICBjb25zdCBpbWdBcnJMZW5ndGggPSBjYXJvdXNlbFN0b3JlW2ldLnJldHVybkltYWdlc0FycmF5KCkubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGltZ0Fyckxlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgY29uc3QgY2lyY2xlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBjaXJjbGVEaXYuY2xhc3NMaXN0LmFkZChcImNpcmNsZXNcIik7XG4gICAgICAgICAgY2lyY2xlRGl2LmlkID0gYGZyb3N0d2Fsa2VyY2lyY2xlLSR7an1gO1xuICAgICAgICAgIGlmIChqID09PSBudW0pIHtcbiAgICAgICAgICAgIGNpcmNsZURpdi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjaXJjbGVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNpcmNsZURpdik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNpcmNsZXM7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=