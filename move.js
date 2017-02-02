function move(double_coord){
  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece;

  if(hasPiece(m[0])){
    piece = board[parseInt(start.num)][parseInt(start.alf)].substring(1,2);
  }

  if(isLegal(piece, m)){
    //perform the move
  }
  /*
  1. get the piece
  2. check if the move is legal
  3. perform the move
  if the process is interrupted at any point, a new move(prompt()) will be sent

  */



}

function hasPiece(start){
  var sq = board[parseInt(start.num)][parseInt(start.alf)];
  return sq !== "o" &&
        sq.substring(0,1) === "w" && white_move ||
        sq.substring(0,1) === "b" && !white_move; //sq.substring(0,1) === "b" can probably be removed
}
