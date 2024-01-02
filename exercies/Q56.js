/* Question 56: WAP to concatenate two strings except for their first character.
Solution: */


function joinString(anyStringOneParam = 'abc' ,anyStringTwoParam = 'xyz'){
    return ((anyStringOneParam.length > 1 && anyStringTwoParam.length > 1 ) ? anyStringOneParam.slice(1) + anyStringTwoParam.slice(1):false)
}

console.log(joinString('PHP','JS'));
console.log(joinString('A','B'));
console.log(joinString('AA','BB'));
console.log(joinString('abc','xyz'));