// src/components/Login.js
import React, { useState } from 'react';
import { account } from '../appwrite';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      onLogin(); // Trigger login in App.js
      navigate('/dashboard'); // Redirect to Dashboard
    } catch (error) {
      console.error('Login failed', error);
      alert('Login failed. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl mb-6">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full mb-4 p-3 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full mb-4 p-3 border rounded-lg"
        />
        <button type="submit" className="bg-blue-500 text-white w-full py-2 rounded-lg">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
