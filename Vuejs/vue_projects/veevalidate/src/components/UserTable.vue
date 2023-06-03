<template>
  <h1 class="mt-5">User Details</h1>
  <ul v-for="(user,index) in userFormData" :key="index">
    <li>{{user.email}}</li>
    <li>{{user.password}}</li>
  </ul>
</template>

<script>
export default {
  props:['userFormData']
}
</script>

<style>

</style>