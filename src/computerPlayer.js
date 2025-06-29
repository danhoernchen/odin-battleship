import { Player } from "./player.js";

export class computerPlayer extends Player {
  constructor(size) {
    super(size);
    this.ships = [5, 4, 3, 3, 2];
  }
  placeShips() {
    let placed = false;
    const x = this.getRandomNum();
    const y = this.getRandomNum();
    this.ships.forEach((length) => {
      placed = false;
      while (!placed) {
        placed = this.placeShip(length);
      }
    });
  }

  placeShip(length) {
    const direction = Math.floor(Math.random() * 1 + 0.5)
      ? "horizontal"
      : "vertical";
    let x = this.getRandomNum();
    let y = this.getRandomNum();
    if (direction === "horizontal") {
      x = x + length > this.board.size ? this.board.size - length : x;
    } else {
      y = y + length > this.board.size ? this.board.size - length : y;
    }

    return this.board.placeShip(x, y, length, direction);
  }

  getRandomNum() {
    return Math.floor(Math.random() * this.board.size) + 1;
  }
}
