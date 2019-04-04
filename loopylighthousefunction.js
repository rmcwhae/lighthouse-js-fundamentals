function loopyLighthouse(range, multiples, words) {
  var firstmultiple = multiples[0];
  var secondmultiple = multiples[1];
  var firstword = words[0];
  var secondword = words[1];
  for (var i = range[0]; i <= range[1]; i++) {
    if (i % firstmultiple === 0 && i % secondmultiple !== 0) {
      console.log(firstword);
    } else if (i % secondmultiple === 0 && i % firstmultiple !== 0) {
      console.log(secondword);
    } else if (i % firstmultiple === 0 && i % secondmultiple === 0) {
      console.log(firstword + secondword);
    } else {
      console.log(i);
    }
  }
}

loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]);
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);