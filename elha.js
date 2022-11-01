function solve([n]) {
    n = Number(n);
    let width = 5 * n;
    let height = n;
    let glassWidth = 2 * n;
    let frameIndex = Math.floor((n / 2) - 1);
    if(n % 2 == 0);
       frameIndex = Math.floor(((n / 2) -1) -1);

   console.log("*".repeat(glassWidth));
   let frame = "";
   for (let row = 0; row < height - 2; row++) {
    if (row == frameIndex) {
         frame = "|".repeat(n);
    } else {
        frame = " ".repeat(n);
    }
   console.log(`*${"/".repeat(glassWidth - 2)}*${frame}*${"/".repeat(glassWidth - 2)}*`);
   }
   console.log("*".repeat(glassWidth));
}

solve (["6"]);