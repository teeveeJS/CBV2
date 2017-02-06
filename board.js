function initBoard(){
  for(var i=0; i<ps.length; i++){
    //console.log(i);
    board[ps[i].Num][ps[i].Alf] = ps[i];
    //much easier to copy the object over to the board
  }
}

function invertedBoard(){
  //console.clear();
  for(var i=0; i<8; i++){
    var str = "";
    for(var j=0; j<8; j++){
      if(board[i][j].color !== undefined){
        str += board[i][j].color + board[i][j].name + " ";
      } else {
        str += "o  "; //the board-array never actually contains "o";
      }
    }
    console.log(String(i+1) + " " + str);
  }
  console.log(". a  b  c  d  e  f  g  h");
}

function displayBoard(){
  //console.clear();
  for(var i=7; i>=0; i--){
    var str = "";
    for(var j=0; j<8; j++){
      if(board[i][j].color !== undefined){
        str += board[i][j].color + board[i][j].name + " ";
      } else {
        str += "o  "; //the board-array never actually contains "o";
      }
    }
    console.log(String(i+1) + " " + str);
  }
  console.log(". a  b  c  d  e  f  g  h");
}

function clearBoard(){
  for(var i=0; i<8; i++){
    for (var j=0; j<8; j++){
      board[i][j] = i*10+j;
    }
  }
}
