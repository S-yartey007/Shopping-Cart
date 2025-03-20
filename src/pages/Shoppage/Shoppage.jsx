import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../api/fetchProducts";
import ProductCart from "../../components/ProductCart/ProductCart";

function ShopPage({ addToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then((data) => {
      setProducts(data);
    });
  }, []);

  return (
    <div>
      {products.map((product) => (
        <ProductCart key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShopPage;
