// Define the input string
const input = "turpentine and turtles";

// Define an array of vowels to check against
const vowels = ["a", "e", "i", "o", "u"];

// Initialize an empty array to store the results
const resultArray = [];

// Loop through each character in the input string
for (let inputIndex = 0; inputIndex < input.length; inputIndex++) {
  // Uncomment to log the current input index
  // console.log(`inputIndex is ${inputIndex}.`);
  
  // Check if the current character is 'e'
  if (input[inputIndex] === "e") {
    resultArray.push(input[inputIndex]); // Add 'e' to resultArray
  }
  
  // Check if the current character is 'u'
  if (input[inputIndex] === "u") {
    resultArray.push(input[inputIndex]); // Add 'u' to resultArray
  }

  // Loop through the vowels array to check for matches
  for (let vowelIndex = 0; vowelIndex < vowels.length; vowelIndex++) {
    // Uncomment to log the current vowel index
    // console.log(`vowelIndex is ${vowelIndex}.`);
    
    // If the current character matches a vowel, add it to resultArray
    if (input[inputIndex] === vowels[vowelIndex]) {
      // Uncomment to log the matched vowel
      // console.log(input[inputIndex]);
      
      resultArray.push(input[inputIndex]);
    }
  }
}

// Uncomment to log the final result array
// console.log(resultArray);

// Join the resultArray into a string and convert it to uppercase
const resultString = resultArray.join("").toUpperCase();

// Log the final result string
console.log(resultString);
