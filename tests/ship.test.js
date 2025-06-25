import { expect, it, describe } from "vitest";
import { Ship } from "../src/ship";

describe("Ship", () => {
  it("should return a ship with length 3, no hits and sunk of false, when passed 3", () => {
    expect(new Ship(3)).toMatchObject({ length: 3, hits: 0, sunk: false });
  });
  it("should return an error message when passed 0", () => {
    expect(() => new Ship(0)).toThrowError("Invalid ship length");
  });
  it("should increase hits by 1, when hit is called"),
    () => {
      expect(new Ship(2).hit()).toMatchObject({
        length: 3,
        hits: 1,
        sunk: false,
      });
    };
  it("should return true, when ship with length 3 was hit 3 times"),
    () => {
      ship = new Ship(3);
      ship.hit();
      ship.hit();
      ship.hit();
      expect(ship.isSunk()).toBe(true);
    };
});
