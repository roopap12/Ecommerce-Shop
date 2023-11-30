import { useEffect, useState } from "react";
import { getProductById } from "../services/api";

const FeaturedProduct = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productIds = ['6543ff1d0e9660dd64ff0ffb', '654431630fa691cdf2379774'];
        const productData = await Promise.all(
          productIds.map((productId) => getProductById(productId))
        );

        setProducts(productData);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      }
    };

    fetchProducts();
  }, [api]);

  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:items-stretch">
          <div className="grid p-6 bg-gray-100 rounded place-content-center sm:p-8">
            <div className="max-w-md mx-auto text-center lg:text-left">
              <header>
                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Laptops</h2>
                <p className="mt-4 text-gray-500">
                  Shop new and refurbished laptops
                </p>
              </header>
              <a
                href="/products"
                className="inline-block px-12 py-3 mt-8 text-sm font-medium text-white transition bg-gray-900 border border-gray-900 rounded hover:shadow focus:outline-none focus:ring"
              >
                Shop All
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:py-8">
            {/* The issue was here: missing parent element for the map function */}
            <ul className="grid grid-cols-2 gap-4">
              {products.map((product) => (
                <li key={product.id}>
                  {/* Your product item JSX goes here */}
                  <a href="#" className="block group">
                    <img
                      src={product.imageUrl}
                      alt=""
                      className="object-cover w-full rounded aspect-square"
                    />
                    <div className="mt-3">
                      <h3 className="font-medium text-gray-900 group-hover:underline group-hover:underline-offset-4">
                        {product.name}
                      </h3>
                      <p className="mt-1 text-sm text-gray-700">$150</p>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
