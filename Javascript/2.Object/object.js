console.log("Chethan");
//Object means which has behaviour,Properties aND FUNCTIONS.
//Two ways we can create an Object

//1. With using New key word
var Car = new Object()

Car.name="Tesla";
Car.color="Red";
Car.model = 2022;
Car.cc = "500cc";

console.log(Car);

//2. Without using new keyword

var Pen = {
    Name:"Cello",
    color:"black",
    inkType:"Gel",
    price:10,
    refill:{
        color:"black",
        quantity:"Full"
    }


}

console.log(Pen);
console.log("=");

for(var item in Pen){
    console.log(Pen[item]);
    // console.log(typeof(item));
}

var Profile = {
    fname:"Shilpa",
    lname:"Shetty",
    age:40,
    address:{
        doorno:105,
        street:'Bandra',
        landmark:'slum',
        state:'Maharashtra'
    },
    eatFruits:["KIWI","Strawberry","Cherry","blueBerry"]
}
console.log(Profile.address);
console.log("=");

for(var i in Profile.address){
    console.log(Profile.address[i]);
}
console.log("=");
console.log(typeof(Profile.eatFruits));

for(var fruit of Profile.eatFruits){
    console.log(fruit);
}

console.log(delete Profile.age);
console.log(Profile);
console.log("=");

