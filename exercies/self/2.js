// Get current Date & Time
let toDay = new Date();

//Get Day of a month
let dd = toDay.getDate();

// Get Month | Add +1 Because Month are based on zero(0) Index
let mm = toDay.getMonth() + 1;

// Get Year
let yyyy = toDay.getFullYear();

// Condition if Day is less then 10
dd = (dd < 10) ? (dd = '0' + dd ): dd;

// Condition if Month is less then 10
mm = (mm < 10) ? (mm = '0' + mm) : mm;

// Format 1 ==> dd-mm-yyyy log it
toDay = `${dd}-${mm}-${yyyy}`;      
console.log(toDay);


