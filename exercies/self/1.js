let toDay = new Date();

let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Sunday"];

console.log(`Today is : ${dayList[toDay.getDay()]}`);


let hour =  toDay.getHours();
let minute = toDay.getMinutes();
let second = toDay.getSeconds();


let postFix = (hour => 12) ? "PM" : "AM";


// convert 24 to 12
hour = (hour >= 12) ? hour - 12 : hour;


if (hour === 0 && postFix === "PM") {
    hour : 12;
    postFix = "PM"
}

if (hour === 0 && postFix === "PM") {
    hour : 0;
    postFix = "AM"
}

console.log(`Current Time is: ${hour} ${postFix} : ${minute} : ${second}`);
