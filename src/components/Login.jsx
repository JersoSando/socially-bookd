import React from 'react'
import Header from './Header'
import axios from 'axios';
import { useSocialContext } from '../context/sociallyBookedContext'

export default function Login() {
  const { setUserLogin } = useSocialContext()
  
  const loginUser = async (e) => {
    e.preventDefault()
    if(!e.target[0].value && !e.target[1].value) return null
    await axios.post('http://localhost:4000/api/user', {
      email: e.target[0].value,
      password: e.target[1].value
    })
    .then((res) => {
      setUserLogin(res.data);
    })
    .catch(err => console.log(err.message))
  }
  return (
    <div>
        <Header />
        <div className='login-container'>
        <img src='https://t3.ftcdn.net/jpg/00/74/02/62/360_F_74026262_aaY5OVSnJ6LFI5kqqulNBJGWxnYSnhDD.jpg' alt='line of books'/>
        <form className='login-box' onSubmit={loginUser}>
            <label htmlFor='Email'>Email: </label>
            <input name='Email' placeholder='Email' type='text'/>
            <br/>
            <label htmlFor='Password'>Password: </label>
            <input name='Password' placeholder='Password' type='password'/>
            <br/>
            <button className='login-btn'>Log Me In</button>
        </form>
        
        </div>
    </div>
  )
}