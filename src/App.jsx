// src/App.js
import { useState } from "react";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import { Cart } from "./components/Cart";
import { useProducts } from "./hooks/useProducts";

function App() {
  const { products, loading, error } = useProducts();
  const [showCart, setShowCart] = useState(false);

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={() => setShowCart(true)} />

        <main className="container mx-auto p-4">
          {showCart ? (
            <Cart onClose={() => setShowCart(false)} />
          ) : (
            <>
              <h1 className="text-3xl font-bold mb-8">Our Products</h1>
              {loading ? (
                <div className="text-center py-8">Loading products...</div>
              ) : error ? (
                <div className="text-center py-8 text-red-500">
                  Error: {error}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </CartProvider>
  );
}

export default App;
