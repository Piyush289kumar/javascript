// Question 1: Write a JavaScript program to display the current day and time in the following formate
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

// Solution =======

// Get the current date and time
let toDay = new Date();

// Get the day of the week (0-6, Where 0 is Sunday and 6 is Saturday)
let day = toDay.getDay();

// Array of day names
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Display the current day
console.log(`Today is : ${dayList[day]}.`);

// Get the current hour, minute and second

let hour = toDay.getHours();
let minute = toDay.getMinutes();
let second = toDay.getSeconds();

// Determine if it's AM or PM
let prepand = hour >= 12 ? "PM" : "AM";

// Convert 24-hour format to 12-hour format
hour = ((hour) => 12) ? hour - 12 : hour;

// Check for special cases when hour is 0
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0) {
    hour: 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}

// Display the current time
console.log(`Current Time: ${hour} ${prepand} : ${minute} : ${second}`);
