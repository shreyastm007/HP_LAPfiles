<template>
  <base-card>
  <h3> Products </h3>
  <ul v-for="product in usersFromStore" :key="product._id">
   
    <li> Product Name: {{product.productName}}</li>
    <li> Price in Rupees: {{product.productPrice}}</li>
    <li> <img className="vid" :src="product.productImageURL"  /> </li>
    
  
  </ul>
  </base-card>
  
</template>

<script>
    export default {
      computed:{
        usersFromStore(){
          return this.$store.state.userData
        }
    
      },
    
      
         mounted() {
          this.$store.dispatch({type:'fetchData'})
            },
       
      }
    
    </script>
    
    <style>
   img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
  }
    
  
  .vid {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 35%;
    
  }
  
    
    </style>
    