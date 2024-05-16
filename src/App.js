// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import ZoneTu from './Components/ZoneTu';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ZoneTu />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
