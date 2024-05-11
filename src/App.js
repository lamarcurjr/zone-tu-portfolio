// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ZoneTu from './Components/ZoneTu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ZoneTu />} />
        <Route path="/HomePage" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
