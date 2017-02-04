function isLegalPawn(piece, move){
  var deltaAlf = Math.abs(move[1].alf - move[0].alf);
  var deltaNum = move[1].num - move[0].num;

  var dir = Math.sign((piece.color === "w") - 0.5);
  // -1: Black, 1: White

  //i know i could use else if's ... maybe will once i get all the different rules sorted out
  //double move
  if(deltaAlf === 0 && dir*deltaNum === 2 && !piece.hasMoved && isEmpty(move[1].num-dir, move[1].alf) && isEmpty(move[1].num, move[1].alf)){
    return true;
  };
  //single move
  if(deltaAlf === 0 && dir*deltaNum === 1 && isEmpty(move[1].num, move[1].alf)){
    return true;
  };
  //captures
  if(deltaAlf === 1 && dir*deltaNum === 1 && board[move[1].num][move[1].alf].color !== piece.color){
    return true;
  }
  //en passant
  if(deltaAlf === 1 && dir*deltaNum === 1 &&
    equals(moves[moves.length-1], [{num: move[0].num+dir*2, alf: move[1].alf}, {num: move[0].num, alf: move[1].alf}])){
    return true;
  }

  return false;

}

function checkPromotion(piece, move){
  //this will be called in move.js, because checking promotion won't affect legality
}
