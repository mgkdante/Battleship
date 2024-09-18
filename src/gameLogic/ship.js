class Ship {
  #length
  #hits
  #sunk
  #name

  constructor(length, name) {
    this.#length = length
    this.#hits = 0
    this.#sunk = false
    this.#name = name
  }

  hit = () => {
    this.#hits += 1
    if (this.#hits === this.#length + 1) {
      this.#sunk = true
    }
  }

  isSunk = () => {
    return this.#sunk
  }

  getHits = () => {
    return this.#hits
  }

  getName = () => {
    return this.#name
  }

  getLength = () => {
    return this.#length
  }
}

export { Ship }
