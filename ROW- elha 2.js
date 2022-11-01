function solve([n]) {
   n = Number(n);
    for(let row = 0; row < n ; row++) {
        console.log(" ".repeat(n - 1 - row) + "* ".repeat(row + 1));
       }
         // console.log("* ".repeat(n));
         for(let row = 0; row  < n - 1; row++) {
          console.log(" ".repeat(1 + row) + "* ".repeat(n - 1 - row));
   }
}
 solve(["4"]);