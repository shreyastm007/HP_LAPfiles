<template>
  <br/>
  <h2>Product Shipped Successfully✅ </h2>
    <h4> You will receive a message shorty regarding your shipping address.</h4>
    <h6><i> Thank You for shopping with us.....</i></h6>
    <button
              class="btn btn-warning"
              @click="backToShop()"
            >
              Continue Shopping
            </button>
</template>

<script>
export default {
  data() {
  },
  methods:{
    backToShop() {
      this.$router.push("/products");
    },
  }
}
</script>

<style></style>
