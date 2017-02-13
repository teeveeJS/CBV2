function isInCheck(color){
  var kingLocation = getKing(color);
  var c = (color === "w") ? "b" : "w";
  var t = getThreatsByColor(c);

  console.log(t);

  for(var i=0; i<t.length; i++){
    if(t[i].num === kingLocation[0] && t[i].alf === kingLocation[1]){
      return true;
    }
  }
  return false;
}

function getKing(color){
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      if(board[j][i].color === color && board[j][i].name === "K"){
        return [j, i];
      }
    }
  }
  return false; //this case should never occur
  //the king can't not be on the board
}

function limTest(num){
  if(num > 7 || num < 0) return false;
  return true;
}
