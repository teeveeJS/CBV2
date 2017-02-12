var size = 400;

window.onload = function(){
  var canvas = document.createElement("CANVAS");
  document.body.appendChild(canvas);
  canvas.setAttribute("id", "board");
  canvas.style.backgroundColor = "black";

  document.getElementById("start_game").addEventListener("click", new_game);
  document.getElementById("board").addEventListener("click", graphicsMove);

  document.getElementById("board").style.height = size + "px";
  document.getElementById("board").style.width = size + "px";
  console.log('board size set to: ' + size);

  document.getElementById("board").style.marginLeft = "-10px";
  document.getElementById("board").style.marginTop = "-10px";

  colorize();

  createPieces();
  initBoard();
  displayBoard();//will be deprecated once graphics are implemented
};

function colorize(){
  var x = 32/3; //someone explain
  var sq_size = size/x;

  for(var i=0; i<x; i++){
    for(var j=0; j<x; j++){
      var ctx = document.getElementById("board").getContext("2d");
      if(i%2 === 0 && j%2 !== 0 || i%2 !== 0 && j%2 === 0){
        ctx.fillStyle = "#adccff";
        ctx.fillRect(i*sq_size, j*sq_size/2, sq_size, sq_size/2);//WHY DO I NEED TO DIVIDE BY 2???
      }
    }
  }
  return sq_size;
}
