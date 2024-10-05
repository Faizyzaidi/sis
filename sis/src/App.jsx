// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';
import Dashboard from './components/Dashboard';

function App() {
  // State to track if the user is logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle login/signup (set isAuthenticated to true)
  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <a href="/" className="mr-4">Home</a>
        {!isAuthenticated && <a href="/login" className="mr-4">Login</a>}
        {!isAuthenticated && <a href="/signup" className="mr-4">Signup</a>}
        {isAuthenticated && <a href="/dashboard" className="mr-4">Dashboard</a>}
        {isAuthenticated && <a href="/add-student" className="mr-4">Add Student</a>}
        {isAuthenticated && <a href="/students" className="mr-4">Student List</a>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />
        
        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-student"
          element={isAuthenticated ? <AddStudent /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-student/:id"
          element={isAuthenticated ? <EditStudent /> : <Navigate to="/login" />}
        />
        <Route
          path="/students"
          element={isAuthenticated ? <StudentList /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
