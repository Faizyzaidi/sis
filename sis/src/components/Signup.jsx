// src/components/Signup.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup({ onSignup }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password) {
      onSignup();
      navigate('/dashboard');
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <section className="text-center">
      <div
        className="p-5 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://mdbootstrap.com/img/new/textures/full/171.jpg')",
          height: '300px',
        }}
      ></div>
      <div className="mx-4 mx-md-5 shadow-lg bg-white rounded-lg -mt-20 backdrop-blur-lg">
        <div className="py-10 px-5 md:px-10">
          <div className="flex justify-center">
            <div className="w-full max-w-lg">
              <h2 className="text-3xl font-bold mb-6">Sign up now</h2>
              <form onSubmit={handleSignup}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="Last name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border border-gray-300 rounded-lg py-2 px-4 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-lg w-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Sign Up
                </button>
                <div className="text-center mt-6">
                  <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Login here</Link></p>
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
