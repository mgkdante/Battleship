import { Ship } from "./gameLogic/ship.js"
import { Player } from "./gameLogic/player.js"
import "./index.css"

let player = new Player("Yesid")
let computer = new Player("Computer")

let carrier = new Ship(5, "Carrier")
let battleship = new Ship(4, "Battleship")
let destroyer = new Ship(3, "Destroyer")
let submarine = new Ship(3, "Submarine")
let patrol = new Ship(2, "Patrol")

let enemyCarrier = new Ship(5)
let enemyBattleship = new Ship(4)
let enemyDestroyer = new Ship(3)
let enemySubmarine = new Ship(3)
let enemyPatrol = new Ship(2)

const placePlayerShips = (playerGameboard) => {
  playerGameboard.placeShip(0, 0, carrier, true)
  playerGameboard.placeShip(0, 1, destroyer, false)
  playerGameboard.placeShip(1, 1, battleship, false)
  playerGameboard.placeShip(2, 1, submarine, true)
  playerGameboard.placeShip(2, 2, patrol, false)
}

const placeEnemyShips = (enemyGameboard) => {
  enemyGameboard.placeShip(0, 0, enemyCarrier, false)
  enemyGameboard.placeShip(0, 1, enemyDestroyer, true)
  enemyGameboard.placeShip(1, 1, enemyBattleship, true)
  enemyGameboard.placeShip(2, 1, enemySubmarine, false)
  enemyGameboard.placeShip(2, 2, enemyPatrol, true)
}

placeEnemyShips(computer.gameboard)
placePlayerShips(player.gameboard)

let body = document.body
let playerBoard = document.createElement("div")
body.appendChild(playerBoard)

for (let i = 0; i < player.gameboard.getSize(); i++) {
  const row = document.createElement("div")
  row.classList.add("row")
  row.id = i
  playerBoard.appendChild(row)
  for (let j = 0; j < player.gameboard.getSize(); j++) {
    const cell = document.createElement("div")
    cell.id = j
    cell.classList.add("cell")
    row.appendChild(cell)
    cell.addEventListener("click", () => {
      player.gameboard.receiveAttack(i, j)
      if (player.gameboard.getBoard()[i][j] instanceof Ship) {
        cell.classList.add("is-ship")
      } else {
        cell.classList.add("is-not-ship")
      }
    })
  }
}
