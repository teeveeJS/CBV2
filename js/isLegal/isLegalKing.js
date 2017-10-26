function isLegalKing(piece, move, board) {

  //redundant, but necessary for checking check
  if (move[0].alf == move[1].alf && move[0].num == move[1].num) return false;

  if (Math.abs(move[1].alf - move[0].alf) <= 1
    && Math.abs(move[1].num - move[0].num) <= 1) {
      //return !isInCheck(piece.color, board, move[1]);
      return True;
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
  let rook_move = [
                    {num: rk.Num, alf: rk.Alf},
                    {num: rk.Num, alf: piece.alf + dir}
                  ];
  return Math.abs(move[1].alf - move[0].alf) == 2 &&
      move[1].num == move[0].num &&
      !rk.hasMoved && !piece.hasMoved &&
      //!isCheck(piece, board, move[1]) && !isCheck(piece, board, inBetween) &&
      isLegalRook(rook_move, board);
}
