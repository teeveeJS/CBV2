const assert = require("assert");
const Board = require("board");

describe("Board", () => {
  describe("threatens()", () => {
    const b = new Board();

    it("a piece should not be able to threaten itself", () => {
      assert.equal(b.threatens({alf:6, num:0}, {alf:6, num:0}), false);
    });

    it("a piece should be able to threaten an occupied square", () => {
      assert.equal(b.threatens({alf:6, num:0}, {alf:4, num:1}), true);
    });

    it("a pawn shouldn't attack the square in front of it (0)", () => {
      assert.equal(b.threatens({alf:1, num:1}, {alf:1, num:2}), false);
    });
    it("a pawn shouldn't attack the square in front of it (1)", () => {
      assert.equal(b.threatens({alf:1, num:6}, {alf:1, num:5}), false);
    });

    it("a pawn should attack diagonally adjacent squares in front (0)", () => {
      assert.equal(b.threatens({alf:1, num:1}, {alf:0, num:2}), true);
    });
    it("a pawn should attack diagonally adjacent squares in front (1)", () => {
      assert.equal(b.threatens({alf:1, num:1}, {alf:2, num:2}), true);
    });
    it("a pawn should attack diagonally adjacent squares in front (2)", () => {
      assert.equal(b.threatens({alf:1, num:6}, {alf:2, num:5}), true);
    });
    it("a pawn should attack diagonally adjacent squares in front (3)", () => {
      assert.equal(b.threatens({alf:1, num:6}, {alf:0, num:5}), true);
    });
    it("a pawn should not attack diagonally adjacent squares behind (0)", () => {
      assert.equal(b.threatens({alf:1, num:1}, {alf:0, num:0}), false);
    });
    it("a pawn should not attack diagonally adjacent squares behind (1)", () => {
      assert.equal(b.threatens({alf:1, num:1}, {alf:2, num:0}), false);
    });
    it("a pawn should not attack diagonally adjacent squares behind (2)", () => {
      assert.equal(b.threatens({alf:1, num:6}, {alf:0, num:7}), false);
    });
    it("a pawn should not attack diagonally adjacent squares behind (3)", () => {
      assert.equal(b.threatens({alf:1, num:6}, {alf:2, num:7}), false);
    });
  });
});
