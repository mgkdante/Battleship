import { Ship } from "./Ship"

class Gameboard {
  #size
  #board

  constructor(size = 10) {
    this.#size = size
    this.#board = Array(size)
      .fill()
      .map((_, i) => Array(size).fill(""))
  }

  placeShip = (row, column, ship, isVertical) => {
    const shipLength = ship.getLength()
    const midPoint = Math.floor(shipLength / 2)
    let start = 0
    let end = 0
    if (isVertical) {
      start = row - midPoint
      end = row + midPoint
      for (let i = start; i < end; i++) {
        this.#board[i][column] = ship.getName()
      }
    } else {
      start = column - midPoint
      end = column + midPoint
      for (let i = start; i < end; i++) {
        this.#board[row][i] = ship.getName()
      }
    }
    return this.#board
  }

  getBoard = () => {
    return this.#board
  }
}

export { Gameboard }
