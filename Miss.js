function titles([arg1, arg2]) {
let age = Number (arg1);
let gender = arg2;
if (gender == "f") {
    if (age < 16) {
        console.log("Miss");
    } else {
        console.log("Ms.");
    } 
} else {
        if (age < 16) {
            console.log("Master");
        } else {
            console.log("Mr.");
        }
    }
}

 titles (["12", "f"]);