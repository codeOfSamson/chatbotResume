// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Import necessary components

import HomePage from './pages/HomePage';
// import ChatBotPage from './pages/ChatBotPage';
// import AboutPage from './pages/AboutPage';

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Define your Routes */}
                 <Route path="/" element={<HomePage />} ></Route>

        {/* <Route path="/" element={<HomePage />} />
        <Route path="/chatbot" element={<ChatBotPage />} />
        <Route path="/about" element={<AboutPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
