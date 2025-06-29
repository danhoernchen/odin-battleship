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

  attack(x, y, otherPlayer) {
    otherPlayer.board.receiveAttack(x, y);
    displayBoard(otherPlayer);
  }
  receiveAttack(field) {
    const coords = field.id.split("-");
    this.board.receiveAttack(coords[0], coords[1]);
    displayBoard(this);
  }
}
