import { renderAttacks } from "./renderAttacks.js"
import { updateGameUI } from "./updateGameUI.js"

const renderBoard = (player, parentNode) => {
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
        cell.onclick = () => {
          renderAttacks(player, i, j)
          updateGameUI(player)
        }
      }
    }
  }
}

export { renderBoard }
