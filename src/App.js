import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { useSocialContext } from './context/sociallyBookedContext'

function App() {
  const { currentPage } = useSocialContext()
  
  let componentMap = {
    'DASHBOARD': <Dashboard />,
    'LOGIN': <Login />,
    'HOME': <Home />
    

  }
  return (
  <div>
    {componentMap[currentPage]}
  </div>
        
  );
}

export default App;
