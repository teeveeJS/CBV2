'use strict';

let SELECTED_SQUARE = null;

const EMPTY_BOARD = ( function() {
                        let b = [[], [], [], [], [], [], [], []];
                        for (let i = 0; i < 8; i++) {
                          for (let j = 0; j < 8; j++) {
                            b[i][j] = "o";
                          }
                        }
                        return b;
                      }
                    ) ();

            //alf = the second number
            //num = the first number
            // [alf][num]

//STARTING POSITION
const INIT_BOARD = ( function() {
                        let entity = copy(EMPTY_BOARD);
                        let pcs = createPieces();
                        for (let i in pcs) {
                          entity[pcs[i].Num][pcs[i].Alf] = pcs[i];
                        }
                        return entity;
                      }
                    ) ();

const VALUES = {
  K: 999,
  Q: 9,
  R: 5,
  B: 3,
  N: 3,
  p: 1
};

function copy(arr) {
  //creates a deep copy of arr
  return JSON.parse(JSON.stringify(arr));
}

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
