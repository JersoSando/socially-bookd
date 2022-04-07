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
      buttonText: 'Log Me In',
      buttonFunc: () => handlePageChange('LOGIN')

    },
    'LOGIN': {
      buttonText: 'Sign Me Up',
      buttonFunc: () => handlePageChange('HOME')
    },
    'DASHBOARD': {
      buttonText: 'Log Me Out',
      buttonFunc: logout
    }
  }

  // const {handleLocationChange} = useSocialContext()

  

  return (
    <div className='header'>
        <header onClick={() => props.handleDashboardList('POSTCONTAINER')} className='header-name'>Socially Book'd</header>
        <div className='greeting'>Hello {userInfoObj.first_name}</div>
        <span className='search-box'>
          <Search handleDashboardList={props.handleDashboardList}/>
        <span>
          <button className='btn-func' onClick={() => headerButtonAndTextMap[currentPage].buttonFunc()}>{headerButtonAndTextMap[currentPage].buttonText}</button>
        </span>
        </span>
    </div>
  )
}