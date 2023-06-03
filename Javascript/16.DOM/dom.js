// document.write('IPL Mega Auction')

// const d=document.createElement('div')
// d.textContent = 'This is a DIV'
// d.setAttribute('id','div1')
// console.log(d);
// const parent= document.body.appendChild(d)
// console.log(parent);

// // const h= document.createElement('h1')
// // h.textContent = 'This is H1'
// // console.log(h);

// // console.log(parent);
// // document.body.appendChild(h)

// function click(){
//      let fun = document.getElementById('g')
//      console.log(fun);
    
// }  //Click function will notv work because its a event

// // const head = document.getElementById('head')
// // console.log(head);

let head = document.getElementById('head')
console.log(head);

function click1(){
    const i = document.getElementById('test')
    console.log(i.value);
}

//getElementBYCLassNAme

let test = document.getElementsByClassName('lorem')
console.log(test[1]);

function click2(){
    let j = document.getElementsByClassName('test2')
    console.log(j[1].value);
    console.log(j[0].value);
}

//QuerySelector
let test2 = document.querySelector('.c1')
console.log(test2.innerHTML);

//QuerySelectorALl
let test3 = document.querySelectorAll('.c1')
console.log(test3);

//getElementByTAgname

let test4 = document.getElementsByTagName('h1')
console.log(test4);


