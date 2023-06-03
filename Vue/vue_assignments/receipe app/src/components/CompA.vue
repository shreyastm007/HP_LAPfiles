<template>
    <h1> :details="details"</h1>
  <div @click="toggleFavourite"  class="card" style="width: 32rem" >
    <ul class="list-group list-group-flush">
      <li class="list-group-item">{{ details }}</li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        details: {
        type: String,
        required: true,
      }

    },
    data(){

    }

}
</script>

<style>

</style>