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
            console.log(this.$refs.userText.value); 
            //refs-inbuilt property in vue starts with $
            this.message=this.$refs.userText.value
        },
        focusInput() {
            this.$refs.mail.focus()
        }
    }
      
    
})

app.mount('#ref')