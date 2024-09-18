import { Player } from "./gameLogic/player.js"
import { renderBoard } from "./gameUI/renderBoard.js"
import { placeGameShips } from "./gameController/placeGameShips.js"
import { renderShips } from "./gameUI/renderShips.js"
import "./index.css"

let player, enemy
const dialog = document.querySelector("dialog")
const dialogButton = dialog.querySelector("button")
const inputName = dialog.querySelector("input")
const playerBoard = document.getElementById("player-board")
const enemyBoard = document.getElementById("enemy-board")
const generateRandomButton = document.getElementById("generate-random")

const initializeGame = () => {
  enemy = new Player("Enemy")
  dialog.showModal()
  dialog.addEventListener("cancel", (event) => event.preventDefault())

  dialogButton.addEventListener("click", (event) => {
    event.preventDefault()
    const playerName = inputName.value
    if (!playerName) {
      alert("Please enter a valid player name.")
      return
    }
    player = new Player(playerName)
    renderBoard(player.gameboard, playerBoard)
    renderBoard(enemy.gameboard, enemyBoard)
    inputName.value = ""
    dialog.close()
  })
}

initializeGame()

generateRandomButton.addEventListener("click", () => {
  placeGameShips(player.gameboard)
  renderShips(player.gameboard)
})
