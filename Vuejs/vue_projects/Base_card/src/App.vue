<template>
  
  <base-card
    mobileName="MOTOROLA G82 5G(WHITE LILY,128GB)"
    rating="4.1"
    mobilePrice=16500
  />
  <br/>
  <base-card
    mobileName="Samsung G82 5G(WHITE LILY,128GB)"
    rating="3.1"
    mobilePrice=15500
  />
</template>

<script>
import BaseCard from "./components/BaseCard.vue";
export default {
  name: "App",
  components: { BaseCard },
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