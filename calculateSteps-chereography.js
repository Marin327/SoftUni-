function calculateSteps([totalNumberOfSteps, numberOfDancers, numberOfLearningDays]) {
    let totalPercentsOfStepsPerDay= Math.ceil((totalNumberOfSteps / numberOfLearningDays) / totalNumberOfSteps * 100);
    let percentageForEachDancer = totalPercentsOfStepsPerDay / numberOfDancers;
    if (totalPercentsOfStepsPerDay <= 13) {
        console.log(`Yes, they will succeed in that goal! ${percentageForEachDancer.toFixed(2)} %.`);
       } else {
       console.log(`No, they will not succeed in that goal! Required ${percentageForEachDancer.toFixed(2)} % steps to the learned per day`);
    }
    
}
calculateSteps([10464, 20, 20]);