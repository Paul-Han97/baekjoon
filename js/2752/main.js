let fs = require('fs');
let input = fs.readFileSync('./js/2752/stdin').toString().split(" ").map(Number);

let result = input.sort((a, b) => a - b).join(" ");

console.log(result);