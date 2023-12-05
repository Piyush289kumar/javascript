const myObj = {
    userName : "Piyush Kumar Raikwar",
    userRole :  "Admin",
    userKey : 12,
    isHuman : true,
    isLogIn : false
};

console.log(Object.isSealed(myObj));

Object.seal(myObj);

console.log(Object.isSealed(myObj));
