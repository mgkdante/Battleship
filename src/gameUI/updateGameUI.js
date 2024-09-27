import { playerTurn } from "../gameController/playerTurn.js"
import { gameOver } from "../gameController/gameOver.js"

const updateGameUI = (player) => {
  const board = document.querySelector(
    `${player.isComputer ? "#enemy-board" : "#player-board"}`
  )
  const missedAttacks = player.gameboard.getMissedAttacks().length
  const hits = player.gameboard.getAllHits().length
  const isAllSunk = player.gameboard.isAllSunk()

  let infoElement = board.querySelector(".game-info")
  if (!infoElement) {
    infoElement = document.createElement("div")
    infoElement.classList.add("game-info")
    board.appendChild(infoElement)
  }
  infoElement.textContent = `Missed: ${missedAttacks} | Hits: ${hits}`

  if (isAllSunk) {
    gameOver()
  } else {
    // playerTurn(player, enemy)
  }
}

export { updateGameUI }
