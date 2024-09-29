import { Ship } from "../gameLogic/ship.js"

const renderShips = (player) => {
  const board = document.getElementById(
    player.isComputer ? "enemy-board" : "player-board"
  )
  const cells = board.querySelectorAll(".cell")
  cells.forEach((cell) => {
    cell.classList.remove("ship", "vertical", "horizontal")
  })

  for (let i = 0; i < player.gameboard.getSize(); i++) {
    for (let j = 0; j < player.gameboard.getSize(); j++) {
      if (player.gameboard.getBoard()[i][j] instanceof Ship) {
        const cell = document.getElementById(
          `${i}-${j}-${player.isComputer ? 1 : 0}`
        )
        cell.classList.add("ship")
        // For player's board, add orientation class
        if (!player.isComputer) {
          const ship = player.gameboard.getBoard()[i][j]
          const positions = getShipPositions(player.gameboard, ship)
          const orientation =
            positions[0][0] !== positions[1][0] ? "vertical" : "horizontal"
          cell.classList.add(orientation)
        }
      }
    }
  }
}

const getShipPositions = (gameboard, ship) => {
  const positions = []
  for (let i = 0; i < gameboard.getSize(); i++) {
    for (let j = 0; j < gameboard.getSize(); j++) {
      if (gameboard.getBoard()[i][j] === ship) {
        positions.push([i, j])
      }
    }
  }
  return positions
}

export { renderShips }
