function move(double_coord){
  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece = board[parseInt(m[0].num)][parseInt(m[0].alf)];

  if(piece){
    if(isLegal(piece, m)){
      //perform the move
    }
  } else {
    //call the prompt
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
