import React from 'react';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DisplayCars from './components/DisplayCars';
import TableCars from './components/TableCars';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavBar />

        <Routes>
          <Route path="/" element={<DisplayCars />} />
          <Route path="/table" element={<TableCars />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
