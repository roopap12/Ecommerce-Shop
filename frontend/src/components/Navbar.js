import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./ShoppingCart";
import { useNavigate } from 'react-router-dom';
import { getProductCategories } from "../services/api";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false); // State for category dropdown
  const [categories, setCategories] = useState([]); // Define categories state

  useEffect(() => {
    // Check screen width on mount and on resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getProductCategories();
        setCategories(response);
      } catch (error) {
        console.error("Error fetching categories:", error);
        // Handle the error as needed
      }
    };
    fetchCategories();
  }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); 
  const navigate = useNavigate();

  const handleCloseCart = () => {
    // Close the cart drawer
    setIsCartOpen(false);
  };

  const handleRemoveItem = (itemId) => {
    // Implement logic to remove the item with itemId from cartItems
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const handleToggleCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };

  const handleCategoryChange = (category) => {
    // Redirect to the ProductGrid route with the selected category
    navigate(`/productgrid/${category}`);
  };

  return (
    <header className="absolute left-0 top-0 z-20 flex w-full items-center">
      <div className="container pr-4">
        {" "}
        {/* Added pr-4 for right padding */}
        <div className="relative -mx-4 flex items-center justify-between">
          <div className="w-60 max-w-full px-4">
            <a href="/#" className="block w-full py-5">
              <img
                src="KiwiMall4.png"
                alt="logo"
                className="w-32 md:w-48 lg:w-64 h-auto"
              />
            </a>
          </div>
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Toggle between hamburger and close icons */}
              {isMobile && (
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={`${
                    open ? "navbarTogglerActive" : "navbarTogglerInactive"
                  } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                  style={{ marginRight: "10px" }} // Add margin to the right
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              )}
              {/* Navigation for mobile */}
              
              <nav
                id="navbarCollapse"
                className={`${
                  isMobile ? "absolute" : "hidden"
                } right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                }`}
              >
                <ul className="block lg:flex">
                  {/* <ListItem NavLink="/#">Home</ListItem> */}
                  <li className="relative">
            {/* Shop menu item */}
            <span
              className="cursor-pointer px-4 py-2 text-md font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
              onClick={handleToggleCategory}
            >
              Shop
            </span>
            {/* Category dropdown */}
            {isCategoryOpen && (
              <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg mt-2">
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category}
                      className="px-4 py-2 text-dark hover:text-primary dark:text-white cursor-pointer"
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
                  <ListItem NavLink="/#">Learn</ListItem>
                  {/* <ListItem NavLink="/#">Blog</ListItem> */}
                  {isMobile && open && (
                    <>
                      <ListItem NavLink="/register">Register</ListItem>
                      <ListItem NavLink="/login">Sign In</ListItem>
                    </>
                  )}
                </ul>
              </nav>
            </div>
            <Link to="/cart" className="flex items-center">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  ></path>
                </svg>
              </Link>
            <div className="hidden justify-end items-center pr-16 sm:flex lg:pr-0">
              <Link to="/register">
                <a
                  href="/#"
                  className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
                >
                  Register
                </a>
              </Link>
              <Link to="/login">
                <a
                  href="/#"
                  className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
                >
                  Sign in
                </a>
              </Link>
              <Link to="/profile" className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </Link>
           
              {/* <a
                href="/#"
                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a> */}
            </div>
            <div className="flex items-center">
              {/* Add the shopping bag icon */}
              <span
  className="text-dark dark:text-white cursor-pointer"
  onClick={() => setIsCartOpen(!isCartOpen)} // Toggle the cart visibility
>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 ml-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  </span>
                  </div>
                  <Cart
        onClose={() => setIsCartOpen(false)}
        isOpen={isCartOpen}
        // onClose={handleCloseCart}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
        
      />
          </div>
        </div>
      </div>
    </header>
  );
};

const ListItem = ({ children, NavLink }) => {
  return (
    <li>
      <Link
        to={NavLink}
        className="flex items-center py-2 text-md font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
      >
        {children}
      </Link>
    </li>
  );
};

export default Navbar;
