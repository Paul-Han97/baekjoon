let fs = require("fs");
let input = fs.readFileSync("./js/11004/stdin", 'utf-8').toString().trim().split("\n");
const K = input[0].split(" ").map(Number)[1];
const A = input[1].split(" ").map(Number);
A.sort((a, b) => a - b);
console.log(A[K - 1]);