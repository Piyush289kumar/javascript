// Question 2: Write a Javascript program to get the current date.
// Expected Output : mm-dd-yyyy, mm/dd/yyyy, dd-mm-yyyy & dd/mm/yyyy


// Get the current date
let toDay = new Date();

// Get the day of the month
let dd = toDay.getDate();

// Get the month (adding 1 because months are zero-based)
let mm = toDay.getMonth() + 1;

// Get the year
let yyyy = toDay.getFullYear();

// Add Prefix zero(0) if the day is less then 10
dd = dd < 10 ? (dd = "0" + dd) : dd;

// Add Prefix zero(0) if the day is less then 10
mm = mm < 10 ? (mm = '0' + mm) : mm;


// Format the date as mm-dd-yyyy and log it
toDay = `Date format as mm-dd-yyyy ==> ${mm}-${dd}-${yyyy}`;
console.log(toDay);

// Format the date as mm/dd/yyyy and log it 
toDay = `Date format as mm/dd/yyyy ==> ${mm}/${dd}/${yyyy}`;
console.log(toDay);

// Format the date as dd-mm-yyyy and log it
toDay = `Date format as dd-mm-yyyy ==> ${dd}-${mm}-${yyyy}`;
console.log(toDay);

// Format the date as dd/mm/yyyy and log it
toDay = `Date format as dd/mm/yyyy ==> ${dd}/${mm}/${yyyy}`;
console.log(toDay);