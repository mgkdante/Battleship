const gameOver = () => {
  let body = document.querySelector("body")
  let gameOverElement = document.createElement("dialog")
  gameOverElement.classList.add("game-over")

  let gameOverText = document.createElement("p")
  gameOverText.textContent = "Game Over"

  let reloadButton = document.createElement("button")
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
