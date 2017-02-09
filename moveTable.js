//this is probably the only place where ps[] might be useful

/*
1. function to get all the legal moves for a player (stalemate stuff)
2. function to get all the threats of a player (checkCheck)
the difference between the two functions is that the will use different isLegalPawns()

*/

function getMoves(init_sq){
  //init_sq is an object
  //eg: init_sq === {num: 3, alf: 2}

  var moves = [];

  for(var n=0; n<8; n++){
    for(var a=0; a<8; a++){
      var m = [init_sq, {num: n, alf: a}];
      //has to be modified for the pawn
      if(isLegal(board[init_sq.num][init_sq.alf], m)){
        moves.push({num: n, alf: a});
      }
    }
  }

  return moves;
}

function getMovesByColor(color){
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

function listMovesByColor(color){
  var t = getMovesByColor(color);


  var b = [[], [], [], [], [], [], [], []];
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      b[i][j] = "o";
    }
  }

  for(var i=0; i<t.length; i++){
    for(var j=0; j<t[i].length; j++){
      b[t[i][j].num][t[i][j].alf] = "x";
    }

  }

  for(var i=7; i>=0; i--){
    var str = i.toString() + " ";
    for(var j=0; j<8; j++){
      str += b[i][j] + "  ";
    }
    console.log(str);
  }

  return b;
}
