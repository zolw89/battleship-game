import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";
import Player from "../modules/player";

describe("Player", () => {
  const playerBoard = Gameboard();
  const player = Player("human");
  let submarine = Ship(3);

  describe("Player type", () => {
    test("player type should be human", () => {
      const actual = player.playerType;
      expect(actual).toBe("human");
    });
    test("create new computer player should have player type to be computer", () => {
      const computer = Player("computer");
      const actual = computer.playerType;
      expect(actual).toBe("computer");
    });
  });

  describe("Player attack", () => {
    test("attack on empty board should be miss", () => {
      player.attack(playerBoard, 5, 2);
      const actual = playerBoard.board[5][2];
      expect(actual).toBe("miss");
    });
    test("attack coords with ship should be hit", () => {
      playerBoard.placeShip(submarine, 8, 3);
      player.attack(playerBoard, 8, 3);
      const actual = playerBoard.board[8][3];
      expect(actual).toBe("hit");
      const notHit = playerBoard.board[8][6];
      expect(notHit).toBe("");
    });
  });

  describe("random attack", () => {
    test("random attack on empty board should be miss", () => {
      player.randomAttack(playerBoard);
      const actual = playerBoard.board.every((el) => el === "");
      expect(actual).toBe(false);
    });
  });
});
