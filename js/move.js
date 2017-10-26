function move(double_coord, board) {
  //checks for the termination of the game
  if (double_coord.toUpperCase() == "RESIGN") {
    if (board.move_white) board.result = "0-1";
    else board.result = "1-0";
    console.log("Game Over! " + board.result);
    return null;
  } else if (double_coord.toUpperCase() == "DRAW") {
    board.result = "1/2-1/2";
    console.log("Game Over! " + board.result);
    return null;
  } else if (double_coord.toUpperCase() == "ADJOURN") {
    board.result = "*";
    console.log("Game Over! " + board.result);
    return null;
  } else if (double_coord.length != 5) {
    move(prompt("Illegal notation!"), board);
    return null;
  }

  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece = board.entity[parseInt(m[0].num)][parseInt(m[0].alf)];

  if (piece) {
    //to check that it is correct player's turn
    if (!board.move_white && piece.color == "w" ||
      board.move_white && piece.color == "b") {
        move(prompt("Not your turn!"), board);
        return null;
      }

    if (isLegal(piece, m, board)) {
      //perform the move
      board.movePieces(piece, m);

      //restarts the process
      move(prompt((board.move_white ? "White" : "Black") + " to move"), board);
      return null;
    } else {
      move(prompt("Make a legal move!"), board);
      return null;
    }
  } else {
    //call the prompt
    // ^actually don't; this is only with graphics!
    move(prompt("No piece selected!"), board);
    return null;
  }


  /*
  1. get the piece
  2. check if the move is legal
  3. perform the move
  3.1. change the coordinates of the moved piece(s) in the ps-array EDIT: useless
  3.1.1 mark that the piece has moved (possibly captured)
  3.2. reassign changes in board-array
  if the process is interrupted at any point, a new move(prompt()) will be sent

  */



}

function moveRook(p, m, board) {
  //copies the object from the initial square to the output square
  board.entity[m[1].num][m[1].alf] = board.entity[m[0].num][m[0].alf];

  //sets the initial square back to normal
  board.removePieceFrom(m[0].num, m[0].alf);
  board.entity[m[1].num][m[1].alf].hasMoved = true;
}
