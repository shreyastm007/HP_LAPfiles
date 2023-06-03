import {createStore} from 'vuex'


let store= createStore({
    state() {
        return{
          userData:[]
            
        }

    },
   mutations:{
    fetchData(state,payload) {
      state.userData=payload

    }
   },
        actions: {
          async fetchData(context) {
            try {
              let res = await fetch("https://api.tvmaze.com/search/shows?q=horror");
              let data = await res.json();
              console.log("data", data);
              context.commit("fetchData",data)

            } catch (err) {
              console.log("error", err);
            }
          },
        },
       
    })
    export default store;