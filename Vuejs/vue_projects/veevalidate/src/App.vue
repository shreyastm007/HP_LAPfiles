<template>
  <navbar-comp />
  <!-- <login-comp  @getFormDataFromLogin='getFormDataFromLogin'/>
  <user-table :userFormData="userFormData"/> -->

  <vee-form />
</template>
<script>
// import LoginComp from './components/LoginComp.vue';
import NavbarComp from "./components/NavbarComp.vue";
import VeeForm from './components/VeeForm.vue';
// import UserTable from './components/UserTable.vue';
export default {
  name: "App",
  components: { NavbarComp,
  //  LoginComp,
    // UserTable
    VeeForm

     },
  data(){
    return {
      userFormData:[]
    }
  },
  methods:{
    getFormDataFromLogin(formData){
      // console.log("formData in parent",formData);
      this.userFormData.push(formData)
      console.log("userFormData",this.userFormData);
    }
  },
    VeeForm,
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
