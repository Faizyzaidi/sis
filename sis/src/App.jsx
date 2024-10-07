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
  // State to track if the user is logged in or is a guest
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);

  // Function to handle login/signup (set isAuthenticated to true)
  const handleLogin = (guest = false) => {
    setIsAuthenticated(true);
    setIsGuest(guest);
  };

  return (
    <Router>
      <nav className="p-4 bg-gray-800 text-white">
        <a href="/" className="mr-4">Home</a>
        {!isAuthenticated && !isGuest && <a href="/login" className="mr-4">Login</a>}
        {!isAuthenticated && !isGuest && <a href="/signup" className="mr-4">Signup</a>}
        {(isAuthenticated || isGuest) && <a href="/dashboard" className="mr-4">Dashboard</a>}
        {(isAuthenticated || isGuest) && <a href="/add-student" className="mr-4">Add Student</a>}
        {(isAuthenticated || isGuest) && <a href="/students" className="mr-4">Student List</a>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={() => handleLogin(false)} onGuestLogin={() => handleLogin(true)} />} />
        <Route path="/signup" element={<Signup onSignup={() => handleLogin(false)} />} />
        
        {/* Allow guest and authenticated users to access these routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated || isGuest ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-student"
          element={isAuthenticated || isGuest ? <AddStudent /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-student/:id"
          element={isAuthenticated || isGuest ? <EditStudent /> : <Navigate to="/login" />}
        />
        <Route
          path="/students"
          element={isAuthenticated || isGuest ? <StudentList /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
