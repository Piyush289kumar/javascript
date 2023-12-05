const myObj = {
    userName : "Whats App Bot",
    userRole : "Communication",
    isHuman : false,
    isLogIn : true
};

Object.preventExtensions(myObj);
console.log(Object.isExtensible(myObj));