import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import {Routes, Route, Link} from 'react-router-dom'
import NavHeader from './components/NavHeader';

function App() {
  return (
    <div>
      <NavHeader />
      <Link to="/login"></Link> 
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </div>
        
  );
}

export default App;
