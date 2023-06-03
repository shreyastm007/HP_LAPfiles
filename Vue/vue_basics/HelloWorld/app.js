let app = Vue.createApp({
    //all data is present here
    data(){
        return {
            greeting: "Hello World",
            learn:"Learn",
            code:"<h1>Code<h1>",
            person:{
                name: "Shreyas",
                age: 22

            },
            
        }
    },

    methods:{
        randomOutput() {
            //console.log("randomOutput executed")
            let randomNum= Math.random()
            console.log("randomNum", randomNum)
            if(randomNum<0.5){
                return this.learn //returns Learn
            } else {
                return this.code //returns Code
            }
            
        }
    }
    
})

app.mount('#first')