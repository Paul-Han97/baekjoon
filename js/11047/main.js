let fs = require("fs");
let input = fs.readFileSync("./js/11047/stdin", 'utf-8').toString().trim().split("\n");
let K = input[0].split(" ").map(Number)[1];

const coins = [];

for(let i = input.length - 1; i > 0; i--) {
    coins.push(Number(input[i]));
}

let count = 0;

for(const coin of coins){
    const quotient = Math.floor(K / coin);
    const canCalculate = quotient > 0;
    
    if(!canCalculate) {
        continue;
    }
    
    const remainder = Math.floor(K % coin);
    count += quotient;
    K = remainder;
    
    if(K === 0) {
        console.log(count);
        return;
    }
}