import React, { useState } from "react";
import Header from "./Header";
import ProductCategoryGrid from "./ProductCategoryGrid"
import { getAllProducts } from "../services/api";
import FeaturedProduct from "./FeaturedProducts";
import { Link } from "react-router-dom";
import { BestSeller } from "./BestSeller";
import { ProductReview1 } from "./ProductReview";
// import Footer1 from "./Footer";

const BestSeller1 = () => {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="lg:px-20 md:px-6 px-4 md:py-12 py-8">
                <div>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800 text-center">Top Selling</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-8 md:mt-10">
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://i.ibb.co/8403ZFZ/pexels-hormel-2762247-removebg-preview-2-1.png" alt="A chair with designed back" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                            <button aria-label="show in red color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#DC2626" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://i.ibb.co/WBdnRqb/eugene-chystiakov-3ne-Swyntb-Q8-unsplash-1-removebg-preview-2-1.png" alt="A chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-8 md:mt-24">
                            <button aria-label="show in white color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="white" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div className="">
                            <h2 className="text-xl text-gray-600">Lounge Chair</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$1200</p>
                        </div>
                        <div className="flex justify-center items-center mt-8 md:mt-24">
                            <img className="" src="https://i.ibb.co/R2fbCvj/kari-shea-It-Mgg-D0-Egu-Y-unsplash-removebg-preview-2-1.png" alt="A sofa chair with wooden legs" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-16 md:mt-32">
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in brown color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#92400E" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 lg:gap-8 mt-4 md:mt-6 lg:mt-8">
                    <div className="bg-gray-50 p-8">
                        <div>
                            <h2 className="text-xl leading-tight text-gray-600">Sectional Sofa</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$78900</p>
                        </div>
                        <div className="flex justify-center items-center mt-28 md:mt-3">
                            <img src="https://i.ibb.co/CPdBFwZ/pexels-pixabay-276583-removebg-preview-1-1.png" alt="A large sectional sofa" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                            <button aria-label="show in yellow color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#F59E0B" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in light gray color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#9CA3AF" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-8">
                        <div>
                            <h2 className="text-xl leading-tight text-gray-600">Two Seater Sofa</h2>
                            <p className="text-xl font-semibold text-gray-800 mt-2">$2900</p>
                        </div>
                        <div className="flex justify-center items-center mt-28 md:mt-1">
                            <img src="https://i.ibb.co/238nZzf/pexels-andrea-piacquadio-3757055-removebg-preview-1-1.png" alt="A beautiful two seater sofa" />
                        </div>
                        <div className="flex justify-end items-center space-x-2 mt-36 md:mt-12">
                            <button aria-label="show in black color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#111827" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                            <button aria-label="show in green color" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="5" cy="5" r="4.75" fill="#047857" stroke="#6B7280" strokeWidth="0.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// import ProductCategoryGrid from "./ProductGrid";

// import Footer1 from "./Footer";
// import FeaturedProduct from "./FeaturedProduct";



// Placeholder component for Featured Product






// Placeholder component for Hero Section



// Placeholder component for About Section
const AboutSection = () => (
  <section className="about bg-blue-200 p-8 rounded-md mt-8">
    <h2 className="text-2xl font-bold mb-4">About Us</h2>
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </section>
);

// Placeholder component for FAQs Section
const FAQsSection = () => (
  <section className="faqs bg-gray-100 p-8 rounded-md mt-8">
    <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
    <p className="text-gray-700">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </p>
  </section>
);

// Placeholder component for Product Reviews Section
const ProductReviewsSection = () => (
  <section className="reviews bg-gray-100 p-8 rounded-md mt-8">
    <h2 className="text-2xl font-bold mb-4">Product Reviews</h2>
    <p className="text-gray-700">
      10,000 happy customers worldwide with a 5-star average rating.
      {/* Add hero icons for stars */}
    </p>
  </section>
);

// Placeholder component for Newsletter Section

function Newsletter() {
    return (
        <div className="2xl:mx-auto 2xl:container mx-4 py-16">
            <div className=" w-full  relative flex items-center justify-center">
                <img src="https://i.ibb.co/4sYZ8gC/img-2.png" alt="dining" className="w-full h-full absolute z-0 hidden xl:block" />
                <img src="https://i.ibb.co/bbS3J9C/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0 hidden sm:block xl:hidden" />
                <img src="https://i.ibb.co/JKkzGDs/pexels-max-vakhtbovych-6301182-1.png" alt="dining" className="w-full h-full absolute z-0  sm:hidden " />
                <div className="bg-gray-800 bg-opacity-80 md:my-16 lg:py-16 py-10 w-full md:mx-24 md:px-12 px-4 flex flex-col items-center justify-center relative z-40">
                    <h1 className="text-4xl font-semibold leading-9 text-white text-center">Don’t miss out!</h1>
                    <p className="text-base leading-normal text-center text-white mt-6">
                        Subscribe to your newsletter to stay in the loop. Our newsletter is sent once in <br />a week on every friday so subscribe to get latest news and updates.
                    </p>
                    <div className="sm:border border-white flex-col sm:flex-row  flex items-center lg:w-5/12 w-full mt-12 space-y-4 sm:space-y-0">
                        <input className="border border-white sm:border-transparent text-base w-full font-medium leading-none text-white p-4 focus:outline-none bg-transparent placeholder-white" placeholder="Email Address" />
                        <button className="focus:outline-none focus:ring-offset-2 focus:ring border border-white sm:border-transparent w-full sm:w-auto bg-white py-4 px-6 hover:bg-opacity-75">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    );
}




const Faq8 = () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);

    return (
        <div className=" lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
            <h1 className="text-center lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">FAQ's</h1>

            <div className=" lg:mt-12 bg-gray-100 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto ">
                <div className=" flex justify-between md:flex-row flex-col ">
                    <div className=" md:mb-0 mb-8 md:text-left text-center">
                        <h2 className=" font-medium text-xl leading-5 text-gray-800 lg:mb-2 mb-4">Questions</h2>
                        <p className=" font-normal text-sm leading-5 text-gray-600 md:w-8/12 md:ml-0 w-11/12 mx-auto">If you don’t find your answer, Please contact us or Leave a Message, we’ll be more than happy to assist you.</p>
                    </div>

                    <div className=" flex justify-center items-center">
                        <div className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 flex bg-white md:justify-center justify-between items-center px-4 py-3 w-full">
                            <input className="focus:outline-none bg-white" type="text" placeholder="Search" />
                            <svg className="cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M21 21L15 15" stroke="#4B5563" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:w-8/12 w-full mx-auto">
                {/* <!-- Question 1 --> */}
                <hr className=" w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className=" ">
                            <p className="flex justify-center items-center font-medium text-base leading-6 md:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q1.</span> How do i know if a product is available in boutiques?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen(!open)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 2 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q2.</span> How can i find the prices or get other information about chanel products?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen2(!open2)}>
                            <svg className={"transform " + (open2 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open2 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 3 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q3.</span>
                                How many collections come out every year?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen3(!open3)}>
                            <svg className={"transform " + (open ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open3 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 4 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6  ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q4.</span>
                                Are all of the fashion collections features on the website?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen4(!open4)}>
                            <svg className={"transform " + (open4 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open4 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                {/* <!-- Question 5 --> */}

                <hr className=" w-full lg:mt-10 my-8" />

                <div className="w-full md:px-6 ">
                    <div id="mainHeading" className="flex justify-between items-center w-full">
                        <div className="">
                            <p className="flex justify-center items-center font-medium text-base leading-6 lg:leading-4 text-gray-800">
                                {" "}
                                <span className="  lg:mr-6 mr-4 lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">Q5.</span>
                                Where do i find products that i have seen in magazines or Social Media?
                            </p>
                        </div>
                        <button aria-label="toggler" className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800" onClick={() => setOpen5(!open5)}>
                            <svg className={"transform " + (open5 ? "rotate-180" : "rotate-0")} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div id="menu" className={"mt-6 w-full " + (open5 ? "block" : "hidden")}>
                        <p className="text-base leading-6 text-gray-600 font-normal">Remember you can query the status of your orders any time in My orders in the My account section. if you are not resigered at Mango.com, you can access dierectly in the Orders section. In this cause, you will have enter your e-mail address and order number.</p>
                    </div>
                </div>

                <hr className=" w-full lg:mt-10 my-8" />
            </div>
        </div>
    );
};









const Home = () => {
  return (
    <div className="container mx-auto mt-8">
      <Header/>
      <FeaturedProduct />
      <ProductCategoryGrid/>
      <BestSeller1 />
      <FeaturedProduct/>
      {/* <ProductCategoryGrid/> */}
      <BestSeller />
      <Faq8 />
      <ProductReview1 />
      <Newsletter />
      
    </div>
  );
};

export default Home;
