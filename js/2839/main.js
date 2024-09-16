const fs = require("fs");
let input = fs.readFileSync("./js/2839/stdin", 'utf-8').toString().trim();

const VINYL_3KG = 3;
const VINYL_5KG = 5;

let multiplier = 1;
let count = -1;

while(VINYL_5KG * multiplier <= input) {
    let subtrahend = VINYL_5KG * multiplier;
    let result = input - subtrahend;
    
    if(result % VINYL_3KG === 0) {
        count = multiplier + result / VINYL_3KG;
    }
    
    multiplier++;
}

if(count === -1 && input % VINYL_3KG === 0) {
    count = input / VINYL_3KG;
}

console.log(count);
