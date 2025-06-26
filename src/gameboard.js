import { Ship } from "./ship";

export class Gameboard {
  constructor(size) {
    this.ships = 0;
    this.columns = {};
    this.createFields(size);
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
      this.columns[x][y].hasShip = true;
      this.columns[x][y].ship = ship;
    }
  }

  checkIfTaken(column, row) {
    return this.columns[column][row].hasShip;
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

  createFields(size) {
    for (let i = 1; i <= size; i++) {
      if (!this.columns[i]) {
        this.columns[i] = {};
      }
      for (let j = 0; j < size; j++) {
        this.columns[i][j] = { hasShip: false, isHit: false, ship: null };
      }
    }
  }
}
