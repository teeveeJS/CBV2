function move(double_coord){
  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece;

  if(hasPiece(m[0])){
    piece = board[parseInt(start.num)][parseInt(start.alf)];
    //better to make it the entire object
  } else {
    //call the prompt
  }

  if(isLegal(piece, m)){
    //perform the move
  }
  /*
  1. get the piece
  2. check if the move is legal
  3. perform the move
  3.1. change the coordinates of the moved piece(s) in the ps-array
  3.1.1 mark that the piece has moved (possibly captured)
  3.2. reassign changes in board-array
  if the process is interrupted at any point, a new move(prompt()) will be sent

  */



}
