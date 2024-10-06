// src/components/StudentList.js
import React, { useState, useEffect } from 'react';
//import { databases } from '../appwrite';  // Import Appwrite database instance
import { account, databases } from '../appwrite';
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Fetch students from Appwrite database on component mount
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await databases.listDocuments(
          '67013871003261660f7d', // Replace with your database ID
          '670138a900217667d050' // Replace with your collection ID
        );
        setStudents(response.documents);
      } catch (error) {
        console.error('Failed to fetch students', error);
      }
    };

    fetchStudents();
  }, []);

  // Delete a student by their ID
  const deleteStudent = async (studentId) => {
    try {
      await databases.deleteDocument(
        'your_database_id', // Replace with your database ID
        'your_students_collection_id', // Replace with your collection ID
        studentId
      );
      alert('Student deleted successfully!');
      setStudents(students.filter(student => student.$id !== studentId)); // Update the state after deletion
    } catch (error) {
      console.error('Failed to delete student', error);
      alert('Failed to delete student.');
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Student List</h2>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.$id} className="mb-4 p-4 border rounded-lg">
              <h3 className="text-xl">{student.name}</h3>
              <p>Email: {student.email}</p>
              {student.avatar && (
                <img src={student.avatar} alt={student.name} className="w-20 h-20 mt-2" />
              )}
              <div className="flex space-x-2 mt-2">
                <a href={`/edit-student/${student.$id}`} className="text-blue-500">Edit</a>
                <button
                  onClick={() => deleteStudent(student.$id)} // Call delete function when clicked
                  className="bg-red-500 text-white px-4 py-2 rounded-lg"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found</p>
      )}
    </div>
  );
}

export default StudentList;
