 function calculatePrice([numberOfDancers,numberOfPoints,season,place]) {
    let totalPrice = 0;
    if (place === 'Bulgaria') {
        totalPrice = numberOfDancers * numberOfPoints;
 }  else if (place === 'Abroat') { 
       totalPrice = numberOfDancers * numberOfPoints;
       totalPrice *= 1.5;
     }
     console.log(totalPrice)
}

calculatePrice([25, 98, 'winter', 'Bulgaria'])
    