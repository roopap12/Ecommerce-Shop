import { useEffect, useState } from "react";
import { getProductById } from "../services/api";
import React from "react";

export const BestSeller = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = [
          "6543ff1d0e9660dd64ff0ffb",
          "654431630fa691cdf2379774",
          "654c04688b38089ad7a8106c",
          "654c04688b38089ad7a8106d",
          "654c0dbb8b38089ad7a8106f",
        ];
        const productData = await Promise.all(
          productIds.map((productId) => getProductById(productId))
        );
        console.log("Product data", productData);

        setProducts(productData);
      } catch (error) {
        console.error("Error fetching products:", error);
        setError(error);
      }
    };

    fetchProducts();
  }, [api]);

  return (
    <div className="2xl:container 2xl:mx-auto">
      <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
        <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">
          Top Selling
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-50 p-8">
              <div className="">
                <h2 className="text-xl text-gray-600">{product.name}</h2>
                <p className="text-xl font-semibold text-gray-800 mt-2">
                  {product.price}
                </p>
              </div>
              <div className="flex justify-center items-center mt-8 md:mt-24">
                <img
                  className=""
                  src={product.imageUrl}
                  alt="Product"
                />
              </div>
              <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                <button
                  aria-label="show in red color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#DC2626"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in white color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="white"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                <button
                  aria-label="show in black color"
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded"
                >
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="5"
                      cy="5"
                      r="4.75"
                      fill="#111827"
                      stroke="#6B7280"
                      strokeWidth="0.5"
                    />
                  </svg>
                </button>
                {/* Add more buttons as needed */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
