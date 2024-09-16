const fs = require("fs");
let input = fs.readFileSync("./js/1789/stdin", 'utf-8').toString().trim();
input = Number(input);

const count = [];
let subtrahend = 1;

while(input !== 0) {
    const temp = input - subtrahend;

    if(temp < 0) {
        input += count.pop();
        continue;
    }

    count.push(subtrahend++);
    input = temp;
}

console.log(count.length);