function getThreats(init_sq){
  //init_sq is an object
  //eg: init_sq === {num: 3, alf: 2}

  var moves = [];

  for(var n=0; n<8; n++){
    for(var a=0; a<8; a++){
      var m = [init_sq, {num: n, alf: a}];
      var p = board[init_sq.num][init_sq.alf].name;
      if(p === "p"){
        var threats = getThreatsPawn(init_sq);
        moves.push(threats[0]);
        if(threats.length === 2){
          moves.push(threats[1]);
        }
      } else if(isLegal(board[init_sq.num][init_sq.alf], m)){
        moves.push({num: n, alf: a});
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
