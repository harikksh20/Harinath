import products from "../../data/products";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductGrid.css";
import { useNavigate } from "react-router-dom";

function ProductGrid({ search = "" }) {

  const navigate = useNavigate();

  const categories = [
    "Vegetables",
    "Fruits",
    "Dairy",
    "Snacks",
    "Beverages",
    "Rice & Grains",
    "Oil & Masala",
    "Bakery",
    "Household",
    "Personal Care"
  ];

  return (
    <div id="products">

      {categories.slice(0, 4).map((category) => {

        const filteredProducts = products.filter(
          (item) =>
            item.category === category &&
            item.name
              .toLowerCase()
              .includes(search.toLowerCase())
        );

        if (filteredProducts.length === 0)
          return null;

        return (
          <section
            className="category-section"
            id={category}
            key={category}
          >
            <div className=" section-header">

              <h2>{category}</h2>

              <button className="view-btn"
                onClick={() =>
                  navigate(
                    `/products?category=${category}`
                  )
                }
              >
                View All →
              </button>

            </div>

            <div className="products-grid">

              {filteredProducts
                .slice(0, 5)
                .map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

            </div>

          </section>
        );
      })}

    </div>
  );
}

export default ProductGrid;