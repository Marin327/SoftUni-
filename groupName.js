 function generateGroupName(input) {
  let bigLetter = input[0];
  let firstSmall = input[1];
  let secondSmall = input[2];
  let thirdSmall = input[3];
  let number = input[4];
  number = Number(number); 
  let counter = 0;

  for (var capitalLetter = 'A'.charCodeAt(0); capitalLetter <= bigLetter.charCodeAt(0); capitalLetter++) {
        for (var firstSmallLetter = 'a'.charCodeAt(0); firstSmallLetter <= firstSmall.charCodeAt(0); firstSmallLetter++) {
             for (var secondSmallLetter = 'a'.charCodeAt(0); secondSmallLetter <= secondSmall.charCodeAt(0); secondSmallLetter++) {
                 for (var thirdSmallLetter = 'a'.charCodeAt(0); thirdSmallLetter <= thirdSmall.charCodeAt(0); thirdSmallLetter++) {
                    for (var digit = 0; digit <= number; digit++) {
                         counter++; 
                       }
                   }
               }
           }
       } 

  counter--;
  console.log(counter)

}
generateGroupName(['R', 'd', 'v', 'r', 7])