let fs = require("fs");
const input = fs
  .readFileSync("./js/11650/stdin", "utf-8")
  .toString()
  .trim()
  .split("\n");
const [N, ...inputPos] = input;
const pos = [];

for (const coordinate of inputPos) {
  const [x, y] = coordinate.split(" ").map(Number);
  pos.push({ x: x, y: y });
}

pos.sort((a, b) => {
  if (a.x === b.x) {
    return a.y - b.y;
  }
  return a.x - b.x;
});

for(const {x, y} of pos) {
    console.log(x, y);
}