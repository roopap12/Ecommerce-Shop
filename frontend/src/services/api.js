import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const getProducts = () => api.get('/products');

export const createProduct = async (productData) => {
  try {
    const response = await api.post('/products/create', productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await api.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await api.put(`/products/update/${productId}`,
updatedProductData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await api.delete(`/products/${productId}`);
  } catch (error) {
    throw error;
  }
};

export const addToCart = async (product) => {
    try {
      // Implemented addToCart logic here
      console.log(`Adding ${product.name} to the cart...`);
    } catch (error) {
      throw error;
    }
  };

export default api;
