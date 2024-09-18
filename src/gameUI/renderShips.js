import { Ship } from "../gameLogic/ship"

const renderShips = (gameboard) => {
  for (let i = 0; i < gameboard.getSize(); i++) {
    for (let j = 0; j < gameboard.getSize(); j++) {
      if (gameboard.getBoard()[i][j] instanceof Ship) {
        const cell = document.getElementById(`${i}-${j}`)
        cell.classList.add("ship")
      }
    }
  }
}

export { renderShips }
