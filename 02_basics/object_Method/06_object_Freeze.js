const myObj = {
    name: "Piyush Kumar Raikwar",
    age: 21,
    isHuman: true,
    isLoggin: false
}

console.log(myObj);

Object.freeze(myObj);

// Syntax 1
// This Method is throw a error message
// Object.defineProperty(myObj, age, { value: 22 });

// Syntax 2
// This syntax is not giving error, Just Skip the line of code
myObj.age = 22;

console.log(myObj);