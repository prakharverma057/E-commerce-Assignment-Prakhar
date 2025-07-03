// src/components/ProductCard.jsx
import { useCart } from "../hooks/useCart";

export const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-xl  transition-shadow bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain p-4 bg-white"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">
            {product.rating?.rate || "No"} ★
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-sm"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
