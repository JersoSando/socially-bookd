import React from 'react'
import { Link } from 'react-router-dom'

export default function NavHeader() {
  return (
    <div>
        <Link to="/login">Log in </Link>
        <Link to="/" > Home </Link>
        <Link to='/dashboard'> Dashboard </Link>
    </div>
  )
}