const Player = (type) => {

    let playerType = type

    const attack = (enemyBoard, row, col) => enemyBoard.receiveAttack(row, col);

    const randomCoord = (size) => Math.floor(Math.random() * size)

    const randomAttack = (enemyBoard) => {
        let row = randomCoord(10);
        let col = randomCoord(10);

        if(enemyBoard.board[row][col] === '') {
            enemyBoard.receiveAttack(row, col)
        } else {
            randomAttack(enemyBoard)
        }
    }

    return {
        attack,
        randomAttack,
        playerType
    }
}

export default Player