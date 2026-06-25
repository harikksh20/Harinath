import "./ProductCard.css";

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

function ProductCard({ product }) {

  const { addToCart } =
    useContext(CartContext);

  return (
    <div
      className="product-card"
      data-aos="fade-up"
    >

      <img
        src={product.image}
        alt={product.name}
        onError={(e) => {
          e.target.src =
            "/images/product-placeholder.jpg";
        }}
      />

      <h3>{product.name}</h3>

      <p>₹{product.price}</p>

      <button className="premium-btn"
        onClick={() =>
          addToCart(product)
        }
      >
        🛒 Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;