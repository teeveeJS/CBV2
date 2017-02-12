function isLegalPawn(piece, move){
  var deltaAlf = Math.abs(move[1].alf - move[0].alf);
  var deltaNum = move[1].num - move[0].num;

  var dir = Math.sign((piece.color === "w") - 0.5);
  // -1: Black, 1: White

  //i know i could use else if's ... maybe will once i get all the different rules sorted out
  //double move
  if(deltaAlf === 0 && dir*deltaNum === 2 && !piece.hasMoved && isEmpty(move[1].num-dir, move[1].alf) && isEmpty(move[1].num, move[1].alf)){
    ep_sq = {alf: move[0].alf, num: move[0].num+dir}; //the square in front of the initial square
    return true;
  };
  //single move
  if(deltaAlf === 0 && dir*deltaNum === 1 && isEmpty(move[1].num, move[1].alf)){
    return true;
  };
  //captures
  if(deltaAlf === 1 && dir*deltaNum === 1 && board[move[1].num][move[1].alf].color !== undefined){
    return true;
  }

  //the last case to check: en passant
  return enPassant(piece, move);

}

function enPassant(piece, move){
  var deltaAlf = Math.abs(move[1].alf - move[0].alf);
  var deltaNum = move[1].num - move[0].num;
  var dir = Math.sign((piece.color === "w") - 0.5);
  return deltaAlf === 1 && dir*deltaNum === 1 &&
    moves[moves.length-1].toString() === [{num: move[0].num+dir*2, alf: move[1].alf}, {num: move[0].num, alf: move[1].alf}].toString();
}

//promotion does not need to be checking in isLegalPawn because won't affect legality
function promotion(piece, move){
  if(piece.name !== "p") return false;
  if(piece.color === "w" && move[1].num === 7 ||
    piece.color === "b" && move[1].num === 0) return true;
  return false;
}

function getThreatsPawn(init_sq){
  var threats = [];
  var dir = Math.sign((board[init_sq.num][init_sq.alf].color === "w") - 0.5);
  threats.push({num: init_sq.num+dir, alf: init_sq.alf-1});
  threats.push({num: init_sq.num+dir, alf: init_sq.alf+1});
  return threats;
}
