function calculateNumberofDancers([lengthOfHall,widthOfHall,sideOfWardrobe]) {
   let  areaOfHall = (lengthOfHall * 100)  * (widthOfHall * 100);
   let areaOfWardrobe = (sideOfWardrobe * 100) * (sideOfWardrobe * 100);
   let areaOfBench = areaOfHall / 10;

   let  freeAreaOfHall = areaOfHall - areaOfWardrobe - areaOfBench;
   let numberOfDance = Math.floor(freeAreaOfHall / (40 + 7000));

   console.log(numberOfDance);
}

calculateNumberofDancers([70, 20, 4])