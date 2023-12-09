import React from 'react';
const Cart = ({ isOpen, onClose, cartItems, setCartItems, onRemoveItem}) => {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  


  return (
    <div
      className={`fixed top-0 right-0 h-full w-64 bg-white overflow-y-auto transition-transform duration-300 transform border border-gray-300 rounded ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 ">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {cartItems.map((item) => (
          <div key={item.id} className="mb-4 flex justify-between items-center mt-5">
            <p className="text-gray-700">
              {item.name} - ${item.price.toFixed(2)} x {item.quantity}
            </p>
            <button
              onClick={() => onRemoveItem(item.id)}
              className="text-red-500 hover:text-red-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 011.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
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
          className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-4 lg:mt-12 mt-6"
        >
          Close Cart
        </button>
        <button
          onClick={onClose}
          className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-4 lg:mt-12 mt-6"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
