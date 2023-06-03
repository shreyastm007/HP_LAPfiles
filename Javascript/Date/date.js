//Todays date
const date = new Date()

console.log(date);

//Future date

const futureDate = new Date(2023,0,2,1,12,3,76)

console.log(`Future Date ${futureDate}`);

//Date of birth 

const dateOFBirth = new Date("JAN,15,1995")

console.log(dateOFBirth);

//It will print from 1 JAN 1970

const milliSec = new Date(920000)
console.log(milliSec);


const todaysDate = new Date()
console.log(todaysDate.getFullYear());
console.log(todaysDate.getMonth());
console.log(todaysDate.getDate());
console.log(todaysDate.getMilliseconds());
console.log(Date.now());



