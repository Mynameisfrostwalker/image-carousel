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
exports.returnImagesArray = exports.deleteImage = exports.addImage = void 0;
var images = [];
var addImage = function addImageToArray(image) {
    var otherImages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherImages[_i - 1] = arguments[_i];
    }
    if (typeof image === "string") {
        var Picture = new Image();
        Picture.src = image;
        images.push(Picture);
    }
    if (Array.isArray(otherImages)) {
        otherImages.forEach(function (pic) {
            if (typeof pic === "string") {
                var Picture = new Image();
                Picture.src = pic;
                images.push(Picture);
            }
        });
    }
};
exports.addImage = addImage;
var deleteImage = function deleteImagefromArray(image) {
    var otherImages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        otherImages[_i - 1] = arguments[_i];
    }
    if (typeof image === "string") {
        for (var i = 0; i < images.length; i += 1) {
            if (images[i].src === image) {
                images.splice(i, 1);
            }
        }
    }
    if (Array.isArray(otherImages)) {
        otherImages.forEach(function (pic) {
            if (typeof pic === "string") {
                for (var i = 0; i < images.length; i += 1) {
                    if (images[i].src === pic) {
                        images.splice(i, 1);
                    }
                }
            }
        });
    }
};
exports.deleteImage = deleteImage;
var returnImagesArray = function returnImagesArray() {
    return __spreadArray([], images, true);
};
exports.returnImagesArray = returnImagesArray;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/images.ts"](0, __webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VzLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTSxNQUFNLEdBQXVCLEVBQUUsQ0FBQztBQUV0QyxJQUFNLFFBQVEsR0FBRyxTQUFTLGVBQWUsQ0FDdkMsS0FBYztJQUNkLHFCQUF5QjtTQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7UUFBekIsb0NBQXlCOztJQUV6QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixJQUFNLE9BQU8sR0FBRyxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDdEI7SUFDRCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUU7UUFDOUIsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7WUFDdEIsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQzNCLElBQU0sT0FBTyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7Z0JBQzVCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RCO1FBQ0gsQ0FBQyxDQUFDLENBQUM7S0FDSjtBQUNILENBQUMsQ0FBQztBQThCTyw0QkFBUTtBQTVCakIsSUFBTSxXQUFXLEdBQUcsU0FBUyxvQkFBb0IsQ0FDL0MsS0FBYztJQUNkLHFCQUF5QjtTQUF6QixVQUF5QixFQUF6QixxQkFBeUIsRUFBekIsSUFBeUI7UUFBekIsb0NBQXlCOztJQUV6QixJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3pDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLEVBQUU7Z0JBQzNCLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ3JCO1NBQ0Y7S0FDRjtJQUNELElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUM5QixXQUFXLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUN0QixJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDekMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRTt3QkFDekIsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQ3JCO2lCQUNGO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztLQUNKO0FBQ0gsQ0FBQyxDQUFDO0FBTWlCLGtDQUFXO0FBSjlCLElBQU0saUJBQWlCLEdBQUcsU0FBUyxpQkFBaUI7SUFDbEQseUJBQVcsTUFBTSxRQUFFO0FBQ3JCLENBQUMsQ0FBQztBQUU4Qiw4Q0FBaUI7Ozs7Ozs7O1VFbERqRDtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvLi9zcmMvc2NyaXB0cy9pbWFnZXMudHMiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9pbWFnZS1jYXJvdXNlbC1mcm9zdHdhbGtlci93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vaW1hZ2UtY2Fyb3VzZWwtZnJvc3R3YWxrZXIvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGltYWdlczogSFRNTEltYWdlRWxlbWVudFtdID0gW107XG5cbmNvbnN0IGFkZEltYWdlID0gZnVuY3Rpb24gYWRkSW1hZ2VUb0FycmF5KFxuICBpbWFnZTogdW5rbm93bixcbiAgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXVxuKSB7XG4gIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICBjb25zdCBQaWN0dXJlID0gbmV3IEltYWdlKCk7XG4gICAgUGljdHVyZS5zcmMgPSBpbWFnZTtcbiAgICBpbWFnZXMucHVzaChQaWN0dXJlKTtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheShvdGhlckltYWdlcykpIHtcbiAgICBvdGhlckltYWdlcy5mb3JFYWNoKChwaWMpID0+IHtcbiAgICAgIGlmICh0eXBlb2YgcGljID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGNvbnN0IFBpY3R1cmUgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgUGljdHVyZS5zcmMgPSBwaWM7XG4gICAgICAgIGltYWdlcy5wdXNoKFBpY3R1cmUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBkZWxldGVJbWFnZSA9IGZ1bmN0aW9uIGRlbGV0ZUltYWdlZnJvbUFycmF5KFxuICBpbWFnZTogdW5rbm93bixcbiAgLi4ub3RoZXJJbWFnZXM6IHVua25vd25bXVxuKSB7XG4gIGlmICh0eXBlb2YgaW1hZ2UgPT09IFwic3RyaW5nXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaWYgKGltYWdlc1tpXS5zcmMgPT09IGltYWdlKSB7XG4gICAgICAgIGltYWdlcy5zcGxpY2UoaSwgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KG90aGVySW1hZ2VzKSkge1xuICAgIG90aGVySW1hZ2VzLmZvckVhY2goKHBpYykgPT4ge1xuICAgICAgaWYgKHR5cGVvZiBwaWMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBpZiAoaW1hZ2VzW2ldLnNyYyA9PT0gcGljKSB7XG4gICAgICAgICAgICBpbWFnZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCByZXR1cm5JbWFnZXNBcnJheSA9IGZ1bmN0aW9uIHJldHVybkltYWdlc0FycmF5KCkge1xuICByZXR1cm4gWy4uLmltYWdlc107XG59O1xuXG5leHBvcnQgeyBhZGRJbWFnZSwgZGVsZXRlSW1hZ2UsIHJldHVybkltYWdlc0FycmF5IH07XG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuX193ZWJwYWNrX21vZHVsZXNfX1tcIi4vc3JjL3NjcmlwdHMvaW1hZ2VzLnRzXCJdKDAsIF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9