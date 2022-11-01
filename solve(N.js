function solve([n]) {
    n = Number(n);
    for (let row = 1; row <= n; row++) {
         let string = "";
         for (let col = 1; col <= n; col++) {
         string += "*";
    }
    console.log(string);
  }
}
solve(["20"]);