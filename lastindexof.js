function lastIndexOf(inputarray, value) {
  var indexlastoccurance = -1;//function returns -1 by default
  for (var i = 0; i < inputarray.length; i++) {
    if(inputarray[i] === value) {
      indexlastoccurance = i;
    }
  }
  return indexlastoccurance;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1), "=?", 3);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2), "=?", 4);
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3), "=?", -1);
console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);