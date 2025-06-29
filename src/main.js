import { Player } from "./player.js";
import { displayBoard } from "./display.js";
import { computerPlayer } from "./computerPlayer.js";

const player1 = new Player(10, "player-one");
const player2 = new computerPlayer(10);

const playerOneBoard = document.getElementById("gameboard-player-one");
const playerTwoBoard = document.getElementById("gameboard-player-two");

player1.placeShip(1, 1, 3, "vertical");
player1.placeShip(6, 3, 2, "vertical");
player1.placeShip(1, 5, 5, "horizontal");
player1.placeShip(5, 5, 4, "horizontal");
player1.placeShip(9, 2, 4, "horizontal");
player2.placeShips();

displayBoard(player1);
displayBoard(player2);
