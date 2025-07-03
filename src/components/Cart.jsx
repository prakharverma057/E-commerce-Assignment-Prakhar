import { useCart } from "../hooks/useCart";
import { CartItem } from "./CartItem";

export const Cart = ({ onClose }) => {
  const { cartItems, cartTotal, removeFromCart, updateQuantity } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          ✕
        </button>
      </div>

      {cartItems.length === 0 ? (
        <p className="text-center py-8">Your cart is empty</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              onRemove={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          ))}

          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-green-600 text-white py-2 rounded-lg mt-6 hover:bg-green-700">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
