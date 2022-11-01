function solve ([n]) {
n = Number(n);
let = startingStars = 1;
let height = Math.floor( n / 2);
    if (n % 2 == 0) {
    startingStars = 2;
    height = (n / 2) - 1;
} 
for (let row = 0; row < height; row++) {
     console.log("-".repeat((n - startingStars / 2)) - row ) +
    "*".repeat(startingStars) +
    "-".repeat(2 * (row + startingStars)) + 
    "*".repeat(startingStars) +
    "-".repeat((n - startingStars /2) - row));
  }

}

solve(["5"]);