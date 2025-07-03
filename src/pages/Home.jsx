import { ProductCard } from "../components/ProductCard";
import { useProducts } from "../hooks/useProducts";
import { Cart } from "../components/Cart";
import { useState } from "react";

export const Home = () => {
  const { products, loading, error } = useProducts();
  const [showCart, setShowCart] = useState(false);

  if (loading)
    return <div className="text-center py-8">Loading products...</div>;
  if (error)
    return <div className="text-center py-8 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {showCart ? "Hide Cart" : "View Cart"}
        </button>
      </div>

      {showCart ? (
        <Cart onClose={() => setShowCart(false)} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
