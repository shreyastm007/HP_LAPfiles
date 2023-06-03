//Named function : Functions which has name

function add(n1,n2){
    // return n1+n2;
    console.log(n1+n2);
}

// console.log(add(20,20));
add(20,20)

//Anonymous function : Function which does not have name

var sub = function(a1,a2){
    return a1-a2;
}

console.log(sub(12,21));


//IIFE(Immedetely Invoked function Expression ) : The function which calls immedetley 
// var a=10
(function (b1,b2) {
    console.log(b1*b2);
}

)(12,12)

//Arrow function = Es 6 features

var divide = (d1,d2)=>d1/d2 //single line arrow func for this JS engine is adding the return
console.log(divide(12,2));

//For single parameter the paranthesis is not mandotory

var greet = name=>{
    console.log(`Welcome to ${name}`);
    
}

// console.log(greet("Test Yantra"));


//For no Parameter the paranthesis is mandotory

var pattern =()=>{
    for(var i=0;i<=10;i++){
        console.log(i);
    }
}

function greetings(){
    console.log(" Excepted output:What is my name");
}
greetings()
//Nested function : Function inside the Function

function nest(f1,f2){
    console.log("Consoling in first function");
    return function(){
        console.log("Consoling in Second FUnction");
        console.log(f1+f2);
        return function(){
            console.log("Consoling Third Function");
            console.log(f1/f2);
        }
    }
}
nest(18,18)()()


//CallBack function : Calling One function as an argument in another function

function test(callback){
    console.log("This is a Test Function");
    callback();
}

function sample(){
    console.log("This is a Sample Function");
}


test(sample)






