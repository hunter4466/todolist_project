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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LinkedList)\n/* harmony export */ });\nfunction NewNode(value, nextNode = null) {\n  this.value = value;\n  this.nextNode = nextNode;\n}\n\nclass LinkedList {\n  add(number) {\n    if (this.head) {\n      const newItem = new NewNode(number, this.head);\n      this.head = newItem;\n    } else {\n      const newItem = new NewNode(number);\n      this.head = newItem;\n    }\n  }\n\n  pop() {\n    if (this.head) {\n      if (this.head) {\n        const itemValue = this.head;\n        this.head = this.head.nextNode;\n        return itemValue.value;\n      }\n      const itemValue = this.head;\n      this.head = null;\n      return itemValue.value;\n    }\n    return false;\n  }\n\n  replaceIndex(one, two) {\n    const first = one - 1;\n    const second = two - 1;\n    if (!this.head) {\n      return [];\n    }\n    const allArray = [];\n    let currentNode = this.head;\n    allArray.push(currentNode.value);\n    while (currentNode.nextNode) {\n      currentNode = currentNode.nextNode;\n      allArray.push(currentNode.value);\n    }\n    const newArray = [];\n    for (let i = 0; i < allArray.length; i += 1) {\n      if (i === first) {\n        newArray.push(allArray[second]);\n      } else if (i === second) {\n        newArray.push(allArray[first]);\n      } else {\n        newArray.push(allArray[i]);\n      }\n    }\n\n    let newLinkedList = new NewNode(newArray[newArray.length - 1]);\n    newLinkedList.value.index = 5;\n    for (let i = 1; i < newArray.length; i += 1) {\n      const newItem = new NewNode(newArray[newArray.length - (i + 1)], newLinkedList);\n      newItem.value.index = newArray.length - (i);\n      newLinkedList = newItem;\n    }\n    this.head = newLinkedList;\n    return true;\n  }\n\n  indexify() {\n    if (!this.head) {\n      return false;\n    }\n    let currentNode = this.head;\n    let count = 1;\n    currentNode.value.index = count;\n    while (currentNode.nextNode) {\n      count += 1;\n      currentNode = currentNode.nextNode;\n      currentNode.value.index = count;\n    }\n    return true;\n  }\n\n  returnArray() {\n    if (!this.head) {\n      return [];\n    }\n    const allArray = [];\n    let currentNode = this.head;\n    allArray.push(currentNode.value);\n    while (currentNode.nextNode) {\n      currentNode = currentNode.nextNode;\n      allArray.push(currentNode.value);\n    }\n    return allArray;\n  }\n\n  returnFromIndex() {\n    if (!this.head) {\n      return [];\n    }\n    const allArray = [];\n    let currentNode = this.head;\n    allArray.push(currentNode.value);\n    while (currentNode.nextNode) {\n      currentNode = currentNode.nextNode;\n      allArray.push(currentNode.value);\n    }\n    const newArray = [];\n    let stage = 0;\n    for (let i = 0; i < allArray.length; i += 1) {\n      while (allArray[i].index === stage + 1) {\n        newArray.push(allArray[stage]);\n        stage += 1;\n      }\n    }\n    return newArray;\n  }\n\n  changeState(value, bool) {\n    if (this.head) {\n      let element = this.head;\n      while (element.nextNode) {\n        if (element.value.index === value) {\n          element.value.completed = bool;\n        }\n        element = element.nextNode;\n      }\n      return true;\n    }\n    return false;\n  }\n\n  /*                                                ON DEVELOPMENT\n  removeState(){\n    let tempList = this.head\n    let elemArray = []\n    while(tempList.value){\n      if(tempList.value.completed === false){\n        let tempNode = new NewNode(tempList.value)\n        elemArray.push(tempNode)\n        tempList = tempList.nextNode\n      }\n      else{\n        tempList = tempList.nextNode\n      }\n    }\n    let newLinkedList = new NewNode(elemArray[elemArray.length-1])\n    newLinkedList.value.index = 5\n    for(let i = 1;i<elemArray.length;i+=1){\n        const newItem = new NewNode(elemArray[elemArray.length-(i+1)], newLinkedList);\n     newItem.value.index = elemArray.length-(i)\n        newLinkedList = newItem\n    }\n    console.log(newLinkedList)\n    this.head = newLinkedList\n\n  }\n*/length() {\n    if (this.head) {\n      let activeNode = this.head;\n      let count = 1;\n      while (activeNode.nextNode) {\n        count += 1;\n        activeNode = activeNode.nextNode;\n      }\n      return count;\n    }\n    return 0;\n  }\n\n  remove(index = null) {\n    if (this.head) {\n      let valArray = [];\n      let activeValue = this.head;\n      valArray.push(activeValue.value);\n      while (activeValue.nextNode) {\n        activeValue = activeValue.nextNode;\n        valArray.push(activeValue.value);\n      }\n      if (index > valArray.length) {\n        return false;\n      }\n      const newArray = [];\n      for (let i = 0; i < valArray.length; i += 1) {\n        if (i !== index) {\n          newArray.push(valArray[i]);\n        }\n      }\n      const returnValue = valArray[index];\n      valArray = newArray.reverse();\n      if (newArray.length !== 0) {\n        let onHold = new NewNode(valArray[0]);\n        for (let i = 1; i < valArray.length; i += 1) {\n          onHold = new NewNode(valArray[i], onHold);\n        }\n        this.head = onHold;\n      } else {\n        this.head = null;\n      }\n      return returnValue;\n    }\n    return false;\n  }\n}\n\n//# sourceURL=webpack://todolist_project/./src/Assets/Javascript/linkedList.js?");

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