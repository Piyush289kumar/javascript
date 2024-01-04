/*Question 59: WAP to concatenate two strings and return the result. If the length of the strings does not match, then remove the characters from the longer string.*/

function concatString(anyStringOne, anyStringTwo){

    if(anyStringOne.length == anyStringTwo.length){

    return anyStringOne + anyStringTwo;

    }else{

        let newanyStringOne = anyStringOne;
         let newanyStringTwo = anyStringTwo;

        if(anyStringOne.length > anyStringTwo.length){

            newanyStringOne =  anyStringOne.substring(anyStringTwo.length);

        }else{ 
             newanyStringTwo = anyStringTwo.substring(anyStringOne.length);
        }
        return concatString(newanyStringOne, newanyStringTwo);
    }

}

console.log(concatString('abc','abcdef'))
console.log(concatString('Python','JS'))
console.log(concatString('ab','cdef'))
