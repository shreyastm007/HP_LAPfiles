import { createStore } from "vuex";

let store = createStore({
  mutations: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    addItem(state, payload) {
      console.log("product data to be added on clicked product is :", payload);
      // state.selectedProduct = pdt;
      // console.log("selectedProduct", state.selectedProduct);

      let itemInCart = state.cartItems.find((item) => item.id === payload.id);
      //let isItemInCart = itemInCart.length > 0;

      if (itemInCart) {
        itemInCart.qty++;
      } else {
        state.cartItems.push({ ...payload, qty: 1 });
      }
    },
    deleteItem(state, payload) {
      console.log(
        "product data to be deleted on clicked product is : ",
        payload
      );
      let tempProduct = state.cartItems;
      let productid = payload.id;

      console.log("productid", productid);
      console.log("tempProduct", tempProduct);

      tempProduct = tempProduct.filter((item) => {
        return item.id != productid;
      });
      state.cartItems = tempProduct;
    },
  },

  actions: {
    addItem(context, product) {
      context.commit("addItem", product);
      console.log("Product added in cart is :", product);
    },
    deleteItem(context, product) {
      context.commit("deleteItem", product);
      console.log("Product deleted in cart is :", product);
    },
  },

  getters: {
    totalPrice: (state) => {
      return state.cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
});

export default store;
