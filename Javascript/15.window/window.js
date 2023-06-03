console.log('InnerHeight',innerHeight);
console.log('Innerwidth',innerWidth);

//methods
// window.prompt("HEllo Goys")
// console.log(Window.prompt());
// Window.prompt(console.log());
// window.alert('Registration is failed')

// const bool=window.confirm("Surely want to delete")
// console.log(bool);

// window.open('https://www.zomato.com/')

// const eligible = window.confirm('IS your age is greater than 18')

// if(eligible){
//     console.log("Eligible for voting");
//     window.open('https://www.nvsp.in/')
// }
// else{
//     console.log("Not eligible voting");
// }

console.log(window);
const a = window.navigator.geolocation.getCurrentPosition((response)=>{
    console.log(response);
})
console.log(a);