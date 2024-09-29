import { Ship } from "./ship.js"

class Gameboard {
  #size
  #board
  #ships
  #missedAttacks
  #allHits

  constructor(size = 10) {
    this.#ships = []
    this.#missedAttacks = []
    this.#size = size
    this.#board = Array(size)
      .fill(null)
      .map(() => Array(size).fill(null))
    this.#allHits = []
  }

  placeShip = (row, column, ship, isVertical) => {
    if (this.canPlaceShip(row, column, ship, isVertical)) {
      for (let i = 0; i < ship.getLength(); i++) {
        const currentRow = isVertical ? row + i : row
        const currentColumn = isVertical ? column : column + i
        this.#board[currentRow][currentColumn] = ship
      }
      this.#ships.push(ship)
      return true
    } else {
      return false
    }
  }

  canPlaceShip = (row, column, ship, isVertical) => {
    if (
      isVertical
        ? row + ship.getLength() > this.#size
        : column + ship.getLength() > this.#size
    ) {
      return false
    }
    for (let i = 0; i < ship.getLength(); i++) {
      const currentRow = isVertical ? row + i : row
      const currentColumn = isVertical ? column : column + i
      if (this.#board[currentRow][currentColumn] instanceof Ship) {
        return false
      }
    }
    return true
  }

  receiveAttack = (row, column) => {
    if (this.#board[row][column] instanceof Ship) {
      this.#board[row][column].hit()
      this.#allHits.push([row, column])
      return true
    } else {
      this.#missedAttacks.push([row, column])
      return false
    }
  }

  isAllSunk = () => {
    return this.#ships.every((ship) => ship.isSunk())
  }

  clearBoard = () => {
    this.#board = Array(this.#size)
      .fill(null)
      .map(() => Array(this.#size).fill(null))
    this.#ships = []
    this.#missedAttacks = []
    this.#allHits = []
  }

  getBoard = () => {
    return this.#board
  }

  getShips = () => {
    return this.#ships
  }

  getMissedAttacks = () => {
    return this.#missedAttacks
  }

  getAllHits = () => {
    return this.#allHits
  }

  getSize = () => {
    return this.#size
  }
}

export { Gameboard }
