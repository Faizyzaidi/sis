// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (username && password) {
      onSignup();
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="text-center">
      {/* Background image */}
      <div
        className="p-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
          height: '300px',
        }}
      ></div>
      {/* Card with sign-up form */}
      <div className="mx-4 mx-md-5 shadow-lg bg-white rounded-lg -mt-20 backdrop-blur-lg">
        <div className="py-10 px-5 md:px-10">
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <h2 className="text-3xl font-bold mb-6">Sign up now</h2>
              <form onSubmit={handleSignup}>
                {/* First and last name inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First name"
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                {/* Email input */}
                <input
                  type="email"
                  placeholder="Email address"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Password input */}
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {/* Checkbox */}
                <div className="flex items-center justify-center mb-4">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded mr-2"
                    defaultChecked
                  />
                  <label htmlFor="newsletter" className="text-sm">
                    Subscribe to our newsletter
                  </label>
                </div>
                {/* Submit button */}
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
                {/* Register buttons */}
                <div className="text-center mt-6">
                  <p className="text-sm mb-4">or sign up with:</p>
                  <div className="flex justify-center space-x-4">
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-700"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button
                      type="button"
                      className="text-red-600 hover:text-red-700"
                    >
                      <i className="fab fa-google"></i>
                    </button>
                    <button
                      type="button"
                      className="text-blue-400 hover:text-blue-500"
                    >
                      <i className="fab fa-twitter"></i>
                    </button>
                    <button
                      type="button"
                      className="text-gray-800 hover:text-gray-900"
                    >
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Signup;
