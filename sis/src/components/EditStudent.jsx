// src/components/EditStudent.js
import React, { useState, useEffect } from 'react';
//import { databases } from './appwrite/appwrite';
import { account, databases } from '../appwrite';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent() {
  const { id } = useParams(); // Get student ID from URL
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await databases.getDocument(
          '67013871003261660f7d', // Replace with your database ID
          '670138a900217667d050', // Replace with your collection ID
          id
        );
        setName(response.name);
        setEmail(response.email);
        setAvatar(response.avatar);
      } catch (error) {
        console.error('Failed to fetch student', error);
      }
    };

    fetchStudent();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await databases.updateDocument(
        'your_database_id', // Replace with your database ID
        'your_students_collection_id', // Replace with your collection ID
        id,
        { name, email, avatar }
      );
      alert('Student updated successfully!');
      navigate('/students'); // Redirect back to student list
    } catch (error) {
      console.error('Failed to update student', error);
      alert('Failed to update student.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8">
      <h2 className="text-2xl mb-4">Edit Student</h2>
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
        Update Student
      </button>
    </form>
  );
}

export default EditStudent;
