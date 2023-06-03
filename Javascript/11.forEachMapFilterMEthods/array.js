// const cricketers = ['Virat','Rohith','K L Rahul','Shreyas Iyer','Shami','Siraj','Jadeja','Virat']

// cricketers.forEach((val,i)=>{
//       console.log(`Index: ${i} `);
//       console.log(`VAlue: ${val}`);
// })


// const num = [1,2,3,4,5,6,7]

// num.forEach((val)=>{
//     let change = val+1;
//     console.log(change);
// })

// console.log(num);



const  salary = [15000,20000,30000,10000]
//Filter
//return type : Boolean with a new Array


// salary.filter((val)=>{
//      if(val>15000){
//          console.log(val);
//         //  return val
//      }
// })

const filterSal = salary.filter((val)=>{
    console.log(val);
    return val>40000 // it will push the val only if the condition true otherwise it will not push it will give empty array.
})
console.log(filterSal);

const alp = ['a','b','a','c','d','a','b','c']
const filterAlp = alp.filter((val,i)=>{
    // console.log(alp.indexOf(val));
    return alp.indexOf(val)===i;
})

console.log(filterAlp);


const dup = new Set(alp)
console.log(dup);

//Map Method
//return type : new Array
const num = [1,2,3,4,5,6,7,8,9,10]
const even= []
const odd = []

num.map((val,i)=>{
  return  val%2===0?even.push(val):odd.push(val)
})

console.log(even);
console.log(odd);