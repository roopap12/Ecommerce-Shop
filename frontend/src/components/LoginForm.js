import React, { useState } from 'react';
import axios from 'axios';
import '../index.css'; 
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(true);
  const [message, setMessage] = useState(''); 

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/user/login', {
        email,
        password,
      });

      console.log(response.data); // You can handle the response as needed

      // If keepLoggedIn is true, save the user data in localStorage
      if (keepLoggedIn) {
        localStorage.setItem('user', JSON.stringify(response.data));
      }
      // Set the success message
      setMessage('Successfully logged in!');

      // Clear the form fields
      setEmail('');
      setPassword('');

      // Navigate to home page after 2 seconds
      setTimeout(() => navigate('/'), 2000);
      
    } catch (error) {
      console.error('Login failed:', error.message);
      // Handle login failure (e.g., show an error message to the user)
    }
  };

  return (
    <div className="bg-white rounded-lg py-5 mt-[13vh]">
      <div className="container flex flex-col mx-auto bg-white rounded-lg pt-12 my-5">
        <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
          <div className="flex items-center justify-center w-full lg:p-12">
            <div className="flex items-center xl:p-10">
              <form className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold text-center">Sign In</h3>
                <p className="mb-4 text-grey-700">Enter your email and password</p>
                <div className="flex items-center justify-center w-full py-4 mb-6 text-sm font-medium transition duration-300 rounded-2xl text-grey-900 bg-grey-300 hover:bg-grey-400 focus:ring-4 focus:ring-grey-300">
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
                  placeholder="mail@loopple.com"
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
                <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 ">SIGN IN</button>

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
