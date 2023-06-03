// localStorage.setItem('email','chethan18@gmail.com')

// document.write(localStorage.getItem('email'))
let a;
function login(){
  let val = localStorage.getItem('a')
  sessionStorage.setItem('session id',143)
  if(val){
    //   console.log('a', a);
  }
  else{
      a= 10
      localStorage.setItem('a',a)
  }

}

function incrementA(){
    
     a += 10;
    localStorage.setItem('a',a)
    
}

function logout(){
    localStorage.clear()
    sessionStorage.clear()
}
