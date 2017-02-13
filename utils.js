var ps = []; //this array is probably useless
//all the objects can be contained within board-array
var white_move = true;
var ep_sq = {alf: null, num: null}; //probably won't be needed
var moves = []; //for en passant, read the last index
moves[0] = 0;
var selectedSquare = null;

var board = [
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

var VALUES = {
  K: 999,
  Q: 9,
  R: 5,
  B: 3,
  N: 3,
  p: 1
};

var result;

var rotation = true;
//true: white in front
//false: black in front

function constrain(num, min, max){
  var ma = min || 0;
  var mi = max || 7;

  if(num > ma) return ma;
  if(num < mi) return mi;
  return num;
}

function limTest(num){
  if(num > 7 || num < 0) return false;
  return true;
}

function isEmpty(n, a){
  //n (num) and a (alf) constitute the square
  return board[parseInt(n)][parseInt(a)].color === undefined;
}

//basically the opposite of isEmpty() with the addition of checking for the correct color
//OBSOLETE (pretty much)
function hasPiece(start){
  var sq = board[parseInt(start.num)][parseInt(start.alf)];
  return sq.color === "w" && white_move ||
        sq.color === "b" && !white_move; //sq.substring(0,1) === "b" can probably be removed
}

//defunct since ps[] not in use
function getContent(n, a){
  for(var i=0; i<ps.length; i++){
    if(ps[i].Num === n && ps[i].Alf === a){
      return ps[i];
    }
  }
  //return board[n][a]; this would work just as well...
  //now that i think of this...probably not all that useful
}

function removePieceFrom(n, a){
  return board[n][a] = n*10+a;
  //however, doesn't delete the piece from the ps array
}

function setNewPieceTo(p, c, n, a){
  return board[n][a] = new CP (p, c, a, n);
}

function capture(move){
  return board[move[1].num][move[1].alf].color !== undefined;
}
