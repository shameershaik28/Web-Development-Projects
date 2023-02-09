//Math.random() returns a value between 0 (inclusive) and 1 (exclusive).
//In order to make this set of numbers range from 0 (inclusive) to 1000 (exclusive) we can multiply the returned value by 1000.
//Finally, to ensure we only have whole numbers from 0 to 999 we can round down using Math.floor().

let raceNumber = Math.floor(Math.random() * 1000);

//Create a variable that indicates whether a runner registered early or not.
let registeredEarly = false;

//Create a variable for the runner’s age and set it equal to a number.
let RunnerAge = 16;

//Create a control flow statement that checks whether the runner is an adult AND registered early. Add 1000 to their raceNumber if this is true
if (RunnerAge > 18 && registeredEarly) {
    raceNumber += 1000
}
if (RunnerAge > 18 && registeredEarly) {
    console.log(`You guys will be racing at 9:30 am and your race number is : ${raceNumber}.`)
}
//write a statement like this: else if runner is over 18 AND did not register early they will race at 11:00am
else if (RunnerAge > 18 && !registeredEarly) {
    console.log(`You guys will be racing at 11:00 am and your race number is : ${raceNumber}.`)
}
//For people who are under 18
else if (RunnerAge < 18) {
    console.log(`You guys will be racing at 12:30 pm and your race number is : ${raceNumber}.`)
}
//runners exactly 18 years old!
else {
    console.log(`please check registration desk`)
}
