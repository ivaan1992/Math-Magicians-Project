import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Quote from './components/Quote';
import Calculator from './components/Calculator';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/Quote" element={<Quote />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
