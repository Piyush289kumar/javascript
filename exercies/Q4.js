// Question 4: Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

let str = "w3resource";

let ans = str.split("").reverse().join("");

console.log(str);
console.log(ans);