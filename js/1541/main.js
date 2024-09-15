const fs = require("fs");
const input = fs.readFileSync("./js/1541/stdin", 'utf-8').toString().trim().split("-");

let result = 0;

for(let i = 0; i < input.length; i++) {
    let num = input[i].split("+").reduce((acc, num) => {
        acc += Number(num);
        return acc;
    }, 0);

    if(i === 0) {
        result += num;
    } else {
        result -= num;
    }
}

console.log(result);