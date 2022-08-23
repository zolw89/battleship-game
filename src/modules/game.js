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
        }
    ]

    const battleship = Ship(5)
    const carrier = Ship(4)
    const cruiser = Ship(3)
    const destroyer = Ship(3)
    const submarine = Ship(2)


    const createFleet = () => {
        for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                const cell = document.createElement('div')
                cell.dataset.x = i;
                cell.dataset.y = j;
                fleetDiv.appendChild(cell)
            }
        }
    }
    createFleet()

    const playerBoard = Gameboard()
    const computerBoard = Gameboard()

    playerBoard.placeShip(battleship, 3,0)
    playerBoard.placeShip(cruiser, 5,2)
    playerBoard.placeShip(carrier, 1,5)
    playerBoard.placeShip(destroyer, 6,7)
    playerBoard.placeShip(submarine, 9,4)

    computerBoard.placeShip(battleship, 0,0)
    computerBoard.placeShip(cruiser, 4,2)
    computerBoard.placeShip(carrier, 5,5)
    computerBoard.placeShip(destroyer, 6,2)
    computerBoard.placeShip(submarine, 9,6)

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
            } else {
                e.target.setAttribute('id','missed')
                e.target.classList.add('attacked')
            }
            nextMoveFlag = false
            // setTimeout(() => {randomCompAtt()}, 600)
            randomCompAtt()
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



    console.log(playerBoard.board)
    console.log(computerBoard.board)
}

export default Game