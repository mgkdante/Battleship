import { renderAttacks } from "./renderAttacks.js"
import { updateGameUI } from "./updateGameUI.js"
import { playerTurn } from "../gameController/playerTurn.js"
import { gamePhase, placeShipOnBoard } from "../index.js"

const renderBoard = (player, parentNode) => {
  parentNode.innerHTML = "" // Clear the board
  for (let i = 0; i < player.gameboard.getSize(); i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    parentNode.appendChild(row)
    for (let j = 0; j < player.gameboard.getSize(); j++) {
      const cell = document.createElement("div")
      cell.classList.add("cell")
      cell.id = [i, j, player.isComputer ? 1 : 0].join("-")
      row.appendChild(cell)

      if (player.isComputer) {
        // Enemy board - handle attacks during battle phase
        cell.onclick = () => {
          if (gamePhase === "battle") {
            if (!cell.querySelector(".hit, .miss")) {
              renderAttacks(player, i, j)
              updateGameUI()
              if (!player.gameboard.isAllSunk()) {
                playerTurn()
              }
            } else {
              alert("You have already attacked this cell.")
            }
          }
        }
      } else {
        // Player board - handle ship placement during placement phase
        cell.onclick = () => {
          if (gamePhase === "placement") {
            placeShipOnBoard(player, i, j)
          }
        }
      }
    }
  }
}

export { renderBoard }
