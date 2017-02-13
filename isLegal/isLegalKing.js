function isLegalKing(piece, move){
  //ignores the possibility of a check
  if(Math.abs(move[1].alf - move[0].alf) <= 1 && Math.abs(move[1].num - move[0].num) <= 1){
    //return isCheck(piece, move[1]);
    return true;
  }
  return checkCastle(piece, move);
}

function checkCastle(piece, move){
  var rk = selectRook(move);
  var dir = (rk.Alf === 0) ? 1 : -1;
  var inBetween = {num: move[1].num, alf: piece.alf+dir};
  return Math.abs(move[1].alf - move[0].alf) === 2 && move[1].num === move[0].num &&
      !rk.hasMoved && !piece.hasMoved &&
      !isCheck(piece, move[1]) && !isCheck(piece, inBetween) &&
      isLegalRook([{num: rk.Num, alf: rk.Alf}, {num: rk.Num, alf: piece.alf + dir}]);
}

function selectRook(move){
  switch(move[1].alf + move[1].num){
    case 2: return board[0][0];
    case 6: return board[0][7];
    case 9: return board[7][0];
    case 13: return board[7][7];
    default: return "error";
  }
}

//this could be optimized by having a function that gets all threats to one square
function isCheck(piece, output){
  var threats = (piece.color === "w") ? getThreatsByColor("b") : getThreatsByColor("w");
  for(var i=0; i<threats.length; i++){
    if(threats[i].alf === output.alf && threats[i] === output.num){
      return true;
    }
  }
  return false;
}

//this will be required for the moveTable
function getThreatsKing(sq){
  var q = [];
  for(var i=-1; i<=1; i++){
    for(var j=-1; j<=1; j++){
      if(limTest(sq.num+i) && limTest(sq.alf+j)){
        q.push({num: sq.num+i, alf: sq.alf+j});
      }
    }
  }
  q.splice(4, 1);
  return q;
}
