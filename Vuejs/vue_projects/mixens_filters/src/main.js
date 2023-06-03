import { createApp } from 'vue'
import App from './App.vue'

let app= createApp(App)


//global filters:
app.config.globalProperties.$filters={
    currencyUSD(value){
        return '$' + value/80
    }
}

app.mount('#app')
