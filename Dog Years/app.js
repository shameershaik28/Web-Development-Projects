//Create a variable named myAge, and set it equal to your age as a number
const myAge = 27;
//Create a variable named earlyYears and save the value 2 to it. Note, the value saved to this variable will change
let earlyYears = 2;
//Use the multiplication assignment operator to multiply the value saved to earlyYears by 10.5 and reassign it to earlyYears

earlyYears *= 10.5;
//take the myAge variable, and subtract 2 from it.Set the result equal to a variable called laterYears

let laterYears = myAge - 2;
//Multiply the laterYears variable by 4 to calculate the number of dog years accounted for by your later years
laterYears *= 4;
console.log(earlyYears);
console.log(laterYears);

//Add earlyYears and laterYears together, and store that in a variable named myAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;


//Write your name as a string, call its built-in method .toLowerCase(), and store the result in a variable called myName
//The toLowerCase method returns a string with all lowercase letters
let myName = "SHAMEER".toLowerCase();

console.log(`My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`);

