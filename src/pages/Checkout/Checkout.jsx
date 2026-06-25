import { useNavigate } from "react-router-dom";
import "./Checkout.css";

function Checkout() {

  const navigate = useNavigate();

  const placeOrder = () => {

    localStorage.removeItem("cart");

    navigate("/success");
  };

  return (
    <div className="checkout">

      <h1>Checkout</h1>

      <input type="text" placeholder="Full Name" />

      <input type="text" placeholder="Phone Number" />

      <input type="text" placeholder="Address" />

      <button onClick={placeOrder}>
        Place Order
      </button>

    </div>
  );
}

export default Checkout;