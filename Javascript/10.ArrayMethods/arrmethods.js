const actress = ['Sadhana','Sindhu','Raksha','Arpitha','Pooja','Meghana']

//pop methods 
//return type : deleted element
console.log(actress.pop());
console.log(actress);
console.log(actress.length);

//push
//return type : length of an array
console.log(actress.push("Meghana"));
console.log(actress);

console.log(actress.push('Chethana','Ranjitha'));
console.log(actress);

//unshift
// return type : length of an array
console.log(actress.unshift('Sushmitha'));
console.log(actress);

//shift
//return type : deleted element
console.log(actress.shift());
console.log(actress);

//toString
//return type : string
console.log(actress.toString());

//join()
//return type : string
console.log(actress.join('*'));
console.log(actress.join('/'));
console.log(actress.join('D'));

//delete 
//return type: boolean
console.log(delete actress[0]);
console.log(actress);

//splice
//return type: Deleted array
console.log(actress.splice(1,2));
console.log(actress);

console.log(actress.splice(0,4,'Sadhana','Bhavya','Rashmi','Harshitha'));
console.log(actress);

console.log(actress.splice(2,0,'Soujanya','Shahanaz'));
console.log(actress);

//slice
//return type : new array
console.log(actress.slice(4,7));
console.log(actress);

//concate
//return type : new array
const InternationalActress = ['Resham','Scarellet','Jade weber']
console.log(actress.concat(InternationalActress,'Ema watson'));
console.log(actress);

//isArray
//return type : Boolean
const go = "GOing"
console.log(Array.isArray(go));

//indexOf
//return type: index number/value
const actors = ['Sumanth','Chethan','Ajay','ABid','Naveen','Sri Hari']
console.log(actors.indexOf('Sumanth'));

//includes 
//return type: Boolean
console.log(actors.includes('Ajay'));



