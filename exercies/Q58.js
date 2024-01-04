// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

/* Question 58: WAP to create a string using the middle three characters of a given string of odd length. The string len must be greater than or equal to three.*/

function middleStr(anyString = 'non'){
  
    if(anyString.length % 2 != 0){
      
    if(anyString.length < 3){
        return false;
    }
    
    let middlePointer = (Math.floor(anyString.length  / 2) - 1);
    return anyString.slice(middlePointer,middlePointer + 3);
    
    }else{
        return anyString;
    }
}

console.log(middleStr("abcdefg"));
console.log(middleStr("HTML5"));
console.log(middleStr("Python"));
console.log(middleStr("PHP"));
console.log(middleStr("Exercises"));
