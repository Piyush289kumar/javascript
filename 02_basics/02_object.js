const mySbl = Symbol("Symbol Value");

const myObj ={
   "one": { name : "Piyush Kumar Raikwar",
   age : 21,
   workingDays : ["Monday","Tuesday","Wenesday"],
   workingTime : Date(),
   codingLanguages : { FrontEnd : "HTML", BankEnd : "PHP", DataBase : "MYSQL"}},
   "two": { name : "Priya Sonkar",
   age : 21,
   workingDays : ["Monday","Tuesday","Wenesday"],
   workingTime : Date(),
   codingLanguages : { FrontEnd : "VB.Net", BankEnd : "VB.Net", DataBase : "MYSQL"}}}

console.clear();
console.log(`Name => ${myObj["two"]["name"]}`);
console.log(`Age => ${myObj["two"]["age"]}`);
console.log(`Working Time => ${myObj["two"]["workingTime"]}`);
console.log(`Working Days => ${myObj["two"]["workingDays"]}`);
console.log(`Coding Languages => ${myObj["two"]["codingLanguages"]["FrontEnd"]}, ${myObj["two"]["codingLanguages"]["BankEnd"]}, ${myObj["two"]["codingLanguages"]["DataBase"]}`);