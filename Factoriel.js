function factoriel ([n]) {
    let product = 1;
    do {
        product *= n;
        n--;
    } while (n > 0);
console.log(product);
} 

factoriel ([6])