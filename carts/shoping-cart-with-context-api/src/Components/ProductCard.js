import { useContext } from "react";
import "./ProductCard.css";
import formatCurrency from "format-currency";

import CartContext from "../context/cart/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  let opts = { format: "%s%v", symbol: "₹" };
  return (
    <div className='productCard__wrapper'>
      <div>
        <img className='productCard__img' src={product.image} alt='' />
        <h4>{product.name}</h4>
        <div className='ProductCard__price'>
          <h5>  Price: {formatCurrency(`${product.price}`, opts)} </h5>
        </div>
        <div className='ProductCard__premium_price'>
          <h5>  Premium Price: {formatCurrency(`${product.premium_price}`, opts)} </h5>
        </div>
        <button
          className='ProductCard__button'
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
