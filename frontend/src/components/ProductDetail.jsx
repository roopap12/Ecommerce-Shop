// ProductDetails.js
import React, { useState } from "react";
import Cart from "./ShoppingCart"

const ProductDetails = () => {
    const [isCartOpen, setCartOpen] = useState(false);
  const product = {
    id: 1,
    name: "Example Product",
    price: 29.99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    imageUrl: "https://via.placeholder.com/400",
  };

  const handleAddToCart = () => {
    // Add logic to update the actual cart data
    // For now, just toggle the cart open/closed
    setCartOpen(!isCartOpen);
  };

  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-auto rounded shadow-md"
          />
        </div>
        <div className="w-1/2 ml-8">
          <h2 className="text-3xl font-semibold mb-4">{product.name}</h2>
          <p className="text-gray-700 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-4">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
        </div>
      </div>
      {/* Render the Cart component */}
      <Cart isOpen={isCartOpen} onClose={() => setCartOpen(false)} />
    </div>
  );
};

export default ProductDetails;
