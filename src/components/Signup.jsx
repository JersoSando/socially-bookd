import React from 'react'
import axios from 'axios';
import Header from './Header'
import { validateLogin } from '../utilities/helpers';
import { useSocialContext } from '../context/sociallyBookedContext'

export default function Signup() {
  const { setUserLogin } = useSocialContext()


  const handleSubmit = (e) => {
    const signUpObj = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    }

    const finalSignUpObj = validateLogin(signUpObj, e.target[4].value)
    e.preventDefault()
    if (!finalSignUpObj) {
      return window.alert(`Passwords do not match`)
    }
    axios.post('http://localhost:4000/api/signup', finalSignUpObj)
    .then((res) => {
      setUserLogin(res.data);
    }) 
    .catch(error => console.log(error.message))
  }

  // axios({  
  //   method: 'post', 
  //    url: '/api/signup',  
  //    data: {    
  //      firstName: e.target[0].value,    
  //      lastName: e.target[1].value,    
  //      email: e.target[2].value,    
  //      password: e.target[3].value,  
  //     }, }) 
  //     .then(res => console.log(res)) 
  //     .catch(error => console.log(error.message))
  return (
    
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="First Name">First Name: </label>
            <input name='First Name' placeholder='First Name' type="text"/>
            <label htmlFor="Last Name">Last Name: </label>
            <input name='Last Name' placeholder='Last Name' type="text"/>
            <label htmlFor="Email">Email: </label>
            <input name='Email' placeholder='Email' type="text"/>
            <label htmlFor="Password">Password: </label>
            <input name='Password' placeholder='Password' type="password"/>
            <label htmlFor="Reenter Password">Password: </label>
            <input name='Reenter Password' placeholder='Password' type="password"/>
            <button>Sign Me Up</button>
        </form>
    </div>
  )
}