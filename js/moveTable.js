//this is probably the only place where ps[] might be useful

/*
1. function to get all the legal moves for a player (stalemate stuff)
2. function to get all the threats of a player (checkCheck)
the difference between the two functions is that the will use different isLegalPawns()

*/


//LEGAL MOVES
function listMovesByColor(color, board) {
  var t = getMovesByColor(color, board);

  var b = [[], [], [], [], [], [], [], []];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      b[i][j] = "o";
    }
  }

  for (var i = 0; i < t.length; i++) {
    for (var j = 0; j < t[i].length; j++) {
      b[t[i][j].num][t[i][j].alf] = "x";
    }

  }

  for (var i = 7; i >= 0; i--) {
    var str = i.toString() + " ";
    for (var j = 0; j < 8; j++) {
      str += b[i][j] + "  ";
    }
    console.log(str);
  }

  return b;
}


//================================
//THREATS


function listThreatsByColor(color, board) {
  var t = getThreatsByColor(color, board);

  var b = [[], [], [], [], [], [], [], []];
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      b[i][j] = "o";
    }
  }

  for (var i = 0; i < t.length; i++) {
    for (var j = 0; j < t[i].length; j++) {
      b[t[i][j].num][t[i][j].alf] = "x";
    }
  }

  for (var i = 7; i >=0; i--) {
    var str = i.toString() + " ";
    for (var j = 0; j < 8; j++) {
      str += b[i][j] + "  ";
    }
    console.log(str);
  }

  //return b;
  return t;
}


//this will be required for the moveTable
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
