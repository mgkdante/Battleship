import { Gameboard } from "../gameLogic/gameboard.js"
import { Ship } from "../gameLogic/ship.js"

let gameboard
let carrier
let destroyer
let battleship
let submarine
let patrol

beforeEach(() => {
  gameboard = new Gameboard()
  carrier = new Ship(5, "Carrier")
  destroyer = new Ship(3, "Destroyer")
  battleship = new Ship(4, "Battleship")
  submarine = new Ship(3, "Submarine")
  patrol = new Ship(2, "Patrol")
})

test("Create gameboard", () => {
  expect(gameboard.getBoard().length).toBe(10)
  expect(gameboard.getBoard()[0].length).toBe(10)
  expect(gameboard.getBoard()).toStrictEqual([
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
  ])
})

test("Place carrier ship (5) vertically", () => {
  gameboard.placeShip(2, 5, carrier, true)
  expect(gameboard.getBoard()[2][5]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[3][5]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[4][5]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[5][5]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[6][5]).toBeInstanceOf(Ship)
})

test("Place carrier ship (5) horizontally", () => {
  gameboard.placeShip(3, 4, carrier, false)
  expect(gameboard.getBoard()[3][4]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[3][5]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[3][6]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[3][7]).toBeInstanceOf(Ship)
  expect(gameboard.getBoard()[3][8]).toBeInstanceOf(Ship)
})

test("Place carrier ship (5) overlapping another ship", () => {
  gameboard.placeShip(3, 4, carrier, false)
  expect(gameboard.placeShip(2, 5, carrier, true)).toBe(false)
  expect(gameboard.placeShip(2, 5, carrier, true)).toBeFalsy()
})

test("Place carrier ship (5) going over boundaries", () => {
  expect(gameboard.placeShip(8, 8, carrier, true)).toBe(false)
  expect(gameboard.placeShip(8, 8, carrier, true)).toBeFalsy()
})

test("Receive Attack HIT", () => {
  gameboard.placeShip(3, 4, carrier, false)
  expect(gameboard.receiveAttack(3, 4)).toBeTruthy()
  expect(gameboard.receiveAttack(3, 4)).toBe(true)
})

test("Receive Attack MISSED", () => {
  gameboard.placeShip(3, 4, carrier, false)
  expect(gameboard.receiveAttack(9, 9)).toBeFalsy()
  expect(gameboard.getMissedAttacks()).toEqual([[9, 9]])
})

test("Place all ships", () => {
  gameboard.placeShip(0, 0, carrier, true)
  gameboard.placeShip(0, 1, destroyer, false)
  gameboard.placeShip(1, 1, battleship, false)
  gameboard.placeShip(2, 1, submarine, true)
  gameboard.placeShip(2, 2, patrol, false)

  expect(gameboard.getShips()).toStrictEqual([
    carrier,
    destroyer,
    battleship,
    submarine,
    patrol,
  ])
})

test("All Ships are sunk", () => {
  gameboard.placeShip(0, 0, carrier, true)
  gameboard.placeShip(0, 1, destroyer, false)
  gameboard.placeShip(1, 1, battleship, false)
  gameboard.placeShip(2, 1, submarine, true)
  gameboard.placeShip(2, 2, patrol, false)

  // Simulate attacking all ships
  gameboard.receiveAttack(0, 0) // Carrier hit
  gameboard.receiveAttack(1, 0) // Carrier hit
  gameboard.receiveAttack(2, 0) // Carrier hit
  gameboard.receiveAttack(3, 0) // Carrier hit
  gameboard.receiveAttack(4, 0) // Carrier hit
  expect(carrier.getHits()).toBe(5)

  gameboard.receiveAttack(0, 1) // Destroyer hit
  gameboard.receiveAttack(0, 2) // Destroyer hit
  gameboard.receiveAttack(0, 3) // Destroyer hit
  expect(destroyer.getHits()).toBe(3)

  gameboard.receiveAttack(1, 1) // Battleship hit
  gameboard.receiveAttack(1, 2) // Battleship hit
  gameboard.receiveAttack(1, 3) // Battleship hit
  gameboard.receiveAttack(1, 4) // Battleship hit
  expect(battleship.getHits()).toBe(4)

  gameboard.receiveAttack(3, 1) // Submarine hit
  gameboard.receiveAttack(4, 1) // Submarine hit
  gameboard.receiveAttack(5, 1) // Submarine hit
  expect(submarine.getHits()).toBe(3)

  gameboard.receiveAttack(2, 2) // Patrol hit
  gameboard.receiveAttack(2, 3) // Patrol hit
  expect(patrol.getHits()).toBe(2)

  // Assert that all ships are sunk
  expect(gameboard.isAllSunk()).toBe(true)
})

test("NOT All Ships are sunk", () => {
  gameboard.placeShip(0, 0, carrier, true)
  gameboard.placeShip(0, 1, destroyer, false)
  gameboard.placeShip(1, 1, battleship, false)
  gameboard.placeShip(2, 1, submarine, true)
  gameboard.placeShip(2, 2, patrol, false)

  // Simulate attacking all ships
  gameboard.receiveAttack(0, 0) // Carrier hit
  gameboard.receiveAttack(1, 0) // Carrier hit
  gameboard.receiveAttack(2, 0) // Carrier hit
  gameboard.receiveAttack(3, 0) // Carrier hit
  expect(carrier.getHits()).toBe(4)

  gameboard.receiveAttack(0, 1) // Destroyer hit
  gameboard.receiveAttack(0, 2) // Destroyer hit
  gameboard.receiveAttack(0, 3) // Destroyer hit
  expect(destroyer.getHits()).toBe(3)

  gameboard.receiveAttack(1, 1) // Battleship hit
  gameboard.receiveAttack(1, 2) // Battleship hit
  gameboard.receiveAttack(1, 3) // Battleship hit
  gameboard.receiveAttack(1, 4) // Battleship hit
  expect(battleship.getHits()).toBe(4)

  gameboard.receiveAttack(3, 1) // Submarine hit
  gameboard.receiveAttack(4, 1) // Submarine hit
  gameboard.receiveAttack(5, 1) // Submarine hit
  expect(submarine.getHits()).toBe(3)

  gameboard.receiveAttack(2, 2) // Patrol hit
  gameboard.receiveAttack(2, 3) // Patrol hit
  expect(patrol.getHits()).toBe(2)

  // Assert that all ships are sunk
  expect(gameboard.isAllSunk()).toBe(false)
})
