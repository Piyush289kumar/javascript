/* Question 45: Write a JavaScript program to capitalize the first letter of each word in a given string.

Solution :  */

function capitalizeFirstLetter(anyString) {
  let paraToWords = anyString.split(" ");

  let myArra = [];

  paraToWords.map((items) => {
    let a = items.split("");

    if (a[0]) {
      a[0] = a[0].toUpperCase();
    }

    myArra.push(a.join(""));
  });

  return myArra.join(" ");
}

// capitalizeFirstLetter("my name is piyush kumar raikwar");
console.log(capitalizeFirstLetter("my name is piyush kumar raikwar"));
console.log(capitalizeFirstLetter("the quick brown fox"));
console.log(capitalizeFirstLetter("Write a JavaScript program to capitalize the first letter of each word of a given string."));
