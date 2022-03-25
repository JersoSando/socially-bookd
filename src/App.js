import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom'
import NavHeader from './components/NavHeader';

function App() {
  return (
    <div>
      <NavHeader />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
    </Routes>
  </div>
        
  );
}

export default App;
