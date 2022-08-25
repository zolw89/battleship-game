import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";
import Player from "../modules/player";

const Game = () => {
    const playerBoardDiv = document.querySelector('.player-board')
    const computerBoardDiv = document.querySelector('.computer-board')
    const fleetDiv = document.querySelector('.fleet')
    const autoPlaceBtn = document.querySelector('.auto-place')
    const resetBtn = document.querySelector('.reset')
    const playerFleetDiv = document.querySelector('.fleet-div')
    const startGameBtn = document.querySelector('.start-game-btn')

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

    let playerBoard = Gameboard()
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
    let computerShipArray = []

    //create fleet for each player with 6 ships from newShipArr

    const createFleet = (board) => {
        newShipsArr.forEach(el => {
            board.push(Ship(el.length))
        })
    }

    createFleet(playerShipArray)
    createFleet(computerShipArray)

    //auto place ships on board

    const autoPlaceShip = (arr, pboard) => {
        arr.forEach(ship => {   
            ship.direction = ship.randomDirection()
            let row = Math.floor(Math.random() * 10)
            let col = Math.floor(Math.random() * 10)
            if(pboard.checkValidShipCords(ship, row, col) && pboard.checkSurroundings(ship, row, col)) {
                pboard.placeShip(ship, row, col)
                arr.splice(arr.indexOf(ship), 1)
                }
            if(!pboard.checkValidShipCords(ship, row, col) || !pboard.checkSurroundings(ship, row, col)) {
                row = Math.floor(Math.random() * 10)
                col = Math.floor(Math.random() * 10)
                autoPlaceShip(arr, pboard)
            }
            }
            
        )
    }

    autoPlaceShip(playerShipArray, computerBoard)

    const createFleetDiv = () => {
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i;
                cell.dataset.y = j;
                cell.classList.add('cell')
                fleetDiv.appendChild(cell)
            }
        }
    }
    createFleetDiv()

    const renderPlayerBoard = () => {
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
    }

    playerBoard.placeShip(computerShipArray[0], 9, 9)
    renderPlayerBoard()
    console.log(playerBoard.board)

    autoPlaceBtn.addEventListener('click', () => {
        resetBoard()
        autoPlaceShip(computerShipArray, playerBoard);
        renderPlayerBoard()
        
    })

    const resetBoard = () => {
        playerBoard = Gameboard()
        computerShipArray = []
        createFleet(computerShipArray)
        playerBoardDiv.innerHTML = ''
        createPlayersBoard(playerBoardDiv)
    }

    resetBtn.addEventListener('click', resetBoard)

    startGameBtn.addEventListener('click', () => {
        if(playerBoard.placedShips.length !== 6) return alert('place all ships first')
        playerFleetDiv.classList.add('hide')
        computerBoardDiv.classList.remove('hide')
    })


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
                nextMoveFlag = false
                setTimeout(() => {randomCompAtt()}, 600)
            }
            
        }
    })


    const randomCompAtt = () => {
        let coords = playerTwo.randomAttack(playerBoard)
        let arr = Array.from(playerBoardDiv.querySelectorAll('.cell'))
        if(playerBoard.board[coords.row][coords.col] === 'hit') {
            arr.forEach(el => {
                if(el.dataset.row == coords.row && el.dataset.col == coords.col) {
                    el.setAttribute('id', 'hit')
                    setTimeout(() => {randomCompAtt()}, 600)
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
                    nextMoveFlag = true 
                }
            })
        }
    }
}

export default Game