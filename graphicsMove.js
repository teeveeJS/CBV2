function prelimCheck(event){
  //mouseX = event.clientX
  //console.log(event.clientX + " " + event.clientY);
  var sq = mouseToCoord(event.clientX, event.clientY);

  //console.log(sq + " " + selectedSquare);

  if(selectedSquare === null){
    selectedSquare = sq;
    return null;
  } else if(selectedSquare === sq){
    selectedSquare = null;
    return null;
  } else {
    //has clicked two distinct squares
    graphicsMove([selectedSquare, sq]);
  }
}

//mostly recycled code
function graphicsMove(m){
  selectedSquare = null;

  var piece = board[m[0].num][m[0].alf];

  if(piece){
    //to check that it is correct player's turn
    if(!white_move && piece.color === "w" || white_move && piece.color === "b"){
      alert("Tata pelia pelataan vuorotellen! - K.K.");
      return null;
    }

    if(isLegal(piece, m)){
      movePieces(piece, m);
      displayBoard();

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
