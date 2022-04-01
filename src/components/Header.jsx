import React from 'react'
import Search from './Search'

export default function Header(props) {

  return (
    <div className='header'>
        <header>Socially Book'd {props.user}</header>
        <span className='search-box'>
          <Search />
        </span>
    </div>
  )
}