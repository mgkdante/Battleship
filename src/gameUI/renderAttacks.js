import { Ship } from "../gameLogic/ship"

const renderAttacks = (player, row, column) => {
  const cell = document.getElementById(
    `${row}-${column}-${player.isComputer ? 1 : 0}`
  )

  if (!cell.querySelector(".hit, .miss")) {
    const newElement = document.createElement("div")

    if (player.gameboard.getBoard()[row][column] instanceof Ship) {
      newElement.classList.add("hit")
    } else {
      newElement.classList.add("miss")
    }
    player.gameboard.receiveAttack(row, column)
    cell.appendChild(newElement)
  }
  return {
    missedAttack: player.gameboard.getMissedAttacks(),
    hits: player.gameboard.getAllHits(),
    isAllSunk: player.gameboard.isAllSunk(),
  }
}

export { renderAttacks }
