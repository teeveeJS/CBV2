function new_game(){
  //createPieces();
  //initBoard();
  white_move = true;
  castle = false;
  enP = false;
  moves = [];
  move(prompt("white to move"));
}
