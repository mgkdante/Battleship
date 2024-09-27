import { Gameboard } from "./gameboard.js"
class Player {
  #name

  constructor(name, isComputer = false) {
    this.#name = name
    this.gameboard = new Gameboard()
    this.isComputer = isComputer
  }

  attack = (enemyGameboard, row, column) => {
    return enemyGameboard.receiveAttack(row, column)
  }
}

export { Player }
