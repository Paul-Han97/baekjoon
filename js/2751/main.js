let fs = require("fs");
let input = fs
  .readFileSync("./js/2751/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();
input.sort((a, b) => a - b);

console.log(input.join("\n"));
