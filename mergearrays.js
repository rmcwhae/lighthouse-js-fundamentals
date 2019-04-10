function merge(array1, array2) {
  for(i = 0; i < array2.length; i++) {
    array1.push(array2[i]);//combine the two arrays
  }
  for(var i = 0; i < array1.length; i++) {//insertion sort per https://hackernoon.com/programming-with-js-insertion-sort-1316df8354f5
    var value = array1[i];
    for(var j = i - 1; j > -1 && array1[j] > value; j--) {
      array1[j + 1] = array1[j];
    }
    array1[j + 1] = value
  }
  return array1;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);