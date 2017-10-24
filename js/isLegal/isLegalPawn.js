function isLegalPawn(piece, move, board) {

  //redundant, but necessary for checking check
  if (move[0].alf == move[1].alf && move[0].num == move[1].num) return false;

  let deltaAlf = Math.abs(move[1].alf - move[0].alf);
  let deltaNum = move[1].num - move[0].num;

  let dir = Math.sign((piece.color == "w") - 0.5);
  // -1: Black, 1: White

  //i know i could use else if's ... maybe will once i get all the different rules sorted out
  //double move
  if (deltaAlf == 0 && dir * deltaNum == 2 && !piece.hasMoved &&
    board.isSqEmpty(move[1].num - dir, move[1].alf) &&
    board.isSqEmpty(move[1].num, move[1].alf)) {
      return true;
  };
  //single move
  if (deltaAlf == 0 && dir * deltaNum == 1 &&
    board.isSqEmpty(move[1].num, move[1].alf)) {
      return true;
  };
  //captures
  if (deltaAlf == 1 && dir * deltaNum == 1 &&
    board.entity[move[1].num][move[1].alf].color != undefined) {
      return true;
  }

  //the last case to check: en passant
  return enPassant(piece, move, board);

}

function enPassant(piece, move, board) {
  let deltaAlf = Math.abs(move[1].alf - move[0].alf);
  let deltaNum = move[1].num - move[0].num;
  let dir = Math.sign((piece.color == "w") - 0.5);
  return deltaAlf == 1 && dir * deltaNum == 1 &&
    board.moves_list[board.moves_list.length-1].toString() == [{num: move[0].num + dir * 2, alf: move[1].alf}, {num: move[0].num, alf: move[1].alf}].toString();
}

//promotion does not need to be checking in isLegalPawn because won't affect legality
function promotion(piece, move) {
  if (piece.name != "p") return false;
  if (piece.color == "w" && move[1].num == 7 ||
    piece.color == "b" && move[1].num == 0) return true;
  return false;
}
