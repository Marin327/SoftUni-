function volleyboall([arg1,arg2,arg3]) {
let yearType = arg1;
let holidays = Number(arg2);
let weekendsAtHome = Number(arg3);
let allweekends = 48;
let gamesplayed = 0;

 let gamesPlayed = 3 / 4 * (allweekends - weekendsAtHome) + holidays * 2 / 3 + weekendsAtHome;
 if(yearType == "leap") {
    gamesPlayed = gamesPlayed + 0.15*gamesPlayed;
 }
console.log(Math.floor(gamesPlayed));
}

volleyboall(["normal", "3", "2"]);