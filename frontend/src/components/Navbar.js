import { useState } from "react";
// import api from '../services/api';

const Navbar = () => {
    const [open, setOpen] = useState(false);
  
    return (
      <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 ">
              <a href="/#" className="block w-full py-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
</svg>

                <img
                  src="https://cdn.tailgrids.com/2.0/image/assets/images/logo/logo-white.svg"
                  alt="logo"
                  className="w-full hidden dark:block"
                />
              </a>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={() => setOpen(!open)}
                  id="navbarToggler"
                  className={` ${
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
                  } `}
                >
                  <ul className="block lg:flex">
                    <ListItem NavLink="/#">Home</ListItem>
                    <ListItem NavLink="/#">Payment</ListItem>
                    <ListItem NavLink="/#">About</ListItem>
                    <ListItem NavLink="/#">Blog</ListItem>
                  </ul>
                </nav>
              </div>
              <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                <a
                  href="/#"
                  className="px-7 py-3 text-base font-medium text-dark hover:text-primary dark:text-white"
                >
                  Sign in
                </a>
  
                <a
                  href="/#"
                  className="rounded-lg bg-primary px-7 py-3 text-base font-medium text-white hover:bg-opacity-90"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };

  const ListItem = ({ children, NavLink }) => {
    return (
      <>
        <li>
          <a
            href={NavLink}
            className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
          >
            {children}
          </a>
        </li>
      </>
    );
  };

  export default Navbar;