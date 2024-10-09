// src/components/Dashboard.js
import React from 'react';
import dashboard from '../assets/dashboard.jpg';

function Dashboard() {
  return (
    <div  className="flex flex-col space-x-4 p-8 h-screen "
    style={{
      backgroundImage: `url(${dashboard})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
      <h2 className="text-3xl text-white mb-6">Dashboard</h2>
      <div className='flex flex-col space-y-4 w-[140px]'>
       
        <a href="/add-student" className="bg-blue-500 text-white px-4 py-2  rounded-lg">
          Add Student
        </a>
        <a href="/students" className="bg-green-500 text-white px-4 py-2 rounded-lg">
          View Students
        </a>
        <a href="/students" className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
          Students List
        </a>
        <a href="/students" className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Edit Student
        </a>
        <a href="/students" className="bg-green-500 text-white px-4 py-2 rounded-lg">
          Delete Student
        </a>
      </div>
    </div>
  );
}

export default Dashboard;
