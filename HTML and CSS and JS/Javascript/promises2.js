//promises:there are asynchronous and web apis
//three states of promises
//1.pending
//2.resolved
//3.rejected
 
console.log("start");
new Promise(function(resolve,reject){
    if(10>4){
        resolve("success");

    }
    else{
        reject("error")
    }
})
 .then((data)=>{
    console.log(data);
 })
 .catch((err)=>{
    console.log(err);
 })
 console.log('ended');

 const myPromis= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve('success')
    })
 })
  myPromis.then(function(data){
    console.log(data);
  })