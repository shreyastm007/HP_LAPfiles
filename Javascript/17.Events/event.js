function add(){
    let val1 = parseInt( document.getElementById('id1').value)
    let val2 = parseInt( document.getElementById('id2').value)
    // parseInt(val1.value)
    // parseInt(val2.value)
    console.log(val1, val2);
    console.log(val1+ val2);
}

let col =document.getElementsByTagName('h1')
console.log(col);
col[0].style.color = 'red'
col[1].style.color ='blue'

let styleDiv = document.querySelector('div')
console.log(styleDiv);
// styleDiv.className ='test'
// styleDiv.classList ='test test1'


function show(){
    styleDiv.style.visibility = 'visible'
}
function hide(){
    styleDiv.style.visibility = 'hidden'
}

function showHidden(){
    let tog = styleDiv.style.visibility
   if(tog === 'visible'){
       styleDiv.style.visibility = 'hidden'
   }else {
       styleDiv.style.visibility = 'visible'
   }
}



let changethetext = document.getElementById('change')
function changecolor(){
    changethetext.style.color = 'blue'

}
function removecolor(){
    changethetext.style.color= 'black'
}

let key = document.getElementById('keydown')

function down(){
    console.log(key.value);
}
let keyup = document.getElementById('keyup')
function up(){
    console.log(keyup.value);
}