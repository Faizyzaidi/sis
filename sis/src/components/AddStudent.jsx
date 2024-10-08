// src/components/AddStudent.js
import React, { useState } from 'react';

function AddStudent({ onAddStudent }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(''); // Reset error message

    // Basic form validation
    if (!name || !email || !avatar) {
      setError('All fields are required!');
      return;
    }

    // Call the parent function to add student
    onAddStudent({ name, email, avatar });

    // Clear form fields
    setName('');
    setEmail('');
    setAvatar('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h2 className="text-2xl mb-4">Add New Student</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="block w-full mb-4 p-2 border"
      />
      <input
        type="text"
        placeholder="Avatar URL"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
        className="block w-full mb-4 p-2 border"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;
