console.log("Wake up");

function Fresh(pooja){
    setTimeout(()=>{
         console.log("Freshup");
         pooja(Dressing)
    },3000)
   
}
function pooja(dress){
    setTimeout(()=>{
        console.log("Praying the God");
        dress(Breakfast)
    },1000)
}
function Dressing(breakfast){
    setTimeout(()=>{
        console.log("Dressing");
        breakfast(Travelling)
    },1000)
}
function Breakfast(travel){
    setTimeout(()=>{
        console.log("Having Break fast");
        travel(login)
    },2000)
}
function Travelling(login){
    setTimeout(()=>{
        console.log("Travelling to office");
        login(goback)
    },5000)
}
function login(go){
    setTimeout(()=>{
        console.log("I am in office");
        go()
    },7000)
}
function goback(){
    setTimeout(()=>{
        console.log("Go back home");
        console.log("Sleep");
    },8000)
}
Fresh(pooja)
