function solve([num]) {
    let isPrime = true;
    for (var i = 2; i < num; i++) {
        if ( num % i === 0) {
            isPrime = false;
            break;

        }
    }

   if (isPrime) {
    console.log('Prime');
   } else {
    console.log('Not Prime');
   }
}

solve([18])