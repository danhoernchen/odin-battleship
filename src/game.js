import { computerPlayer } from "./computerPlayer.js";
import { displayBoard, displayGame } from "./display.js";
import { Player } from "./player.js";

export class Game {
  constructor(size) {
    this.playerOne = null;
    this.playerTwo = null;
    this.size = size;
    this.attacked = null;
  }

  generatePlayers(playerOneName, playerTwoName = "computer") {
    this.playerOne = new Player(this.size, playerOneName);
    this.playerTwo =
      playerTwoName === "computer"
        ? new computerPlayer(this.size)
        : new Player(this.size, playerTwoName);
    this.attacked = this.playerTwo;
    this.playerTwo.placeShips();
    displayGame(this);
  }

  attack(field) {
    const coord = field.id.split("-");
    this.attacked.receiveAttack(coord[0], coord[1]);
    this.attacked =
      this.attacked === this.playerOne ? this.playerTwo : this.playerOne;
    displayGame(this);
  }
}
