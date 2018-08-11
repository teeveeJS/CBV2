const assert = require("assert");
const Coordinates = require("coordinates");

describe("Coordinates", () => {
  describe("toAlgebraic()", () => {
    const b1 = new Board();
    const b2 = new Board("1r2k2r/pb2pp1p/npp2npb/qB1pP3/3P4/N3BN1P/PPPQ1PPR/R3K3 w Qk d6 0 11");
    const b3 = new Board("rnbqkb1r/ppp1pppp/5n2/3p4/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 3");
    const b4 = new Board("rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/5P2/PPP3PP/RNBQKBNR b KQkq - 0 3");

    describe("Basic tests", () => {
      it("pawn move (one square)", () => {
        let move = {
          start: {alf: 3, num: 1},
          end: {alf: 3, num: 2}
        };
        assert.equal(Coordinates.toAlgebraic("P", move, b1, null), "d3");
      });
      it("pawn move (two squares)", () => {
        let move = {
          start: {alf: 3, num: 1},
          end: {alf: 3, num: 3}
        };
        assert.equal(Coordinates.toAlgebraic("P", move, b1, null), "d4");
      });
      it("pawn move (capture)", () => {
        let move = {
          start: {alf: 4, num: 3},
          end: {alf: 3, num: 4}
        };
        assert.equal(Coordinates.toAlgebraic("P", move, b3, null), "exd5");
      });
      it("pawn move (en passant)", () => {
        let move = {
          start: {alf: 4, num: 4},
          end: {alf: 3, num: 5}
        };
        assert.equal(Coordinates.toAlgebraic("P", move, b2, null), "exd6");
      });

      it("Knight move (no conflict)", () => {
        let move = {
          start: {alf: 6, num: 0},
          end: {alf: 5, num: 2}
        };
        assert.equal(Coordinates.toAlgebraic("N", move, b1, null), "Nf3");
      });
    });



  });
});
