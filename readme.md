# Battleship Game

[Play the Battleship Game](https://mgkdante.github.io/Battleship/)

Welcome to the **Battleship Game**! This is a classic naval strategy game implemented in JavaScript using ES6 modules. Play against a computer opponent with options for manual or random ship placement.

## Features

- **Manual Ship Placement**: Place your ships strategically on the board.
- **Random Ship Placement**: Quickly start the game with randomly placed ships.
- **Interactive Gameplay**: Attack the enemy's ships and defend your own.
- **Visual Feedback**: Green circles for hits, red circles for misses.
- **Modular Codebase**: Organized using ES6 modules for easy maintenance.

## Getting Started

### Prerequisites

- **Web Browser**: Modern browser supporting ES6 modules (Chrome, Firefox, Edge).
- **Local Server**: Required to run the game due to module imports.

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mgkdante/Battleship.git

   ```

2. **Navigate to the Project Directory**

   ```bash
   cd Battleship

   ```

3. **Get node_modules**

   ```bash
   bun install

   ```

4. **Start game in dev mode**
   ```bash
   bun run start
   ```

## How to Play

### Enter Your Name

A prompt will appear to enter your name. Click **Accept** to proceed.

### Place Your Ships

#### Manual Placement:

- Select a ship from the list.
- Use **Rotate Ship** to change orientation.
- Click on your board to place the ship.

#### Random Placement:

- Click **Random Placement** to automatically place all ships.

### Start the Game

Click **Start Game** once all ships are placed.

### Battle Phase

- **Your Turn**: Click on the enemy's board to attack.
- **Enemy's Turn**: The computer will attack your ships.

**Visual Indicators:**

- **Green Circle**: Hit
- **Red Circle**: Miss

### Game Over

- The game ends when all ships of one player are sunk.
- A dialog will announce the winner.
