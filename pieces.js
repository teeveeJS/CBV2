function CP(name, color, Alf, Num, isCaptured) {
  this.name = name;
  this.color = color;
  this.Alf = Alf;
  this.Num = Num;
  this.isCaptured = isCaptured;
  this.hasMoved = false; //will not matter unless king or rook
};

function createPieces(){
  ps = []; //empties the array for a new game
  for (j=0; j<8; j++) {
    ps[j] = new CP("p", "w", j, 1, false);
  };
  for(j=8; j<16; j++){
    var temp = j-8;
    ps[j] = new CP("p", "b", temp, 6, false);
  };
  ps[16] = new CP("K", "w", 4, 0, false);
  ps[17] = new CP("K", "b", 4, 7, false);
  ps[18] = new CP("Q", "w", 3, 0, false);
  ps[19] = new CP("Q", "b", 3, 7, false);
  ps[20] = new CP("R", "w", 0, 0, false);
  ps[21] = new CP("R", "w", 7, 0, false);
  ps[22] = new CP("R", "b", 0, 7, false);
  ps[23] = new CP("R", "b", 7, 7, false);
  ps[24] = new CP("B", "w", 2, 0, false);
  ps[25] = new CP("B", "w", 5, 0, false);
  ps[26] = new CP("B", "b", 2, 7, false);
  ps[27] = new CP("B", "b", 5, 7, false);
  ps[28] = new CP("N", "w", 1, 0, false);
  ps[29] = new CP("N", "w", 6, 0, false);
  ps[30] = new CP("N", "b", 1, 7, false);
  ps[31] = new CP("N", "b", 6, 7, false);
  return ps;
};
