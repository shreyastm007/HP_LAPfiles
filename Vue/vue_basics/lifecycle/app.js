let app = Vue.createApp({
    data(){
        return {
            //userInput:"",
            message:"hai"
        }
    },
    methods:{
        setText(){
            //getting value of input field by using ref
            console.log(this.$refs.userText.value); //refs-inbuilt property in vue 
            //starts with $
            this.message=this.$refs.userText.value
        },
        focusInput() {
            //this.$refs.email.focus()
        }
    },
    //mounting phase
    beforeCreate() {
        console.log("before created executed")

    },
    created() {
        console.log("creation executed")

    },
    beforeMount() {
        console.log("before mount executed")

    },
    mounted(){
        console.log("mounted executed")
        this.$refs.email.focus()

    },
    //updating phase
    beforeUpdate(){
        console.log("before updated executed")

    },
    updated(){
        console.log("updation executed")

    },
    //unmounting phase
    beforeUnmount(){
        console.log("before unmount executed")
    },
    unmounted(){
        console.log("unmount executed")

    }
      
    
})

app.mount('#ref')

//for unmounting:
// setTimeout(()=> {
// app.unmount()
// },3000)