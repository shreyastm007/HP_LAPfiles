let app= Vue.createApp({
    data() {
        return {
            //email:"s@s.com",
            email:"",
            
        }
    },
    methods:{
        // setName(event) {
        //     this.email= this.target.value
        // },
        reset(){
            this.email=""
           // console.log("email", this.email)
        }

    }
})

app.mount('#databinding')