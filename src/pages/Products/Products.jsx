import { useSearchParams } from "react-router-dom";
import products from "../../data/products";
import ProductCard from "../../components/ProductCard/ProductCard";
import "./Products.css";

function Products() {

  const [searchParams] = useSearchParams();

  const category =
    searchParams.get("category");

  const filteredProducts =
    products.filter(
      (item) =>
        item.category === category
    );

  return (
    <div className="products-page">

      <h1>{category}</h1>

      <div className="products-grid-layout">

        {filteredProducts.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </div>
  );
}

export default Products;