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
          <b-td>{{ product.id }}</b-td>
          <b-td>{{ product.productName }}</b-td>
          <b-td>{{ product.productPrice }}</b-td>
          <b-td>{{ product.productDescription }}</b-td>
          <b-td>
            <img :src="product.productImageURL" width="220px" height="160px" />
          </b-td>
          <b-td>
            <b-button variant="primary" class="mx-2">EDIT✏️</b-button>
            <b-button variant="danger" @click="removeProd(ID)"
              >DELETE🪣</b-button
            ></b-td
          >
        </b-tr>
      </b-tbody>
    </b-table-simple>

    <!-- add product component -->
    <add-product
      :showHideAddModal="showHideAddModal"
      @closeAddModal="closeAddModal"
      :products="products"
    />
  </div>
</template>

<script>
import AddProduct from "./Add-product.vue";
export default {
  components: { AddProduct },
  data() {
    return {
      products: [
        {
          productDescription: "yellow car",
          productImageURL:
            "https://imgd.aeplcdn.com/1056x594/cw/ec/21724/Audi-R8-Right-Front-Three-Quarter-66713.jpg?v=201711021421&q=75&wm=1",
          productName: "Audi R8",
          productPrice: 30000000,
          id: 1,
        },
        {
          productDescription: "laptop",
          productImageURL:
            "https://th.bing.com/th/id/OIP.PXLMRYD0xXhzwsQ38uD7dQHaFU?w=256&h=184&c=7&r=0&o=5&dpr=1.25&pid=1.7",
          productName: "Dell",
          productPrice: 30000,
          id: 2,
        },
      ],
      showHideAddModal: false,
    };
  },
  methods: {
    // open add modal
    openAddModal() {
      this.showHideAddModal = true;
    },
    //close add modal
    closeAddModal() {
      this.showHideAddModal = false;
    },

    removeProd(ID) {
      console.log("product deleted is :", this.products[ID]);
      this.products.splice(ID, 1);
      // this.products.filter((product) => product == ID);
    },
  },
};
</script>

<style></style>