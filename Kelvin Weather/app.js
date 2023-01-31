//create a variable named kelvin, and set it equal to 293.The value saved to kelvin will stay constant
const kelvin = 0;
//Let’s convert Kelvin to Celsius by subtracting 273 from the kelvin variable. Store the result in another variable, named celsius
const Celsius = kelvin - 273;
//Using this equation to calculate Fahrenheit, then store the answer in a variable named fahrenheit.
let fahrenheit = Celsius * (9 / 5) + 32;
//Use the .floor() method from the built-in Math object to round down the Fahrenheit temperature. Save the result to the fahrenheit variable
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert to Newton
let Newton = Celsius * (33 / 100);
//// Round down
Newton = Math.floor(Newton);
console.log(`The temperature is ${Newton} degrees Newton.`);

