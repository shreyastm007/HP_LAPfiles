<template>
  <div >
    <input
      type="text"
      id="new-todo"
      placeholder="enter"
      v-model="newTodoInput"
      v-on:keydown.enter="addTodo(newTodoInput)"
    />
    <button  @click="addTodo(newTodoInput)">ADD➕</button>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      newTodoInput: "",
    };
  },
  methods: {
    addTodo(newTodo) {
      console.log("newTodo", newTodo);
      this.$store.commit("addTodo", newTodo);
      console.log("before newTodoInput", this.newTodoInput);

      //to reset input field to empty
      this.newTodoInput = "";
      console.log("after newTodoInput", this.newTodoInput);
    },
  },
};
</script>

<style scoped>


#new-todo {
  padding: 12px 16px;
  line-height: 1;
  outline: none;
}


</style>
