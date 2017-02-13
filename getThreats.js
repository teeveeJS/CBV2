//threat and protection are synonymous in this case

function getThreats(init_sq){
  //init_sq is an object
  //init_sq represents the initial square of the piece whose threats are checked
  //eg: init_sq === {num: 3, alf: 2}

  var moves = [];

  var p = board[init_sq.num][init_sq.alf].name;
  if(p === "p"){
    var threats = getThreatsPawn(init_sq);
    moves.push(threats[0]);
    if(threats.length === 2){
      moves.push(threats[1]);
    }
  } else if(p === "K"){
    var thr = getThreatsKing(init_sq);
    for(var i=0; i<thr.length; i++){
      moves.push(thr[i]);
    }
  } else {
    for(var n=0; n<8; n++){
      for(var a=0; a<8; a++){
        var m = [init_sq, {num: n, alf: a}];
        var temp;
        switch (p){
          case "Q":
            temp = isLegalRook(m) ||
                isLegalBishop(m);
            break;
          case "R":
            temp = isLegalRook(m);
            break;
          case "N":
            temp = isLegalKnight(m);
            break;
          case "B":
            temp = isLegalBishop(m);
            break;
          default: temp = false;
        }
        if(temp){
          moves.push({num: n, alf: a});
        }
      }
    }
  }
  return moves;
}

function getThreatsByColor(color){
  var threats = [];

  for(var n=0; n<8; n++){
    for(var a=0; a<8; a++){
      if(board[n][a].color === color){
        threats.push(getThreats({num: n, alf: a}));
      }
    }
  }
  return threats;
}
