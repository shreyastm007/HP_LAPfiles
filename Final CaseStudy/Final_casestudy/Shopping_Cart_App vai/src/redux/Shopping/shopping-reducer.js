import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      imgURL: "https://m.media-amazon.com/images/I/61Sc0VAsleL._SL1500_.jpg",
      name: "MuscleBlaze Whey protein 1kg",
      price: 1399,
    },
    {
      id: 2,
      imgURL: "https://m.media-amazon.com/images/I/61VRq0GTWoL._SL1500_.jpg",
      name: "MuscleBlaze chocolate peanut butter 750g",
      price: 449,
    },
    {
      id: 3,
      imgURL:
        "https://img9.hkrtcdn.com/20872/prd_2087158-HK-Vitals-Skin-Radiance-Collagen-by-HealthKart-200-g-Watermelon_c_l.jpg",
      name: "hk vitals skin radiance collagen 200g",
      price: 824,
    },

    {
      id: 4,
      imgURL: "https://m.media-amazon.com/images/I/61gscZYmaoL._SL1377_.jpg",
      name: "boAt Xtend Smartwatch with 1.69-inch HD display",
      price: 2999,
    },
  ],
  cart: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };

    default:
      return state;
  }
};

export default shopReducer;
