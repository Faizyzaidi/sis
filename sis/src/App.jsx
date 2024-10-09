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
import logo from './assets/logo.png'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isGuest, setIsGuest] = useState(false);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const storedStudents = JSON.parse(localStorage.getItem('students')) || [];
    setStudents(storedStudents);
  }, []);

  const handleLogin = (guest = false) => {
    setIsAuthenticated(true);
    setIsGuest(guest);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsGuest(false);
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
      <nav className="p-2  text-white bg-blue-400 flex justify-between	">
         <div className='flex '>
          <img className ="h-10 rounded-sm ml-4" src={logo} alt="" />
          <h1 className='text-white text-4xl ml-1'>SIS</h1>
         </div>
        <Link to="/" className="mr-4 text-3xl ">Home</Link>
        {!isAuthenticated && !isGuest && <Link to="/login" className="mr-4">Login</Link>}
        {!isAuthenticated && !isGuest && <Link to="/signup" className="mr-4">Signup</Link>}
        {(isAuthenticated || isGuest) && <Link to="/dashboard" className="mr-4">Dashboard</Link>}
        {(isAuthenticated || isGuest) && <Link to="/add-student" className="mr-4">Add Student</Link>}
        {(isAuthenticated || isGuest) && <Link to="/students" className="mr-4">Student List</Link>}
        {(isAuthenticated || isGuest) && <button onClick={handleLogout} className="mr-4">Logout</button>}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Login onLogin={() => handleLogin(false)} onGuestLogin={() => handleLogin(true)} />}
        />
        <Route path="/signup" element={<Signup onSignup={() => handleLogin(false)} />} />

        {/* Allow guest and authenticated users to access these routes */}
        <Route
          path="/dashboard"
          element={isAuthenticated || isGuest ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-student"
          element={isAuthenticated || isGuest ? <AddStudent onAddStudent={addStudent} /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-student/:id"
          element={isAuthenticated || isGuest ? <EditStudent students={students} onUpdateStudent={updateStudent} /> : <Navigate to="/login" />}
        />
        <Route
          path="/students"
          element={isAuthenticated || isGuest ? <StudentList students={students} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
