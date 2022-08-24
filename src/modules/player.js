const Player = (type) => {

    let playerType = type

    const attack = (enemyBoard, row, col) => {
        console.log(enemyBoard.board)
        enemyBoard.receiveAttack(row, col)
    };

    const randomCoord = (size = 10) => Math.floor(Math.random() * size)

    let coords;

    const randomAttack = (enemyBoard) => {
        let row = randomCoord();
        let col = randomCoord(); 
        if(enemyBoard.board[row][col] === 'hit' || enemyBoard.board[row][col] === 'miss') {
            randomAttack(enemyBoard) 
        } else {     
            enemyBoard.receiveAttack(row, col) 
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