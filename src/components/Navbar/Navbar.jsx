import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const scrollToSection = (id) => {

    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });

    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      {/* LOGO */}

      <h2
        className="logo"
        onClick={() => scrollToSection("top")}
      >
        TVR Supermart
      </h2>

      {/* MOBILE MENU */}

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

      {/* NAVIGATION */}

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >

        <li
          onClick={() =>
            scrollToSection("top")
          }
        >
          <span>🏠</span>
          Home
        </li>

        <li
          onClick={() =>
            scrollToSection("products")
          }
        >
          <span>🛒</span>
          Products
        </li>

        <li
          onClick={() =>
            scrollToSection("offers")
          }
        >
          <span>🎁</span>
          Offers
        </li>

        {/* <li
          className="mobile-cart"
          onClick={() => {
            navigate("/cart");
            setMenuOpen(false);
          }}
        >
          🛍 Cart
        </li> */}

      </ul>

      {/* DESKTOP CART BUTTON */}

      <button
        className="cart-btn"
        onClick={() =>
          navigate("/cart")
        }
      >
        🛒 Cart

        {totalItems > 0 && (
          <span>
            {totalItems}
          </span>
        )}
      </button>

    </nav>

  );
}

export default Navbar;