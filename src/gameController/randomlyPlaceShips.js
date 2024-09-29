import { Ship } from "../gameLogic/ship.js"

const randomlyPlaceShips = (gameboard) => {
  const shipsToPlace = [
    new Ship(5, "Carrier"),
    new Ship(4, "Battleship"),
    new Ship(3, "Destroyer"),
    new Ship(3, "Submarine"),
    new Ship(2, "Patrol Boat"),
  ]

  shipsToPlace.forEach((ship) => {
    let placed = false
    while (!placed) {
      const isVertical = Math.random() < 0.5
      const row = Math.floor(Math.random() * gameboard.getSize())
      const column = Math.floor(Math.random() * gameboard.getSize())
      placed = gameboard.placeShip(row, column, ship, isVertical)
    }
  })
}

export { randomlyPlaceShips }
