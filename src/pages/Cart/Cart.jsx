import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../context/CartContext";

import "./Cart.css";

function Cart() {

  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">

      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>Your Cart Is Empty</h2>
      ) : (
        <>
          {cart.map((item) => (

            <div
              className="cart-item"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.name}
                onError={(e) => {
                  e.target.src =
                    "/images/product-placeholder.jpg";
                }}
              />

              <div className="cart-info">

                <h3>{item.name}</h3>

                <p>
                  ₹{item.price}
                </p>

                <div className="quantity">

                  <button
                    onClick={() =>
                      decreaseQuantity(
                        item.id
                      )
                    }
                  >
                    −
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      increaseQuantity(
                        item.id
                      )
                    }
                  >
                    +
                  </button>

                </div>

              </div>

            </div>

          ))}

          <h2>
            Total: ₹{total}
          </h2>

          <Link to="/checkout">
            <button className="premium-btn checkout-btn">
              Proceed To Checkout
            </button>
          </Link>

        </>
      )}

    </div>
  );
}

export default Cart;