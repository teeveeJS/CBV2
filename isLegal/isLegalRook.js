function isLegalRook(move){
  if(!isNaN(board[move[1].num][move[1].alf]) &&
    board[move[1].num][move[1].alf].color === board[move[0].num][move[0].alf]){
    //checks if the output and input squares have the same color piece
    //repetitive but necessary for castling
    return false;
  } else if(move[0].num - move[1].num === 0 && move[0].alf - move[1].alf !== 0){
    return checkRank(move);
  } else if(move[0].num - move[1].num !== 0 && move[0].alf - move[1].alf === 0){
    return checkFile(move);
  } else {
    return false;
  }
}

function checkRank(move){
  //check movement along a rank (alf, second number, file changes)
  var dist = Math.abs(move[0].alf - move[1].alf);
  var dir = Math.sign(move[1].alf - move[0].alf);
  for(var i=1; i<dist; i++){
    if(!isEmpty(move[0].num, move[0].alf+dir*i)){
      return false;
    }
  }
  return true;
}

function checkFile(move){
  //check movement along a file (num, first number, rank changes)
  var dist = Math.abs(move[0].num - move[1].num);
  var dir = Math.sign(move[1].num - move[0].num);
  for(var i=1; i<dist; i++){
    if(!isEmpty(move[0].num+dir*i, move[0].alf)){
      return false;
    }
  }
  return true;
}
