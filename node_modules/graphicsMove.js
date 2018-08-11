function prelimCheck(event) {
  //mouseX = event.clientX
  //console.log(event.clientX + " " + event.clientY);
  let sq = mouseToCoord(event.clientX, event.clientY);

  //console.log(sq + " " + selectedSquare);

  if (SELECTED_SQUARE === null) {
    SELECTED_SQUARE = sq;
    return null;
  } else if (SELECTED_SQUARE === sq) {
    SELECTED_SQUARE = null;
    return null;
  } else {
    //has clicked two distinct squares
    graphicsMove([SELECTED_SQUARE, sq], UNIVERSAL_BOARD);
  }
}

//mostly recycled code
function graphicsMove(m) {
  SELECTED_SQUARE = null;

  let piece = UNIVERSAL_BOARD[m[0].num][m[0].alf];

  if (isNaN(piece)) {
    //to check that it is correct player's turn
    if (!MOVE_WHITE && piece.color === "w" || MOVE_WHITE && piece.color === "b") {
      alert("Tata pelia pelataan vuorotellen! - K.K.");
      return null;
    }

    if (isLegal(piece, m, UNIVERSAL_BOARD)) {
      let notation = toAlgebraic(piece, m);
      console.log(notation);

      //movePieces(piece, m, UNIVERSAL_BOARD);
      displayBoard(UNIVERSAL_BOARD);

      //restarts the process...kinda
      //document.getElementById("toMove").innerHTML = (white_move ? "White" : "Black") + " to move"));
      return null;
    } else {
      //console.log(piece);
      //console.log(m);
      alert("Make a legal move!");
      return null;
    }
  } else {
    //call the prompt
    alert("No piece selected!");
    return null;
  }
}
