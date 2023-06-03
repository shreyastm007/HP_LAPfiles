let FetchData = fetch('https://jsonplaceholder.typicode.com/users')

FetchData.then((res)=>{
    // console.log(res.json());
     return res.json() //return is mandatory for next then
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})