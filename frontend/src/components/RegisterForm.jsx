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

        <section className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-sm space-y-4 text-center">
          {/* register content */}
          <div>
            <h2 className="mb-3 text-2xl font-bold">Create your profile</h2>
            <input
              type="text"
              placeholder="Age"
              className="shadow appearance-none border border-black bg-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              placeholder="Name (optional)"
              className="shadow appearance-none border border-black bg-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              placeholder="Email"
              className="shadow appearance-none border border-black bg-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="password"
              placeholder="Password"
              className="shadow appearance-none border border-black bg-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 bg-blue-500">CREATE ACCOUNT</button>
          </div>

          <div className="flex items-center space-x-4">
            <hr className="w-full border border-gray-300" />
            <div className="font-semibold text-gray-400">OR</div>
            <hr className="w-full border border-gray-300" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <a href="#" className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-700 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">FACEBOOK</a>
            <a href="#" className="rounded-2xl border-b-2 border-b-gray-300 bg-white px-4 py-2.5 font-bold text-blue-500 ring-2 ring-gray-300 hover:bg-gray-200 active:translate-y-[0.125rem] active:border-b-gray-200">GOOGLE</a>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            By signing in to your service, you agree to our
            <a href="#" className="font-medium text-gray-500"> Terms</a> and
            <a href="#" className="font-medium text-gray-500"> Privacy Policy</a>.
          </div>
        </section>
      </div>
    </main>
  );
};

export default RegisterForm;

