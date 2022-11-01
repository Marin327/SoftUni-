function leftAndRightSum(args) {
    let n = Number(args[0]);
    let leftSum = 0;
    let rightSum = 0;

    //calculate let leftSum
    for(let i = 1;  i <= n; i++) {
        leftSum += Number(args[i]);
    }

    console.log(leftSum);
    console.log(rightSum);
}

leftAndRightSum("2", "10", "90", "60", "40");