import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../services/api';
// import axios from 'axios';

const ProductGrid = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await api.get('/products');
        const response = await getAllProducts(selectedCategory);
        console.log(response);
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      }
    };

    fetchData();
  }, [api, selectedCategory]);

  // if (error) {
  //   return <div>Error fetching products: {error.message}</div>;
  // }

  const handleCategoryChange = async (category) => {
    // Set the selected category and trigger a re-fetch
    setSelectedCategory(category);
  };

  return (
    <div className="mt-64">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {products.map((product) => (
        <div key={product._id} className="bg-white rounded-lg shadow p-4">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
          <p className="text-gray-600">{product.description}</p>
          <p className="text-primary mt-2">${product.price}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductGrid;
