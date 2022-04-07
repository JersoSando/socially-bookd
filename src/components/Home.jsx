import React from 'react'
import Header from './Header'
import Signup from './Signup'

export default function Home(props) {
  return (
    <div className='home-container'>
      <div>
        <Header id="home-header" />
      </div>

      <div className='main-container'>
        <div className='column-left'> 
        <img src='https://img.freepik.com/free-vector/group-people-reading-books-multicultural-people-study-together_547662-562.jpg'/>
        </div>
          <hr/>
        <div className='column-right'>
        <Signup handleChangeLocation={props.handleChangeLocation} setUser={props.setUser}/>
        </div>
      </div>
    </div>
  )
}