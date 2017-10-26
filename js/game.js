function new_game() {
  let new_board = new Board();
  new_board.printBoard();
  move(prompt("white to move"), new_board);
}
