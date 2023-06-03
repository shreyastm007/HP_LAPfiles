import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from "vuex"

let store = createStore({
    state: {
        todos: [
            { id: 1, text: "Yoga" },
            { id: 2, text: "Gym" },
            { id: 3, text: "Cricket" },
            { id: 4, text: "Movie" }
            
        ]
    },
    mutations: {
        addTodo(state, todoText) {
            state.todos.push({
                id: state.todos.slice(-1)[0].id + 1,
                text: todoText
            });
            console.log(state.todos);
        },
        deleteTodo(state, todoId) {
            console.log("todoId", todoId);
            let todoIndex = state.todos.indexOf(store.getters.thisTodo(todoId));
            console.log("todoIndex", todoIndex);

            state.todos.splice(todoIndex, 1);
            state.todos[todoIndex].text;
            console.log(state.todos[todoIndex].text);
        }
    },
    getters: {
        thisTodo: (state) => (todoId) => {
            return state.todos.find((todo) => todo.id === todoId);
        }
    },

})
let app = createApp(App)
app.use(store)
app.mount('#app')
