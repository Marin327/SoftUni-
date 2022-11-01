function onTimeForTheExam([arg1,arg2,arg3,arg4]) {
let examHoure = Number(arg1);
let examMinutes = Number(arg2);
let arriveHours = Number(arg3);
let arriveMinutes = Number(arg4);

let examTotalMinutes = examHours + examHours * 60;
let arriveTotalMinutes = arriveMinutes + arriveHours * 60;

let timeDifference = examTotalMinutes - arriveMinutes;

    if (timeDifference < 0) {
    console.log("late");
    if(Math.abs(timeDifference) < 60) {
        console.log(Math.abs(timeDifference) + "minutes after the start");
    }
} else if (timeDifference <= 30) {
    console.log("On Time");
    if(timeDifference != 0) {
        console.log(timeDifference + " minutes the before the start");
    }

} else {
    console.log("Early");
    if (timeDifference < 60) {
        console.log(Math.abs(timeDifference) + " minutes after the start");
    } else {
        let hours = Math.abs(Math.trunc(timeDifference / 60));
        let minutes = Math.abs(timeDifference % 60);
        if (minutes <10) {
            minutes = "0";
        }
        console.log('${hours}:${minutes} hours after the start');
    }
   }
}
onTimeForTheExam(["9", "30", "9", "10"]);