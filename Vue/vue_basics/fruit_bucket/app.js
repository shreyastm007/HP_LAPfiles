let app = Vue.createApp({
  
    data(){
        return {
            newFruitValue:"",
            fruits:["apple","banana","mango","kiwi"]
           

            }
    },

    methods:{
        addFruit(){
            //console.log("new fruit", this.newFruitValue)
            this.fruits.push(this.newFruitValue)
            this.newFruitValue="" //reset input field
        },
        removefruit(index) {
            this.fruits.splice(index, 1)
        }
       
    }
    
})

app.mount('#fruitbucket')