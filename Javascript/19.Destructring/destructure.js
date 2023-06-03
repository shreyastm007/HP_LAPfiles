//Destructring

//Array destructring



// let arr = ['Person 1','Person 2' , 'Person 3']

// // console.log(arr[1]);

// let [val1, val2, val3] = ['Person 1','Person 2' , 'Person 3']

// console.log(val2);

//Object Destructructring

let obj = {
    name:'NAme 1',
    age:26,
    address:{
        street:'STREET 1',
        landmark:'LANDMARK'
    }
}

let {name,age}= obj

console.log(age);

// let {street,landmark} = obj.address

// console.log(landmark);

let {address:{street,landmark}} = obj
console.log(landmark);

