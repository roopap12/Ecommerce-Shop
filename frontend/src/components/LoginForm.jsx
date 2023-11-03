import React, { useState } from 'react';
import '../index.css'; // Ensure you have imported the CSS file correctly

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleKeepLoggedInChange = () => {
    console.log('Checkbox clicked, current state:', keepLoggedIn);
    setKeepLoggedIn(!keepLoggedIn);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
  };

  return (
    <div className="bg-white rounded-lg py-5">
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl" onSubmit={handleSubmit}>
                <h3 className="mb-3 text-4xl font-extrabold text-dark-grey-900">Sign In</h3>
                <p className="mb-4 text-grey-700">Enter your email and password</p>
                <div className="flex justify-center items-center w-full mb-6 py-4 text-sm font-medium bg-gray-300 text-gray-900 rounded-2xl transition-colors duration-300 hover:bg-gray-400 focus-within:ring-4 focus-within:ring-gray-300">
                  <img className="h-5 mr-2" src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/logos/logo-google.png" alt="" />
                  Sign in with Google
                </div>
                <div className="flex items-center mb-3">
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                  <p className="mx-4 text-grey-600">or</p>
                  <hr className="h-0 border-b border-solid border-grey-500 grow" />
                </div>
                <label htmlFor="email" className="mb-2 text-sm text-start text-grey-900">Email*</label>
                <input
                  id="email"
                  type="email"
                  placeholder="email@gmail.com"
                  className="shadow appearance-none border border-black bg-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={email}
                  onChange={handleEmailChange}
                />
                <label htmlFor="password" className="mb-2 text-sm text-start text-grey-900">Password*</label>
                <input
                  id="password"
                  type="password"
                  placeholder="Enter a password"
                  className="shadow appearance-none border border-black bg-grey-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <div className="flex flex-row justify-between mb-8">
                <label className="relative inline-flex items-center mr-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={keepLoggedIn}
                      onChange={handleKeepLoggedInChange}
                      className="sr-only peer"
                    />
                    <div className="w-5 h-5 bg-white border-2 rounded-sm border-grey-500 peer-checked:bg-blue-500 flex justify-center items-center">
                      {keepLoggedIn && (
                        <img
                          src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/motion-tailwind/img/icons/check.png"
                          alt="Checked"
                          className="w-3 h-3" // Adjust size as needed
                        />
                      )}
                    </div>
                    <span className="ml-3 text-sm font-normal text-grey-900">Keep me logged in</span>
                  </label>
                  <a href="#" className="mr-4 text-sm font-medium text-purple-blue-500">Forget password?</a>
                </div>
                <button className="w-full px-6 py-5 mb-5 text-sm font-bold leading-none text-white transition duration-300 md:w-96 rounded-2xl hover:bg-blue-600 focus:ring-4 focus:ring-blue-100 bg-blue-500">SIGN IN</button>

                <p className="text-sm leading-relaxed text-grey-900">Not registered yet? <a href="#" className="font-bold text-grey-700">Create an Account</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
