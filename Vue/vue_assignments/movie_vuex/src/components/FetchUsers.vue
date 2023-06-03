<template>
   <div class="container">
        <div class="row">
          
<div class="card-deck"  v-for="movie in FromStore" :key="movie.show.id">
  <div class="card">
   
    <div class="card-body">
      
      <h2 class="card-title">{{ movie.show.name}}</h2>
      <h4 class>{{ movie.show.language}}</h4>
      <h6  class="cursor" >{{ movie.show.url}}</h6>
      
    </div>
  </div>
  </div>
  </div>
  </div>

  <div>
  <nav aria-label="Search results pages">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">Next</a></li>
  </ul>
</nav>
</div>
  


    <!-- <li> <img  :src="movie.show.image.medium"  /> </li>
  -->
  
</template>

<script>
    export default {
      computed:{
        FromStore(){
          return this.$store.state.userData
        }
    
      },
         mounted() {
          this.$store.dispatch({type:'fetchData'})
            },
       
      }
    </script>
    
    <style>
   .cursor {
            cursor:grab;
        }
    </style>
    