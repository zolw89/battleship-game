const Ship = (length, dir = "horizontal") => {
  const id = length;
  const shipLength = length;
  let shipArr = [];

  //default ship direction is horizontal
  let direction = dir;

  const randomDirection = () => {
    let directions = ["horizontal", "vertical"];
    direction = directions[Math.floor(Math.random() * 2)];
    return direction;
  };

  const changeDirection = () => {
    if (direction === "horizontal") {
      return (direction = "vertical");
    } else {
      return (direction = "horizontal");
    }
  };

  //pushes to shipArr coord of new ship with number from 1 to ship length

  const shipPositions = (shipLength) => {
    for (let i = 1; i <= shipLength; i++) {
      shipArr.push(`${i}`);
    }
  };
  shipPositions(shipLength);

  const hit = (num) => {
    for (let i = 0; i < shipLength; i++) {
      if (shipArr[i] == num) {
        shipArr[i] = "hit";
      }
    }
    return shipArr;
  };

  const isSunk = () => shipArr.every((pos) => pos === "hit");

  return {
    id,
    shipLength,
    shipArr,
    direction,
    hit,
    isSunk,
    changeDirection,
    randomDirection,
  };
};

// let destroyer = ship(5);
// destroyer.hit(2)
// destroyer.hit(5)
// destroyer.hit(1)
// destroyer.hit(3)
// destroyer.hit(4)
// console.log(destroyer.isSunk())

// console.log(destroyer)

export default Ship;
