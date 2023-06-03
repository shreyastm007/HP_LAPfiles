<template>
  <div class="container">
    <ul class="todos-list">
      <li class="todo-item" v-for="todo in todos" :key="todo.id">
        <span >{{ todo.text }}</span>
        <button class="remove" @click="deleteTodo(todo)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "DeleteTodo",
  data() {
    return {
      todos: this.$store.state.todos,
    };
  },
  methods: {
    deleteTodo(todo) {
      this.$store.commit("deleteTodo", todo.id);
    },
  },
};
</script>

<style>
.container {
  width: 80%;
  margin: 0 auto;
}

.todos-list {
  list-style: none;
  text-align: center;
}

.todo-item {
  padding: 10px;
  cursor: pointer;
}


.remove {
  color: #0f0603;
  font-size: 14px;
  float: right;
  color: #170804;
  font-weight: normal;
}

.todos-status {
  display: flex;
  justify-content: space-around;
}

.done {
  text-decoration: line-through;
  color: #dadadc;
  font-weight: normal;
}
</style>
