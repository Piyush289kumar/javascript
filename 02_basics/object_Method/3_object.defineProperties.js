const myObj = {
    name: "Piyush",
}

Object.defineProperties(myObj, { age: { value: 21 }, userId: { value: "AdminUser212" }, isLogginStatus: { value: false } });

console.log(myObj);