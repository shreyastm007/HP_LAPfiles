import { createApp } from 'vue'
import App from './App.vue'

import {createStore} from 'vuex'

let store= createStore({
    state() {
        return{
            counter:0

        }
    },
    mutations:{
        
            increment(state){
                state.counter=state.counter+1
             },

            // decrement(state){
            //     state.counter=state.counter-1
            // },
            // reset(state){
            //     state.counter= 100
            // }

            increase(state,payload) {
                console.log("state",state)
                console.log("payload",payload)
                state.counter+=payload.value
            },
            decrease(state,payload) {
                console.log("state",state)
                console.log("payload",payload)
                state.counter-=payload.value
            }
        },
        getters:{ //used to compute data and some calculations
            counterThreeTimes(state){
               return state.counter*4
            },
            limitCounter(state,getters){ //instead of rewriting logic ,
                //we use above getters
                let counterThreeTimes=getters.counterThreeTimes
                if(counterThreeTimes<0){
                    return 0
                }
                if(counterThreeTimes>100){
                    return 100
                }
                return counterThreeTimes
            }
        },
        actions:{ 

            // we can use the same method name as in mutations,
            //actions will come in between components and mutations,
            //action method will get context object as argument
            
         increase(context,payload){
            // we can write async code here
                console.log("context",context)

                setTimeout(()=> {
                    context.commit("increase",payload)
                },2000)
            },
            increment(context){
                context.commit("increment")
            }

        }
})

let app=createApp(App)
app.use(store)
app.mount('#app')
