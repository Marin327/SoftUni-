function sumTimes([arg1,arg2,arg3]) {
let firstTime = (arg1);
let secondTime = (arg2);
let thirdTime = (arg3);

let sumTimes = firstTime + secondTime + thirdTime;
let minutes = Math.floor (sumTimes / 60);
console.log(minutes);
}

sumTimes(["35","45","44"]);