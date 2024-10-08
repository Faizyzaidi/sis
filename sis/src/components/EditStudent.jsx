// src/components/EditStudent.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditStudent({ students, onUpdateStudent }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const studentIndex = parseInt(id);
  const student = students[studentIndex];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [avatar, setAvatar] = useState('');

  useEffect(() => {
    if (student) {
      setName(student.name);
      setEmail(student.email);
      setAvatar(student.avatar);
    }
  }, [student]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !avatar) {
      alert('All fields are required!');
      return;
    }

    onUpdateStudent(studentIndex, { name, email, avatar });
    navigate('/students'); // Redirect to student list after update
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
