/* Question 61: WAP to display the city name if the string begins with "Los" or "New" otherwise return blank. */

function checkCity(cityParams) {
    return cityParams.startsWith("Los") || cityParams.startsWith("New")
        ? cityParams
        : "";
}

console.log(checkCity("Los Angiles"));
console.log(checkCity("New York"));
console.log(checkCity("Jabalpur"));
