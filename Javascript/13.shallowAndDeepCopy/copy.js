// // Shallow Copy : If we Copy the OBject to the another object if we have any objects inside the original object. IF i change anything in the Copy of Object it Affecting to the Inside object

// let Testers={
//     application:'Bitcoin',
//     Scenerios:'done',
//     module:'Testr MOdule',
//     testCases:{
//         first:'Case 1',
//         second:'Case 2',
//         third :'Case 3'
//     }

// }

// let CopyTesters = {...Testers}
// console.log(CopyTesters);

// CopyTesters.application = 'IndianCOin'
// console.log("==================================");
// console.log(Testers);
// console.log("=========================");
// console.log(CopyTesters);

// CopyTesters.testCases.first = 'LAst '
// console.log(CopyTesters);
// console.log(Testers);


//Deep copy : 

let TestYantra = {
    Testing:'Testing is done',
    Qspiders:'Tsting training',
    Jspiders:'Development Training',
    TechnoElevate:{
        Development:'DEvelopment done here',
        training:"Development Trainig",

    }
}

let CopyTestYantra =JSON.parse( JSON.stringify(TestYantra))

console.log(CopyTestYantra);

CopyTestYantra.TechnoElevate.Development = 'Not Done Here'

console.log(CopyTestYantra);
console.log("===============================");

console.log(TestYantra);