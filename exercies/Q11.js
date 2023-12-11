/* Question 11: Write a JavaScript exercise to get the filename extension.*/

function getFileExt(anyFileName = "noneFileName.noneExt") {
    // log the result of extracting the file extension using split and pop
    return (anyFileName.split('.').pop());
}

console.log(getFileExt("Q11.js"));
console.log(getFileExt("sring.php"));
console.log(getFileExt("c.c"));
console.log(getFileExt());