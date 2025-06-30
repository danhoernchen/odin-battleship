import { displayBoard } from "./display.js";
import { Gameboard } from "./gameboard.js";

export class Player {
  constructor(size, name = "computer") {
    this.board = new Gameboard(size);
    this.name = name;
  }

  placeShip(x, y, size, direction) {
    this.board.placeShip(x, y, size, direction);
  }

  receiveAttack(x, y) {
    this.board.receiveAttack(x, y);
  }
}
