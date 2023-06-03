let promise = new Promise((resolve,rejected)=>{
    if(10>5){
        resolve('')
    }
    else{
        rejected('Rejected Function')
    }
})

// promise.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })

let promise1 = new Promise((resolve,reject)=>{
    if(false){
        resolve('Resolve function 2')
    }else {
        reject('Reject Function 2')
    }
})


Promise.all([promise,promise1]).then((res)=>{
    console.log(res);
}).catch((err)=>{
    console.log(err);
})




