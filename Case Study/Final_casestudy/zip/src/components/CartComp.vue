<template>
  <br/>
  <div>
    <h1><i> CART</i></h1>
    <div className="container mt-3">
      <div className="row d-flex justify-content-center align-items-center">
        <div
          v-for="product in products"
          :key="product.id"
          class="card"
          style="width: 18rem"
        >
          <img
            class="card-img-top"
            :src="`../../assets/Images/${product.image}`"
            alt="Card image cap"
            style="height: 16rem;"
          />
          <div class="card-body">
            <p class="card-text">{{ product.id }}</p>
            <h5 class="card-title">{{ product.name }}</h5>
            <p class="card-text">{{ product.actualPrice }}</p>
            <p class="card-text">{{ product.discountedPrice }}</p>
           
            <button
              class="btn btn-danger"
              @click="deleteSelectedProd(product.id)"
            >
              Remove
            </button>
            <br/>
            <button
              class="btn btn-success"
              @click="buyNow(product.id)"
            >
              Buy Now
            </button>




          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import HTTP from "../axiosConfig";

export default {
  components: {},
  data() {
    return {
      products: [],
    };
  },

  methods: {
    //Get products list
    async fetchProducts() {
      try {
        let response = await HTTP.get("/ProductListCart");
        if (response.data.error) {
          let errMsg = response.data.message;
          console.log("errMsg", errMsg);
        } else {
          let resProducts = response.data.listproducts;
          this.products = resProducts;
          console.log("response.data.listproducts", response.data.listproducts);
          console.log("products", this.products);
        }
      } catch (err) {
        console.log("err", err);
      }
    },

    // delete the product
    async deleteSelectedProd(productId) {
      try {
        let response = await HTTP.delete(`/DeleteProduct/${productId}`);
        if (response.data.error) {
          let errMsg = response.data.message;
          console.log("errMsg", errMsg);
        } else {
          let resProducts = response.data.listproducts;
      
          this.products = resProducts;
          console.log("ID", productId);
         
          this.fetchProducts();
        }
      } catch (err) {
        console.log("err", err);
      }
    },
    buyNow() {
      this.$router.push("/ship");
    },
  },

   
  mounted() {
    this.fetchProducts();
  },
};
</script>

<style></style>
