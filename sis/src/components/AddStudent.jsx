// src/components/AddStudent.js
import React, { useState } from 'react';
import { databases } from '../appwrite';

function AddStudent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.createDocument(
        'your_database_id', // Replace with your database ID
        'your_students_collection_id', // Replace with your collection ID
        'unique()', // Document ID (unique identifier)
        { name, email, avatar }
      );
      alert('Student added successfully!');
    } catch (error) {
      console.error('Error adding student', error);
      alert('Failed to add student.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h2 className="text-2xl mb-4">Add New Student</h2>
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
