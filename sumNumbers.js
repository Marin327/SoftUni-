function sumNumbers(args) {
let n = Number(args[0]);
let sum = 0;
for (let i = 1; i <= n; i++) {
    let currentNum = Number(args[i]);
    sum += currentNum;
  }
    console.log(sum);
}

sumNumbers(["3", "10", "20"]);