function isLegal(p, mv){//ayy p = mv
  //checks if the output is of the same color
  if(board[mv[1].num][mv[1].alf].color === p.color){
    return false;
  }

  var x;
  switch(p.name){
    case "R":
      x = isLegalRook(mv);
      break;
    case "B":
      x = isLegalBishop(mv);
      break;
    case "N":
      x = isLegalKnight(mv);
      break;
    case "Q":
      x = isLegalRook(mv) || isLegalBishop(mv);
      break;
    case "K":
      x = isLegalKing(p, mv);
      break;
    case "p":
      x = isLegalPawn(p, mv);
      break;
  }

  /*
  1. assume the move has been made
  1.1. probably create a temporary duplicate board
  2. return !isInCheck((white_move) ? "w" : "b") in the position where the move has been made
  */
}
