// src/components/Dashboard.js
import React from 'react';

function Dashboard() {
  return (
    <div className="p-8">
      <h2 className="text-3xl mb-6">Dashboard</h2>
      <div className="flex space-x-4">
        <a href="/add-student" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add Student</a>
        <a href="/students" className="bg-green-500 text-white px-4 py-2 rounded-lg">View Students</a>
      </div>
    </div>
  );
}

export default Dashboard;
