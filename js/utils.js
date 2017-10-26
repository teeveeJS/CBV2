let SELECTED_SQUARE = null;

const EMPTY_BOARD = [
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

//STARTING POSITION
function __initBoard() {
  let entity = EMPTY_BOARD;
  let pcs = createPieces();
  for (i in pcs) {
    entity[pcs[i].Num][pcs[i].Alf] = pcs[i];
  }
  return entity;
}
const INIT_BOARD = __initBoard();

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

function selectRook(move, board) {
  switch (move[1].alf + move[1].num) {
    case 2: return board.entity[0][0];
    case 6: return board.entity[0][7];
    case 9: return board.entity[7][0];
    case 13: return board.entity[7][7];
    default: return "error";
  }
}
