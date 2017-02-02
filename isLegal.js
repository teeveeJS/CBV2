function isLegal(p, mv){//ayy p = mv
  //checks if the output is of the same color
  if(board[mv[1].num][mv[1].alf].substring(0,1) === p.color){
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
      x = isLegalKing(mv);
			break;
    case "p":
      x = isLegalPawn(p, mv);
      break;
  }
  return x;
}
