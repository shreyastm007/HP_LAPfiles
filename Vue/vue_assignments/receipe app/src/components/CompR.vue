<!-- <div class="card" style="width: 18rem;">
    <div class="card-body">
    <h5 class="card-title"  @click="displayDetails">{{display}}</h5>
  </div>
  <img :src="img" class="card-img-top" alt="first image"  @click="displayDetails">
</div>
 <ul v-if="display" className="fun" >
        <br/>
        <li><strong>recipeName:</strong>{{ recipeName }}</li>
        <img :src="img" width="150" height="150" />
        <li><strong>Details:</strong>{{ details }}</li> 
      </ul>
      -->
 <!--............................................................................................................................--> 

<!--code starts from <here-->
  <template>
  <div @click="displayDetails" class="card" style="width: 19rem">
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><strong>{{ id }}</strong></li>
      <li class="list-group-item" ><strong>{{ recipeName }}</strong></li>
      <img
        :src="img"
        class="list-group-item"
        alt="..."
        width="300"
        height="300"
      />
    </ul>
  </div>



<!-- // This is using card -->
  <div v-if="display" class="card" style="width: 32rem" >
    <ul class="list-group list-group-flush">
      <li class="list-group-item"><i><u>{{ recipeName }}</u></i></li>
      <img
        :src="img"
        class="list-group-item"
        alt="..."
        width="480"
        height="480"
      />
      <li class="list-group-item">{{ details }}</li>
    </ul>
  </div>
</template>
<!------------------------------------------------------------------------------------>


<!--------using flex--------->

 <!-- <div v-if ="display" class="flex-center" >
     <ul class="list-group list-group-flush">
      <li class="list-group-item"><i><u>{{ recipeName }}</u></i></li>
       <img
         :src="img"
         class="list-group-item"
         alt="..."
         width="480"
         height="480"
         
       />
       <li class="list-group-item">{{ details }}</li>
     </ul>
 </div> -->
<!-------------------------------------------------------------------->



<script>
export default {
  emits: ["toggleFavouriteStatus"],
    props: {
      img : {
    required: true,
      },
      id: {
        type: Number,
        required: true,
      },
      recipeName: {
        type: String,
        required: true,
      },
      details: {
        type: String,
        required: true,
      }
    },
    data() {
      return {
        
        display: false,
      };
    },
    methods:{

      toggleFavourite() {
        this.$emit("toggleFavouriteStatus", this.id);
      },
        
        
        displayDetails() {
            console.log("clicked")

        this.display = !this.display;
      },

        
    }
}
</script>

<style scoped>
.card{
    text-align:center
    text-justify
    
}

/* .flex-center { align-items: center; justify-content: center; flex-direction: column; }  */


</style>