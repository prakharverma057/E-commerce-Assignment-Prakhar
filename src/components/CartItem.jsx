// src/components/CartItem.jsx
export const CartItem = ({ item, onRemove, onUpdateQuantity }) => {
  return (
    <div className="border-b pb-4 mb-4 flex">
      <img
        src={item.image}
        alt={item.title}
        className="w-24 h-24 object-cover rounded"
      />
      <div className="ml-4 flex-grow">
        <h3 className="font-semibold">{item.title}</h3>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
        <div className="flex items-center mt-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="px-2 py-1 border rounded-l"
          >
            -
          </button>
          <span className="px-4 py-1 border-t border-b">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="px-2 py-1 border rounded-r"
          >
            +
          </button>
          <button
            onClick={() => onRemove(item.id)}
            className="ml-4 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="font-semibold">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
    </div>
  );
};
