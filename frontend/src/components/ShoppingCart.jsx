// Cart.js
import React from 'react';

const Cart = ({ isOpen, onClose }) => {
  // Dummy cart data (replace with actual cart data)
  const cartItems = [
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ];

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white overflow-y-auto transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4">
            <p className="text-gray-700">
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </p>
          </div>
        ))}
        <hr className="my-4" />
        <p className="text-gray-700 font-semibold">
          Total: ${totalPrice.toFixed(2)}
        </p>
      </div>
      <div className="p-4">
        <button
          onClick={onClose}
          className="bg-blue-500 text-white px-4 py-2 rounded-full"
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
