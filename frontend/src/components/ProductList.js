// Products.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: 'Product 1', price: 19.99, category: 'Category A' },
  { id: 2, name: 'Product 2', price: 29.99, category: 'Category B' },
  { id: 3, name: 'Product 3', price: 39.99, category: 'Category A' },
  { id: 4, name: 'Product 4', price: 49.99, category: 'Category B' },
  { id: 5, name: 'Product 5', price: 59.99, category: 'Category A' },
  { id: 6, name: 'Product 6', price: 69.99, category: 'Category B' },
  { id: 7, name: 'Product 7', price: 79.99, category: 'Category A' },
  { id: 8, name: 'Product 8', price: 89.99, category: 'Category B' },
];

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? dummyProducts
      : dummyProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto mt-8">
      <div className="flex justify-center mb-4">
        <label className="mr-2">Filter by Category:</label>
        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          className="p-2 border rounded"
        >
          <option value="All">All</option>
          <option value="Category A">Category A</option>
          <option value="Category B">Category B</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded shadow-md">
            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-gray-700 mb-2">${product.price.toFixed(2)}</p>
            <p className="text-gray-500">{product.category}</p>
            <Link to={`/products/${product.id}`} className="text-blue-500">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
