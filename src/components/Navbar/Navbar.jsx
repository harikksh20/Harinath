import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";


function Navbar() {

  const { cart } = useContext(CartContext);

  const [menuOpen, setMenuOpen] =
    useState(false);

  return (
    <nav className="navbar">

      <h2>PVR Supermart</h2>

       <div className="menu-btn">
        
      </div>


      <div
        className="menu-icon"
        onClick={() =>
          setMenuOpen(!menuOpen)
        }
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      <ul
        className={
          menuOpen
            ? "nav-links active"
            : "nav-links"
        }
      >
        <li>
          <a
            href="#top"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#products"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Products
          </a>
        </li>

        <li>
          <a
            href="#offers"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Offers
          </a>
        </li>

        <li>
          <Link
            to="/cart"
            onClick={() =>
              setMenuOpen(false)
            }
          >
            Cart
          </Link>
        </li>
      </ul>

      <Link to="/cart">
        <button className="cart-btn">

          🛒

          {cart.length > 0 && (
            <span>
              {cart.length}
            </span>
          )}

        </button>
      </Link>

    </nav>
  );
}

export default Navbar;