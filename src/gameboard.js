import { Ship } from "./ship.js";

export class Gameboard {
  constructor(size) {
    this.ships = 0;
    this.size = size;
    this.columns = {};
    this.createFields(size);
  }

  placeShip(column, row, length, direction) {
    if (!this.isLegalPlacement(column, row, length, direction)) {
      return false;
    }
    const ship = new Ship(length);
    this.ships++;
    for (let i = 0; i < ship.length; i++) {
      const x = direction === "horizontal" ? column : column + i;
      const y = direction === "vertical" ? row : row + i;
      this.columns[x][y].hasShip = true;
      this.columns[x][y].ship = ship;
    }
    return true;
  }

  isLegalPlacement(column, row, length, direction) {
    const max = direction === "horizontal" ? row + length : column + length;
    if (max > this.size) {
      return false;
    }
    for (let i = 0; i < length; i++) {
      const x = direction === "horizontal" ? column : column + i;
      const y = direction === "vertical" ? row : row + i;
      if (this.columns[x][y].hasShip) {
        return false;
      }
    }
    return true;
  }

  receiveAttack(x, y) {
    const field = this.columns[x][y];
    if (field.isHit) {
      return "Already hit";
    } else if (field.hasShip) {
      field.ship.hit();
      if (field.ship.isSunk) {
        this.ships--;
      }
    }
    field.isHit = true;
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
      for (let j = 1; j <= size; j++) {
        this.columns[i][j] = { hasShip: false, isHit: false, ship: null };
      }
    }
  }
}
