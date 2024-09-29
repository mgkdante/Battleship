import { renderAttacks } from "../gameUI/renderAttacks.js"
import { updateGameUI } from "../gameUI/updateGameUI.js"

const playerTurn = () => {
  let row, column, cell
  do {
    row = Math.floor(Math.random() * 10)
    column = Math.floor(Math.random() * 10)
    cell = document.getElementById(`${row}-${column}-0`) // 0 for player's board
  } while (cell.querySelector(".hit, .miss"))

  renderAttacks(window.player, row, column)
  updateGameUI()
}

export { playerTurn }
