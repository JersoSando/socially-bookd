import React from 'react'

export default function Signup() {
  return (
    
    <div>
        <form>
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