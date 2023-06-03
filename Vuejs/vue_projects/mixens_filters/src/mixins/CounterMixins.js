export default function counterMixins(initialCount, countValue){
return{
    data(){
        return {
            counter:initialCount,
        }
    },
    methods:{
        increment(){
            this.counter+=countValue
        },
        decrement(){
            this.counter-=countValue
        },
        reset(){
            this.counter=initialCount
        }
    }
}
}