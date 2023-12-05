const person = {
    firstName : "Piyush",
    lastName : "Kumar",
    language : "Hi"
};

// Change a property
Object.defineProperty(person, "language", {value : "NO"});

// Add a property
Object.defineProperty(person, "age", {value : 21})

console.log(person);