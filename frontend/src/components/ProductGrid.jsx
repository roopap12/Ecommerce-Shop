import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/api';
// import axios from 'axios';

const ProductGrid = ({ api }) => {
  const [products, setProducts] = useState([]);
  // const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    console.log('Effect triggered with category:', selectedCategory);
    const fetchData = async () => {
      try {
        console.log("Selected Category:", selectedCategory);
        // const response = await api.get('/products');
        // const response = await getAllProducts();
        // const response = await getAllProducts({ category: selectedCategory });
        const fetchData = await getAllProducts(selectedCategory ? { category: selectedCategory } : {});
        console.log("Fetched Products:", fetchData)
        setProducts(fetchData);
      } catch (error) {
        console.error('Error fetching products:', error);
        // setError(error);
      }
    };

    fetchData();
  }, [selectedCategory]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log('Selected Category:', event.target.value);
  };

  // if (error) {
  //   return <div>Error fetching products: {error.message}</div>;
  // }

      return (
      <div>
        {/* Display all products */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow p-4">
              <img src={product.imageUrl} alt={product.name} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-primary mt-2">${product.price}</p>
            </div>
          ))}
        </div>
    
        {/* Dropdown to select category */}
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-gray-700">
            Select Category:
          </label>
          <select
            id="category"
            name="category"
            onChange={handleCategoryChange}
            value={selectedCategory || ''}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="womensClothing Clothing">Women's Clothing</option>
            <option value="mensClothing">Men's Clothing</option>
            <option value="mensShoes">Men's Shoes</option>
            <option value="kitchen">Kitchen</option>
            {/* Add other categories as needed */}
          </select>
        </div>
      </div>
    );
  };

export default ProductGrid;