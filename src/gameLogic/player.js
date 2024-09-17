import {Gameboard} from "./gameboard.js";
class Player {
    #name

    constructor(name, isComputer = false) {
        this.#name = name
        this.isComputer = isComputer
        this.gameboard = new Gameboard()
    }

    attack = (enemyGameboard, row, column) => {
        return enemyGameboard.receiveAttack(row, column)
    }

}

export {Player}