function solve([n]) {
   n = Number(n);
    for(let row = 0; n - 1; row++) {
        console.log(" ".repeat(n - 1 - row) + "* ".repeat(row + 1));

      }
 
}
 solve(["3"]);