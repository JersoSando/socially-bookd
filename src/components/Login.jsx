import React from 'react'
import Header from './Header'
import axios from 'axios';

export default function Login(props) {
  
  const loginUser = (e) => {
    e.preventDefault()
    axios.post('http://localhost:4000/api/user', {
      email: e.target[0].value,
      password: e.target[1].value
    })
    .then((res) => {
      props.setUser(res.data);
      props.handleChangeLocation('DASHBOARD');
    })
    .catch(err => console.log(err.message))
  }
  return (
    <div>
        <Header />
        <form onSubmit={loginUser}>
            <label htmlFor='Email'>Email: </label>
            <input name='Email' placeholder='Email' type='text'/>
            <label htmlFor='Password'>Password: </label>
            <input name='Password' placeholder='Password' type='password'/>
            <button>Log Me In</button>
        </form>
    </div>
  )
}