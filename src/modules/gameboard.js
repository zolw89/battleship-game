import Ship from "./ship"

const Gameboard = () => {

    //CREATE BOARD (NUM X NUM)

    let board = []

    let placedShips = []

    const createBoard = (num) => {
        for(let i = 0; i < num; i++) {
            board.push([])
            for(let j = 0; j < num; j++) {
                board[i].push('')
            }
        }
        return board
    }

    createBoard(10)


    //check if there is valid position on board for ship

    const checkValidShipCords = (ship, row, col) => {
        let dir = ship.direction;
        for(let i = 0; i < ship.shipLength; i++) {
            if((dir === 'horizontal' && board[row][col + i] !== '' ) || (dir === 'horizontal' && col + ship.shipLength > 9)) return false
            if((dir === 'vertical' && row + ship.shipLength > 9) || (dir === 'vertical' && board[row + i][col] !== '')) return false
        }
        return true
    }

    //check if there is 1 row and 1 col space between ships

    const checkSurroundings = (ship, row, col) => {
        let dir = ship.direction
        if(dir === 'horizontal') {
            let cells = (ship.shipLength + 2) * 3;
            let counter = 0
            for(let i = -1; i < 2; i++) {
                for(let j = -1; j <= ship.shipLength; j++) {
                    if((row + i < 0 || row + i > 9) && (col + j >= 0 || col + j <= 9)) {
                        counter +=(ship.shipLength+2)
                        break
                    }
                    if((col + j < 0 || col + j > 9) && (row + i >= 0 || row + i <= 9)){
                        counter +=3
                        break
                    }
                    if((row + i < 0 || row + i > 9) && (col + j < 0 || col + j > 9)) {
                        counter += (ship.shipLength+4)
                        break
                    }
                    if(board[row + i][col + j] === '') {
                        counter++
                    } 
                }
            }           
            if(cells !== counter) return false
        }

        if(dir === 'vertical') {

            let cells = (ship.shipLength + 2) * 3;
            let counter = 0
            for(let i = -1; i <= ship.shipLength; i++) {
                for(let j = -1; j < 2; j++) {
                    if((row + i < 0 || row + i > 9) && (col + j >= 0 || col + j <= 9)) {
                        counter += 3 
                        break
                    }
                    if((col + j < 0 || col + j > 9) && (row + i >= 0 || row + i <= 9)) {
                        counter += (ship.shipLength + 2)
                        break
                    }
                    if((row + i < 0 || row + i > 9) && (col + j < 0 || col + j > 9)) {
                        counter += (ship.shipLength+4)
                        break
                    }
                    if(board[row + i][col + j] === '') {
                        counter++
                    } 
                }
            }
            if(cells !== counter) return false
        }
        return true
    }    


    //place ship at given coords(row, col)

    const placeShip = (ship, row, col) => {
        const isValid = checkValidShipCords(ship, row, col)
        const surroundings = checkSurroundings(ship, row, col)
        if(isValid == true && surroundings == true) {
            if(ship.direction === 'horizontal') {
                for(let i = 0; i < ship.shipLength; i++) {
                board[row][col + i] = { ship, index: ship.shipArr[i] }
                }
            placedShips.push(ship) 
            } else {
                for(let i = 0; i < ship.shipLength; i++) {
                board[row + i][col] = { ship, index: ship.shipArr[i] }
                }
            placedShips.push(ship) 
            return true
            }
        } else return false
    }

    //attack board and check if shoot have missed or hit
    

    const receiveAttack = (row, col) => {
        if(board[row][col] === '') {
            return board[row][col] = 'miss'
        } else if(board[row][col].ship) {
            board[row][col].ship.hit(board[row][col].index);
            // board[row][col].ship.isSunk() -- check if ship is sunk after each attack
            board[row][col] = 'hit'           
        }
    }

    //check if all ships are still alive or dead

    const areAllSunk = () => placedShips.every((ship) => ship.isSunk());

    return {
        createBoard,
        placeShip,
        receiveAttack,
        areAllSunk,
        checkValidShipCords,
        placedShips,
        board,
        checkSurroundings,
    }
    
}


export default Gameboard