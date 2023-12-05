const a = 0;
const b = -0

const c = undefined;
const d = undefined;


console.log(Object.is(a,b));
console.log(a === b);
console.log(Object.is(b,c));
console.log(b === c);
console.log(Object.is(c,d));
console.log(c === d);