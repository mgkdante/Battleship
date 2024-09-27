import { Ship } from "../gameLogic/ship"
const randomlyPlaceShips = (gameboard) => {
  let ships = [
    new Ship(5, "Carrier"),
    new Ship(4, "Battleship"),
    new Ship(3, "Destroyer"),
    new Ship(3, "Submarine"),
    new Ship(2, "Patrol"),
  ]

  let isVertical = true

  ships.forEach((ship) => {
    if (gameboard.getShips().length < 5) {
      isVertical = !isVertical
      let row, column
      do {
        row = Math.floor(Math.random() * 10)
        column = Math.floor(Math.random() * 10)
      } while (!gameboard.placeShip(row, column, ship, isVertical))

      gameboard.placeShip(row, column, ship, isVertical)
    }
  })
}

export { randomlyPlaceShips }
