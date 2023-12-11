/* Question 9: Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9] (where c = temperature in Celsius and f = temperatue in Fahrenheit)

°C = (°F - 32) × 5/9
°F = °C × (9/5) + 32

 Expected Output : 60°C is 140 °F
                   45°F is 7.222222222222222°C
*/

// Define a function to convert Celsius to Fahrenheit
function celsiusTofahrenheit(anyCelsiusValue) {

    // Store the input Celsius tempreature in a variable
    let celsiusTemperatue = anyCelsiusValue;

    // Calculate the equivalent Fahrenheit temperature [Formula : °F = °C × (9/5) + 32]
    let celsiusTofahrenheit =  (((9 * celsiusTemperatue) / 5) + 32);

    // Create a message string describing the conversion result
    let myMessage = `${celsiusTemperatue}°C To ${celsiusTofahrenheit}°F`;

    // Log the message to the console
    console.log(myMessage);
}

// Define a function to convert Fahrenheit to Celsius
function fahrenheitTocelsius(anyFahrenheitValue) {

    // Store the input Fahrenheit tempreature in a variable
    let fahrenheitTempreature = anyFahrenheitValue;

    // Calculate the equivalent Celsius tempreature [Formula : °C = (°F - 32) × 5/9]
    let fahrenheitTocelsius = (((fahrenheitTempreature - 32) * 5)/9);

    // Create a message string describing the conversion result
    let myMessage = `${fahrenheitTempreature}°F To ${fahrenheitTocelsius}°C`;

    // Log the message to the console
    console.log(myMessage);
}


// Call the Function
celsiusTofahrenheit(60);
fahrenheitTocelsius(45);