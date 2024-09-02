* node --stack-size=65536 Main.js

```js
let fs = require('fs');
let input = fs.readFileSync(0, 'utf-8').toString().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
console.log(a+b);
```