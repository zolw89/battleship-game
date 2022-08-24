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
            if((dir === 'horizontal' && board[row][col + i] !== '' ) || (dir === 'horizontal' && col + ship.shipLength > 9)) return false
            if((dir === 'vertical' && row + ship.shipLength > 9) || (dir === 'vertical' && board[row + i][col] !== '')) return false
        }
        return true
    }

    const checkSurroundings = (ship, row, col) => {
        console.log('sprawdzam '+ row + ' '+ col)
        let dir = ship.direction;
        if(dir === 'horizontal') {
            for(let i = 0; i < ship.shipLength; i++) {
                if(row == 0 && col == 0) {
                    console.log('sprawdzam gorna lewa krawedz')
                    if(typeof board[row + 1][col + i] === 'object' || typeof board[row][col + ship.shipLength] === 'object' || typeof board[row+1][col + ship.shipLength])
                    return false
                }

                if(row == 0 && col + ship.shipLength == 9) {
                    console.log('sprawdzam gorna prawa krawedz')
                    if(typeof board[row + 1][col + i] == 'object' || typeof board[row][col - 1] === 'object' || typeof board[row + 1][col - 1]) 
                    return false
                }

                if(row == 9 && col == 0) {
                    console.log('sprawdzam dolna lewa krawedz')
                    if(typeof board[row - 1][col + 1] === 'object' || typeof board[row][col + ship.shipLength] === 'object' || typeof board[row-1][col + ship.shipLength])
                    return false
                }

                if(row == 9 && col + ship.shipLength == 9) {
                    console.log('sprawdzam dolna prawa krawedz')
                    if(typeof board[row - 1][col + i] == 'object' || typeof board[row][col - 1] === 'object' || typeof board[row - 1][col - 1])
                    return false
                }
                if((row > 0 && row + ship.shipLength < 9) && (col > 0 && col + ship.shipLength < 9))


                if(col + i > 8 || col - i < 0) {
                    console.log('poszlo 1 test')
                    return false}
                if((typeof board[row+1][col+i] === 'object' || typeof board[row - 1][col+i] === 'object') ||
                   (typeof board[row+1][col-1] === 'object' || typeof board[row - 1][col-1] === 'object' || typeof board[row][col-1] === 'object') ||
                   (typeof board[row+1][col+ship.shipLength] !== 'object' || typeof board[row - 1][col+ship.shipLength] !== 'object' || typeof board[row][col+ship.shipLength] !== 'object')) {
                    console.log(row, col)
                    console.log('nie moge stawiac')
                    return false
                }
            }
        }
        if(dir === "vertical") {
            for(let i = 0; i < ship.shipLength; i++) {
                if(col - 1 < 0 || col + 1 > 8) return false
                if(row + i > 8 || row - i < 0) return false
                if((typeof board[row + i][col + 1] === 'object' || typeof board[row + i][col - 1] === 'object') ||
                   (typeof board[row-1][col+1] === 'object' || typeof board[row - 1][col-1] === 'object' || typeof board[row - 1][col] === 'object') ||
                   (typeof board[row+ship.shipLength][col+1] !== 'object' || typeof board[row + ship.shipLength][col-1] !== 'object' || typeof board[row][col+ship.shipLength] !== 'object')) {
                    console.log('nie moge stawiac')
                    return false
                }
            }
        }
        console.log('moge stawiac')
        return true
        
    }

    const placeShip = (ship, row, col) => {
        const isValid = checkValidShipCords(ship, row, col)
        const surroundings = checkSurroundings(ship, row, col)
        console.log(surroundings)
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
        board,
        checkSurroundings
    }
    
}


export default Gameboard