var size = 480;
var sq_size = size/8;

window.onload = function(){
  document.body.style.backgroundColor = "#4d94ff";

  var canvasB = document.createElement("CANVAS");
  document.body.appendChild(canvasB);
  canvasB.setAttribute("id", "board_background");
  canvasB.style.backgroundColor = "#ffffcc";
  canvasB.style.marginTop = "50px";
  canvasB.style.marginLeft = "50px";
  canvasB.style.zIndex = -999;

  var canvas = document.createElement("CANVAS");
  document.body.appendChild(canvas);
  canvas.setAttribute("id", "board");
  //canvas.style.backgroundColor = "#ffffcc";
  canvas.style.marginTop = "50px";
  canvas.style.marginLeft = "50px";

  //document.getElementById("start_game").addEventListener("click", new_game);
  document.getElementById("board").addEventListener("click", prelimCheck);

  var can = document.getElementById("board");
  can.height = size;
  can.width = size;

  var canB = document.getElementById("board_background");
  canB.height = size;
  canB.width = size;

  colorize();

  createPieces();
  initBoard();

  initGraphics();

  displayBoard();//will be deprecated once graphics are implemented
};

function colorize(){
  for(var i=0; i<8; i++){
    for(var j=0; j<8; j++){
      var ctx = document.getElementById("board_background").getContext("2d");
      if(i%2 === 0 && j%2 !== 0 || i%2 !== 0 && j%2 === 0){
        ctx.fillStyle = "#663300";
        ctx.fillRect(i*sq_size, j*sq_size, sq_size, sq_size);
      }
    }
  }
}

function initGraphics(){
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
      } else {
        ctx.clearRect(i*sq_size, j*sq_size, sq_size, sq_size);
      }
    }
  }
  return null;
}

function updateGraphics(p, m){
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");
  var sc = getPieceSrc(m[1].alf, m[1].num);

  if(rotation){
    ctx.clearRect(m[0].alf*sq_size, (7-m[0].num)*sq_size, sq_size, sq_size);
  } else {
    ctx.clearRect(m[0].alf*sq_size, m[0].num*sq_size, sq_size, sq_size);
  }

  if(rotation){
    ctx.drawImage(src, sc.x, sc.y, 1000/3, 1000/3, m[1].alf*sq_size, (7-m[1].num)*sq_size, sq_size, sq_size);
  } else {
    ctx.drawImage(src, sc.x, sc.y, 1000/3, 1000/3, m[1].alf*sq_size, m[1].num*sq_size, sq_size, sq_size);
  }

}

function updateGraphicsEnPassant(p, m){
  var dir = m[0].num === 3 ? 1 : -1;
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");
  var sc = getPieceSrc(m[1].alf, m[1].num);

  if(rotation){
    ctx.clearRect(m[1].alf*sq_size, (7-m[1].num-dir)*sq_size, sq_size, sq_size);
  } else {
    ctx.clearRect(m[1].alf*sq_size, (m[1].num+dir)*sq_size, sq_size, sq_size);
  }
}

function updateGraphicsCapture(p, m){
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");

  if(rotation){
    ctx.clearRect(m[1].alf*sq_size, (7-m[1].num)*sq_size, sq_size, sq_size);
  } else {
    ctx.clearRect(m[1].alf*sq_size, m[1].num*sq_size, sq_size, sq_size);
  }
}
