import Gameboard from "../modules/gameboard";
import Ship from "../modules/ship";

describe('Gameboard', () => {
    describe('Board', () => {

        const gameboard = Gameboard();
        let gameArray = gameboard.createBoard(10);

        test('create gameboard with 10 rows', () => {
            const actual = gameArray.length;
            expect(actual).toBe(10)
        })

        test('each row should have 10 elements inside', () => {
            const actual = gameArray[0].length;
            expect(actual).toBe(10)
        })
    })

    describe('Place ship and receive attack', () => {
        const gameboard = Gameboard();
        gameboard.createBoard(10)

        let cruiser = Ship(3)

        test('place ship at position 2,5', () => {
            gameboard.placeShip(cruiser, 2, 5)
            let actual = gameboard.board[2][5].index
            expect(actual).toBe('1')
        })

        test('receive attack at cords 2,5 should put hit in corresponding ship arr and board', () => {
            gameboard.receiveAttack(2,5)
            let actual = gameboard.board[2][5]
            expect(actual).toBe('hit')
        })

        test('receive attack at cords 2,6 should have index equals 2', () => {
            let actual = gameboard.board[2][6].ship.shipArr[1]
            expect(actual).toBe('2')
        })

        test('receive attack at cords 2,6 should put hit in corresponding ship array and board', () => {
            gameboard.receiveAttack(2,6)
            let actual = gameboard.board[2][6]
            let shipActual = cruiser.shipArr[1]
            expect(actual).toBe('hit')
            expect(shipActual).toBe('hit')
        })

        test('receive attack at cords 2,5 2,6 and 2,7 should makes ship sunk', () => {
            gameboard.receiveAttack(2,7)
            let actual = cruiser.isSunk()
            expect(actual).toBe(true)
        })


        test('check if there is only cruiser with all hit, all are sunk should be true', () => {
            let actual = gameboard.areAllSunk()
            expect(actual).toBe(true)

        })

        test('check if we add another ship without all hit, all are sunk should be true', () => {
            let destroyer = Ship(2)
            gameboard.placeShip(destroyer, 8, 2)
            let actual = gameboard.areAllSunk()
            expect(actual).toBe(false)
        })

        test('check if we add another ship without any hits, all are sunk should be false', () => {
            gameboard.receiveAttack(8,2)
            gameboard.receiveAttack(8,3)
            let actual = gameboard.areAllSunk()
            expect(actual).toBe(true)
        })



    })
})