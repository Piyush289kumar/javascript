let mySym1 = Symbol('a');
let mySym2 = Symbol('b');
let mySym3 = Symbol('c');

const myObj = {
    userName: "Piyush Kumar Raikwar",
    userAge: 21,
    isHuman: true,
    isLoggin: false,
    [mySym1]: 1,
    [mySym2]: 2,
    [mySym3]: 3
};

const myObj2 = Object.assign({}, myObj);
myObj2[Symbol("d")] = 4;

// Make A Function that find out and return as a Array of Every Symbol in Object
const findOutSymInObj = (objAsArgs) => Object.getOwnPropertySymbols(objAsArgs);

// OutPut
console.log(findOutSymInObj(myObj));
console.log(findOutSymInObj(myObj2));