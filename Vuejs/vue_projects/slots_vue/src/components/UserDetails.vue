<template>
  <div>

    <base-card>
    <h3> Name: {{userData.name}}</h3>
    <p>Description: {{userData.description}}</p>
    <p> Role is :{{userData.role}}</p>

    <template v-slot:personal>
    <h3> This section is personal</h3>
</template>
    </base-card>

  </div>
</template>

<script>

export default {
  
props:["userData"]
}
</script>

<style >
    /* div{

        box-shadow: 0 3px 9px rgba(0,0,0,0.3) ;
        border-radius: 10px;
        max-width:30rem;
        background-color:aqua;
        color:black
    } */

</style>