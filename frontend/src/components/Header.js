import React from "react";

const Header = () => {
  return (
    <>
      <div className="relative bg-white pb-[110px] pt-[150px] dark:bg-dark lg:pt-[200px] lg:pb-[200px]">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-5/12">
            <div className="hero-content text-center lg:text-left">
              <h1 className="mb-5 text-4xl font-bold !leading-[1.208] text-dark dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
                Shop Smart, Live Better
              </h1>
              <p className="mb-8 max-w-[480px] text-base text-body-color dark:text-dark-6 text-center lg:text-left">
                Discover and shop top-quality fashion, tech, and culinary essentials easily at competitive prices.
              </p>
              <ul className="flex flex-wrap items-center justify-center lg:justify-start">
                <li>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                  >
                    Get Started
                  </a>
                </li>
                <li className="ml-4">
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center px-5 py-3 text-center text-base font-medium text-[#464646] hover:text-primary dark:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                    </svg>
                    View Products
                  </a>
                </li>
              </ul>
              <div className="clients pt-16"></div>
            </div>
          </div>
          <div className="w-full lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://cdn.tailgrids.com/1.0/assets/images/hero/hero-image-01.png"
                  alt="hero"
                  className="max-w-full lg:ml-auto"
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#817F7F" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#817F7F" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#817F7F" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#817F7F" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#817F7F" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#817F7F" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#817F7F" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#817F7F" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#817F7F" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#817F7F" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#817F7F" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#817F7F" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#817F7F" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#817F7F" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#817F7F" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#817F7F" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#817F7F" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#817F7F" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#817F7F" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#817F7F" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#817F7F" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#817F7F" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#817F7F" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#817F7F" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#817F7F" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

export default Header;