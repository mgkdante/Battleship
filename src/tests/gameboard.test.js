import { Gameboard } from "../gameLogic/Gameboard.js"
import { Ship } from "../gameLogic/Ship.js"

let gameboard
let carrier
let destroyer

beforeEach(() => {
  gameboard = new Gameboard()
  carrier = new Ship(5, "Carrier")
  destroyer = new Ship(3, "Destroyer")
})

test("Gameboard board", () => {
  expect(gameboard.getBoard()).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ])
})

test("place ONE ship in board", () => {
  expect(gameboard.placeShip(3, 0, carrier, true)).toStrictEqual([
    ["", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ])
})

test("place TWO ships in board", () => {
  expect(gameboard.placeShip(0, 3, destroyer, false)).toStrictEqual([
    ["", "", "Destroyer", "Destroyer", "Destroyer", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["Carrier", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ])
})
