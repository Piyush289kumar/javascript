// Get Today Date & Time
let toDay = new Date();

// Get Day Name
let dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Output 1
console.log(`Today is: ${dayList[toDay.getDay()]}.`);

// Get Hour, Minutes & Second
let hour = toDay.getHours();
let minute = toDay.getMinutes();
let second = toDay.getSeconds();

// Convertion 24-Format to 12-Format
hour = (hour => 12) ? hour - 12 : hour;

// Postfix
let postFix = (hour => 12) ? "PM" : "AM";

// Afternoon Condition
if (hour === 0 && postFix === "AM") {
    hour = 12;
    postFix = "PM";
}

// Output 2
console.log(`Current time is : ${hour} ${postFix} : ${minute} : ${second}`);