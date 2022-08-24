const Gameboard = () => {

    //CREATE BOARD (NUM X NUM)

    let board = []

    const placedShips = []

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

    const checkValidShipCords = (ship, row, col) => {
        let dir = ship.direction;
        for(let i = 0; i < ship.shipLength; i++) {
            if((dir === 'horizontal' && board[row][col + i] !== '' ) || (dir === 'horizontal' && col + ship.ShipLength > 10)) {
                return false
            }
            if((dir === 'vertical' && board[row + i][col] !== '') || (dir === 'vertical' && row + ship.ShipLength > 10)) {
                return false
            }
        }
        return true
    }

    const placeShip = (ship, row, col) => {
        const isValid = checkValidShipCords(ship, row, col)
        if(isValid !== true) return false
        if(ship.direction === 'horizontal') {
            for(let i = 0; i < ship.shipLength; i++) {
            board[row][col + i] = { ship, index: ship.shipArr[i] }
            }
        placedShips.push(ship) 
        } else {
            for(let i = 0; i < ship.shipLength; i++) {
            board[row + 1][col] = { ship, index: ship.shipArr[i] }
            }
        placedShips.push(ship) 
        }
    }

    const receiveAttack = (row, col) => {
        if(board[row][col] === '') {
            return board[row][col] = 'miss'
        } else if(board[row][col].ship) {
            board[row][col].ship.hit(board[row][col].index);
            board[row][col] = 'hit'
            
        }
        return board[row][col]
    }

    const areAllSunk = () => placedShips.every((ship) => ship.isSunk());

    return {
        createBoard,
        placeShip,
        receiveAttack,
        areAllSunk,
        checkValidShipCords,
        placedShips,
        board
    }
    
}


export default Gameboard