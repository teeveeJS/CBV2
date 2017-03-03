var SIZE = 480;
var SQ_SIZE = SIZE / 8;

window.onload = function() {
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
  can.height = SIZE;
  can.width = SIZE;

  var canB = document.getElementById("board_background");
  canB.height = SIZE;
  canB.width = SIZE;

  colorize();

  createPieces();
  initBoard(UNIVERSAL_BOARD);

  initGraphics(UNIVERSAL_BOARD);

  displayBoard(UNIVERSAL_BOARD);//will be deprecated once graphics are implemented
}

function colorize() {
  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var ctx = document.getElementById("board_background").getContext("2d");
      if (i % 2 === 0 && j % 2 !== 0 || i % 2 !== 0 && j % 2 === 0) {
        ctx.fillStyle = "#663300";
        ctx.fillRect(i * SQ_SIZE, j * SQ_SIZE, SQ_SIZE, SQ_SIZE);
      }
    }
  }
}

function initGraphics(board) {
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");

  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      var colorName = board[j][i].color + board[j][i].name;
      var sc = getPieceSrc(colorName, board);
      //console.log(i + " " + j + " " + src);
      if (src !== null && sc !== null) {
        if (ROTATION) {
          ctx.drawImage(src, sc.x, sc.y, 1000 / 3, 1000 / 3, i * SQ_SIZE, (7 - j) * SQ_SIZE, SQ_SIZE, SQ_SIZE);
        } else {
          ctx.drawImage(src, sc.x, sc.y, 1000 / 3, 1000 / 3, i * SQ_SIZE, j * SQ_SIZE, SQ_SIZE, SQ_SIZE);
        }
      } else {
        ctx.clearRect(i * SQ_SIZE, j * SQ_SIZE, SQ_SIZE, SQ_SIZE);
      }
    }
  }
  return null;
}

function updateGraphics(p, m, board) {
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");
  var sc = getPieceSrc(p.color + p.name, board);

  if (ROTATION) {
    ctx.clearRect(m[0].alf * SQ_SIZE, (7 - m[0].num) * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  } else {
    ctx.clearRect(m[0].alf * SQ_SIZE, m[0].num * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  }

  if (ROTATION) {
    ctx.drawImage(src, sc.x, sc.y, 1000 / 3, 1000 / 3, m[1].alf * SQ_SIZE, (7 - m[1].num) * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  } else {
    ctx.drawImage(src, sc.x, sc.y, 1000 / 3, 1000 / 3, m[1].alf * SQ_SIZE, m[1].num * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  }

}

function updateGraphicsEnPassant(p, m, board) {
  var dir = m[0].num === 3 ? 1 : -1;
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");
  var sc = getPieceSrc(p.color + p.name, board);

  if (ROTATION) {
    ctx.clearRect(m[1].alf * SQ_SIZE, (7 - m[1].num - dir) * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  } else {
    ctx.clearRect(m[1].alf * SQ_SIZE, (m[1].num + dir) * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  }
}

function updateGraphicsCapture(p, m) {
  var ctx = document.getElementById("board").getContext("2d");
  var src = document.getElementById("images");

  if (ROTATION){
    ctx.clearRect(m[1].alf * SQ_SIZE, (7 - m[1].num) * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  } else {
    ctx.clearRect(m[1].alf * SQ_SIZE, m[1].num * SQ_SIZE, SQ_SIZE, SQ_SIZE);
  }
}
