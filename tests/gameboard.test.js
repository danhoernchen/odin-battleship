import { describe, it, expect } from "vitest";
import { Gameboard } from "../src/gameboard";
import { Ship } from "../src/ship";

describe("Gameboard", () => {
  it("should be able to place ships by calling the ship class", () => {
    const game = new Gameboard();
    game.placeShip(1, 1, 3, "vertical");
    expect(game.columns[1][1].hasShip).toBe(true);
    expect(game.columns[1][2].hasShip).toBe(true);
    expect(game.columns[1][3].hasShip).toBe(true);
  });

  it("should be able to place ships by calling the ship class", () => {
    const game = new Gameboard();
    game.placeShip(1, 1, 3, "horizontal");
    expect(game.columns[1][1].hasShip).toBe(true);
    expect(game.columns[2][1].hasShip).toBe(true);
    expect(game.columns[3][1].hasShip).toBe(true);
  });
  it("should be able to receive an attack and determine whether it hit a ship or water, and if it hit a ship, call the ships hit function", () => {
    const game = new Gameboard();
    game.placeShip(1, 1, 3, "horizontal");
    expect(game.receiveAttack(1, 1)).toBe(1);
    expect(game.receiveAttack(2, 2)).toBe("Water");
    expect(game.receiveAttack(2, 2)).toBe("Already hit");
  });
  it("should be able to keep track of all the ships on the board, and report whether all have been sunk", () => {
    const game = new Gameboard();
    game.placeShip(1, 1, 3, "horizontal");
    expect(game.allShipsSunk()).toBe(false);
    game.receiveAttack(1, 1);
    game.receiveAttack(2, 1);
    game.receiveAttack(3, 1);
    expect(game.allShipsSunk()).toBe(true);
  });
});
