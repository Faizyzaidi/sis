// src/components/Home.js
import React from 'react';
import background from "../assets/background.png";

function Home() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-white-100">
        <img className='h-79 ' src={background} alt=""  />
      <h1 className="text-5xl font-bold text-blue-800">Welcome to Student Information System</h1>
    </div>
  );
}

export default Home;
