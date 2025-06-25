export class Ship {
  constructor(length) {
    if (length < 1) {
      throw new Error("Invalid ship length");
    }
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    this.hits++;
  }

  isSunk() {
    return this.hits >= this.length;
  }
}
