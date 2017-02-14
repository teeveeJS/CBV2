//this could be optimized by having a function that gets all threats to one square
function isCheck(piece, output){
  var threats = (piece.color === "w") ? getThreatsByColor("b") : getThreatsByColor("w");
  console.log(threats);
  for(var i=0; i<threats.length; i++){
    for(var j=0; j<threats[i].length; j++){
      if(threats[i][j].alf === output.alf && threats[i][j].num === output.num){
        return true;
      }
    }
  }
  return false;
}
