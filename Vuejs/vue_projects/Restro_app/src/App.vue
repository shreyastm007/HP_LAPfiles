<template>

  <h1>The Indian Magnifesa </h1>
  <img
    src="https://th.bing.com/th/id/OIP.EC4cyiyzio9qPDkWqWNw2gHaE8?w=303&h=202&c=7&r=0&o=5&dpr=1.25&pid=1.7"
    alt="image"
    height="300"
    width="500"
  />
  <ul>
    <dish-details
      v-for="dish in dishes"
      :key="dish.id"
      :img="dish.img"
      :id="dish.id"
      :name="dish.name"
      :description="dish.description"
      :price="dish.price"
      :isFavourite="dish.isFavourite"
      @toggleFavouriteStatus="toggleFavouriteStatus"
    />
  </ul>
</template>

<script>
import DishDetails from "./components/DishDetails.vue";
export default {
  name: "App",
  components: { DishDetails },
  data() {
    return {
      dishes: [
        {
          id: "shreyas",
          img:"https://th.bing.com/th/id/OIP.Inspw9ipoUDB6aT2HRf85wHaLH?w=182&h=273&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          name: "pepper Chicken",
          description: "It's finger licking good",
          price: 350,
          isFavourite: true,
        },
        {
          id: "Prajwal",
          img :"https://th.bing.com/th/id/OIP.XM2u_ReNvlL2mn0RjqgotwHaFe?w=235&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          name: "Idli-Vada",
          description: "Soft idli and crispy vada dipped in sambar",
          price: 50,
          isFavourite: false,
        },
        {
          id: "Girish",
          img:"https://th.bing.com/th/id/OIP.wgh71Q9VFJvNpOxQv8Hc9AHaIz?w=165&h=196&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          name: "Prawns fry",
          description: " Its an amazing dish",
          price: 400,
          isFavourite: false,
        },
      ],
    };
  },
  methods: {
    //to get dishDetails from child component
    toggleFavouriteStatus(dishID) {
      // console.log("dish ID in parent", dishID);

      let identifiedDish = this.dishes.find((dish) => dish.id === dishID);
      identifiedDish.isFavourite = !identifiedDish.isFavourite;
    },
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
  
}
#app h1{
  background-color: aquamarine;
  padding: 4px;
}

</style>
