let app= Vue.createApp({
    data() {
        return {
            name:"",
            counter:10,
        }
    },

    watch:{ //connected to state
counter(value) {
    if(value>50 || value<0){

        setTimeout(()=>{
            this.counter=0
        },2000)
        
    }
}
    },
    
    computed:{ // performance optimization of application, executed 
        //when only dependency changes
        
        fullname() {
           // console.log("hai")
        if(this.name==''){
            return ''
        } return this.name  + "kumar"
    },
    
    tripleCounter() {
        return this.counter*3
    },
},
    methods:{
        increment(){
            this.counter= this.counter+6
        },
        decrement(num){
            this.counter= this.counter-num
        },
        // outputFullname(){
            
        //     if(this.name===''){
        //         return ''
        //     } return this.name + '' + "kumar"
        // }
        }
       

    
})

app.mount('#compute')