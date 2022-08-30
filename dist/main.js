/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ "./src/modules/game.js");\n\n\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\nconst newGameBtn = document.querySelector(".new-game");\nconst newGameScreen = document.querySelector(".restart-screen");\n\nnewGameBtn.addEventListener("click", () => {\n  newGameScreen.classList.add("hide");\n  (0,_modules_game__WEBPACK_IMPORTED_MODULE_0__["default"])();\n});\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?'
        );

        /***/
      },

    /***/ "./src/modules/game.js":
      /*!*****************************!*\
  !*** ./src/modules/game.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gameboard */ "./src/modules/gameboard.js");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ship */ "./src/modules/ship.js");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/player */ "./src/modules/player.js");\n\n\n\n\nconst Game = () => {\n  const playerBoardDiv = document.querySelector(".player-board");\n  const computerBoardDiv = document.querySelector(".computer-board");\n  const fleetDiv = document.querySelector(".fleet");\n  const autoPlaceBtn = document.querySelector(".auto-place");\n  const resetBtn = document.querySelector(".reset");\n  const playerFleetDiv = document.querySelector(".fleet-div");\n  const startGameBtn = document.querySelector(".start-game-btn");\n  const newGameScreen = document.querySelector(".restart-screen");\n  const winnerDiv = document.querySelector(".winner");\n\n  const playerOne = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__["default"])("human");\n  const playerTwo = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__["default"])("computer");\n\n  computerBoardDiv.classList.add(\'hide\')\n  playerFleetDiv.classList.remove(\'hide\')\n\n  //create player\'s and computer\'s boards\n  const createPlayersBoard = (board, num = 10) => {\n    board.innerHTML = \'\'\n    for (let i = 0; i < num; i++) {\n      for (let j = 0; j < num; j++) {\n        const cell = document.createElement("div");\n        cell.classList.add("cell");\n        cell.dataset.row = i;\n        cell.dataset.col = j;\n        board.appendChild(cell);\n      }\n    }\n  };\n  createPlayersBoard(playerBoardDiv);\n  createPlayersBoard(computerBoardDiv);\n\n  let playerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();\n  const computerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();\n\n  const newShipsArr = [\n    {\n      name: "battleship",\n      length: 5,\n    },\n    {\n      name: "carrier",\n      length: 4,\n    },\n    {\n      name: "cruiser",\n      length: 3,\n    },\n    {\n      name: "destroyer",\n      length: 3,\n    },\n    {\n      name: "submarine",\n      length: 2,\n    },\n    {\n      name: "gunboat",\n      length: 2,\n    },\n  ];\n\n  const playerShipArray = [];\n  let computerShipArray = [];\n\n  //create fleet for each player with 6 ships from newShipArr\n\n  const createFleet = (board) => {\n    newShipsArr.forEach((el) => {\n      board.push((0,_modules_ship__WEBPACK_IMPORTED_MODULE_1__["default"])(el.length));\n    });\n  };\n\n  createFleet(playerShipArray);\n  createFleet(computerShipArray);\n\n  //auto place ships on board\n\n  const autoPlaceShip = (arr, pboard) => {\n    arr.forEach((ship) => {\n      ship.direction = ship.randomDirection();\n      let row = Math.floor(Math.random() * 10);\n      let col = Math.floor(Math.random() * 10);\n      if (\n        pboard.checkValidShipCords(ship, row, col) &&\n        pboard.checkSurroundings(ship, row, col)\n      ) {\n        pboard.placeShip(ship, row, col);\n        arr.splice(arr.indexOf(ship), 1);\n      }\n      if (\n        !pboard.checkValidShipCords(ship, row, col) ||\n        !pboard.checkSurroundings(ship, row, col)\n      ) {\n        row = Math.floor(Math.random() * 10);\n        col = Math.floor(Math.random() * 10);\n        autoPlaceShip(arr, pboard);\n      }\n    });\n  };\n\n  autoPlaceShip(playerShipArray, computerBoard);\n\n  const createFleetDiv = () => {\n    for (let i = 0; i < 5; i++) {\n      for (let j = 0; j < 5; j++) {\n        const cell = document.createElement("div");\n        cell.dataset.x = i;\n        cell.dataset.y = j;\n        cell.classList.add("cell");\n        fleetDiv.appendChild(cell);\n      }\n    }\n  };\n  createFleetDiv();\n\n  const renderPlayerBoard = () => {\n    for (let i = 0; i < 10; i++) {\n      for (let j = 0; j < 10; j++) {\n        if (playerBoard.board[i][j] !== "") {\n          let arr = Array.from(playerBoardDiv.querySelectorAll(".cell"));\n          arr.forEach((el) => {\n            if (el.dataset.row == i && el.dataset.col == j) {\n              el.classList.add("ship");\n            }\n          });\n        }\n      }\n    }\n  };\n\n  playerBoard.placeShip(computerShipArray[0], 9, 9);\n  renderPlayerBoard();\n\n  autoPlaceBtn.addEventListener("click", () => {\n    resetBoard();\n    autoPlaceShip(computerShipArray, playerBoard);\n    renderPlayerBoard();\n  });\n\n  const resetBoard = () => {\n    playerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__["default"])();\n    computerShipArray = [];\n    createFleet(computerShipArray);\n    playerBoardDiv.innerHTML = "";\n    createPlayersBoard(playerBoardDiv);\n  };\n\n  resetBtn.addEventListener("click", resetBoard);\n\n  startGameBtn.addEventListener("click", () => {\n    if (playerBoard.placedShips.length !== 6)\n      return alert("place all ships first");\n    playerFleetDiv.classList.add("hide");\n    computerBoardDiv.classList.remove("hide");\n  });\n\n  let nextMoveFlag = true;\n\n  computerBoardDiv.addEventListener("click", (e) => {\n    if (nextMoveFlag === false) return;\n    if (e.target.className !== "cell") return;\n    if (e.target.className === "cell") {\n      let row = e.target.dataset.row;\n      let col = e.target.dataset.col;\n      playerOne.attack(computerBoard, row, col);\n      if (computerBoard.board[row][col] === "hit") {\n        e.target.setAttribute("id", "hit");\n        e.target.classList.add("attacked");\n        if (computerBoard.areAllSunk()) {\n          newGameScreen.classList.remove("hide");\n          winnerDiv.innerHTML = "Congratulations! You have won!";\n          nextMoveFlag = false;\n          return;\n        }\n      } else {\n        e.target.setAttribute("id", "missed");\n        e.target.classList.add("attacked");\n        nextMoveFlag = false;\n        setTimeout(() => {\n          randomCompAtt();\n        }, 600);\n      }\n    }\n  });\n\n  console.log(playerBoard.board)\n  console.log(computerBoard.board)\n\n  const randomCompAtt = () => {\n    let coords = playerTwo.randomAttack(playerBoard);\n    let arr = Array.from(playerBoardDiv.querySelectorAll(".cell"));\n    if (playerBoard.board[coords.row][coords.col] === "hit") {\n      arr.forEach((el) => {\n        if (el.dataset.row == coords.row && el.dataset.col == coords.col) {\n          el.setAttribute("id", "hit");\n          setTimeout(() => {\n            randomCompAtt();\n          }, 600);\n          if (playerBoard.areAllSunk()) {\n            el.setAttribute("id", "hit");\n            newGameScreen.classList.remove("hide");\n            winnerDiv.innerHTML = "Ooops! You have lost!";\n            return;\n          }\n        }\n      });\n    } else {\n      arr.forEach((el) => {\n        if (el.dataset.row == coords.row && el.dataset.col == coords.col) {\n          el.setAttribute("id", "missed");\n          nextMoveFlag = true;\n        }\n      });\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/game.js?'
        );

        /***/
      },

    /***/ "./src/modules/gameboard.js":
      /*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");\n\n\nconst Gameboard = () => {\n  //CREATE BOARD (NUM X NUM)\n\n  let board = [];\n\n  let placedShips = [];\n\n  const createBoard = (num) => {\n    for (let i = 0; i < num; i++) {\n      board.push([]);\n      for (let j = 0; j < num; j++) {\n        board[i].push("");\n      }\n    }\n    return board;\n  };\n\n  createBoard(10);\n\n  //check if there is valid position on board for ship\n\n  const checkValidShipCords = (ship, row, col) => {\n    let dir = ship.direction;\n    for (let i = 0; i < ship.shipLength; i++) {\n      if (\n        (dir === "horizontal" && board[row][col + i] !== "") ||\n        (dir === "horizontal" && col + ship.shipLength > 9)\n      )\n        return false;\n      if (\n        (dir === "vertical" && row + ship.shipLength > 9) ||\n        (dir === "vertical" && board[row + i][col] !== "")\n      )\n        return false;\n    }\n    return true;\n  };\n\n  //check if there is 1 row and 1 col space between ships\n\n  const checkSurroundings = (ship, row, col) => {\n    let dir = ship.direction;\n    let cells = (ship.shipLength + 2) * 3;\n    let counter = 0;\n    if (dir === "horizontal") {\n      if (\n        (row - 1 < 0 || row + 1 > 9) &&\n        (col - 1 >= 0 || col + ship.shipLength <= 9)\n      ) {\n        counter += ship.shipLength + 2;\n\n        if (row - 1 < 0) {\n          for (let i = 0; i < 2; i++) {\n            for (let j = -1; j <= ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row + 1 > 9) {\n          for (let i = -1; i < 1; i++) {\n            for (let j = -1; j <= ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n      } else if (\n        (col - 1 < 0 || col + ship.shipLength > 9) &&\n        (row - 1 >= 0 || row + 1 <= 9)\n      ) {\n        counter += 3;\n\n        if (col - 1 < 0) {\n          for (let i = -1; i < 2; i++) {\n            for (let j = 0; j <= ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (col + ship.shipLength > 9) {\n          for (let i = -1; i < 2; i++) {\n            for (let j = -1; j < ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n      } else if (\n        (row - 1 < 0 || row + 1 > 9) &&\n        (col - 1 < 0 || col + ship.shipLength > 9)\n      ) {\n        counter += ship.shipLength + 4;\n        if (row - 1 < 0 && col - 1 < 0) {\n          for (let i = 0; i < 2; i++) {\n            for (let j = 0; j <= ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row - 1 < 0 && col + ship.shipLength > 9) {\n          for (let i = 0; i < 2; i++) {\n            for (let j = -1; j < ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row + 1 > 9 && col - 1 < 0) {\n          for (let i = -1; i < 1; i++) {\n            for (let j = 0; j <= ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row + 1 > 9 && col + ship.shipLength > 9) {\n          for (let i = -1; i < 1; i++) {\n            for (let j = -1; j < ship.shipLength; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n      } else {\n        for (let i = -1; i < 2; i++) {\n          for (let j = -1; j <= ship.shipLength; j++) {\n            if (board[row + i][col + j] === "") {\n              counter++;\n            }\n          }\n        }\n      }\n      if (cells !== counter) return false;\n    }\n\n    if (dir === "vertical") {\n      if (\n        (row - 1 < 0 || row + ship.shipLength > 9) &&\n        (col - 1 >= 0 || col + 1 <= 9)\n      ) {\n        counter += 3;\n        if (row - 1 < 0) {\n          for (let i = 0; i <= ship.shipLength; i++) {\n            for (let j = -1; j < 2; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row + ship.shipLength > 9) {\n          for (let i = -1; i < ship.shipLength; i++) {\n            for (let j = -1; j < 2; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n      } else if (\n        (col - 1 < 0 || col + 1 > 9) &&\n        (row - 1 >= 0 || row + ship.shipLength <= 9)\n      ) {\n        counter += ship.shipLength + 2;\n        if (col - 1 < 0) {\n          for (let i = -1; i <= ship.shipLength; i++) {\n            for (let j = 0; j < 2; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (col + 1 > 9) {\n          for (let i = -1; i <= ship.shipLength; i++) {\n            for (let j = -1; j < 1; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n      } else if (\n        (row - 1 < 0 || row + ship.shipLength > 9) &&\n        (col - 1 < 0 || col + 1 > 9)\n      ) {\n        counter += ship.shipLength + 4;\n        if (row - 1 < 0 && col - 1 < 0) {\n          for (let i = 0; i <= ship.shipLength; i++) {\n            for (let j = 0; j < 2; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row - 1 < 0 && col + 1 > 9) {\n          for (let i = 0; i <= ship.shipLength; i++) {\n            for (let j = -1; j < 1; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row + ship.shipLength > 9 && col - 1 < 0) {\n          for (let i = -1; i < ship.shipLength; i++) {\n            for (let j = 0; j < 2; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n        if (row + ship.shipLength > 9 && col + 1 > 9) {\n          for (let i = -1; i < ship.shipLength; i++) {\n            for (let j = -1; j < 1; j++) {\n              if (board[row + i][col + j] === "") {\n                counter++;\n              }\n            }\n          }\n        }\n      } else {\n        for (let i = -1; i <= ship.shipLength; i++) {\n          for (let j = -1; j < 2; j++) {\n            if (board[row + i][col + j] === "") {\n              counter++;\n            }\n          }\n        }\n      }\n      if (cells !== counter) return false;\n    }\n\n    return true;\n  };\n\n  //place ship at given coords(row, col)\n\n  const placeShip = (ship, row, col) => {\n    const isValid = checkValidShipCords(ship, row, col);\n    const surroundings = checkSurroundings(ship, row, col);\n    if (isValid == true && surroundings == true) {\n      if (ship.direction === "horizontal") {\n        for (let i = 0; i < ship.shipLength; i++) {\n          board[row][col + i] = { ship, index: ship.shipArr[i] };\n        }\n        placedShips.push(ship);\n      } else {\n        for (let i = 0; i < ship.shipLength; i++) {\n          board[row + i][col] = { ship, index: ship.shipArr[i] };\n        }\n        placedShips.push(ship);\n        return true;\n      }\n    } else return false;\n  };\n\n  //attack board and check if shoot have missed or hit\n\n  const receiveAttack = (row, col) => {\n    if (board[row][col] === "") {\n      return (board[row][col] = "miss");\n    } else if (board[row][col].ship) {\n      board[row][col].ship.hit(board[row][col].index);\n      // board[row][col].ship.isSunk() -- check if ship is sunk after each attack\n      board[row][col] = "hit";\n    }\n  };\n\n  //check if all ships are still alive or dead\n\n  const areAllSunk = () => placedShips.every((ship) => ship.isSunk());\n\n  return {\n    createBoard,\n    placeShip,\n    receiveAttack,\n    areAllSunk,\n    checkValidShipCords,\n    placedShips,\n    board,\n    checkSurroundings,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/gameboard.js?'
        );

        /***/
      },

    /***/ "./src/modules/player.js":
      /*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (type) => {\n  let playerType = type;\n\n  const attack = (enemyBoard, row, col) => {\n    enemyBoard.receiveAttack(row, col);\n  };\n\n  const randomCoord = (size = 10) => Math.floor(Math.random() * size);\n\n  let coords;\n\n  const randomAttack = (enemyBoard) => {\n    let row = randomCoord();\n    let col = randomCoord();\n    if (\n      enemyBoard.board[row][col] === "hit" ||\n      enemyBoard.board[row][col] === "miss"\n    ) {\n      randomAttack(enemyBoard);\n    } else {\n      enemyBoard.receiveAttack(row, col);\n      coords = { row, col };\n      return coords;\n    }\n    return coords;\n  };\n\n  return {\n    attack,\n    randomAttack,\n    randomCoord,\n    playerType,\n    coords,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/player.js?'
        );

        /***/
      },

    /***/ "./src/modules/ship.js":
      /*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) => {
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, dir = "horizontal") => {\n  const id = length;\n  const shipLength = length;\n  let shipArr = [];\n\n  //default ship direction is horizontal\n  let direction = dir;\n\n  const randomDirection = () => {\n    let directions = ["horizontal", "vertical"];\n    direction = directions[Math.floor(Math.random() * 2)];\n    return direction;\n  };\n\n  const changeDirection = () => {\n    if (direction === "horizontal") {\n      return (direction = "vertical");\n    } else {\n      return (direction = "horizontal");\n    }\n  };\n\n  //pushes to shipArr coord of new ship with number from 1 to ship length\n\n  const shipPositions = (shipLength) => {\n    for (let i = 1; i <= shipLength; i++) {\n      shipArr.push(`${i}`);\n    }\n  };\n  shipPositions(shipLength);\n\n  const hit = (num) => {\n    for (let i = 0; i < shipLength; i++) {\n      if (shipArr[i] == num) {\n        shipArr[i] = "hit";\n      }\n    }\n    return shipArr;\n  };\n\n  const isSunk = () => shipArr.every((pos) => pos === "hit");\n\n  return {\n    id,\n    shipLength,\n    shipArr,\n    direction,\n    hit,\n    isSunk,\n    changeDirection,\n    randomDirection,\n  };\n};\n\n// let destroyer = ship(5);\n// destroyer.hit(2)\n// destroyer.hit(5)\n// destroyer.hit(1)\n// destroyer.hit(3)\n// destroyer.hit(4)\n// console.log(destroyer.isSunk())\n\n// console.log(destroyer)\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship-game/./src/modules/ship.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__("./src/index.js");
  /******/
  /******/
})();
