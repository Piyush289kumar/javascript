const myObj = {
    userName : "Piyush Kumar Raikwar",
    userRole : "Admin",
    userKey : 12,
    isHuman : true,
    isLogIn : false
};

console.log(Object.isFrozen(myObj));

Object.freeze(myObj);

console.log(Object.isFrozen(myObj));

