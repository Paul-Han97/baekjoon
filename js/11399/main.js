let fs = require("fs");
let input = fs.readFileSync("./js/11399/stdin", 'utf-8').toString().trim().split("\n");
let P = input[1].split(" ").map(Number).sort((a, b) => a - b);

let wait = 0;
let sum = 0;

for(let i = 0; i < P.length; i++) {
    wait = wait + P[i];
    sum += wait;
}

console.log(sum);