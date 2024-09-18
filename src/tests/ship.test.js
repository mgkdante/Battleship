import { Ship } from "../gameLogic/ship.js"
let ship

beforeEach(() => {
  ship = new Ship(5, "Carrier")
})

test("Ship takes a hit", () => {
  ship.hit()
  ship.hit()
  ship.hit()
  expect(ship.getHits()).toBe(3)
})

test("Ship is sunk", () => {
  ship.hit()
  ship.hit()
  expect(ship.isSunk()).toBe(false)
  ship.hit()
  ship.hit()
  ship.hit()
  ship.isSunk()
  expect(ship.isSunk()).toBe(true)
})
