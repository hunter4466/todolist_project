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

/***/ "./src/Assets/Javascript/linkedList.js":
/*!*********************************************!*\
  !*** ./src/Assets/Javascript/linkedList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\nfunction NewNode(value, nextNode = null) {\r\n  this.value = value;\r\n  this.nextNode = nextNode;\r\n}\r\n\r\nclass LinkedList {\r\n  add(number) {\r\n    if (this.head) {\r\n      const newItem = new NewNode(number, this.head);\r\n      this.head = newItem;\r\n    } else {\r\n      const newItem = new NewNode(number);\r\n      this.head = newItem;\r\n    }\r\n  }\r\n\r\n  pop() {\r\n    if (this.head) {\r\n      if (this.head) {\r\n        const itemValue = this.head;\r\n        this.head = this.head.nextNode;\r\n        return itemValue.value;\r\n      }\r\n      const itemValue = this.head;\r\n      this.head = null;\r\n      return itemValue.value;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  replaceIndex(one, two) {\r\n    const first = one - 1;\r\n    const second = two - 1;\r\n    if (!this.head) {\r\n      return [];\r\n    }\r\n    const allArray = [];\r\n    let currentNode = this.head;\r\n    allArray.push(currentNode.value);\r\n    while (currentNode.nextNode) {\r\n      currentNode = currentNode.nextNode;\r\n      allArray.push(currentNode.value);\r\n    }\r\n    const newArray = [];\r\n    for (let i = 0; i < allArray.length; i += 1) {\r\n      if (i === first) {\r\n        newArray.push(allArray[second]);\r\n      } else if (i === second) {\r\n        newArray.push(allArray[first]);\r\n      } else {\r\n        newArray.push(allArray[i]);\r\n      }\r\n    }\r\n\r\n    let newLinkedList = new NewNode(newArray[newArray.length - 1]);\r\n    newLinkedList.value.index = 5;\r\n    for (let i = 1; i < newArray.length; i += 1) {\r\n      const newItem = new NewNode(newArray[newArray.length - (i + 1)], newLinkedList);\r\n      newItem.value.index = newArray.length - (i);\r\n      newLinkedList = newItem;\r\n    }\r\n    this.head = newLinkedList;\r\n    return true;\r\n  }\r\n\r\n  indexify() {\r\n    if (!this.head) {\r\n      return false;\r\n    }\r\n    let currentNode = this.head;\r\n    let count = 1;\r\n    currentNode.value.index = count;\r\n    while (currentNode.nextNode) {\r\n      count += 1;\r\n      currentNode = currentNode.nextNode;\r\n      currentNode.value.index = count;\r\n    }\r\n    return true;\r\n  }\r\n\r\n  returnArray() {\r\n    if (!this.head) {\r\n      return [];\r\n    }\r\n    const allArray = [];\r\n    let currentNode = this.head;\r\n    allArray.push(currentNode.value);\r\n    while (currentNode.nextNode) {\r\n      currentNode = currentNode.nextNode;\r\n      allArray.push(currentNode.value);\r\n    }\r\n    return allArray;\r\n  }\r\n\r\n  returnFromIndex() {\r\n    if (!this.head) {\r\n      return [];\r\n    }\r\n    const allArray = [];\r\n    let currentNode = this.head;\r\n    allArray.push(currentNode.value);\r\n    while (currentNode.nextNode) {\r\n      currentNode = currentNode.nextNode;\r\n      allArray.push(currentNode.value);\r\n    }\r\n    const newArray = [];\r\n    let stage = 0;\r\n    for (let i = 0; i < allArray.length; i += 1) {\r\n      while (allArray[i].index === stage + 1) {\r\n        newArray.push(allArray[stage]);\r\n        stage += 1;\r\n      }\r\n    }\r\n    return newArray;\r\n  }\r\n\r\n  changeState(value, bool) {\r\n    if (this.head) {\r\n      let element = this.head;\r\n      if (element.value.index === value) {\r\n        element.value.completed = bool;\r\n      }\r\n      while (element.nextNode) {\r\n        element = element.nextNode;\r\n        if (element.value.index === value) {\r\n          element.value.completed = bool;\r\n        }\r\n      }\r\n      return true;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  returnSelected() {\r\n    if (this.head) {\r\n      let tempNode = this.head;\r\n      const indexArray = [];\r\n      if (tempNode.value.completed === true) {\r\n        indexArray.push(tempNode.value.index);\r\n      }\r\n      while (tempNode.nextNode) {\r\n        tempNode = tempNode.nextNode;\r\n        if (tempNode.value.completed === true) {\r\n          indexArray.push(tempNode.value.index);\r\n        }\r\n      }\r\n      return indexArray;\r\n    }\r\n    return false;\r\n  }\r\n\r\n  length() {\r\n    if (this.head) {\r\n      let activeNode = this.head;\r\n      let count = 1;\r\n      while (activeNode.nextNode) {\r\n        count += 1;\r\n        activeNode = activeNode.nextNode;\r\n      }\r\n      return count;\r\n    }\r\n    return 0;\r\n  }\r\n\r\n  remove(index = null) {\r\n    if (this.head) {\r\n      let valArray = [];\r\n      let activeValue = this.head;\r\n      valArray.push(activeValue.value);\r\n      while (activeValue.nextNode) {\r\n        activeValue = activeValue.nextNode;\r\n        valArray.push(activeValue.value);\r\n      }\r\n      if (index > valArray.length) {\r\n        return false;\r\n      }\r\n      const newArray = [];\r\n      for (let i = 0; i < valArray.length; i += 1) {\r\n        if (i !== index) {\r\n          newArray.push(valArray[i]);\r\n        }\r\n      }\r\n      const returnValue = valArray[index];\r\n      valArray = newArray.reverse();\r\n      if (newArray.length !== 0) {\r\n        let onHold = new NewNode(valArray[0]);\r\n        for (let i = 1; i < valArray.length; i += 1) {\r\n          onHold = new NewNode(valArray[i], onHold);\r\n        }\r\n        this.head = onHold;\r\n      } else {\r\n        this.head = null;\r\n      }\r\n      return returnValue;\r\n    }\r\n    return false;\r\n  }\r\n}\n\n//# sourceURL=webpack://todolist_project/./src/Assets/Javascript/linkedList.js?");

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
/******/ 	__webpack_modules__["./src/Assets/Javascript/linkedList.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;