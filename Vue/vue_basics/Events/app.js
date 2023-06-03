let app= Vue.createApp({
    data() {
        return {
            counter:0
        }
    }, 
    methods:{
        increment(){
            this.counter= this.counter+6
        },
        decrement(num){
            this.counter= this.counter-num
        },
        handleSubmit(){
            alert("Form submitted successfully")
            
        }
    }
})

app.mount('#events')