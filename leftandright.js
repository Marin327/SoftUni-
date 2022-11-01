function leftAndRightSum(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;

    // calculate leftSum
    for(let i = 1;  i <= n; i++) {
        leftSum += Number(args[i]);
    }
    // calculate rightSum
    for(let i = n + 1; i <= 2 *n; i ++) {
        rightSum += Number(args[i]);
    }
 
    let sumDifferent = Math.abs(rightSum - leftSum);

    if (sumDifferent == 0) {
    console.log("Yes, sum = " + rightSum);
   } else  {
    console.log("No, diff = " + sumDifferent);

   }

   }

leftAndRightSum(["2", "10", "90", "60", "40"]);