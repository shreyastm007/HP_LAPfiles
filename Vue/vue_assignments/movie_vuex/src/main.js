import { createApp } from 'vue'
//import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/store.js'

//import Paginate from "vuejs-paginate-next";

//import JwPagination from 'jw-vue-pagination';


//import MovieDescription from './components/MovieDescription.vue'
//import BaseCard from './components/BaseCard.vue'

// let router = createRouter ({
//     history: createWebHistory(),//to remember the previous pages using browser history
// routes:[
//     {
//         path:"/movieDescription",
//         component:MovieDescription
//     },
// ]
// })

let app=createApp(App)
app.use(store)
//app.use(Paginate)
//app.use(JwPagination)
//app.component("base-card",BaseCard)
//app.use(router)
app.mount('#app')

