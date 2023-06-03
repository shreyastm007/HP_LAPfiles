//Variable hoisting
// console.log(a);
// const  a=10;

//Function hoisting
//It will work for Named function
s()
function s(){
    console.log("He is Not handsome");
}


//Function hoisting will not work for Anonymous functionm
b()
var b = function(){
    console.log("Something");
}

