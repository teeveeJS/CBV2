function toAlgebraic(arr){
  //will likely be used to display the coordinates after the move
  //should be called before the move is made on the board
  var move;
  var input = board[arr[0].num][arr[0].alf];
  var p = input.name === "p" ? "" : input.name.toString();
  var x = capture(arr) || enPassant(input, arr)? "x" : "";
  if(!p && x) p = numToAlf(arr[0].alf);
  if(checkCastle(input, arr)){
    move = arr[1].alf === 2 ? "0-0-0" : "0-0";
  } else {
    move = p + x + numToAlf(arr[1].alf) + (arr[1].num+1).toString();
  }
  return move;
}

function numToAlf(str){
  var atn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  for(var i=0; i<atn.length; i++){
    if(str === i) str = atn[i];
    //if(arr[1].alf === i) arr[1].alf = atn[i];
  }

  return str;
}

function alfToNum(str){
  //REMEMBER 0-BASED INDEXING!!
  //input will be in the form g1-f3
  var atn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  var start = {
    num: str.substring(1,2) - 1, //0
    alf: str.substring(0,1) //g
  };
  var end = {
    num: str.substring(4,5) - 1, //2
    alf: str.substring(3,4) //f
  }

  for(var i=0; i<atn.length; i++){
    if(start.alf === atn[i]){
      start.alf = i; //changes g to 6
    };
    if(end.alf === atn[i]){
      end.alf = i; //changes f to 5
    };
  }

  if(parseInt(start.alf) === NaN || parseInt(end.alf) === NaN){
    start = {alf: -1, num: -1};
    end = {alf: -1, num: -1};
    //basically sets the objects so that piece will be null
  }

  var mov = [start, end];
  return mov;
}

function mouseToCoord(mouseX, mouseY){
  var mT = parseInt(document.getElementById("board").style.marginTop) + 10;
  var mL = parseInt(document.getElementById("board").style.marginLeft) + 10;

  mouseX -= mL;
  mouseY -= mT;

  var sq = {
    alf: Math.floor(mouseX/sq_size),
    num: Math.floor(mouseY/sq_size)
  }

  if(rotation){
    sq.num = 7 - sq.num;
  }

  console.log(sq);
  return sq;
}
