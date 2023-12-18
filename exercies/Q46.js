/* Write a JavaScript program to convert a given number into hours and minutes.
Solution :  */

function timeConvertionFnc(anyInteger){

    // Convert Hour
    let numToHour = Math.floor(anyInteger / 60);

    // Convert Minutes
    let numToMinutes = (anyInteger % 60);

    console.log(`${numToHour} hour : ${numToMinutes} minutes`);
}

timeConvertionFnc(350);
timeConvertionFnc(71);
timeConvertionFnc(450);
timeConvertionFnc(1441);