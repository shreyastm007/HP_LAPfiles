import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      products: [
        {
          productDescription:
          "Casual Boots",
          productImageURL:
          "https://rukminim1.flixcart.com/image/580/696/l2dmky80/shoe/j/m/t/4-5599318-4-bata-blue-original-imagdqch3naecuuc.jpeg?q=50",
          productName:
          "Bata",
          productPrice: 999,
          id: 1,
          qty: 1,
          thatproduct: false,
        },
        {
          productDescription:
            "Material : Fine Premium Jute with HD Digital Print ,Size : 16 INCH x 16 INCH (40cm x 40cm) ,Good quality Zip closure backed with Premium Upholstery Fabric",
          productImageURL:
            "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2022/JUPITER22/HomeMainPage/Unrec/Explore-more-categories_07.jpg",
          productName: "Cushion covers",
          productPrice: 99,
          id: 2,
          qty: 1,
          thatproduct: false,
        },
        {
          productDescription:
            "The Paradise Set of 2 Tea Light Candle Holder Mosaic Glass Votives Turkish Design Diwali Gift Candle Tealight Votive Holder Handmade Decorative Items for Home (Multicolor 1)",
          productImageURL:
            "https://m.media-amazon.com/images/I/411SDvuBa+L._SY300_SX300_.jpg",
          productName: "Tea Light Candle Holder",
          productPrice: 349,
          id: 3,
          qty: 1,
          thatproduct: false,
        },
        {
          productDescription:
            " Size	1-Pack,Material	Cotton ,Colour	Green,	Double bedsheet with pillow cover + Double bedsheet with pillow cover,Brand	Amazon Brand - Solimo",
          productImageURL:
            "https://m.media-amazon.com/images/I/91cZ1DjG1gL._SX522_.jpg",
          productName: "Cotton Double Bedsheet with 2 Pillow Covers",
          productPrice: 599,
          id: 4,
          qty: 1,
          thatproduct: false,
        },
      ],
      cartItems: [],
      totalPrice: 0,
      isAuthenticated: false,
    };
  },

  mutations: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
    addItem(state, payload) {
      console.log("productdata to be added on clicked product is :", payload);
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
        "productdata to be deleted on clicked product is : ",
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
