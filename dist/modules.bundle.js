/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Assets/Javascript/modules.js":
/*!******************************************!*\
  !*** ./src/Assets/Javascript/modules.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ htmlBuilder)\n/* harmony export */ });\nfunction htmlBuilder(obj) {\n  for (let i = 0; i < obj.length; i += 1) {\n    if (obj[i].length === 2) {\n      obj[i][0].appendChild(obj[i][1]);\n    } else if (obj[i].length === 3) {\n      const [a, b, c] = obj[i];\n      a.appendChild(b);\n      b.className = c;\n    } else if (obj[i].length === 4) {\n      const [a, b, c, d] = obj[i];\n      if (c == null) {\n        a.appendChild(b);\n        b.innerHTML = d;\n      } else {\n        a.appendChild(b);\n        b.className = c;\n        b.innerHTML = d;\n      }\n    } else if (obj[i].length === 5) {\n      const [a, b, c, d, e] = obj[i];\n      if (c == null && d == null) {\n        a.appendChild(b);\n        b.id = e;\n      } else if (c == null) {\n        a.appendChild(b);\n        b.innerHTML = d;\n        b.id = e;\n      } else if (d == null) {\n        obj[i][0].appendChild(b);\n        b.className = c;\n        b.id = e;\n      } else {\n        obj[i][0].appendChild(b);\n        b.innerHTML = d;\n        b.className = c;\n        b.id = e;\n      }\n    }\n  }\n}\n\n//# sourceURL=webpack://todolist_project/./src/Assets/Javascript/modules.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/Assets/Javascript/modules.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;