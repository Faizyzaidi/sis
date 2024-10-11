// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import StudentList from './components/StudentList';
import Dashboard from './components/Dashboard';
import logo from './assets/logo.png';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const addStudent = (student) => {
    const updatedStudents = [...students, student];
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  const updateStudent = (index, updatedStudent) => {
    const updatedStudents = students.map((student, i) => (i === index ? updatedStudent : student));
    setStudents(updatedStudents);
    localStorage.setItem('students', JSON.stringify(updatedStudents));
  };

  return (
    <Router>
      <nav className="p-2 text-white bg-blue-400 flex justify-between">
        <div className="flex">
          <img className="h-10 rounded-sm ml-4" src={logo} alt="Logo" />
          <h1 className="text-white text-4xl ml-1">SIS</h1>
        </div>
        <Link to="/" className="mr-4 text-3xl hover:text-black">Home</Link>
        {!isAuthenticated && (
          <Link
            to="/signup"
            className="mr-4 bg-green-500 text-white py-1 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Sign Up
          </Link>
        )}
        {isAuthenticated && <Link to="/dashboard" className="mr-4">Dashboard</Link>}
        {isAuthenticated && <Link to="/add-student" className="mr-4">Add Student</Link>}
        {isAuthenticated && <Link to="/students" className="mr-4">Student List</Link>}
        {isAuthenticated && <button onClick={handleLogout} className="mr-4">Logout</button>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleLogin} />} />

        {/* Routes for authenticated users only */}
        <Route
          path="/dashboard"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-student"
          element={isAuthenticated ? <AddStudent onAddStudent={addStudent} /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-student/:id"
          element={isAuthenticated ? <EditStudent students={students} onUpdateStudent={updateStudent} /> : <Navigate to="/login" />}
        />
        <Route
          path="/students"
          element={isAuthenticated ? <StudentList students={students} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
