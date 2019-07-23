let loopyLighthouse = function(range, multiples, words) {
  let firstmultiple = multiples[0];
  let secondmultiple = multiples[1];
  let firstword = words[0];
  let secondword = words[1];
  let output = '';
  for (let i = range[0]; i <= range[1]; i++) {
    if (i !== range[0]) {
      output += '\n';//adds newline character
    }
    if (i % firstmultiple === 0 && i % secondmultiple !== 0) {
      output += firstword;
    } else if (i % secondmultiple === 0 && i % firstmultiple !== 0) {
      output += secondword;
    } else if (i % firstmultiple === 0 && i % secondmultiple === 0) {
      output += firstword + secondword;
    } else {
      output += i;
    }
  }
  return output;
};

console.log(loopyLighthouse([100, 200], [3, 4], ["Loopy", "Lighthouse"]));
console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));