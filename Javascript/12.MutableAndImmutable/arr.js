//Immutable
//All the Primitive Datatypes are Immutable
//That means IF we copy the Original variable. 
//If we change in the Copy It will affect Original one.

let a = 10;
let b =a
 b=20;
 console.log(a);
 console.log(b);

 //Mutable
 //All the Reference Datatypes are Mutabel
 //IF we Copy the Original Datatype.
 //IF we change in the COpy it will affect Original one

 let person ={
     fname:'Ravi',
     lname:'Chandran'
 }

 let newPerson = person
 console.log(newPerson);

 newPerson.fname = 'Hrithik'
 newPerson.lname = 'Roshan'

 console.log(newPerson);
 console.log(person);

//Making Mutabl Object to the Immutable

let flowers = {
    color:'red',
    name:'Rose',
    size:'small'
}

let CopyFLower = Object.assign({},flowers)
console.log(CopyFLower);

CopyFLower.name= 'Jasmine'
CopyFLower.color = 'white'
CopyFLower.size = 'Very Small'
console.log(CopyFLower)
console.log(flowers);



//Mutable array to the Immutable
let bottle = ['Whiskey','Rum','Vodka','Brandy']

let brands = bottle

console.log(brands);

brands.push('BlackDog');
console.log(brands);
console.log(bottle);

let sides = ['Chips','Pickle','Mixture','Gobi']

let CopySides = sides.slice(0)

console.log(CopySides);

CopySides.push('Salad')

console.log(CopySides);
console.log(sides);


