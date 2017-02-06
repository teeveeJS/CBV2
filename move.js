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
  } else if(double_coord.length !== 5){
    move(prompt("Illegal notation!"));
    return null;
  }

  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece = board[parseInt(m[0].num)][parseInt(m[0].alf)];

  if(piece){
    //to check that it is correct player's turn
    if(!white_move && piece.color === "w" ||
      white_move && piece.color === "b"){
        move(prompt("Not your turn!"));
        return null;
      }

    if(isLegal(piece, m)){
      //perform the move
      //console.log(m);
      //var notation = toAlgebraic(m);
      //console.log(notation);
      movePieces(piece, m);
      displayBoard();

      //restarts the process
      move(prompt((white_move ? "White" : "Black") + " to move"));
      return null;
    } else {
      move(prompt("Make a legal move!"));
      return null;
    }
  } else {
    //call the prompt
    move(prompt("No piece selected!"));
    return null;
  }


  /*
  1. get the piece DONE
  2. check if the move is legal DONE
  3. perform the move
  3.1. change the coordinates of the moved piece(s) in the ps-array EDIT: useless
  3.1.1 mark that the piece has moved (possibly captured)
  3.2. reassign changes in board-array
  if the process is interrupted at any point, a new move(prompt()) will be sent

  */



}

function movePieces(p, m){
  console.clear();

  var notation = toAlgebraic(m);
  console.log(notation);

  //copies the object from the initial square to the output square
  board[m[1].num][m[1].alf] = board[m[0].num][m[0].alf];

  //special conditions
  if(promotion(p, m)){
    var Pn;
    while(Pn !== "Q" && Pn !== "R" && Pn !== "B" && Pn !== "N"){
      Pn = prompt("Promote to: Q|R|B|N").toUpperCase();
    }
    board[m[1].num][m[1].alf].name = Pn;
  } else if(checkCastle(p, m)){
    //moves the rook
    var r = selectRook(m);
    var side = (r.Alf === 7) ? -1 : 1;
    var r_move = [{num: r.Num, alf: r.Alf}, {num: m[1].num, alf: m[1].alf+side}];
    moveRook(r, r_move);
  } /*else if(capture(m)){
    //not sure if any special actions need to be taken
    //piece.isCaptured = true is probably the only one
    //and even that is kinda useless, since ps[] is not used
  } */else if(enPassant(p, m)){
    var dir = m[0].num === 3 ? 1 : -1; //up or down? based on color
    removePieceFrom(m[1].num+dir, m[1].alf);
  } else {
    null;
  }


  //sets the initial square back to normal
  removePieceFrom(m[0].num, m[0].alf);
  board[m[1].num][m[1].alf].hasMoved = true;

  moves.push(m);
  white_move = !white_move;
}

function moveRook(p, m){
  //copies the object from the initial square to the output square
  board[m[1].num][m[1].alf] = board[m[0].num][m[0].alf];

  //sets the initial square back to normal
  removePieceFrom(m[0].num, m[0].alf);
  board[m[1].num][m[1].alf].hasMoved = true;
}
