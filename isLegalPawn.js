function isLegalPawn(piece, move){
  //just for readability
  if(white_move){
    return whitePawn(piece, move);
  } else {
    return blackPawn(piece, move);
  }
}

function whitePawn(piece, move){
  var deltaAlf = move[1].alf - move[0].alf;
  var deltaNum = move[1].num - move[0].num;

  //i know i could use else if's ... maybe will once i get all the different rules sorted out
  //double move
  if(deltaAlf === 0 && deltaNum === 2 && !piece.hasMoved && isEmpty(move[1].num-1, move[1].alf) && isEmpty(move[1].num, move[1].alf)){
    return true;
  };
  //single move
  if(deltaAlf === 0 && deltaNum === 1 && isEmpty(move[1].num, move[1].alf)){
    return true;
  };
  //captures (will include en passant)
  if(Math.abs(deltaAlf) === 1 && deltaNum === 1 && board[move[1].num][move[1].alf].color === "b"){
    return true;
  }

}
