import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";
import Player from "../modules/player";

const Game = () => {
    const playerBoardDiv = document.querySelector('.player-board')
    const computerBoardDiv = document.querySelector('.computer-board')
    const fleetDiv = document.querySelector('.fleet')

    const playerOne = Player('human')
    const playerTwo = Player('computer')

    //create player's and computer's boards
    const createPlayersBoard = (board, num = 10) => {
        for(let i = 0; i < num; i++) {
            for(let j = 0; j < num; j++) {
                const cell = document.createElement('div')
                cell.classList.add('cell')
                cell.dataset.row = i;
                cell.dataset.col = j;
                board.appendChild(cell)
            }
        }
    }
    createPlayersBoard(playerBoardDiv)
    createPlayersBoard(computerBoardDiv)

    const playerBoard = Gameboard()
    const computerBoard = Gameboard()

    const newShipsArr = [
        {
            name: 'battleship',
            length: 5,
        }, {
            name: 'carrier',
            length: 4
        }, {
            name: 'cruiser',
            length: 3
        }, {
            name: 'destroyer',
            length: 3
        }, {
            name: 'submarine',
            length: 2
        }, {
            name: 'gunboat',
            length: 2
        }
    ]

    const playerShipArray = []
    const computerShipArray = []

    const createFleet = (board) => {
        newShipsArr.forEach(el => {
            board.push(Ship(el.length))
        })
    }

    createFleet(playerShipArray)
    createFleet(computerShipArray)

    console.log(playerShipArray)
    console.log(computerShipArray)

    const autoPlaceShip = (arr, board) => {
        arr.forEach(ship => {
            let row = Math.floor(Math.random() * 10)
            let col = Math.floor(Math.random() * 10)
            board.placeShip(ship, row, col)
            console.log(board.placeShip(ship, row, col))
            if(board.placeShip(ship, row, col)) {
                console.log(arr)
                arr.splice(arr.indexOf(el), 1)
                console.log(arr)
            }
            if(!board.placeShip(ship, row, col)) {
            }
        })
    }

    autoPlaceShip(computerShipArray, playerBoard)

    const createFleetDiv = () => {
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i;
                cell.dataset.y = j;
                fleetDiv.appendChild(cell)
            }
        }
    }
    createFleetDiv()

    

    computerBoard.placeShip(playerShipArray[0], 0,0)
    computerBoard.placeShip(playerShipArray[1], 4,2)
    computerBoard.placeShip(playerShipArray[2], 5,5)
    computerBoard.placeShip(playerShipArray[3], 6,2)
    computerBoard.placeShip(playerShipArray[4], 9,6)
    computerBoard.placeShip(playerShipArray[5], 2,2)

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            if(playerBoard.board[i][j] !== '') {
                let arr = Array.from(playerBoardDiv.querySelectorAll('.cell'));
                arr.forEach(el => {
                    if(el.dataset.row == i && el.dataset.col == j) {
                        el.classList.add('ship')
                    }
                })

            }
        }
    }

    let nextMoveFlag = true;

    computerBoardDiv.addEventListener('click', (e) => {
        if(nextMoveFlag === false) return
        if(e.target.className !== 'cell') return
        if(e.target.className === 'cell') {
            let row = e.target.dataset.row
            let col = e.target.dataset.col
            playerOne.attack(computerBoard, row, col)
            if(computerBoard.board[row][col] === 'hit') {
                e.target.setAttribute('id', 'hit')
                e.target.classList.add('attacked')
                if(computerBoard.areAllSunk()) {             
                    console.log('you win')
                    nextMoveFlag = false
                    return
                }
            } else {
                e.target.setAttribute('id','missed')
                e.target.classList.add('attacked')
            }
            nextMoveFlag = false
            setTimeout(() => {randomCompAtt()}, 600)
        }
    })


    const randomCompAtt = () => {
        let coords = playerTwo.randomAttack(playerBoard)
        console.log(coords)
        let arr = Array.from(playerBoardDiv.querySelectorAll('.cell'))
        if(playerBoard.board[coords.row][coords.col] === 'hit') {
            arr.forEach(el => {
                if(el.dataset.row == coords.row && el.dataset.col == coords.col) {
                    el.setAttribute('id', 'hit')
                    if(playerBoard.areAllSunk()) {
                        el.setAttribute('id', 'hit')
                        console.log('you lose')
                        return
                    }
                }
            })
                
        } else {
            arr.forEach(el => {
                if(el.dataset.row == coords.row && el.dataset.col == coords.col) {
                    el.setAttribute('id', 'missed')
                }
            })
        }
        nextMoveFlag = true    
    }


    console.log(playerBoard.placedShips)
    console.log(computerBoard.placedShips)
    console.log(playerBoard.board)
    console.log(computerBoard.board)
}

export default Game