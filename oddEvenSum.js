function oddEvenSum(input) {
 let n = Number(input[0]);
 let oddSum = 0;
 let evenSum = 0;

    for (let i = 1; <= n; i ++) {
        oddSum += Number(input[i]);
        evenSum += Number(input[i + 1]);

    }

    if (oddSum == evenSum) {
            console.log("Yes");
            console.log("Sum = " + oddSum);
            } else {
             let difference = Math.abs("oddSum - evenSum");
               console.log("No");
               console.log("Diff = " + difference);
  }
}


oddEvenSum(["3", "5", "8", "1"]); // No diff = 8 