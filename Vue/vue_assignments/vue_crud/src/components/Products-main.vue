<template>
  <div>
    <b-table-simple responsive>
      <b-thead>
        <b-tr>
          <b-th>ID </b-th>
          <b-th>Product Name </b-th>
          <b-th>Product Price</b-th>
          <b-th>Product Description </b-th>
          <b-th>Product Image </b-th>
          <b-th>
            <b-button variant="dark" @click="openAddModal">ADD➕</b-button>
          </b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="product in products" :key="product.id">
          <b-td>{{ product._id }}</b-td>
          <b-td>{{ product.productName }}</b-td>
          <b-td>{{ product.productPrice }}</b-td>
          <b-td>{{ product.productDescription }}</b-td>
          <b-td>
            <img :src="product.productImageURL" width="220px" height="160px" />
          </b-td>
          <b-td>
            <b-button
              variant="primary"
              class="mx-2"
              @click="getSelectedProduct(product)"
              >EDIT✏️</b-button
            >
            <b-button variant="danger" @click="removeProd(product._id)"
              >DELETE🪣
            </b-button>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <!-- add product component -->
    <add-product
      :showHideAddModal="showHideAddModal"
      @closeAddModal="closeAddModal"
      :products="products"
    />

    <edit-product
      :selectedProduct="selectedProduct"
      :showHideEditModal="showHideEditModal"
      @closeEditModal="closeEditModal"
    />
  </div>
</template>

<script>
import AddProduct from "../components/Add-product.vue";
import EditProduct from "./Edit-product.vue";
export default {
  components: { AddProduct, EditProduct },
  data() {
    return {
      products: [
        {
          productDescription: "BMW",
          productImageURL:
            "https://th.bing.com/th/id/OIP.TRXBDXTnEuGz46i5lqofDAHaDu?w=350&h=176&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          productName: "M2 series",
          productPrice: 4000000,
          _id: 1,
        },
        {
          productDescription: " Cricket Bat",
          productImageURL:"data:image/jpeg;base64,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",
          productName: "Spartan bat",
          productPrice: 12000,
          _id: 2,
        },
        {
          productDescription: " Watch",
          productImageURL:"https://th.bing.com/th/id/OIP.I5y2ucvTlcWOMRfUXwA32AHaKb?w=140&h=197&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          productName: "Fossil Watch",
          productPrice: 15000,
          _id: 3,
        },
      ],
      selectedProduct: {},
      showHideAddModal: false,
      showHideEditModal: false,
    };
  },
  methods: {
    // open add modal
    openAddModal() {
      this.showHideAddModal = true;
    },
    // close add modal
    closeAddModal() {
      this.showHideAddModal = false;
    },

    // open edit modal
    openEditModal() {
      this.showHideEditModal = true;
    },
    //close edit modal
    closeEditModal() {
      this.showHideEditModal = false;
    },
    //getting the selected product on click of edit
    getSelectedProduct(prod) {
      this.selectedProduct = prod;
      this.openEditModal();
      console.log("selected prod", prod);
    },

    removeProd(ID) {
      let deleteProduct = this.products;
      let productid = ID;

      console.log("selected product id :", productid);
      console.log("deleteProduct", deleteProduct);

      deleteProduct = deleteProduct.filter((item) => {
        return item._id != productid;
      });

      console.log("deleteProduct", deleteProduct);
      this.products = deleteProduct;
    },
  },
};
</script>

<style></style>