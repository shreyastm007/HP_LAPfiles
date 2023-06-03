//Array is a special kind of variable which stores multiple values at a time
//Two ways we can create array

//1.Using new keyword

//Homogeneous array
var arr= new Array('Dinesh','Sadhana','Ajay','Kunal')
console.log(arr);
console.log(typeof(arr));

var arr1 = new Array(1,2,3,4,5,6)
console.log(arr1);
console.log(typeof(arr1));

//Hetrogeneous array
var emp = ["Rahul",24,"5.4 feet",null,undefined]
console.log(emp);

for(var i=0;i<=emp.length;i++){
    console.log(`Array value at ${i} is = ${emp[i]}`);
}
console.log("=");

for(var i=emp.length-1;i>=0;i--){
    console.log("Array value at"+ i + "is ="+emp[i]);
}

console.log("=");

//2. Without using new keyword

var fruits = ['Apple','KIWI','Blueberry','Mango','Jackfruit']

console.log(fruits);




