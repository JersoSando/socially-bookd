import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [location, setLocation] = useState('HOME')
  const [user, setUser] = useState({})
  const handleChangeLocation = (nextLocation) => {
    setLocation(nextLocation)
  }
  
  let componentMap = {
    'DASHBOARD': <Dashboard user={user} handleChangeLocation={handleChangeLocation} currentLocation={location} />,
    'LOGIN': <Login handleChangeLocation={handleChangeLocation} currentLocation={location} setUser={setUser}/>,
    'HOME': <Home handleChangeLocation={handleChangeLocation} currentLocation={location} setUser={setUser}>Hello</Home>,
    

  }
  return (
    <div>
    {componentMap[location]}
  </div>
        
  );
}

export default App;
