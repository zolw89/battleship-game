const Gameboard = () => {

    //CREATE BOARD (NUM X NUM)

    let board = []

    const createBoard = (num) => {
        for(let i = 0; i < num; i++) {
            board.push([])
            for(let j = 0; j < num; j++) {
                board[i].push('')
            }
        }
        return board
    }


    const placeShip = (ship, row, col) => {
        if(col + ship.length > 10) return alert('cant place there')
        for(let i = 0; i < ship.shipLength; i++) {
            board[row][col + i] = { ship, index: ship.shipArr[i] }
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


    return {
        createBoard,
        placeShip,
        receiveAttack,
        board
    }
    
}


export default Gameboard