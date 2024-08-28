// Function to get sleep hours for a given day
function getSleepHours(day) {
    // Switch statement to handle different days of the week
    switch (day) {
      case "monday":
        return 8; // Hours of sleep on Monday
        break;
      case 'tuesday':
        return 3; // Hours of sleep on Tuesday
        break;
      case 'wednesday':
        return 10; // Hours of sleep on Wednesday
        break;
      case 'thursday':
        return 7; // Hours of sleep on Thursday
        break;
      case 'friday':
        return 1; // Hours of sleep on Friday
        break;
      case 'saturday':
        return 9; // Hours of sleep on Saturday
        break;
      case 'sunday':
        return 17; // Hours of sleep on Sunday
        break;
      default:
        return 'dont use capitals'; // Default case for any invalid input
        break;
    }
  }
  
  // Function to calculate total actual sleep hours for the week
  function getActualSleepHours() {
    // Sum of sleep hours for each day of the week
    let sum = getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
    return sum;
  }
  
  // Function to calculate the ideal sleep hours for the week
  function getIdealSleepHours(idealHours) {
    // Multiply ideal daily sleep hours by 7 to get weekly ideal sleep hours
    return idealHours * 7;
  }
  
  // Function to calculate sleep debt
  function calculateSleepDebt() {
    let actualSleepHours = getActualSleepHours(); // Get the total actual sleep hours
    let idealSleepHours = getIdealSleepHours(9); // Get the total ideal sleep hours, assuming 9 hours per day
  
    // Compare actual sleep hours with ideal sleep hours
    if (actualSleepHours == idealSleepHours) {
      return "You slept enough"; // Message for having enough sleep
    } else if (actualSleepHours > idealSleepHours) {
      let overSlept = actualSleepHours - idealSleepHours; // Calculate oversleeping hours
      return `You slept too much: ${overSlept}hrs`; // Message for oversleeping
    } else {
      let underSlept = idealSleepHours - actualSleepHours; // Calculate undersleeping hours
      return `You didn't sleep enough: ${underSlept}hrs`; // Message for undersleeping
    }
  }
  
  // Print the result of the sleep debt calculation to the console
  console.log(calculateSleepDebt());
  