import { useEffect, useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import SearchBar from "../../components/SearchBar/SearchBar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import Footer from "../../components/Footer/Footer";

import "./Home.css";

const categoryImages = {
  Vegetables: "/images/vegetables.jpg",
  Fruits: "/images/fruits.jpg",
  Dairy: "/images/dairy.jpg",
  Snacks: "/images/snacks.jpg",
};

function Home() {

  const [search, setSearch] = useState("");

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    return () =>
      window.removeEventListener(
        "mousemove",
        moveCursor
      );
  }, []);

  const categories = [
    "Vegetables",
    "Fruits",
    "Dairy",
    "Snacks",
  ];

  return (
    <>

      <div id="top"></div>

      {/* Cursor Glow */}

      <div
        className="cursor-glow"
        style={{
          left: `${position.x - 150}px`,
          top: `${position.y - 150}px`,
        }}
      ></div>

      {/* Announcement Bar */}

      <div className="announcement-bar">
        🚚 Free Delivery Above ₹499 |
        🎁 Flat 20% OFF Today |
        ⏰ Offer Ends Tonight
      </div>

      {/* Navbar */}

      <Navbar />

      {/* Main Content */}

      <div className="page-content">

        {/* Slider */}

        <Slider />

        {/* Search */}

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        {/* Shop By Category */}

        <section className="categories">

          <h2>Shop By Category</h2>

          <div className="category-grid">

            {categories.map((category) => (

              <div
                key={category}
                className="category-card"
                onClick={() =>
                  document
                    .getElementById(category)
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                <img
                  src={categoryImages[category]}
                  alt={category}
                />

                <h3>{category}</h3>

              </div>

            ))}

          </div>

        </section>

      </div>

      {/* Offers */}

      <section
        className="offer-banner"
        id="offers"
      >

        <div className="offer-card">
          <h2>50% OFF</h2>
          <p>Fresh Fruits Collection</p>
        </div>

        <div className="offer-card">
          <h2>Buy 1 Get 1</h2>
          <p>Dairy Products</p>
        </div>

        <div className="offer-card">
          <h2>Free Delivery</h2>
          <p>Orders Above ₹499</p>
        </div>

      </section>

      {/* Products */}

      <ProductGrid search={search} />

      {/* Statistics */}

      <section className="stats">

        <div className="stat-box">
          <h2>5000+</h2>
          <p>Happy Customers</p>
        </div>

        <div className="stat-box">
          <h2>100+</h2>
          <p>Products</p>
        </div>

        <div className="stat-box">
          <h2>24/7</h2>
          <p>Support</p>
        </div>

        <div className="stat-box">
          <h2>10+</h2>
          <p>Categories</p>
        </div>

      </section>

      {/* Why Us */}

      <section className="why-us">

        <h2>
          Why Choose PVR Supermart?
        </h2>

        <div className="features">

          <div className="feature">
            <div className="feature-icon">
              🚚
            </div>
            <h3>Fast Delivery</h3>
          </div>

          <div className="feature">
            <div className="feature-icon">
              🥬
            </div>
            <h3>Fresh Products</h3>
          </div>

          <div className="feature">
            <div className="feature-icon">
              💳
            </div>
            <h3>Secure Payment</h3>
          </div>

          <div className="feature">
            <div className="feature-icon">
              📞
            </div>
            <h3>24/7 Support</h3>
          </div>

        </div>

      </section>

      {/* Footer */}

      <Footer />

      {/* WhatsApp */}

      <a
        href="https://wa.me/919999999999"
        className="whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬
      </a>

    </>
  );
}

export default Home;