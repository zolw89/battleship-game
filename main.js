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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameboard */ \"./src/modules/gameboard.js\");\n\n\n\nconsole.log((0,_modules_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(4))\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Gameboard = () => {\r\n\r\n    //CREATE BOARD (NUM X NUM)\r\n\r\n    let board = []\r\n\r\n    const createBoard = (num) => {\r\n        for(let i = 0; i < num; i++) {\r\n            board.push([])\r\n            for(let j = 0; j < num; j++) {\r\n                board[i].push('')\r\n            }\r\n        }\r\n        return board\r\n    }\r\n\r\n\r\n    const placeShip = (ship, row, col) => {\r\n        if(col + ship.length > 10) return alert('cant place there')\r\n        for(let i = 0; i < ship.length; i++) {\r\n            board[row][col + i] = ship[i]\r\n        }\r\n        console.log(board)\r\n        \r\n    }\r\n\r\n\r\n    return {\r\n        createBoard,\r\n        placeShip,\r\n        board\r\n    }\r\n    \r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship-game/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length) => {\r\n\r\n    const id = length;\r\n    const shipLength = length;\r\n\r\n    let shipArr = [];\r\n\r\n    const shipPositions = (shipLength) => {     \r\n        for(let i = 1; i <= shipLength; i++) {\r\n            shipArr.push(`${i}`)\r\n        }\r\n    }\r\n\r\n    shipPositions(shipLength)\r\n    \r\n    const hit = (num) => {\r\n        for(let i = 0; i < shipLength; i++) {\r\n            if(shipArr[i] == num) {\r\n                shipArr[i] = 'hit'\r\n            }\r\n        }\r\n        return shipArr\r\n    };\r\n\r\n    const isSunk = () => shipArr.every(pos => pos === 'hit');\r\n\r\n    return {\r\n        id,\r\n        shipLength,\r\n        shipArr,\r\n        hit,\r\n        isSunk\r\n    }\r\n}\r\n\r\n// let destroyer = ship(5);\r\n// destroyer.hit(2)\r\n// destroyer.hit(5)\r\n// destroyer.hit(1)\r\n// destroyer.hit(3)\r\n// destroyer.hit(4)\r\n// console.log(destroyer.isSunk())\r\n\r\n\r\n// console.log(destroyer)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship-game/./src/modules/ship.js?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;