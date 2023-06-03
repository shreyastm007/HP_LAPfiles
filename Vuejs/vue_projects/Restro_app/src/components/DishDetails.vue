<template>

    <li>
      <h2> {{ name }} {{ isFavourite ? "(Favourite)" : "" }} </h2>

      <button @click="toggleFavourite" style="color:blue">Toggle Favourite</button>




      <button @click="toggleDetails" style="color:red">
        {{ displayDetails ? "Hide" : "Show" }} Details
      </button>

      <ul v-if="displayDetails">
        <br/>
        <img :src="img" width="150" height="150" />
        <li><strong>Description:</strong>{{ description }}</li>
        <li><strong>Price:</strong>{{ price }}</li>
        
      </ul>
    </li>
  </template>
  
  <script>
  export default {
    emits: ["toggleFavouriteStatus"],
      //props: ["name", "description", "price", "isFavourite"],

    props: {
      img : {
    required: true,
      },
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      isFavourite: {
        type: Boolean,
        required: false,
      },
    },
    data() {
      return {
        //   dishIsFavourite: this.isFavourite,
        displayDetails: false,
      };
    },
    methods: {
      toggleFavourite() {

        //   if (this.dishIsFavourite) {
        //     this.dishIsFavourite = false;
        //   } else {
        //     this.dishIsFavourite = true;
        //   }
        //   this.dishIsFavourite = !this.dishIsFavourite;

        this.$emit("toggleFavouriteStatus", this.id);
      },

      toggleDetails() {
        this.displayDetails = !this.displayDetails;
      },
    },
  };
  </script>
  
  <style>
  li {
    
    
  }
  </style>