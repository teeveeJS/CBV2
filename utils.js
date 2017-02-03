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
  return board[n][a];
  //now that i think of this...probably not all that useful
}

function removePieceFrom(n, a){
  return board[n][a] = n*10+a;
  //however, doesn't delete the piece from the ps array
}

function setPieceTo(p, c, n, a){
  return board[n][a] = new CP (p, c, a, n);
}
