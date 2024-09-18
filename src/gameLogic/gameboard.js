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
      .fill()
      .map((_, i) => Array(size).fill(null))
    this.#allHits = []
  }

  placeShip = (row, column, ship, isVertical) => {
    if (this.canPlaceShip(row, column, ship, isVertical)) {
      for (let i = 0; i < ship.getLength(); i++) {
        if (isVertical) {
          this.#board[row + i][column] = ship
        } else {
          this.#board[row][column + i] = ship
        }
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
    if (this.#board[row][column] instanceof Ship) {
      return false
    } else {
      for (let i = 0; i < ship.getLength(); i++) {
        if (
          isVertical
            ? this.#board[row + i][column] instanceof Ship
            : this.#board[row][column + i] instanceof Ship
        ) {
          return false
        }
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

  getBoard = () => {
    return this.#board
  }

  getShips = () => {
    return this.#ships
  }

  getMissedAttacks = () => {
    return this.#missedAttacks
  }

  getAllHists = () => {
    return this.#allHits
  }

  getSize = () => {
    return this.#size
  }
}

export { Gameboard }
