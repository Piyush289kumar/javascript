const myObj = {
    name : "Piyush Kumar Raikwar",
    age : 21,
    isHuman : true,
    isLoggin : false
};

console.log(Object.isExtensible(myObj));

Object.freeze(myObj);

console.log(Object.isExtensible(myObj));