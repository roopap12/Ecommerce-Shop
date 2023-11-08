import React, { useState } from 'react';
import '../index.css';

const RegisterForm = () => {
  return (
    <main className="relative min-h-screen bg-white">
    <div className="p-6">
      {/* header */}
      <header className="flex justify-between">
        <div className="flex items-center">
          {/* Your SVG or logo here */}
        </div>
      </header>
  
      <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-md space-y-8">
        {/* register content */}
        <div>
          <h2 className="text-2xl font-bold text-center">Create your profile</h2>
  
          <div className="mt-6 space-y-4">
            <div className="flex flex-col items-center">
              <label htmlFor="dob" className="w-full text-left">Date of Birth</label>
              <input
                id="dob"
                type="date"
                className="w-full shadow appearance-none border border-black bg-white rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                max={new Date().toISOString().split('T')[0]}
              />
            </div>
  
            <div className="flex flex-col items-center">
              <label htmlFor="name" className="w-full text-left">Name (optional)</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="w-full shadow appearance-none border border-black bg-white rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="flex flex-col items-center">
              <label htmlFor="email" className="w-full text-left">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Your Email"
                className="w-full shadow appearance-none border border-black bg-white rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <div className="flex flex-col items-center">
              <label htmlFor="password" className="w-full text-left">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className="w-full shadow appearance-none border border-black bg-white rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
  
            <button className="w-full px-4 py-3 font-bold text-white transition duration-300 rounded-2xl bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-100">
              CREATE ACCOUNT
            </button>
          </div>
        </div>
  
        <div className="flex items-center justify-center space-x-4">
          <hr className="w-full border-gray-300" />
          <span className="font-semibold text-gray-400">OR</span>
          <hr className="w-full border-gray-300" />
        </div>
  
        <div className="grid grid-cols-2 gap-4">
  <a href="#" className="block px-4 py-2.5 font-bold text-center text-blue-700 transition duration-300 bg-white border-b-2 border-gray-300 rounded-2xl ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
    FACEBOOK
  </a>
  <a href="#" className="block px-4 py-2.5 font-bold text-center text-blue-500 transition duration-300 bg-white border-b-2 border-gray-300 rounded-2xl ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">
    GOOGLE
  </a>
</div>
  
        <div className="mt-8 text-sm text-gray-400">
          By signing up, you agree to our
          <a href="#" className="font-medium text-gray-500"> Terms</a> and
          <a href="#" className="font-medium text-gray-500"> Privacy Policy</a>.
        </div>
      </section>
    </div>
  </main>
  
  );
};

export default RegisterForm;

