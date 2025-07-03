// src/components/Header.jsx
import { useCart } from "../hooks/useCart";

export const Header = ({ onCartClick }) => {
  const { cartCount } = useCart();

  return (
    <header className="bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">True Store</h1>
        <button
          onClick={onCartClick}
          className="flex items-center hover:text-gray-300"
        >
          <span className="mr-1">Cart</span>
          {cartCount > 0 && (
            <span className="bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
