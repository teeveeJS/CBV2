function move(double_coord){
  //checks for the termination of the game
  if(double_coord.toUpperCase() === "RESIGN"){
    if(white_move) result = "0-1";
    else result = "1-0";
    console.log("Game Over! " + result);
    return null;
  } else if(double_coord.toUpperCase() === "DRAW"){
    result = "1/2-1/2";
    console.log("Game Over! " + result);
    return null;
  } else if(double_coord.toUpperCase() === "ADJOURN"){
    result = "*";
    console.log("Game Over! " + result);
    return null;
  }

  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece = board[parseInt(m[0].num)][parseInt(m[0].alf)];

  if(piece){
    if(isLegal(piece, m)){
      //perform the move
      movePieces(piece, m);
      displayBoard();
      move(prompt((white_move ? "White" : "Black") + " to move."));
    } else {
      move(prompt("Make a legal move!"));
    }
  } else {
    //call the prompt
    move(prompt("No piece selected!"));
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

function movePieces(p, m){
  //copies the object from the initial square to the output square
  board[m[1].num][m[1].alf] = board[m[0].num][m[0].alf];

  //special conditions
  if(promotion(p, m)){
    var P = "";
    while(P !== "Q" || P !== "R" || P !== "B" || P !== "N"){
      P = prompt("Promote to: Q|R|B|N");
    }
    board[m[1].num][m[1].alf].name = newPiece;
  } else if(castle){
    //moves the rook
    var r = selectRook(move);
    var side = (r.Alf === 0) ? -1 : 1;
    var r_move = [{num: r.Num, alf: r.Alf}, {num: m[1].num+side, alf: r.Alf}];
    movePieces(r, r_move);
    //sets the global boolean back to default, because can be used by both players
    castle = false;
  } else if(capture(m)){

  } else if(enP){


    enP = false;
  } else {
    null;
  }


  //sets the initial square back to normal
  removePieceFrom(m[0].num, m[0].alf);
  board[m[1].num][m[1].alf].hasMoved = true;

  moves.push(m);
  white_move = !white_move;
}
