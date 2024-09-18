const renderBoard = (gameboard, parentNode) => {
  for (let i = 0; i < gameboard.getSize(); i++) {
    const row = document.createElement("div")
    row.classList.add("row")
    parentNode.appendChild(row)
    for (let j = 0; j < gameboard.getSize(); j++) {
      const cell = document.createElement("div")
      cell.classList.add("cell")
      cell.id = [i, j].join("-")
      row.appendChild(cell)
    }
  }
}

export { renderBoard }
