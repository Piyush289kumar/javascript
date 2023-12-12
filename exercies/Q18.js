/* Question 18: Write a Javascript program to create another string by adding "Py" in front of a given string. If the given string begins with "Py" return the original string.

Solution :*/

// Note : Use Substring

function addPyString(anyString = "NoneArgs") {
    return (((anyString.split('')[0] == 'P' || anyString.split('')[0] == 'p') && (anyString.split('')[1] == 'Y' || anyString.split('')[1] == 'y')) ? anyString : 'Py' + anyString);
}

console.log(addPyString("filename"));
console.log(addPyString("Python"));
console.log(addPyString("pYthon"));
console.log(addPyString("thon"));
console.log(addPyString());