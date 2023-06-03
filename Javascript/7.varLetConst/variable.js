var a = 10
var a= 20;

console.log(a);

// let b = 40
// let b=50 //Identifier 'b' has already been declared
// console.log(b);

// const c = "Something"
// const c = "DOnt no" //Identifier 'c' has already been declared
// console.log(c);

var str = "Anywhere"

// console.log(str);
function goo(){
   console.log(this.str);
}

goo()

let str1 = "Nothing"

function goo1(){
    console.log(this.str1);
}
goo1()

const str2 = "Somewhere in the earth"

function goo2(){
    console.log(this.str2);
}

goo2()




// let num = 30
// console.log(num);
// var num = 20;

// console.log(num);

function zoo(){
    const z = 10
}

// console.log(z);

// if(true){
//     const key =10;
// }

// console.log(key);

const greet = "HIIII"
// greet = "hello"

console.log(greet);

function gre(){
    console.log(greet);
}

gre()


// let abc = "Initialtion"
// console.log(abc);
// console.log("===================================");
// let abc  = "Changed"

// console.log(abc);





