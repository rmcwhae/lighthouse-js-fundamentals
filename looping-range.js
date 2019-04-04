function range(start, end, step) {
  var outputarray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step < 0) {
    return outputarray;//return empty array
  } else {
    var repeat = start;
    while (repeat <= end) {
      outputarray.push(repeat);
      repeat += step;
    }
    return outputarray;//return non-empty array
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));