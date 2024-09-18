import {Gameboard} from "./gameboard.js";
class Player {
    #name

    constructor(name) {
        this.#name = name
        this.gameboard = new Gameboard()
    }

    attack = (enemyGameboard, row, column) => {
        return enemyGameboard.receiveAttack(row, column)
    }

}

export {Player}