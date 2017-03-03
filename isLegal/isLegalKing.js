function isLegalKing(piece, move, board) {

  //redundant, but necessary for checking check
  if (move[0].alf === move[1].alf && move[0].num === move[1].num) return false;

  if (Math.abs(move[1].alf - move[0].alf) <= 1 && Math.abs(move[1].num - move[0].num) <= 1) {
    //console.log("test");
    return !isInCheck(piece.color, board, move[1]);
  }
  return checkCastle(piece, move, board);
}

function checkCastle(piece, move, board) {
  var rk = selectRook(move, board);
  var dir = (rk.Alf === 0) ? 1 : -1;
  var inBetween = {
    num: move[1].num,
    alf: piece.alf + dir
  }
  return Math.abs(move[1].alf - move[0].alf) === 2 &&
      move[1].num === move[0].num &&
      !rk.hasMoved && !piece.hasMoved &&
      !isCheck(piece, board, move[1]) && !isCheck(piece, board, inBetween) &&
      isLegalRook([{num: rk.Num, alf: rk.Alf}, {num: rk.Num, alf: piece.alf + dir}], board);
}

function selectRook(move, board) {
  switch (move[1].alf + move[1].num) {
    case 2: return board[0][0];
    case 6: return board[0][7];
    case 9: return board[7][0];
    case 13: return board[7][7];
    default: return "error";
  }
}



//this will be required for the moveTable
function getThreatsKing(sq) {
  var q = [];
  for (var i = -1; i <= 1; i++) {
    for (var j = -1; j <= 1; j++) {
      if (limTest(sq.num + i) && limTest(sq.alf + j)) {
        q.push({num: sq.num+i, alf: sq.alf+j});
      }
    }
  }
  q.splice(4, 1); //removes the threat from the square where the king is
  //the king can't move to its own square
  return q;
}

function isInCheck(color, board, l) {
  var kingLocation = l || getKing(color, board); //if not given by the user;
  var t = listThreatsByColor((color === "w") ? "b" : "w", board);

  for (var i = 0; i < t.length; i++) {
    for (var j = 0; j < t[i].length; j++){
      if(t[i][j].num === kingLocation.num && t[i][j].alf === kingLocation.alf) {
        return true;
      }
    }
  }

  return false;
}

function getKing(color, board) {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (board[j][i].color === color && board[j][i].name === "K") {
        return {num: j, alf: i};
      }
    }
  }
  return false; //this case should never occur
  //the king can't not be on the board
}
