function isEmpty(n, a){
  //n (num) and a (alf) constitute the square
  return board[parseInt(n)][parseInt(a)] === "o";
}

//basically the opposite of isEmpty() with the addition of checking for the correct color
function hasPiece(start){
  var sq = board[parseInt(start.num)][parseInt(start.alf)];
  return sq !== "o" &&
        sq.substring(0,1) === "w" && white_move ||
        sq.substring(0,1) === "b" && !white_move; //sq.substring(0,1) === "b" can probably be removed
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
  return board[n][a] = "o";
  //however, doesn't delete the piece from the ps array
}

function setPieceTo(p, c, n, a){
  return board[n][a] = new CP (p, c, a, n);
}
