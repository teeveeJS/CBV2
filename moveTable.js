//this is probably the only place where ps[] might be useful

function getMoves(init_sq){
  //init_sq is an object
  //eg: init_sq === {num: 3, alf: 2}

  var moves = [];

  for(var n=0; n<8; n++){
    for(var a=0; a<8; a++){
      var m = [init_sq, {num: n, alf: a}];
      if(isLegal(init_sq, m)){
        moves.push({num: n, alf: a});
      }
    }
  }

  return moves;
}

function threats(color){
  var threats = [];

  for(var n=0; n<8; n++){
    for(var a=0; a<8; a++){
      if(board[n][a].color === color){
        threats.push(getMoves({num: n, alf: a}));
      }
    }
  }

  return threats;
}

function listThreats(color){
  var t = threats(color);
  
}
