const Player = (type) => {

    let playerType = type

    const attack = (enemyBoard, row, col) => enemyBoard.receiveAttack(row, col);

    const randomCoord = (size = 10) => Math.floor(Math.random() * size)

    let coords;

    const randomAttack = (enemyBoard) => {
        console.log('wybieram liczby')
        let row = randomCoord();
        let col = randomCoord(); 
        if(enemyBoard.board[row][col] === 'hit' || enemyBoard.board[row][col] === 'miss') {
            console.log('trafilem w stare pole ' + row + ' ' + col)
            randomAttack(enemyBoard) 
        } else {     
            enemyBoard.receiveAttack(row, col) 
            console.log('mam puste pole ' + row + ' ' + col)
            coords = {row, col}
            return coords
        }
        return coords
    }

    return {
        attack,
        randomAttack,
        randomCoord,
        playerType,
        coords
    }
}

export default Player