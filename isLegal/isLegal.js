function isLegal(p, mv){//ayy p = mv
  //checks if the output is of the same color
  if(board[mv[1].num][mv[1].alf].color === p.color){
    return false;
  }

  switch(p.name){
    case "R":
      return isLegalRook(mv);
    case "B":
      return isLegalBishop(mv);
    case "N":
      return isLegalKnight(mv);
    case "Q":
      return isLegalRook(mv) || isLegalBishop(mv);
    case "K":
      return isLegalKing(p, mv);
    case "p":
      return isLegalPawn(p, mv);
  }
}
