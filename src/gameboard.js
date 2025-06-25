import { Ship } from "./ship";

export class Gameboard {
  constructor() {
    this.ships = 0;
    this.columns = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {},
      10: {},
    };
  }

  placeShip(column, row, length, direction) {
    if (row + length > 10 || column + length > 10) {
      return "Invalid placement";
    }
    for (let i = 0; i < length; i++) {
      if (this.checkIfTaken(column, row + i)) {
        return "Invalid Placement";
      }
    }
    const ship = new Ship(length);
    this.ships++;
    for (let i = 0; i < ship.length; i++) {
      const x = direction === "horizontal" ? column + i : column;
      const y = direction === "vertical" ? row + i : row;
      this.columns[x][y] = {
        hasShip: true,
        ship: ship,
        isHit: false,
      };
    }
  }

  checkIfTaken(column, row) {
    return this.columns[column][row];
  }

  receiveAttack(column, row) {
    if (this.columns[column][row]) {
      const field = this.columns[column][row];
      if (field.isHit) {
        return "Already hit";
      } else if (field.hasShip) {
        field.ship.hit();
        if (field.ship.isSunk) {
          this.ships--;
        }
        return field.ship.hits;
      }
    }
    this.columns[column][row] = { isHit: true };
    return "Water";
  }

  allShipsSunk() {
    return this.ships > 0 ? false : true;
  }
}
