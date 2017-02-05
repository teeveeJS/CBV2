function isLegalKing(piece, move){
  //ignores the possibility of a check
  if(Math.abs(move[1].alf - move[0].alf) <= 1 || Math.abs(move[1].num - move[0].num) <= 1){
    return true;
  }
  return checkCastle(piece, move);
}

function checkCastle(piece, move){
  var rk = selectRook(move);
  var dir = (rk.Alf === 0) ? 1 : -1;
  return Math.abs(move[1].alf - move[0].alf) === 2 && move[1].num === move[0].num &&
      !rk.hasMoved && !piece.hasMoved &&
      isLegalRook([{num: rk.Num, alf: rk.Alf}, {num: rk.Num, alf: piece.alf + dir}]);
}

function selectRook(move){
  switch(move[1].alf + move[1].num){
    case 2: return board[0][0];
    case 6: return board[0][7];
    case 9: return board[7][0];
    case 13: return board[7][7];
    default: return "error";
  }
}
