const ship = (length) => {

    const shipLength = length;

    let shipArr = [];

    const shipPositions = (shipLength) => {     
        for(let i = 1; i <= shipLength; i++) {
            shipArr.push(`${i}`)
        }
    }

    shipPositions(shipLength)
    
    const hit = (num) => {
        for(let i = 0; i < shipLength; i++) {
            if(shipArr[i] == num) {
                shipArr[i] = 'hit'
            }
        }
        return shipArr
    };

    const isSunk = () => shipArr.every(pos => pos === 'hit');

    return {
        shipLength,
        shipArr,
        hit,
        isSunk
    }
}

// let destroyer = ship(5);
// destroyer.hit(2)
// destroyer.hit(5)
// destroyer.hit(1)
// destroyer.hit(3)
// destroyer.hit(4)
// console.log(destroyer.isSunk())


// console.log(destroyer)

export default ship