// src/components/StudentList.js
import React from 'react';

function StudentList({ students, onDeleteStudent }) {
  return (
    <div className="p-8">
      <h2 className="text-2xl mb-4">Student List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index} className="mb-4">
            <img src={student.avatar} alt={student.name} className="w-10 h-10 rounded-full inline-block mr-2" />
            {student.name} - {student.email}
            <button
              onClick={() => onDeleteStudent(index)}
              className="bg-red-500 text-white px-2 py-1 ml-4"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentList;
