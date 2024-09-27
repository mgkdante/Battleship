import { Player } from "./gameLogic/player.js"
import { renderBoard } from "./gameUI/renderBoard.js"
import { randomlyPlaceShips } from "./gameController/randomlyPlaceShips.js"
import { renderShips } from "./gameUI/renderShips.js"
import "./index.css"

let player, enemy
const dialog = document.querySelector("dialog")
const dialogButton = dialog.querySelector("button")
const inputName = dialog.querySelector("input")
const playerBoard = document.getElementById("player-board")
const enemyBoard = document.getElementById("enemy-board")
const generateRandomButton = document.getElementById("generate-random")
const playerTitle = document.getElementById("player-name")

const initializeGame = () => {
  enemy = new Player("Enemy", true)
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
    renderBoard(player, playerBoard)
    renderBoard(enemy, enemyBoard)
    randomlyPlaceShips(enemy.gameboard)
    renderShips(enemy) //to remove
    playerTitle.textContent = playerName
    inputName.value = ""
    dialog.close()
  })
}

initializeGame()

generateRandomButton.addEventListener("click", () => {
  randomlyPlaceShips(player.gameboard)
  renderShips(player)
})
