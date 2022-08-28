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
          "__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/game */ \"./src/modules/game.js\");\n\n\n(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n\nconst newGameBtn = document.querySelector('.new-game')\nconst newGameScreen = document.querySelector('.restart-screen')\n\nnewGameBtn.addEventListener('click', () => {\n    newGameScreen.classList.add('hide')\n    ;(0,_modules_game__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n})\n\n\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?"
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
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _modules_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/gameboard */ \"./src/modules/gameboard.js\");\n/* harmony import */ var _modules_ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/ship */ \"./src/modules/ship.js\");\n/* harmony import */ var _modules_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/player */ \"./src/modules/player.js\");\n\r\n\r\n\r\n\r\nconst Game = () => {\r\n    const playerBoardDiv = document.querySelector('.player-board')\r\n    const computerBoardDiv = document.querySelector('.computer-board')\r\n    const fleetDiv = document.querySelector('.fleet')\r\n    const autoPlaceBtn = document.querySelector('.auto-place')\r\n    const resetBtn = document.querySelector('.reset')\r\n    const playerFleetDiv = document.querySelector('.fleet-div')\r\n    const startGameBtn = document.querySelector('.start-game-btn')\r\n    const newGameScreen = document.querySelector('.restart-screen')\r\n    const winnerDiv = document.querySelector('.winner')\r\n\r\n    const playerOne = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('human')\r\n    const playerTwo = (0,_modules_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('computer')\r\n\r\n    //create player's and computer's boards\r\n    const createPlayersBoard = (board, num = 10) => {\r\n        for(let i = 0; i < num; i++) {\r\n            for(let j = 0; j < num; j++) {\r\n                const cell = document.createElement('div')\r\n                cell.classList.add('cell')\r\n                cell.dataset.row = i;\r\n                cell.dataset.col = j;\r\n                board.appendChild(cell)\r\n            }\r\n        }\r\n    }\r\n    createPlayersBoard(playerBoardDiv)\r\n    createPlayersBoard(computerBoardDiv)\r\n\r\n    let playerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n    const computerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n\r\n    const newShipsArr = [\r\n        {\r\n            name: 'battleship',\r\n            length: 5,\r\n        }, {\r\n            name: 'carrier',\r\n            length: 4\r\n        }, {\r\n            name: 'cruiser',\r\n            length: 3\r\n        }, {\r\n            name: 'destroyer',\r\n            length: 3\r\n        }, {\r\n            name: 'submarine',\r\n            length: 2\r\n        }, {\r\n            name: 'gunboat',\r\n            length: 2\r\n        }\r\n    ]\r\n\r\n    const playerShipArray = []\r\n    let computerShipArray = []\r\n\r\n    //create fleet for each player with 6 ships from newShipArr\r\n\r\n    const createFleet = (board) => {\r\n        newShipsArr.forEach(el => {\r\n            board.push((0,_modules_ship__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(el.length))\r\n        })\r\n    }\r\n\r\n    createFleet(playerShipArray)\r\n    createFleet(computerShipArray)\r\n\r\n    //auto place ships on board\r\n\r\n    const autoPlaceShip = (arr, pboard) => {\r\n        arr.forEach(ship => {   \r\n            ship.direction = ship.randomDirection()\r\n            let row = Math.floor(Math.random() * 10)\r\n            let col = Math.floor(Math.random() * 10)\r\n            if(pboard.checkValidShipCords(ship, row, col) && pboard.checkSurroundings(ship, row, col)) {\r\n                pboard.placeShip(ship, row, col)\r\n                arr.splice(arr.indexOf(ship), 1)\r\n                }\r\n            if(!pboard.checkValidShipCords(ship, row, col) || !pboard.checkSurroundings(ship, row, col)) {\r\n                row = Math.floor(Math.random() * 10)\r\n                col = Math.floor(Math.random() * 10)\r\n                autoPlaceShip(arr, pboard)\r\n            }\r\n            }\r\n            \r\n        )\r\n    }\r\n\r\n    autoPlaceShip(playerShipArray, computerBoard)\r\n\r\n    const createFleetDiv = () => {\r\n        for(let i = 0; i < 5; i++) {\r\n            for(let j = 0; j < 5; j++) {\r\n                const cell = document.createElement('div')\r\n                cell.dataset.x = i;\r\n                cell.dataset.y = j;\r\n                cell.classList.add('cell')\r\n                fleetDiv.appendChild(cell)\r\n            }\r\n        }\r\n    }\r\n    createFleetDiv()\r\n\r\n    const renderPlayerBoard = () => {\r\n        for(let i = 0; i < 10; i++) {\r\n            for(let j = 0; j < 10; j++) {\r\n                if(playerBoard.board[i][j] !== '') {\r\n                    let arr = Array.from(playerBoardDiv.querySelectorAll('.cell'));\r\n                    arr.forEach(el => {\r\n                        if(el.dataset.row == i && el.dataset.col == j) {\r\n                            el.classList.add('ship')\r\n                        }\r\n                    })\r\n    \r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    playerBoard.placeShip(computerShipArray[0], 9, 9)\r\n    renderPlayerBoard()\r\n\r\n    autoPlaceBtn.addEventListener('click', () => {\r\n        resetBoard()\r\n        autoPlaceShip(computerShipArray, playerBoard);\r\n        renderPlayerBoard()\r\n        \r\n    })\r\n\r\n    const resetBoard = () => {\r\n        playerBoard = (0,_modules_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\r\n        computerShipArray = []\r\n        createFleet(computerShipArray)\r\n        playerBoardDiv.innerHTML = ''\r\n        createPlayersBoard(playerBoardDiv)\r\n    }\r\n\r\n    resetBtn.addEventListener('click', resetBoard)\r\n\r\n    startGameBtn.addEventListener('click', () => {\r\n        if(playerBoard.placedShips.length !== 6) return alert('place all ships first')\r\n        playerFleetDiv.classList.add('hide')\r\n        computerBoardDiv.classList.remove('hide')\r\n    })\r\n\r\n\r\n    let nextMoveFlag = true;\r\n\r\n    computerBoardDiv.addEventListener('click', (e) => {\r\n        if(nextMoveFlag === false) return\r\n        if(e.target.className !== 'cell') return\r\n        if(e.target.className === 'cell') {\r\n            let row = e.target.dataset.row\r\n            let col = e.target.dataset.col\r\n            playerOne.attack(computerBoard, row, col)\r\n            if(computerBoard.board[row][col] === 'hit') {\r\n                e.target.setAttribute('id', 'hit')\r\n                e.target.classList.add('attacked')\r\n                if(computerBoard.areAllSunk()) {             \r\n                    newGameScreen.classList.remove('hide')\r\n                    winnerDiv.innerHTML = 'Congratulations! You have won!'\r\n                    nextMoveFlag = false\r\n                    return\r\n                }\r\n            } else {\r\n                e.target.setAttribute('id','missed')\r\n                e.target.classList.add('attacked')\r\n                nextMoveFlag = false\r\n                setTimeout(() => {randomCompAtt()}, 600)\r\n            }\r\n            \r\n        }\r\n    })\r\n\r\n\r\n    const randomCompAtt = () => {\r\n        let coords = playerTwo.randomAttack(playerBoard)\r\n        let arr = Array.from(playerBoardDiv.querySelectorAll('.cell'))\r\n        if(playerBoard.board[coords.row][coords.col] === 'hit') {\r\n            arr.forEach(el => {\r\n                if(el.dataset.row == coords.row && el.dataset.col == coords.col) {\r\n                    el.setAttribute('id', 'hit')\r\n                    setTimeout(() => {randomCompAtt()}, 600)\r\n                    if(playerBoard.areAllSunk()) {\r\n                        el.setAttribute('id', 'hit')\r\n                        newGameScreen.classList.remove('hide')\r\n                        winnerDiv.innerHTML = 'Ooops! You have lost!'\r\n                        return\r\n                    }\r\n                }\r\n            })\r\n                \r\n        } else {\r\n            arr.forEach(el => {\r\n                if(el.dataset.row == coords.row && el.dataset.col == coords.col) {\r\n                    el.setAttribute('id', 'missed')\r\n                    nextMoveFlag = true \r\n                }\r\n            })\r\n        }\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://battleship-game/./src/modules/game.js?"
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
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/modules/ship.js\");\n\r\n\r\nconst Gameboard = () => {\r\n\r\n    //CREATE BOARD (NUM X NUM)\r\n\r\n    let board = []\r\n\r\n    let placedShips = []\r\n\r\n    const createBoard = (num) => {\r\n        for(let i = 0; i < num; i++) {\r\n            board.push([])\r\n            for(let j = 0; j < num; j++) {\r\n                board[i].push('')\r\n            }\r\n        }\r\n        return board\r\n    }\r\n\r\n    createBoard(10)\r\n\r\n\r\n    //check if there is valid position on board for ship\r\n\r\n    const checkValidShipCords = (ship, row, col) => {\r\n        let dir = ship.direction;\r\n        for(let i = 0; i < ship.shipLength; i++) {\r\n            if((dir === 'horizontal' && board[row][col + i] !== '' ) || (dir === 'horizontal' && col + ship.shipLength > 9)) return false\r\n            if((dir === 'vertical' && row + ship.shipLength > 9) || (dir === 'vertical' && board[row + i][col] !== '')) return false\r\n        }\r\n        return true\r\n    }\r\n\r\n    //check if there is 1 row and 1 col space between ships\r\n\r\n    const checkSurroundings = (ship, row, col) => {\r\n        let dir = ship.direction\r\n        let cells = (ship.shipLength + 2) * 3;\r\n        let counter = 0\r\n        if(dir === 'horizontal') {\r\n            if((row - 1 < 0 || row + 1 > 9) && (col -1  >= 0 || col + ship.shipLength <= 9)) {\r\n                counter +=(ship.shipLength+2)\r\n\r\n                if(row - 1 < 0) {\r\n                    console.log('jestem horiz przy gorze')\r\n                    for(let i = 0; i < 2; i++) {\r\n                        for(let j = -1; j <= ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {\r\n                                \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row + 1 > 9) {\r\n                    console.log('jestem horiz przy dole')\r\n                    for(let i = - 1; i < 1; i++) {\r\n                        for(let j = -1; j <= ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {\r\n                                \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                console.log(counter)\r\n            } else if((col - 1 < 0 || col + ship.shipLength > 9) && (row - 1 >= 0 || row + 1 <= 9)){    \r\n                counter +=3\r\n\r\n                if(col - 1 < 0) {\r\n                    console.log('jestem horiz przy lewo')\r\n                    for(let i = -1; i < 2; i++) {\r\n                        for(let j = 0; j <= ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {    \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(col + ship.shipLength > 9) {\r\n                    console.log('jestem horiz przy prawo')\r\n                    for(let i = -1; i < 2; i++) {\r\n                        for(let j = -1; j < ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {    \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }           \r\n                console.log(counter)\r\n            } else if((row - 1 < 0 || row + 1 > 9) && (col - 1 < 0 || col + ship.shipLength > 9)) {\r\n                counter += (ship.shipLength+4)\r\n                if(row - 1 < 0 && col - 1 < 0) {\r\n                    console.log('jestem horiz przy lewo gora')\r\n                    for(let i = 0; i < 2; i++) {\r\n                        for(let j = 0; j <= ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {   \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row - 1 < 0 && col + ship.shipLength > 9) {\r\n                    console.log('jestem horiz gora lewo')\r\n                    for(let i = 0; i < 2; i++) {\r\n                        for(let j = -1; j < ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {       \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row + 1 > 9 && col - 1 < 0) {\r\n                    console.log('jestem horiz przy dol lewo')\r\n                    for(let i = -1; i < 1; i++) {\r\n                        for(let j = 0; j <= ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row + 1 > 9 && col + ship.shipLength > 9) {\r\n                    console.log('jestem horiz przy dol prawo')\r\n                    for(let i = -1; i < 1; i++) {\r\n                        for(let j = -1; j < ship.shipLength; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                console.log(counter)\r\n                \r\n            } else {\r\n                console.log('jestem horiz w srodku')\r\n                for(let i = -1; i < 2; i++) {\r\n                    for(let j = -1; j <= ship.shipLength; j++) {\r\n                        if(board[row + i][col + j] === '') {\r\n                            counter++\r\n                            console.log(counter)\r\n                        }                         \r\n                            \r\n                    } \r\n                }\r\n            }     \r\n            console.log(counter)           \r\n            if(cells !== counter) return false\r\n        }\r\n\r\n        if(dir === 'vertical') {\r\n            if((row - 1 < 0 || row + ship.shipLength > 9) && (col - 1 >= 0 || col + 1 <= 9)) {\r\n                counter += 3 \r\n                if(row - 1 < 0) {\r\n                    console.log('jestem vertical przy gora')\r\n                    for(let i = 0; i <= ship.shipLength; i++) {\r\n                        for(let j = -1; j < 2; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row + ship.shipLength > 9) {\r\n                    console.log('jestem vertical przy dol')\r\n                    for(let i = -1; i < ship.shipLength; i++) {\r\n                        for(let j = -1; j < 2; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n            } else if((col - 1 < 0 || col + 1 > 9) && (row - 1 >= 0 || row + ship.shipLength <= 9)) {\r\n                counter += (ship.shipLength + 2)\r\n                if(col - 1 < 0) {\r\n                    console.log('jestem vertical przy lewo')\r\n                    for(let i = - 1; i <= ship.shipLength; i++) {\r\n                        for(let j = 0; j < 2; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(col + 1 > 9) {\r\n                    console.log('jestem vertical przy prawo')\r\n                    for(let i = -1; i <= ship.shipLength; i++) {\r\n                        for(let j = -1; j < 1; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n            } else if((row - 1 < 0 || row + ship.shipLength > 9) && (col - 1 < 0 || col + 1 > 9)) {\r\n                counter += (ship.shipLength+4)\r\n                if(row - 1 < 0 && col - 1 < 0) {\r\n                    console.log('jestem vertical przy gora lewo')\r\n                    for(let i = 0; i <= ship.shipLength; i++) {\r\n                        for(let j = 0; j < 2; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row - 1 < 0 && col + 1 > 9) {\r\n                    console.log('jestem vertical przy gora prawo')\r\n                    for(let i = 0; i <= ship.shipLength; i++) {\r\n                        for(let j = -1; j < 1; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row + ship.shipLength > 9 && col - 1 < 0) {\r\n                    console.log('jestem vertical przy dol lewo')\r\n                    for(let i = -1; i < ship.shipLength; i++) {\r\n                        for(let j = 0; j < 2; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n                if(row + ship.shipLength > 9 && col + 1 > 9) {\r\n                    console.log('jestem vertical przy dol prawo')\r\n                    for(let i = -1; i < ship.shipLength; i++) {\r\n                        for(let j = -1; j < 1; j++) {\r\n                            if(board[row + i][col + j] === '') {  \r\n                                counter++\r\n                                console.log(counter)\r\n                            } \r\n                        }\r\n                    }\r\n                }\r\n            } else {\r\n                console.log('jestem vertical w srodku')\r\n                for(let i = -1; i <= ship.shipLength; i++) {\r\n                    for(let j = -1; j < 2; j++) {\r\n                        if(board[row + i][col + j] === '') {\r\n                            counter++\r\n                            console.log(counter)\r\n                        } \r\n                    }\r\n                }\r\n            }\r\n            console.log(counter)\r\n            if(cells !== counter) return false\r\n        }\r\n\r\n        return true\r\n    }    \r\n\r\n\r\n    //place ship at given coords(row, col)\r\n\r\n    const placeShip = (ship, row, col) => {\r\n        const isValid = checkValidShipCords(ship, row, col)\r\n        const surroundings = checkSurroundings(ship, row, col)\r\n        if(isValid == true && surroundings == true) {\r\n            if(ship.direction === 'horizontal') {\r\n                for(let i = 0; i < ship.shipLength; i++) {\r\n                board[row][col + i] = { ship, index: ship.shipArr[i] }\r\n                }\r\n            placedShips.push(ship) \r\n            } else {\r\n                for(let i = 0; i < ship.shipLength; i++) {\r\n                board[row + i][col] = { ship, index: ship.shipArr[i] }\r\n                }\r\n            placedShips.push(ship) \r\n            return true\r\n            }\r\n        } else return false\r\n    }\r\n\r\n    //attack board and check if shoot have missed or hit\r\n    \r\n\r\n    const receiveAttack = (row, col) => {\r\n        if(board[row][col] === '') {\r\n            return board[row][col] = 'miss'\r\n        } else if(board[row][col].ship) {\r\n            board[row][col].ship.hit(board[row][col].index);\r\n            // board[row][col].ship.isSunk() -- check if ship is sunk after each attack\r\n            board[row][col] = 'hit'           \r\n        }\r\n    }\r\n\r\n    //check if all ships are still alive or dead\r\n\r\n    const areAllSunk = () => placedShips.every((ship) => ship.isSunk());\r\n\r\n    return {\r\n        createBoard,\r\n        placeShip,\r\n        receiveAttack,\r\n        areAllSunk,\r\n        checkValidShipCords,\r\n        placedShips,\r\n        board,\r\n        checkSurroundings,\r\n    }\r\n    \r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);\n\n//# sourceURL=webpack://battleship-game/./src/modules/gameboard.js?"
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
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Player = (type) => {\r\n\r\n    let playerType = type\r\n\r\n    const attack = (enemyBoard, row, col) => {\r\n        enemyBoard.receiveAttack(row, col)\r\n    };\r\n\r\n    const randomCoord = (size = 10) => Math.floor(Math.random() * size)\r\n\r\n    let coords;\r\n\r\n    const randomAttack = (enemyBoard) => {\r\n        let row = randomCoord();\r\n        let col = randomCoord(); \r\n        if(enemyBoard.board[row][col] === 'hit' || enemyBoard.board[row][col] === 'miss') {\r\n            randomAttack(enemyBoard) \r\n        } else {     \r\n            enemyBoard.receiveAttack(row, col) \r\n            coords = {row, col}\r\n            return coords\r\n        }\r\n        return coords\r\n    }\r\n\r\n    return {\r\n        attack,\r\n        randomAttack,\r\n        randomCoord,\r\n        playerType,\r\n        coords\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://battleship-game/./src/modules/player.js?"
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
          "__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Ship = (length, dir = 'horizontal') => {\r\n\r\n    const id = length;\r\n    const shipLength = length;\r\n    let shipArr = [];\r\n\r\n    //default ship direction is horizontal\r\n    let direction = dir;\r\n\r\n    const randomDirection = () => {\r\n        let directions = ['horizontal', 'vertical'];\r\n        direction = directions[Math.floor(Math.random() * 2)]\r\n        return direction\r\n    }\r\n\r\n    const changeDirection = () => {\r\n        if(direction === 'horizontal') {\r\n            return direction = 'vertical'\r\n        } else {\r\n            return direction = 'horizontal'\r\n        }\r\n    }\r\n\r\n    //pushes to shipArr coord of new ship with number from 1 to ship length\r\n\r\n    const shipPositions = (shipLength) => {     \r\n        for(let i = 1; i <= shipLength; i++) {\r\n            shipArr.push(`${i}`)\r\n        }\r\n    }\r\n    shipPositions(shipLength)\r\n    \r\n    const hit = (num) => {\r\n        for(let i = 0; i < shipLength; i++) {\r\n            if(shipArr[i] == num) {\r\n                shipArr[i] = 'hit'\r\n            }\r\n        }\r\n        return shipArr\r\n    };\r\n\r\n    const isSunk = () => shipArr.every(pos => pos === 'hit');\r\n\r\n    return {\r\n        id,\r\n        shipLength,\r\n        shipArr,\r\n        direction,\r\n        hit,\r\n        isSunk,\r\n        changeDirection,\r\n        randomDirection\r\n        \r\n    }\r\n}\r\n\r\n// let destroyer = ship(5);\r\n// destroyer.hit(2)\r\n// destroyer.hit(5)\r\n// destroyer.hit(1)\r\n// destroyer.hit(3)\r\n// destroyer.hit(4)\r\n// console.log(destroyer.isSunk())\r\n\r\n\r\n// console.log(destroyer)\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n//# sourceURL=webpack://battleship-game/./src/modules/ship.js?"
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
