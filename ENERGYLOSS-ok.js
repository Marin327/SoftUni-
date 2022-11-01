function calculateEnergyLoss(inputData) {
 let numberOfTrainingDays = Number (inputData = [0]);
 let numberOfDancers = Number (inputData = [1]);
 let totalEnergyCost = 0;
 let totalEnergy = numberOfDancers * 100 * numberOfTrainingDays;

 for (var index = 1; index <= numberOfTrainingDays; index++) {
    let numberOfTrainingHours = Number(inputData[index + 1]);
    let percentageEnergyCostForCurrentDay = 0;

             if (index % 2 == 0 && numberOfTrainingHours % 2 == 0) {
                 percentageEnergyCostForCurrentDay = 68;
            } else if (index % 2 != 0 && numberOfTrainingHours % 2 == 0) {
                percentageEnergyCostForCurrentDay = 49;
            } else if (index % 2 == 0 && numberOfTrainingHours % 2 != 0) {
                percentageEnergyCostForCurrentDay = 65;
            } else if (index % 2 != 0 && numberOfTrainingHours % 2 != 0) {
                percentageEnergyCostForCurrentDay = 30;
            }
        
  let totalPercentageForEnergyCostForCurrentDay = numberOfDancers * percentageEnergyCostForCurrentDay + totalEnergyCost;
  let totalLeftEnergy = totalEnergy - totalEnergyCost;
  let totalLeftEnergyPerDancer = totalLeftEnergy / numberOfDancers / numberOfTrainingDays;

       if (totalLeftEnergyPerDancer > 50) {
    console.log(`The feel good! Energy left: ${leftEnergyPerDancer.toFixed(2)}`)
      } else {
     console.log(`They are wasted! Energy left: ${leftEnergyPerDancer.toFixed(2)}`)
     }
 }
}

calculateEnergyLoss([4, 10, 5, 8, 2, 3])
calculateEnergyLoss([4, 10, 1, 1, 1, 1])