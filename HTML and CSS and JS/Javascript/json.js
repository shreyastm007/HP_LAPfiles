//json
let person={
    name:"himagrisha",
    age:22,
    email:"him@gmail.com",
    phno:515151513,
};

const personobje=JSON.stringify(person);
console.log(personobje);


const personobj=JSON.parse(personobje)
console.log(personobj);
