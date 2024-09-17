import {Player} from "../gameLogic/player.js";
import {Gameboard} from "../gameLogic/gameboard.js";
import {Ship} from "../gameLogic/ship.js";

let player
let enemy
let enemyGameboard
let carrier
let destroyer
let battleship
let submarine
let patrol

beforeEach(() => {
    player = new Player('Yesid')
    enemy = new Player("Computer", true)
    enemyGameboard = enemy.gameboard
    carrier = new Ship(5, "Carrier")
    destroyer = new Ship(3, "Destroyer")
    battleship = new Ship(4, "Battleship")
    submarine = new Ship(3, "Submarine")
    patrol = new Ship(2, "Patrol")
    enemyGameboard.placeShip(0,0, carrier, true)
    enemyGameboard.placeShip(0,1, destroyer, false)
    enemyGameboard.placeShip(1,1, battleship, false)
    enemyGameboard.placeShip(2,1, submarine, true)
    enemyGameboard.placeShip(2,2, patrol, false)
})

test('Test attack', () => {
    player.attack(enemyGameboard, 1, 1)
    expect(enemyGameboard.getAllHists()).toStrictEqual([[1,1]])
    expect(enemyGameboard.getMissedAttacks()).toStrictEqual([])
})