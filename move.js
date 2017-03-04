function move(double_coord, board) {
  //checks for the termination of the game
  if (double_coord.toUpperCase() === "RESIGN") {
    if (MOVE_WHITE) RESULT = "0-1";
    else RESULT = "1-0";
    console.log("Game Over! " + RESULT);
    return null;
  } else if (double_coord.toUpperCase() === "DRAW") {
    RESULT = "1/2-1/2";
    console.log("Game Over! " + RESULT);
    return null;
  } else if (double_coord.toUpperCase() === "ADJOURN") {
    RESULT = "*";
    console.log("Game Over! " + RESULT);
    return null;
  } else if (double_coord.length !== 5) {
    move(prompt("Illegal notation!"), board);
    return null;
  }

  var m = alfToNum(double_coord);
  //m is an array of two objects: start and end
  var piece = board[parseInt(m[0].num)][parseInt(m[0].alf)];

  if (piece) {
    //to check that it is correct player's turn
    if (!MOVE_WHITE && piece.color === "w" ||
      MOVE_WHITE && piece.color === "b") {
        move(prompt("Not your turn!"), board);
        return null;
      }

    if (isLegal(piece, m, board)) {
      //perform the move
      movePieces(piece, m, board);
      displayBoard(board);

      //restarts the process
      move(prompt((MOVE_WHITE ? "White" : "Black") + " to move"), board);
      return null;
    } else {
      move(prompt("Make a legal move!"), board);
      return null;
    }
  } else {
    //call the prompt
    move(prompt("No piece selected!"), board);
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

function movePieces(p, m, board) {
  //console.clear();

  //var notation = toAlgebraic(m);
  //console.log(notation);

  //copies the object from the initial square to the output square
  UNIVERSAL_BOARD[m[1].num][m[1].alf] = UNIVERSAL_BOARD[m[0].num][m[0].alf];

  //special conditions
  if (promotion(p, m)) {
    //TODO: handle BOTH capture and promotion (exd8=Q)
    var Pn;
    while (Pn !== "Q" && Pn !== "R" && Pn !== "B" && Pn !== "N") {
      Pn = prompt("Promote to: Q|R|B|N").toUpperCase();
    }
    UNIVERSAL_BOARD[m[1].num][m[1].alf].name = Pn;
  } else if (checkCastle(p, m, board)) {
    //moves the rook
    var r = selectRook(m, board);
    var side = (r.Alf === 7) ? -1 : 1;
    var r_move = [{num: r.Num, alf: r.Alf}, {num: m[1].num, alf: m[1].alf + side}];
    UNIVERSAL_BOARD = moveRook(r, r_move, board);
  } else if (capture(m, UNIVERSAL_BOARD)) {
    updateGraphicsCapture(p, m);
  } else if (enPassant(p, m, board)) {
    var dir = m[0].num === 3 ? 1 : -1; //up or down? based on color
    UNIVERSAL_BOARD = removePieceFrom(m[1].num + dir, m[1].alf, board);
    updateGraphicsEnPassant(p, m);
  } else {
    null;
  }


  //sets the initial square back to normal
  UNIVERSAL_BOARD = removePieceFrom(m[0].num, m[0].alf, board);
  UNIVERSAL_BOARD[m[1].num][m[1].alf].hasMoved = true;

  MOVES_LIST.push(m);
  MOVE_WHITE = !MOVE_WHITE;

  updateGraphics(p, m);

  return board;
}

function moveRook(p, m, board) {
  //copies the object from the initial square to the output square
  board[m[1].num][m[1].alf] = board[m[0].num][m[0].alf];

  //sets the initial square back to normal
  removePieceFrom(m[0].num, m[0].alf, board);
  board[m[1].num][m[1].alf].hasMoved = true;

  return board;
}
