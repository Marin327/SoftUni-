

function titles([arg1, arg2]) {
    let age = Number(arg1);
    let gender = arg2;
    if (gender == "f" && age < 16) {
    console.log('Miss'); 
    } else if (gender == 'f' && age >= 16) {
     console.log('Ms.');
    } else if (gender == 'm' && age < 16) {
    console.log('Master'); 
     } else {
    console.log('Mr.');
     }
}