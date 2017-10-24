let SELECTED_SQUARE = null;

const DEFAULT_BOARD = [
              [00, 01, 02, 03, 04, 05, 06, 07],
              [10, 11, 12, 13, 14, 15, 16, 17],
              [20, 21, 22, 23, 24, 25, 26, 27],
              [30, 31, 32, 33, 34, 35, 36, 37],
              [40, 41, 42, 43, 44, 45, 46, 47],
              [50, 51, 52, 53, 54, 55, 56, 57],
              [60, 61, 62, 63, 64, 65, 66, 67],
              [70, 71, 72, 73, 74, 75, 76, 77]
            ];
            //defaults which will be changed when initBoard has been called
            //alf = the second number
            //num = the first number

const VALUES = {
  K: 999,
  Q: 9,
  R: 5,
  B: 3,
  N: 3,
  p: 1
};

function constrain(num, min, max) {
  let ma = min || 0;
  let mi = max || 7;

  if (num > ma) return ma;
  if (num < mi) return mi;
  return num;
}

function limTest(num) {
  return !(num > 7 || num < 0);
}

//OBSOLETE (pretty much)
function hasPiece(start, board) {
  let sq = board[parseInt(start.num)][parseInt(start.alf)];
  return sq.color === "w" && MOVE_WHITE ||
        sq.color === "b" && !MOVE_WHITE;
}

//defunct since ps[] not in use
function getContent(n, a/*,board*/) {
  for (let i=0; i<ps.length; i++) {
    if (ps[i].Num === n && ps[i].Alf === a) {
      return ps[i];
    }
  }
  //return board[n][a]; this would work just as well...
  //now that i think of this...probably not all that useful
}

function setNewPieceTo(p, c, n, a, board) {
  return board[n][a] = new Piece(p, c, a, n);
}

function capture(move, board) {
  return board[move[1].num][move[1].alf].color !== undefined;
}
