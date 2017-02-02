function numToAlf(str){
  //will likely be used to display the coordinates after the move
}

function alfToNum(str){
  //input will be in the form g1-f3
  var atn = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  var start = {
    num: str.substring(0,1), //1
    alf: str.substring(1,2) //g
  };
  var end = {
    num: str.substring(3, 4), //3
    alf: str.substring(4,5) //f
  }

  for(var i=0; i<atn.length; i++){
    if(start.alf === atn[i]){
      start.alf = i; //changes g to 6
    };
    if(end.alf === atn[i]){
      end.alf = i; //changes f to 5
    };
  }

  var mov = [start, end];
  return mov;
}
