function isLegalKing(piece, move){
  //a very basic check for now
  if(Math.abs(move[1].alf - move[0].alf) <= 1 || Math.abs(move[1].num - move[0].num) <= 1){
    return true;
  } else {
    checkCastle(piece, move);
  }
}

function checkCastle(move){

}
