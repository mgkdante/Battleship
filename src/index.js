import { Player } from "./gameLogic/player.js"
import { renderBoard } from "./gameUI/renderBoard.js"
import { randomlyPlaceShips } from "./gameController/randomlyPlaceShips.js"
import { renderShips } from "./gameUI/renderShips.js"
import "./index.css"
import { Ship } from "./gameLogic/ship.js"

window.player = null
window.enemy = null

const dialog = document.querySelector("dialog")
const dialogButton = dialog.querySelector("button")
const inputName = dialog.querySelector("input")
const playerBoard = document.getElementById("player-board")
const enemyBoard = document.getElementById("enemy-board")
const playerTitle = document.getElementById("player-name")

let gamePhase = "placement" // 'placement' or 'battle'
let selectedShip = null
let isVertical = false

// Ship selection elements
const shipList = document.getElementById("ship-list")
const rotateShipButton = document.getElementById("rotate-ship")
const startGameButton = document.getElementById("start-game")
const randomPlacementButton = document.getElementById("random-placement")

rotateShipButton.addEventListener("click", () => {
  isVertical = !isVertical
  rotateShipButton.textContent = `Rotate Ship (${
    isVertical ? "Vertical" : "Horizontal"
  })`
})

const renderShipList = () => {
  const ships = [
    { length: 5, name: "Carrier" },
    { length: 4, name: "Battleship" },
    { length: 3, name: "Destroyer" },
    { length: 3, name: "Submarine" },
    { length: 2, name: "Patrol Boat" },
  ]

  ships.forEach((ship) => {
    const shipItem = document.createElement("li")
    shipItem.textContent = `${ship.name} (${ship.length})`
    shipItem.dataset.length = ship.length
    shipItem.dataset.name = ship.name
    shipItem.addEventListener("click", () => {
      selectedShip = ship
      Array.from(shipList.children).forEach((child) =>
        child.classList.remove("selected")
      )
      shipItem.classList.add("selected")
    })
    shipList.appendChild(shipItem)
  })
}

const initializeGame = () => {
  window.enemy = new Player("Computer", true)
  dialog.showModal()
  dialog.addEventListener("cancel", (event) => event.preventDefault())

  dialogButton.addEventListener("click", (event) => {
    event.preventDefault()
    const playerName = inputName.value
    if (!playerName) {
      alert("Please enter a valid player name.")
      return
    }
    window.player = new Player(playerName)
    renderBoard(window.player, playerBoard)
    renderShipList() // Render ship selection panel
    rotateShipButton.textContent = `Rotate Ship (Horizontal)`
    playerTitle.textContent = playerName
    inputName.value = ""
    dialog.close()
  })
}

initializeGame()

const placeShipOnBoard = (player, row, column) => {
  if (selectedShip) {
    const shipObject = new Ship(selectedShip.length, selectedShip.name)
    const success = player.gameboard.placeShip(
      row,
      column,
      shipObject,
      isVertical
    )
    if (success) {
      renderShips(player)
      // Remove placed ship from selection
      const shipItems = shipList.querySelectorAll("li")
      shipItems.forEach((item) => {
        if (item.dataset.name === selectedShip.name) {
          shipList.removeChild(item)
        }
      })
      selectedShip = null
      // Check if all ships are placed
      if (shipList.children.length === 0) {
        startGameButton.disabled = false
      }
    } else {
      alert("Invalid placement. Please try again.")
    }
  } else {
    alert("Please select a ship to place.")
  }
}

const disableShipSelection = () => {
  shipList.innerHTML = ""
  rotateShipButton.disabled = true
  randomPlacementButton.disabled = true
}

randomPlacementButton.addEventListener("click", () => {
  // Clear any existing ships
  window.player.gameboard.clearBoard()
  // Randomly place ships
  randomlyPlaceShips(window.player.gameboard)
  // Render the ships on the board
  renderShips(window.player)
  // Disable ship selection and enable the Start Game button
  disableShipSelection()
  selectedShip = null
  startGameButton.disabled = false
})

startGameButton.addEventListener("click", () => {
  gamePhase = "battle"
  // Hide ship selection panel
  document.getElementById("ship-selection").style.display = "none"
  // Generate enemy ships
  randomlyPlaceShips(window.enemy.gameboard)
  // Render enemy board
  renderBoard(window.enemy, enemyBoard)
})

export { gamePhase, placeShipOnBoard, isVertical }
