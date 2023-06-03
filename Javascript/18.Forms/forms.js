// let validateEmail = 'chethan123@gmail.com'
// let validatePassword = "Password"

// let val = document.getElementById('validate')
// function login(){
//     let email = document.getElementById('email').value;
//     console.log(email);
//     let password = document.getElementById('password').value;
//     console.log(password);
//     if(validateEmail === email && validatePassword === password){

//              val.innerHTML = "Login is Successful"
//              val.style.color = 'green'
//     }
//     else{
//                    val.innerHTML = 'Invalid Email or password'
//                    val.style.color = 'red'
//     }
// }
let emailregex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,3})$/
let test = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
let passregex = /^[A-Z]{1}[a-z]{5}[0-9]{2}[@]{1}[0-9]{3}/
let evalue = document.getElementById('email')
let pvalue = document.getElementById('password')
let span = document.getElementsByTagName('span')
evalue.onkeydown = function emailValidate(){
    if(emailregex.test(evalue.value)){
      span[0].innerHTML = 'Email Validated'
      span[0].style.color = 'green'
    }
    else {
        span[0].innerHTML = 'Email Invalid'
        span[0].style.color = 'red'
    }
}

pvalue.onkeydown = function passwordValidate(){
    if(passregex.test(pvalue.value)){
        span[1].innerHTML = 'password is validated'
        span[1].style.color = 'green'
    }
    else{
        span[1].innerHTML = 'password is Invalid'
        span[1].style.color = 'red'
    }
}
