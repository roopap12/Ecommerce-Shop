import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./ShoppingCart";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]); 

  const handleCloseCart = () => {
    // Close the cart drawer
    setIsCartOpen(false);
  };

  const handleRemoveItem = (itemId) => {
    // Implement logic to remove the item with itemId from cartItems
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };



  return (
    <header className="absolute left-0 top-3 z-20 flex w-full items-center">
      <div className="container">
        <div className="relative -mx-4 flex items-center justify-between">
        
          <div className="flex w-full items-center justify-between px-10">
            <div>
              <button
                onClick={() => setOpen(!open)}
                id="navbarToggler"
                className={`${
                  open && "navbarTogglerActive"
                } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
              >
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
              </button>
              <nav
                id="navbarCollapse"
                className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none lg:dark:bg-transparent ${
                  !open && "hidden"
                }`}
              >
                <ul className="flex justify-start mx-40">
                  <ListItem NavLink="/products">Shop</ListItem>
                  <ListItem NavLink="/#">Learn</ListItem>
                  {/* <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem> */}
                </ul>
              </nav>
              
            </div>
            <div className="w-30 max-w-full px-4 sm:justify">
  <a href="/" className="block w-full ">
    <img
      src="/KiwiMall4.png"
      alt="logo"
      className="w-28 md:w-48 lg:w-32 h-auto"
    />
  </a>
</div>
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
              <a
                href="/#"
                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a>
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
                    className="w-6 h-6 sm: align-middle"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  </span>
                  </div>
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
      <a
        href={NavLink}
        className="flex items-center py-2 text-md font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
      >
        {children}
      </a>
    </li>
  );
};

export default Navbar;
