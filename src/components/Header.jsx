import React from 'react'
import { useSocialContext } from '../context/sociallyBookedContext'
import Search from './Search'

export default function Header(props) {
  const {userMessage, handlePageChange, currentPage} = useSocialContext()

  const buttonText = currentPage === 'LOGIN' ? 'Sign Me Up' : 'Log Me In'
  const changePage = currentPage === 'LOGIN' ? 'HOME' : 'LOGIN'
  console.log('what is header prop', props)

  return (
    <div className='header'>
        <header>Socially Book'd Hello, {userMessage.first_name}</header>
        <span className='search-box'>
          <Search handleDashboardList={props.handleDashboardList}/>
          <button onClick={() => handlePageChange(changePage)}>{buttonText}</button>
        </span>
    </div>
  )
}