// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin, onGuestLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simple check for username/password (you can enhance this with better validation)
    if (username && password) {
      onLogin();
      navigate('/dashboard');
    } else {
      alert('Please enter your username and password.');
    }
  };

  const handleGuestLogin = () => {
    onGuestLogin();
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleLogin} className="p-8">
      <h2 className="text-2xl mb-4">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="block w-full mb-4 p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 mr-2">
        Login
      </button>
      <button type="button" onClick={handleGuestLogin} className="bg-gray-500 text-white px-4 py-2">
        Continue as Guest
      </button>
    </form>
  );
}

export default Login;
