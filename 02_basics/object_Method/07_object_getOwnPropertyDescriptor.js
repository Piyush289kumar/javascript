const myObj = {
    name: "Piyush Kumar Raikwar",
    age: 21,
    isHuman: true,
    isLoggin: false
}

const descriptor1 = Object.getOwnPropertyDescriptor(myObj, 'age');

console.log(descriptor1.configurable);
console.log(descriptor1.enumerable);
console.log(descriptor1.writable);
console.log(descriptor1.value);

Object.freeze(myObj);

console.log(descriptor1.configurable);
console.log(descriptor1.enumerable);
console.log(descriptor1.writable);
console.log(descriptor1.value);