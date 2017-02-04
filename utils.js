var VALUES = {
  K: 999,
  Q: 9,
  R: 5,
  B: 3,
  N: 3,
  p: 1
};

function isEmpty(n, a){
  //n (num) and a (alf) constitute the square
  return board[parseInt(n)][parseInt(a)].color === undefined;
}

//basically the opposite of isEmpty() with the addition of checking for the correct color
//OBSOLETE (pretty much)
function hasPiece(start){
  var sq = board[parseInt(start.num)][parseInt(start.alf)];
  return sq.color === "w" && white_move ||
        sq.color === "b" && !white_move; //sq.substring(0,1) === "b" can probably be removed
}

function getContent(n, a){
  for(var i=0; i<ps.length; i++){
    if(ps[i].Num === n && ps[i].Alf === a){
      return ps[i];
    }
  }
  //return board[n][a]; this would work just as well...
  //now that i think of this...probably not all that useful
}

function removePieceFrom(n, a){
  return board[n][a] = n*10+a;
  //however, doesn't delete the piece from the ps array
}

function setPieceTo(p, c, n, a){
  return board[n][a] = new CP (p, c, a, n);
}

//could just use .toString();
function equals(o1, o2){
  for(var i=0; i<o1.length; i++){
    for(n in o1[i]){
      if(o1[i][n] !== o2[i][n]){
        return false;
      }
    }
  }
  return true;
}
