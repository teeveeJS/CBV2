var size = 480;
var sq_size = size/8;

window.onload = function(){
  document.body.style.backgroundColor = "#4d94ff";

  var canvas = document.createElement("CANVAS");
  document.body.appendChild(canvas);
  canvas.setAttribute("id", "board");
  canvas.style.backgroundColor = "#ffffcc";
  canvas.style.marginTop = "50px";
  canvas.style.marginLeft = "50px";

  document.getElementById("start_game").addEventListener("click", new_game);
  document.getElementById("board").addEventListener("click", graphicsMove);

  var can = document.getElementById("board");
  can.height = size;
  can.width = size;

  colorize();

  createPieces();
  initBoard();
  boardGraphics();
  displayBoard();//will be deprecated once graphics are implemented
};

function colorize(){
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      var ctx = document.getElementById("board").getContext("2d");
      if(i%2 === 0 && j%2 !== 0 || i%2 !== 0 && j%2 === 0){
        ctx.fillStyle = "#663300";
        ctx.fillRect(i*sq_size, j*sq_size, sq_size, sq_size);
      }
    }
  }
}

function boardGraphics(){
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");

  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      var sc = getPieceSrc(i, j);
      //console.log(i + " " + j + " " + src);
      if(src !== null && sc !== null){
        if(rotation){
          ctx.drawImage(src, sc.x, sc.y, 1000/3, 1000/3, i*sq_size, (7-j)*sq_size, sq_size, sq_size);
        } else {
          ctx.drawImage(src, sc.x, sc.y, 1000/3, 1000/3, i*sq_size, j*sq_size, sq_size, sq_size);
        }
      }
    }
  }
  return null;
}
