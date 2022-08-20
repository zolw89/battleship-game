import Ship from "../modules/ship"

let destroyer = Ship(5);



test('Returns was hit in 2nd pos', () => {
    expect(destroyer.hit(2)).toStrictEqual(['1','hit','3','4','5'])
})

test('Returns was hit in 3rd pos', () => {
    expect(destroyer.hit(3)).toStrictEqual(['1','hit','hit','4','5'])
})

test("Ship shouldn't be sunk", () => {
    expect(destroyer.isSunk()).toBe(false)
})
test('Returns was hit in 1st pos', () => {
    expect(destroyer.hit(1)).toStrictEqual(['hit','hit','hit','4','5'])
})
test('Returns was hit in 4th pos', () => {
    expect(destroyer.hit(4)).toStrictEqual(['hit','hit','hit','hit','5'])
})
test('Returns was hit in 5th pos', () => {
    expect(destroyer.hit(5)).toStrictEqual(['hit','hit','hit','hit','hit'])
})
test("Ship shouldn't be sunk", () => {
    expect(destroyer.isSunk()).toBe(true)
})

