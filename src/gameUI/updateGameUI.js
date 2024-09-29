import { gameOver } from "../gameController/gameOver.js"

const updateGameUI = () => {
  // Update player's board stats
  const playerBoard = document.getElementById("player-board")
  updateBoardStats(window.player, playerBoard)

  // Update enemy's board stats
  const enemyBoard = document.getElementById("enemy-board")
  updateBoardStats(window.enemy, enemyBoard)

  // Check for game over
  if (window.enemy.gameboard.isAllSunk()) {
    gameOver(window.player.name)
  } else if (window.player.gameboard.isAllSunk()) {
    gameOver(window.enemy.name)
  }
}

const updateBoardStats = (player, board) => {
  const missedAttacks = player.gameboard.getMissedAttacks().length
  const hits = player.gameboard.getAllHits().length

  let infoElement = board.querySelector(".game-info")
  if (!infoElement) {
    infoElement = document.createElement("div")
    infoElement.classList.add("game-info")
    board.appendChild(infoElement)
  }
  infoElement.textContent = `Missed: ${missedAttacks} | Hits: ${hits}`
}

export { updateGameUI }
