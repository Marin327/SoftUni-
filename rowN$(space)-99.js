function solve([n]) {
   n = Number(n);
   for (let row = 100; row < n + 100; row++) {
       console.log("$ ".repeat(row - 99));
       }
    }

    solve(["4"]);