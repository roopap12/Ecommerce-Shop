import React from "react";

const FeaturedProduct = () => (
  <div className="bg-white p-4 rounded shadow-md">
    <h2 className="text-xl front-bold mb-2">Featured Product</h2>
    <img
      src="https://via.placeholder.com/150"
      alt="Featured Product"
      className="mb-2"
    />
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
      View Details
    </button>
  </div>
);

const Categories = () => (
  <div className="mt-8">
    <h2 className="text-xl font-bold mb-4">Categories</h2>
    <div className="flex flex-wrap">
      <div className="bg-white p-4 rounded shadow-md m-2">
        <h3 className="text-lg font-semibold">Category 1</h3>
        <p className="text-gray-700">
          Description for Category 1. Lorem ipsum dolor sit amet.
        </p>
      </div>
      <div className="bg-white p-4 rounded shadow-md m-2">
        <h3 className="text-lg font-semibold">Category 2</h3>
        <p className="text-gray-700">
          Description for Category 2. Lorem ipsum dolor sit amet.
        </p>
      </div>
      {/* Add more categories as needed */}
    </div>
  </div>
);

const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <FeaturedProduct />
      <Categories />
    </div>
  );
};

export default Home;
