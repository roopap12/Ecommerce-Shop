import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3001',
  withCredentials: true,
});

// Function to get the JWT token
const getToken = async (credentials) => {
  try {
    const response = await axios.post('http://localhost:3001/user/login', credentials);
    return response.data.token;
  } catch (error) {
    throw error;
  }
};

// Add a request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      const userCredentials = {
        email: 'tina.patel@example.com', // Replace with your user credentials
        password: 'tpatel', // Replace with your user password
      };

      const token = await getToken(userCredentials);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getProducts = () => axiosInstance.get('/products');

export const createProduct = async (productData) => {
  try {
    const response = await axiosInstance.post('/products/create', productData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAllProducts = async (category) => {
  try {
    let url = '/products';
    if (category) {
      url += `?category=${category}`;
    }
    console.log("url: ", url)
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductCategories = async () => {
  try {
    const response = await axiosInstance.get('/products/uniquecategories');
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axiosInstance.get(`/products/${productId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const updateProduct = async (productId, updatedProductData) => {
  try {
    const response = await axiosInstance.put(`/products/update/${productId}`, updatedProductData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    await axiosInstance.delete(`/products/${productId}`);
  } catch (error) {
    throw error;
  }
};

export const getUniqueCategories = async () => {
    try {
      const response = await axiosInstance.get('products/uniquecategories');
      return response.data;
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

export default axiosInstance;
