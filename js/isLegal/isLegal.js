function isLegal(p, mv, board) {
  //checks if the output is of the same color
  if (board.entity[mv[1].num][mv[1].alf].color == p.color) {
    return false;
  }

  let x = false;
  switch (p.name) {
    case "R":
      x = isLegalRook(mv, board);
      break;
    case "B":
      x = isLegalBishop(mv, board);
      break;
    case "N":
      x = isLegalKnight(mv, board);
      break;
    case "Q":
      x = isLegalRook(mv, board) || isLegalBishop(mv, board);
      break;
    case "K":
      x = isLegalKing(p, mv, board);
      break;
    case "p":
      x = isLegalPawn(p, mv, board);
      break;
  }

  /*
  1. assume the move has been made
  1.1. probably create a temporary duplicate board
  2. return !isInCheck((white_move) ? "w" : "b") in the position where the move has been made
  */

  /*
  if (x) {
    return assumeMove(p, mv, board);
  }*/

  return x;
}
