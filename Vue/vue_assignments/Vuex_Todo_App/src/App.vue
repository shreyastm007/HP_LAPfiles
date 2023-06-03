<template>
  <h1>A TODO LIST</h1>
  <add-todo />
  <delete-todo />
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import DeleteTodo from "./components/DeleteTodo.vue";

export default {
  name: "App",
  components: {
    AddTodo,
    DeleteTodo,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
