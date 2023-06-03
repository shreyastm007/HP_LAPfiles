<template>
  <navbar-comp />
  <!-- <home-comp /> -->
  <router-view></router-view>
</template>

<script>
import NavbarComp from "./components/NavbarComp.vue";
// import HomeComp from "./components/HomeComp.vue";

export default {
  name: "App",
  components: {
    NavbarComp,
    // HomeComp,
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
