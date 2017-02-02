function isLegal(p, mv){//ayy p = mv
  //checks if the output is of the same color
  //if()


  var x;
  switch(p.substring(1,2)){
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
      x = isLegalPawn(mv);
      break;
  }
  return x;
}
