import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  return (
    <header className="absolute left-0 top-0 z-20 flex w-full items-center">
      <div className="container pr-4"> {/* Added pr-4 for right padding */}
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
                  <ListItem NavLink="/#">Payment</ListItem>
                  <ListItem NavLink="/#">About</ListItem>
                  <ListItem NavLink="/#">Blog</ListItem>
                  {isMobile && open && (
                    <>
                      <ListItem NavLink="/register">Register</ListItem>
                      <ListItem NavLink="/login">Sign In</ListItem>
                    </>
                  )}
                </ul>
              </nav>
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
              {/* <a
                href="/#"
                className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
              >
                Sign Up
              </a> */}
            </div>
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

