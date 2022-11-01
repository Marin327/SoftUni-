 function calculatePrice([numberOfDancers, numberOfPoints, season, place]) {
       let totalPrice = 0;
      if (place === 'Bulgaria') {
        totalPrice = numberOfDancers * numberOfPoints;
 }     else if (place === 'Abroad') { 
       totalPrice = numberOfDancers * numberOfPoints;
       totalPrice *= 1.5;
     }

        let percentageToSubtract = 0;
        if (place === 'Bulgaria') {
        if (season === 'summer') {
            parcentageToSubtract = 5;
    }   else if (season === 'winter') {
           parcentageToSubtract = 8;
    }

    }    else if (place === 'Abroad') {
        if (season === 'summer') {
            parcentageToSubtract = 10;
        } else if (season === 'winter') {
            parcentageToSubtract = 15;
        }
    }

     let partToSubtract = totalPrice * (percentageToSubtract / 100);
     totalPrice -= partToSubtract;

    console.log(totalPrice) 
}
console.log('Winter BG')
calculatePrice([20, 98, 'winter', 'Bulgaria'])

console.log('Summer Abroad')
calculatePrice([1, 89.5, 'summer', 'Abroad'])