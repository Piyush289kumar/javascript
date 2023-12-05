// Object Constructor Function
// function AdminUser(userIdName, userPassword, userEmail, userTemp, logginStatus) {
//     this.userId = userIdName;
//     this.userPwd = userPassword;
//     this.userEml = userEmail;
//     this.userTmpLog = userTemp;
//     this.isLogIn = logginStatus;
// }

// Add Properties & Method After Declear Object Constructor Function
// AdminUser.prototype.userSecureKey = function () {
//     return `Secure Key ==> ${this.userId}&&${this.userPwd}`;
// }

// const Rashid = new AdminUser("Mo_Rashid", "123", "aalaacws@gmail.com", "Sign Up", true);
// const Shilpi = new AdminUser("ShilpiSoni", "123", "aalaacws@gmail.com", "Sign Out", false);

// console.log(Rashid);

// Method 2. Object.assign()

// const obj1 = {a:1, b:2, c:3};
// const obj2 = {a:11, b:4, c:6};
// const obj3 = {a:111, b:8, c:9};


// const newObj = Object.assign({}, obj1, obj2, obj3);
// const newObj2 = Object.assign({}, obj2, obj3);
// const newObj3 = Object.assign(obj1, obj2, obj3);


// console.log(newObj);
// console.log(newObj2);
// console.log(newObj3);

// Method 3. Object.create()

const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My Name is ${this.name}. Am I human? ${this.isHuman}`);
    },
};

const me = Object.create(person);
me.name = "Piyush Kumar Raikwar";
me.isHuman = true;

me.printIntroduction();