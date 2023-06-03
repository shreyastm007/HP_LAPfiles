<template>
  <div>
  <h1> <strong> VUETIFY </strong></h1>
  <profile-comp />
  <home-comp />
  <nav-comp />
  <card-comp />
  <form-comp />

</div>
</template>

<script>
import CardComp from './components/CardComp.vue';
import FormComp from './components/FormComp.vue';
import NavComp from './components/NavComp.vue'
import HomeComp from './components/HomeComp.vue'
import ProfileComp from './components/ProfileComp.vue';


export default {
  name: 'App',

  components: {
    CardComp,
    FormComp,
    NavComp,
    HomeComp,
    ProfileComp
    
    
},

  data: () => ({
    //
  }),
};
</script>
