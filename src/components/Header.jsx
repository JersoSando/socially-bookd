import React from 'react'
import { useSocialContext } from '../context/sociallyBookedContext'
import Search from './Search'

export default function Header(props) {
  const {userInfoObj, handlePageChange, currentPage, isLogginIn, logout = () => {console.log('i was logged out brooo')}} = useSocialContext()

  const buttonText = currentPage === 'LOGIN' ? 'Sign Me Up' : 'Log Me In'
  const changePage = currentPage === 'LOGIN' ? 'HOME' : 'LOGIN'
  console.log('what is header prop', props)
  const headerButtonAndTextMap = {
    'HOME': {
      buttonText: 'log me in',
      buttonFunc: () => handlePageChange('LOGIN')

    },
    'LOGIN': {
      buttonText: 'sign me up',
      buttonFunc: () => handlePageChange('HOME')
    },
    'DASHBOARD': {
      buttonText: 'log me out',
      buttonFunc: logout
    }
  }

  return (
    <div className='header'>
        <header>Socially Book'd Hello, {userInfoObj.first_name}</header>
        <span className='search-box'>
          <Search handleDashboardList={props.handleDashboardList}/>
          <button onClick={() => headerButtonAndTextMap[currentPage].buttonFunc()}>{headerButtonAndTextMap[currentPage].buttonText}</button>
        </span>
    </div>
  )
}