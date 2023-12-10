// Products.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, getProductById } from '../services/api';





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

const ProductList = ({ api }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState(''); // State for sorting
  const [availabilityFilters, setAvailabilityFilters] = useState({
    inStock: false,
    preOrder: false,
    outOfStock: false,
  });
  const [priceFilters, setPriceFilters] = useState({
    from: '',
    to: '',
  });
  const [colorFilters, setColorFilters] = useState({
    red: false,
    blue: false,
    green: false,
    orange: false,
    purple: false,
    teal: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await api.get('/products');
        const response = await getAllProducts();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      }
    };

    fetchData();
  }, [api]);

  // Apply filters to products
  const filteredProducts = products
    .filter((product) => {
      // Apply availability filters
      if (availabilityFilters.inStock && product.stock <= 0) return false;
      if (availabilityFilters.preOrder && product.stock <= 3) return false;
      if (availabilityFilters.outOfStock && product.stock >= 10) return false;

      // Apply price filters
      const productPrice = product.price;
      const from = parseFloat(priceFilters.from);
      const to = parseFloat(priceFilters.to);
      if (
        (from && productPrice < from) ||
        (to && productPrice > to) ||
        (!isNaN(from) && isNaN(to) && productPrice < from) ||
        (isNaN(from) && !isNaN(to) && productPrice > to)
      ) {
        return false;
      }

      // Apply color filters
      if (
        colorFilters.red && !product.colors.includes('Red') ||
        colorFilters.blue && !product.colors.includes('Blue') ||
        colorFilters.green && !product.colors.includes('Green') ||
        colorFilters.orange && !product.colors.includes('Orange') ||
        colorFilters.purple && !product.colors.includes('Purple') ||
        colorFilters.teal && !product.colors.includes('Teal')
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      // Apply sorting
      if (sortBy === 'Title, DESC') return b.title.localeCompare(a.title);
      if (sortBy === 'Title, ASC') return a.title.localeCompare(b.title);
      if (sortBy === 'Price, DESC') return b.price - a.price;
      if (sortBy === 'Price, ASC') return a.price - b.price;
      return 0;
    });
  return (
<section className="mt-32">
  <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    

      <header>
      <h2 class="text-xl font-bold text-gray-900 sm:text-3xl">
        Collection



      </h2>

      <p class="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque
        praesentium cumque iure dicta incidunt est ipsam, officia dolor fugit
        natus?
      </p>
    </header>
    <div class="mt-8 block lg:hidden">
      <button 
        class="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
      >
        <span class="text-sm font-medium"> Filters & Sorting </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-4 w-4 rtl:rotate-180"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>

    <div class="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
      <div class="hidden space-y-4 lg:block">
        <div>
          <label htmlFor="SortBy" class="block text-xs font-medium text-gray-700">
            Sort By
          </label>

          <select id="SortBy" class="mt-1 rounded border-gray-300 text-sm">
            <option>Sort By</option>
            <option value="Title, DESC">Title, DESC</option>
            <option value="Title, ASC">Title, ASC</option>
            <option value="Price, DESC">Price, DESC</option>
            <option value="Price, ASC">Price, ASC</option>
          </select>
        </div>

        <div>
          <p class="block text-xs font-medium text-gray-700">Filters</p>

          <div class="mt-1 space-y-2">
            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> Availability </span>

                <span class="transition group-open:-rotate-180">

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                    >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    onClick={() => setPriceFilters()}

                    type="button"
                    class="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label

                      htmlFor="FilterInStock"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterInStock"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        In Stock (5+)
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPreOrder"

                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPreOrder"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Pre Order (3+)
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterOutOfStock"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOutOfStock"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Out of Stock (10+)
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>

            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> Price </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm text-gray-700">
                    The highest price is $600
                  </span>

                  <button
                    type="button"
                    class="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <div class="border-t border-gray-200 p-4">
                  <div class="flex justify-between gap-4">
                    <label
                      htmlFor="FilterPriceFrom"
                      class="flex items-center gap-2"
                    >
                      <span class="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceFrom"
                        placeholder="From"
                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                    <label htmlFor="FilterPriceTo" class="flex items-center gap-2">
                      <span class="text-sm text-gray-600">$</span>

                      <input
                        type="number"
                        id="FilterPriceTo"
                        placeholder="To"
                        class="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </details>

            <details
              class="overflow-hidden rounded border border-gray-300 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary
                class="flex cursor-pointer items-center justify-between gap-2 p-4 text-gray-900 transition"
              >
                <span class="text-sm font-medium"> Colors </span>

                <span class="transition group-open:-rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-4 w-4"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </summary>

              <div class="border-t border-gray-200 bg-white">
                <header class="flex items-center justify-between p-4">
                  <span class="text-sm text-gray-700"> 0 Selected </span>

                  <button
                    type="button"
                    class="text-sm text-gray-900 underline underline-offset-4"
                  >
                    Reset
                  </button>
                </header>

                <ul class="space-y-1 border-t border-gray-200 p-4">
                  <li>
                    <label

                      htmlFor="FilterRed"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterRed"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Red
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterBlue"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterBlue"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Blue
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterGreen"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterGreen"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Green
                      </span>
                    </label>
                  </li>

                  <li>
                    <label

                      htmlFor="FilterOrange"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterOrange"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Orange
                      </span>
                    </label>
                  </li>

                  <li>
                    <label
                      htmlFor="FilterPurple"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterPurple"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Purple
                      </span>
                    </label>
                  </li>

                  <li>
                      htmlFor="FilterTeal"
                      class="inline-flex items-center gap-2"
                    >
                      <input
                        type="checkbox"
                        id="FilterTeal"
                        class="h-5 w-5 rounded border-gray-300"
                      />

                      <span class="text-sm font-medium text-gray-700">
                        Teal
                      </span>
                    </label>
                  </li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </div>

      <div class="lg:col-span-3">
        <ul class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a href="/products/:id" class="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3
                  class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/products/:id" class="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3
                  class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>

          <li>
            <a href="/products/:id" class="group block overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                alt=""
                class="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div class="relative bg-white pt-3">
                <h3
                  class="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4"
                >
                  Basic Tee
                </h3>

                <p class="mt-2">
                  <span class="sr-only"> Regular Price </span>

                  <span class="tracking-wider text-gray-900"> £24.00 GBP </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
  );
};

export default ProductList;

