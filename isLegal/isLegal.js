function isLegal(p, mv, board) {
  //checks if the output is of the same color
  if (board[mv[1].num][mv[1].alf].color === p.color) {
    return false;
  }

  var x;
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

function assumeMove(p, m, board) {
  var b = board; //copies the board

  //copies the object from the initial square to the output square
  b[m[1].num][m[1].alf] = b[m[0].num][m[0].alf];

  if (enPassant(p, m)) {
    var dir = m[0].num === 3 ? 1 : -1; //up or down? based on color
    b[m[1].num + dir][m[1].alf];
  }

  b[m[0].num][m[0].alf];

  //TODO: add "board" to everything as an argument
  //then rename board to universal_board or something
}
