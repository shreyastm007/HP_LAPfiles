<template>
  <b-modal
    v-model="modalShow"
    @close="handleClose"
    @cancel="handleClose"
    @ok="handleSubmit"
    title="Add Product"
  >
    <b-form>
      <b-form-input
        placeholder="Enter product name"
        type="text"
        v-model="singleProduct.productName"
        class="mb-2"
      ></b-form-input>

      <b-form-input
        placeholder="Enter product price"
        type="number"
        v-model="singleProduct.productPrice"
        class="mb-2"
      ></b-form-input>

      <b-form-input
        placeholder="Enter product Description"
        type="text"
        v-model="singleProduct.productDescription"
        class="mb-2"
      ></b-form-input>

      <b-form-input
        placeholder="Enter product Image"
        type="text"
        v-model="singleProduct.productImageURL"
      ></b-form-input>
    </b-form>
  </b-modal>
</template>

<script>
export default {
  emits: ["closeAddModal"],
  props: ["showHideAddModal", "products"],
  data() {
    return {
      singleProduct: {
        productName: "",
        productPrice: "",
        productDescription: "",
        productImageURL: "",
      },
      modalShow: false,
    };
  },

  methods: {
    handleSubmit() {
      console.log("singleProduct", this.singleProduct);
      this.$props.products.push(this.singleProduct);
    },

    handleClose() {
      this.$emit("closeAddModal");
    },
  },
 
  watch: {
    showHideAddModal() {
      this.modalShow = this.$props.showHideAddModal;
    },
  },
};
</script>

<style></style>