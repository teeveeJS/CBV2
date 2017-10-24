function isLegalKing(piece, move, board) {

  //redundant, but necessary for checking check
  if (move[0].alf == move[1].alf && move[0].num == move[1].num) return false;

  if (Math.abs(move[1].alf - move[0].alf) <= 1
    && Math.abs(move[1].num - move[0].num) <= 1) {
      return !isInCheck(piece.color, board, move[1]);
  }
  return checkCastle(piece, move, board);
}

function checkCastle(piece, move, board) {
  let rk = selectRook(move, board);
  let dir = (rk.Alf == 0) ? 1 : -1;
  let inBetween = {
    num: move[1].num,
    alf: piece.alf + dir
  }
  return Math.abs(move[1].alf - move[0].alf) == 2 &&
      move[1].num == move[0].num &&
      !rk.hasMoved && !piece.hasMoved &&
      !isCheck(piece, board, move[1]) && !isCheck(piece, board, inBetween) &&
      isLegalRook([{num: rk.Num, alf: rk.Alf}, {num: rk.Num, alf: piece.alf + dir}], board);
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
