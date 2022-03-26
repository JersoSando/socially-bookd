import React, {useState} from 'react'
import Header from './Header'
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = () => {
    axios.get('/api/user').then((res) => {
      setEmail(res.data.email)
      setPassword(res.data.password)
    }).catch(err => console.log(err))
  }
  return (
    <div>
        <Header />
        <form>
            <label htmlFor='Email'>Email: </label>
            <input name='Email' placeholder='Email' type='text'/>
            <label htmlFor='Password'>Password: </label>
            <input name='Password' placeholder='Password' type='password'/>
            <button onClick={loginUser}>Log Me In</button>
        </form>
    </div>
  )
}