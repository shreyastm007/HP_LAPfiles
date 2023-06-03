 async function fetchData(){
       const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    //    console.log(res.json());
        const data =await res.json()
        console.log(data);
}

fetchData()