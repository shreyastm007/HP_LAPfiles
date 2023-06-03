var books = ['Javascript','Java','Un-excepted story','Sorry to remember']

for(var i=0;i<=books.length;i++){
    console.log(books[i]);
}

console.log("=");

// for(var i of books){
//     console.log(i);
// }

// console.log(books.forEach((val)=>{
//     console.log();
// }));

books['element']="Python"
books['element2']='A girl to remember'

console.log(books);

for(var val of books){
    console.log(val);
}

for(var j=0;j<books.length;j++){
    console.log(books[j]);
}


var laptops = [
    {
        brand:"HP",
        ram:"16GB",
        processor:"intel",

    },
    {
        brand:"DELL",
        ram:"4GB",
        processor:"intel",
    },
    {
        brand:"Lenovo",
        ram:"16GB",
        processor:"intel",
    }
]

console.log(laptops);
console.log("===================================");

for (var iterator of laptops) {
    console.log(iterator.processor);
    console.log("===============================");
    console.log(laptops[0].brand);
}


//for of in array

var mobile = ['Iphone','Samsung','One plus','Sony','Nokia',,,,,,,]
console.log("==================================");
console.log(mobile);

for(var mob of mobile){
    console.log(mob);
}
console.log("=============================");

for(var item in mobile){
    console.log(mobile[item]);
}

console.log("=========================");

mobile['i']="OPPO"
mobile['j']='POcO'
for(var mob of mobile){
    console.log(mob);
}

console.log("===============================");
for(var item in mobile){
    console.log(mobile[item]);
}
