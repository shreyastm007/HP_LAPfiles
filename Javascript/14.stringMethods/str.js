let str = "lkwheorib hfcbssssskjxn,a"
//Length
console.log(str.length);

//toUpperCase
console.log(str.toUpperCase());

//Lower Case
let str2 = "WRLGVNSDX,MCBNLDKFHBV"
console.log(str2.toLowerCase());
let str3 = "  kshbdvkhsdzkjbc "
//concate 
console.log(str.concat(str2,str3));

let str4 = "Hello Collabera"

console.log(str4.slice(0,5));
console.log(str4.slice(0));
console.log(str4.slice(-10));

//substring
console.log(str4.substring(5,11));
console.log(str4.substring(-2));

//substr
console.log(str4.substr(5));
console.log(str4.substr(-3));



//trim 
let str5 = "     Chethan          "
console.log(str5.trim());

//charat

let str6 = "HEloo World"
console.log(str6.charAt(10));

//split

let str7= "I am in a Testing"
console.log(str7.split());

//Replace

console.log(str7.replace('Testing','Developing'));

//REverse the string

let restring = "World"

console.log(restring.split('').reverse().join(''));

let arr = ['Virat','Rohith','Dhoni']

console.log(arr[2].split('').reverse().join(''));
