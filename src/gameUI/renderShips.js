import { Ship } from "../gameLogic/ship"

const renderShips = (player) => {
  for (let i = 0; i < player.gameboard.getSize(); i++) {
    for (let j = 0; j < player.gameboard.getSize(); j++) {
      if (player.gameboard.getBoard()[i][j] instanceof Ship) {
        const cell = document.getElementById(
          `${i}-${j}-${player.isComputer ? 1 : 0}`
        )
        cell.classList.add("ship")
      }
    }
  }
}

export { renderShips }
