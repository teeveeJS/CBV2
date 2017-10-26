/*
1. function to get all the legal moves for a player (stalemate stuff)
2. function to get all the threats of a player (checkCheck)
the difference between the two functions is that these will use different isLegalPawns()

*/


function getMoves(init_sq, board) {
  //init_sq is an object
  //eg: init_sq == {num: 3, alf: 2}

  let moves = [];

  for (let n = 0; n < 8; n++) {
    for (let a = 0; a < 8; a++) {
      let m = [init_sq, {num: n, alf: a}];
      if (isLegal(board.entity[init_sq.num][init_sq.alf], m, board)) {
        moves.push({num: n, alf: a});
      }
    }
  }
  return moves;
}

function getMovesByColor(color, board) {
  let moves = [];

  for (let n = 0; n < 8; n++) {
    for (let a = 0; a < 8; a++) {
      if (board.entity[n][a].color == color) {
        threats.push(getMoves({num: n, alf: a}));
      }
    }
  }
  return moves;
}



//threat and protection are synonymous in this case

function getThreats(init_sq, board) {
  //init_sq is an object
  //init_sq represents the initial square of the piece whose threats are checked
  //eg: init_sq == {num: 3, alf: 2}

  let threats = [];

  let p = board.entity[init_sq.num][init_sq.alf].name;
  if (p == "p") {
    let threatsP = getThreatsPawn(init_sq, board);
    //a pawn can have at most 2 threats
    threats.push(threatsP[0]);
    if (threatsP.length == 2) {
      threats.push(threatsP[1]);
    }
  } else if (p == "K") {
    let threatsK = getThreatsKing(init_sq, board);
    for (i in threatsK) {
      threats.push(threatsK[i]);
    }
  } else {
    for (let n = 0; n < 8; n++) {
      for (let a = 0; a < 8; a++) {
        let m = [init_sq, {num: n, alf: a}];
        if (isLegal(p, m, board)) {
          threats.push({num: n, alf: a});
        }
      }
    }
  }
  return threats;
}

function getThreatsByColor(color, board) {
  let threats = [];

  for (let n = 0; n < 8; n++) {
    for (let a = 0; a < 8; a++) {
      if (board.entity[n][a].color == color) {
        threats.push(getThreats({num: n, alf: a}, board));
      }
    }
  }
  return threats;
}




//LEGAL MOVES
function listMovesByColor(color, board) {
  let t = getMovesByColor(color, board);

  let b = copy(EMPTY_BOARD);

  for (let i in t) {
    for (let j in t[i]) {
      b[t[i][j].num][t[i][j].alf] = "x";
    }

  }

  for (let i = 7; i >= 0; i--) {
    let str = i.toString() + " ";
    for (let j = 0; j < 8; j++) {
      str += b[i][j] + "  ";
    }
    console.log(str);
  }

  return b;
}


//======================
//THREATS


function listThreatsByColor(color, board) {
  let t = getThreatsByColor(color, board);

  let b = copy(EMPTY_BOARD);

  for (let i in t) {
    for (let j in t[i]) {
      b[t[i][j].num][t[i][j].alf] = "x";
    }
  }

  for (let i = 7; i >=0; i--) {
    let str = i.toString() + " ";
    for (let j = 0; j < 8; j++) {
      str += b[i][j] + "  ";
    }
    console.log(str);
  }

  //return b;
  return t;
}


function getThreatsKing(sq) {
  let q = [];
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (limTest(sq.num + i) && limTest(sq.alf + j)) {
        q.push({num: sq.num+i, alf: sq.alf+j});
      }
    }
  }
  q.splice(4, 1); //removes the threat from the square where the king is
  //the king can't move to its own square
  return q;
}



function getThreatsPawn(init_sq, board) {
  let threats = [];
  let dir = Math.sign((board.entity[init_sq.num][init_sq.alf].color == "w") - 0.5);
  threats.push({num: init_sq.num + dir, alf: init_sq.alf - 1});
  threats.push({num: init_sq.num + dir, alf: init_sq.alf + 1});
  return threats;
}
