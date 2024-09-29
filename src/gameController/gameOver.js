const gameOver = (winnerName) => {
  const body = document.querySelector("body")
  const gameOverElement = document.createElement("dialog")
  gameOverElement.classList.add("game-over")

  const gameOverText = document.createElement("p")
  gameOverText.textContent = `Game Over. ${winnerName} wins!`

  const reloadButton = document.createElement("button")
  reloadButton.textContent = "Play Again"
  reloadButton.addEventListener("click", () => {
    location.reload()
  })

  gameOverElement.appendChild(gameOverText)
  gameOverElement.appendChild(reloadButton)

  body.appendChild(gameOverElement)
  gameOverElement.showModal()
}

export { gameOver }
