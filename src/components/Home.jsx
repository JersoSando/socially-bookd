import React from 'react'
import Header from './Header'
import Signup from './Signup'

export default function Home(props) {
  return (
    <div>
        <Header />
        <img src='https://img.freepik.com/free-vector/group-people-reading-books-multicultural-people-study-together_547662-562.jpg'/>
        <Signup handleChangeLocation={props.handleChangeLocation} setUser={props.setUser}/>
    </div>
  )
}